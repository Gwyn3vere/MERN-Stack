import classNames from 'classnames/bind';
import styles from './Infomation.module.scss';
import image from '~/assets/images';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import { FaBed } from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';
import { TiTick, TiTimes } from 'react-icons/ti';
import { BsFillCalendarFill, BsStarFill } from 'react-icons/bs';

const cx = classNames.bind(styles);

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

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const amenities = [
    { id: 1, name: 'Giường ngủ' },
    { id: 2, name: 'Tivi' },
    { id: 3, name: 'Điều hoà và quạt' },
    { id: 4, name: 'Két an toàn' },
    { id: 5, name: 'Tủ lạnh mini' },
    { id: 6, name: 'Phòng tắm' },
    { id: 7, name: 'Đồ dùng cá nhân' },
    { id: 8, name: 'Thiết bị điện' },
    { id: 9, name: 'Bàn làm việc' },
    { id: 10, name: 'Dịch vụ phòng' },
    { id: 11, name: 'Khu vực ghế ngồi' },
    { id: 12, name: 'Máy pha cà phê' },
    { id: 13, name: 'Máy chiếu' },
    { id: 14, name: 'Wifi/Internet' },
    { id: 15, name: 'Máy giặt và bếp nhỏ' },
    { id: 16, name: 'Khu vực tiếp khách' },
    { id: 17, name: 'Minibar' },
    { id: 18, name: 'Hồ bơi riêng' },
];

function Infomation(props) {
    const { roomDetail } = props;
    const infoList = [
        { id: 1, title: 'Mã phòng', content: `${roomDetail && roomDetail.room.codeRoom}` },
        { id: 2, title: 'Diện tích', content: `${roomDetail && roomDetail.room.acreageRoom}` },
        { id: 3, title: 'Địa chỉ khách sạn', content: '97 Tran Anh Tong, Hoa Minh, Lien Chieu, Da Nang' },
    ];
    const amenitiesNotInRoom = amenities.filter(
        (amenity) => roomDetail && !roomDetail.room.amenitiesRoom.includes(amenity.name),
    );
    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('first')}>
                    <p className={cx('name')}>{roomDetail && roomDetail.room.nameRoom}</p>
                    <div className={cx('price')}>
                        <span>{roomDetail && roomDetail.room.priceRoom} VND</span>
                        <p>/ ngày</p>
                    </div>
                    <div className={cx('rating')}>
                        <span className={cx('star')}>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStarHalf></IoIosStarHalf>
                        </span>
                        <span className={cx('review')}> ({roomDetail && roomDetail.room.rateRoom} Review) </span>
                    </div>
                    <div className={cx('desc')}>
                        <p>{roomDetail && roomDetail.room.descRoom}</p>
                    </div>
                </div>
                <div className={cx('second')}>
                    <div className={cx('category')}>
                        <div className={cx('customer')}>
                            <span>
                                <MdPeople></MdPeople>
                            </span>
                            <p>+{roomDetail && roomDetail.room.numberCustomer}</p>
                        </div>
                        <div className={cx('type')}>
                            <span>
                                <FaBed></FaBed>
                            </span>
                            <p>{roomDetail && roomDetail.room.bedRoom}</p>
                        </div>
                    </div>
                    <div className={cx('info-group')}>
                        {infoList.map((item) => {
                            return (
                                <div className={cx('info')} key={item.id}>
                                    <span> {item.title} </span>
                                    <p> {item.content} </p>
                                </div>
                            );
                        })}
                    </div>
                    <div className={cx('inc-group')}>
                        <div className={cx('included')}>
                            <span> Bao gồm </span>
                            <div className={cx('p')}>
                                {roomDetail &&
                                    roomDetail.room.amenitiesRoom.map((amenity) => {
                                        return (
                                            <div className={cx('include')} key={amenity}>
                                                <span>
                                                    <TiTick />
                                                </span>
                                                <p>{amenity}</p>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                        <div className={cx('included')}>
                            <span> Không bao gồm </span>
                            <div className={cx('p')}>
                                {amenitiesNotInRoom.map((amenity) => {
                                    return (
                                        <div className={cx('include')} key={amenity.id}>
                                            <span>
                                                <TiTimes />
                                            </span>
                                            <p>{amenity.name}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('third')}>
                    <p className={cx('rooms')}>Các loại phòng khác</p>
                    <div className={cx('text')}>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    <div className={cx('room')}>
                        <Slider {...settings}>
                            {rooms.map((item) => {
                                return (
                                    <div className={cx('card')} key={item.id}>
                                        <div className={cx('thumbnail')}>
                                            <a href="http://localhost:3000/chi-tiet">
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
                                            <a href="http://localhost:3000/chi-tiet" className={cx('hover')}>
                                                <p className={cx('name')}>{item.name}</p>
                                            </a>
                                            <p className={cx('content')}>{item.acreage}</p>
                                            <div className={cx('price')}>
                                                <p> {Number(item.price).toLocaleString()} VND</p>
                                                <div className={cx('rate')}>
                                                    <span>
                                                        <BsStarFill></BsStarFill>
                                                    </span>
                                                    <p>{item.rating}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Infomation;
