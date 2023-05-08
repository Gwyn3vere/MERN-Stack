import classNames from 'classnames/bind';
import styles from './Room.module.scss';
import image from '~/assets/images';
import { MdAddCircle, MdDelete } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import roomApi from '~/api/room';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Room() {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const data = await roomApi.getRoomList();
                setRooms(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchRooms();
    }, []);
    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <img className={cx('bgtitle')} src={image.bgtitle} alt="bgtitle" />
                    <div className={cx('name')}>Quản lí phòng</div>
                    <div className={cx('breadcrumb')}>
                        <p>
                            <a href="http://localhost:3000/overview"> Tổng quan</a>
                        </p>
                        <p>/</p>
                        <p>Quản lí phòng</p>
                    </div>
                </div>
                <div className={cx('control')}>
                    <NavLink to="http://localhost:3000/create-room">
                        <div className={cx('create')}>
                            <MdAddCircle></MdAddCircle>New Product
                        </div>
                    </NavLink>
                    <div className={cx('option')}>
                        <div className={cx('search')}>
                            <div className={cx('search-btn')}>
                                <FaSearch></FaSearch>
                            </div>
                            <input type="search" placeholder="Tìm kiếm..." />
                        </div>
                        <div className={cx('sort')}>
                            <select className={cx('sortBy')}>
                                <option value="volvo">Sort By</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className={cx('delete')}>
                            <div className={cx('delete-select')}>
                                Drop<MdDelete></MdDelete>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('list')}>
                    <div className={cx('menu')}>
                        <div className={cx('name')}>
                            <p>STT</p>
                            <p>Check</p>
                            <p>Tên phòng</p>
                            <p>Thumbnail</p>
                            <p>Số lượng</p>
                            <p>Mã phòng</p>
                            <p>Loại phòng</p>
                            <p>Giá phòng</p>
                            <p>Tuỳ chọn</p>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        {rooms.map((room) => (
                            <div className={cx('card')} key={room._id}>
                                <p>#</p>
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <p>{room.nameRoom}</p>
                                <img
                                    src={`http://localhost:3000/uploads/${room.thumbnailRoom.public_id}`}
                                    alt={room.nameRoom}
                                />
                                <p> {room.quantityRoom} </p>
                                <p> {room.codeRoom} </p>
                                <p> {room.typeRoom} </p>
                                <p> {room.priceRoom} </p>
                                <NavLink to="http://localhost:3000/room">
                                    <div className={cx('update')}>Sửa</div>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Room;
