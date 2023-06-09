import classNames from 'classnames/bind';
import styles from './Rooms.module.scss';
import image from '~/assets/images';
import useTab from './useTab';
import useSort from './useSort';
import { FaThList, FaSortAmountDownAlt, FaSortAmountDown, FaSortAlphaDown } from 'react-icons/fa';
import { BsFillCalendarFill, BsStarFill } from 'react-icons/bs';
import { FaBed } from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';
import roomApi from '~/api/room';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);
const URL = process.env.REACT_APP_ANDRESS_IP;

function Rooms() {
    const [roomsList, setRoomsList] = useState([]);
    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const data = await roomApi.getRoomList();
                setRoomsList(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchRooms();
    }, []);

    // Tạo active cho tabList
    const tabList = [
        { id: 1, icons: <FaThList />, name: 'Danh sách' },
        { id: 2, icons: <FaSortAmountDown />, name: 'Giá từ cao đến thấp' },
        { id: 3, icons: <FaSortAmountDownAlt />, name: 'Giá từ thấp đến cao' },
        { id: 4, icons: <FaSortAlphaDown />, name: 'Theo tên (A - Z)' },
    ];
    const [activeTab, onChangeTab] = useTab(tabList[0].id);
    const handleClickTab = (tabIndex) => {
        onChangeTab(tabIndex);
    };

    // Tạo SortBy

    const types = [
        { id: 1, name: 'VIP' },
        { id: 2, name: 'Standand' },
        { id: 3, name: 'Super' },
        { id: 4, name: 'Luxury' },
        { id: 5, name: 'King' },
        { id: 6, name: 'Trendy' },
        { id: 7, name: 'Popular' },
        { id: 8, name: 'Vintage' },
    ];

    const [activeTabId, setActiveTabId] = useState(1);
    const sortedRooms = useSort(roomsList, activeTabId);

    const handleTabClick = (tabId) => {
        setActiveTabId(tabId);
    };

    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('banner')}>
                    <img src={image.bgChuaLinhUng} alt="" />
                    <p>Danh sách phòng</p>
                </div>
                <div className={cx('room')}>
                    <div className={cx('table')}>
                        {tabList.map((tab) => {
                            return (
                                <div className={cx('tab')} key={tab.id} onClick={() => handleTabClick(tab.id)}>
                                    <div
                                        className={cx('link', activeTab === tab.id ? 'active' : '')}
                                        onClick={() => handleClickTab(tab.id)}
                                    >
                                        <i> {tab.icons} </i>
                                        <p>{tab.name}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={cx('list')}>
                        <div className={cx('left')}>
                            {sortedRooms.map((item) => {
                                return (
                                    <div className={cx('card')} key={item._id}>
                                        <div className={cx('thumbnail')}>
                                            <NavLink to={`${URL}/chi-tiet/${item.slugRoom}`}>
                                                <figure>
                                                    <img
                                                        src={`${URL}/uploads/${item.thumbnailRoom.public_id}`}
                                                        alt=""
                                                    />
                                                </figure>
                                            </NavLink>
                                            <div className={cx('type')}>
                                                <div className={cx('item')}>
                                                    <div className={cx('category')}>
                                                        <i>
                                                            <BsFillCalendarFill></BsFillCalendarFill>
                                                        </i>
                                                        <p> {item.typeRoom} </p>
                                                    </div>
                                                    <div className={cx('category')}>
                                                        <i>
                                                            <MdPeople></MdPeople>
                                                        </i>
                                                        <p> {item.numberCustomer} </p>
                                                    </div>
                                                    <div className={cx('category')}>
                                                        <i>
                                                            <FaBed></FaBed>
                                                        </i>
                                                        <p> {item.bedRoom} </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('info')}>
                                            <a href={`${URL}/chi-tiet`} className={cx('hover')}>
                                                <p className={cx('name')}>{item.nameRoom}</p>
                                            </a>
                                            <p className={cx('desc')}>{item.acreageRoom}</p>
                                            <div className={cx('text')}>
                                                {item.quantityRoom >= 1 ? (
                                                    <p>
                                                        Tình trạng: <span className={cx('yes')}>Còn phòng</span>
                                                    </p>
                                                ) : (
                                                    <p>
                                                        Tình trạng: <span className={cx('no')}>Hết phòng</span>
                                                    </p>
                                                )}
                                            </div>
                                            <div className={cx('price')}>
                                                <p> {Number(item.priceRoom).toLocaleString()} VND</p>
                                                <div className={cx('rate')}>
                                                    <span>
                                                        <BsStarFill></BsStarFill>
                                                    </span>
                                                    <p>{item.rateRoom} (Review) </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={cx('right')}>
                            <div className={cx('sidebar')}>
                                <div className={cx('titlebar')}>
                                    <p>Đặt phòng</p>
                                    <span>Lên kế hoạt cho kì nghỉ tuyệt vời của bạn!</span>
                                </div>
                                <div className={cx('input-group')}>
                                    <input type="search" placeholder="Tìm kiếm phòng" />
                                    <input type="text" placeholder="Loại phòng" />
                                    <input type="date" />
                                </div>
                                <div className={cx('radio-group')}>
                                    <div className={cx('sortby')}>
                                        <p>Lọc theo loại phòng</p>
                                    </div>
                                    {types.map((type) => {
                                        return (
                                            <div className={cx('check')} key={type.id}>
                                                <input type="radio" id="radioId" value={type.name} />
                                                <label htmlFor="radioId"> {type.name} </label>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className={cx('button')}>
                                    <button>Tìm kiếm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Rooms;
