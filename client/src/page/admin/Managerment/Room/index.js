import classNames from 'classnames/bind';
import styles from './Room.module.scss';
import { MdAddCircle, MdDelete } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import roomApi from '~/api/room';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);
const URL = process.env.REACT_APP_ANDRESS_IP;

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
                    <NavLink to={`${URL}/create-room`}>
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
                    </div>
                </div>
                <div className={cx('list')}>
                    <div className={cx('menu')}>
                        <div className={cx('name')}>
                            <p>STT</p>
                            <p>
                                <input type="checkbox" />
                            </p>
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
                                <img src={`${URL}/uploads/${room.thumbnailRoom.public_id}`} alt={room.nameRoom} />
                                <p> {room.quantityRoom} </p>
                                <p> {room.codeRoom} </p>
                                <p> {room.typeRoom} </p>
                                <p> {room.priceRoom} </p>
                                <NavLink to={`${URL}/update-room/${room._id}`}>
                                    <div className={cx('update')}>Sửa</div>
                                </NavLink>
                                <div className={cx('delete')}>
                                    <div
                                        className={cx('delete-select')}
                                        onClick={async () => {
                                            if (window.confirm('Bạn có chắc chắn muốn xoá phòng này không?')) {
                                                try {
                                                    await roomApi.deleteRoom(room._id);
                                                    const updatedRooms = rooms.filter((r) => r._id !== room._id);
                                                    setRooms(updatedRooms);
                                                } catch (error) {
                                                    console.log(error.message);
                                                }
                                            }
                                        }}
                                    >
                                        Drop<MdDelete></MdDelete>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Room;
