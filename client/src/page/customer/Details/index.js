import classNames from 'classnames/bind';
import styles from './Details.module.scss';
import image from '~/assets/images';
import useTab from './useTab';
import useSort from './useSort';
import { FaThList, FaSortAmountDownAlt, FaSortAmountDown, FaSortAlphaDown } from 'react-icons/fa';
import { BsFillCalendarFill, BsStarFill } from 'react-icons/bs';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Details() {
    // Tạo active cho tabList
    const tabList = [
        { id: 1, icons: <FaThList />, name: 'Thông tin' },
        { id: 2, icons: <FaSortAmountDown />, name: 'Thư viện' },
        { id: 3, icons: <FaSortAmountDownAlt />, name: 'Giá từ thấp đến cao' },
        { id: 4, icons: <FaSortAlphaDown />, name: 'Theo tên (A - Z)' },
        { id: 5, icons: <FaSortAlphaDown />, name: 'Theo tên (A - Z)' },
    ];
    const [activeTab, onChangeTab] = useTab(tabList[0].id);
    const handleClickTab = (tabIndex) => {
        onChangeTab(tabIndex);
    };

    // Tạo SortBy
    const rooms = [
        {
            id: 1,
            name: 'Room Name A',
            rating: 4,
            type: 'VIP',
            thumnbail: image.bgChuaLinhUng,
            acreage: '2 người lớn, 1 trẻ em',
            price: 5000000,
        },
        {
            id: 2,
            name: 'Room Name C',
            rating: 5,
            type: 'VIP',
            thumnbail: image.bgChuaLinhUng,
            acreage: '2 người lớn, 1 trẻ em',
            price: 7000000,
        },
        {
            id: 3,
            name: 'Room Name E',
            rating: 5,
            type: 'VIP',
            thumnbail: image.bgChuaLinhUng,
            acreage: '2 người lớn, 1 trẻ em',
            price: 1000000,
        },
        {
            id: 4,
            name: 'Room Name B',
            rating: 5,
            type: 'VIP',
            thumnbail: image.bgChuaLinhUng,
            acreage: '2 người lớn, 1 trẻ em',
            price: 1000000,
        },
        {
            id: 5,
            name: 'Room Name D',
            rating: 5,
            type: 'VIP',
            thumnbail: image.bgChuaLinhUng,
            acreage: '2 người lớn, 1 trẻ em',
            price: 1000000,
        },
    ];

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
    const sortedRooms = useSort(rooms, activeTabId);

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
                                    <div className={cx('card')} key={item.id}>
                                        <div className={cx('thumbnail')}>
                                            <a href="http://localhost:3000/phong">
                                                <figure>
                                                    <img src={item.thumnbail} alt="" />
                                                </figure>
                                            </a>
                                            <div className={cx('type')}>
                                                <div className={cx('item')}>
                                                    <i>
                                                        <BsFillCalendarFill></BsFillCalendarFill>
                                                    </i>
                                                    <p> {item.type} </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('info')}>
                                            <a href="http://localhost:3000/phong" className={cx('hover')}>
                                                <p className={cx('name')}>{item.name}</p>
                                            </a>
                                            <p className={cx('desc')}>{item.acreage}</p>
                                            <div className={cx('price')}>
                                                <p> {Number(item.price).toLocaleString()} VND</p>
                                                <p className={cx('rate')}>
                                                    <i>
                                                        <BsStarFill></BsStarFill>
                                                    </i>
                                                    {item.rating}
                                                </p>
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

export default Details;
