import classNames from 'classnames/bind';
import styles from './Rooms.module.scss';
import image from '~/assets/images';
import useActive from './useActive';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Rooms() {
    const tabList = [
        { id: 1, name: 'Danh sách' },
        { id: 2, name: 'Giá từ cao đến thấp' },
        { id: 3, name: 'Giá từ thấp đến cao' },
        { id: 4, name: 'Theo tên (A - Z)' },
    ];
    const { activeId, handleItemClick } = useActive();
    const [sort, setSort] = useState(tabList[0]);
    const [rooms, setRooms] = useState([
        {
            id: 1,
            name: 'Room Name A',
            rating: 4,
            type: 'VIP',
            thumnbail: image.bghotel,
            acreage: '2 người lớn, 1 trẻ em',
            price: 5000000,
        },
        {
            id: 2,
            name: 'Room Name C',
            rating: 5,
            type: 'VIP',
            thumnbail: image.bghotel,
            acreage: '2 người lớn, 1 trẻ em',
            price: 7000000,
        },
        {
            id: 3,
            name: 'Room Name E',
            rating: 5,
            type: 'VIP',
            thumnbail: image.bghotel,
            acreage: '2 người lớn, 1 trẻ em',
            price: 1000000,
        },
        {
            id: 4,
            name: 'Room Name B',
            rating: 5,
            type: 'VIP',
            thumnbail: image.bghotel,
            acreage: '2 người lớn, 1 trẻ em',
            price: 1000000,
        },
        {
            id: 5,
            name: 'Room Name D',
            rating: 5,
            type: 'VIP',
            thumnbail: image.bghotel,
            acreage: '2 người lớn, 1 trẻ em',
            price: 1000000,
        },
    ]);

    const sortRooms = () => {
        const sortedRooms = [...rooms];
        switch (sort.id) {
            case 1:
                sortedRooms.sort((a, b) => a.id - b.id);
                break;
            case 2:
                sortedRooms.sort((a, b) => b.price - a.price);
                break;
            case 3:
                sortedRooms.sort((a, b) => a.price - b.price);
                break;
            case 4:
                sortedRooms.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                break;
        }
        setRooms(sortedRooms);
    };

    useEffect(() => {
        handleItemClick(1);
    }, []);

    useEffect(() => {
        sortRooms();
    }, [sort]);

    const renderStars = (count) => {
        const stars = [];

        for (let i = 0; i < count; i++) {
            stars.push(<AiFillStar key={i} />);
        }

        for (let i = count; i < 5; i++) {
            stars.push(<AiOutlineStar key={i} />);
        }

        return stars;
    };
    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('banner')}>
                    <img src={image.bgChuaLinhUng} />
                    <p>Danh sách phòng</p>
                </div>
                <div className={cx('room')}>
                    <div className={cx('table')}>
                        {tabList.map((tab) => {
                            return (
                                <div className={cx('tab')} key={tab.id} onClick={() => handleItemClick(tab.id)}>
                                    <div
                                        className={cx('link', activeId === tab.id ? 'active' : '')}
                                        onClick={() => setSort(tab)}
                                    >
                                        <p>{tab.name}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={cx('list')}>
                        {rooms.map((item) => {
                            return (
                                <div key={item.id}>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Rooms;
