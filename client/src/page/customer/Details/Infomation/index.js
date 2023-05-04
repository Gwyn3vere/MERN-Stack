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

const infoList = [
    { id: 1, title: 'Mã phòng', content: 'SGFT090102' },
    { id: 2, title: 'Diện tích', content: '360m2' },
    { id: 3, title: 'Địa chỉ khách sạn', content: '97 Tran Anh Tong, Hoa Minh, Lien Chieu, Da Nang' },
];

const include = [
    { id: 1, icons: <TiTick />, name: 'TV' },
    { id: 2, icons: <TiTick />, name: 'Vòi tắm' },
    { id: 3, icons: <TiTick />, name: 'Tủ' },
    { id: 4, icons: <TiTick />, name: 'Đèn ngủ' },
    { id: 5, icons: <TiTick />, name: 'Bàn làm việc' },
    { id: 6, icons: <TiTick />, name: 'Giường ngủ' },
];

const uninclude = [
    { id: 1, icons: <TiTimes />, name: 'TV' },
    { id: 2, icons: <TiTimes />, name: 'Vòi tắm' },
    { id: 3, icons: <TiTimes />, name: 'Tủ' },
    { id: 4, icons: <TiTimes />, name: 'Đèn ngủ' },
    { id: 5, icons: <TiTimes />, name: 'Bàn làm việc' },
    { id: 6, icons: <TiTimes />, name: 'Giường ngủ' },
];

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
    slidesToScroll: 1,
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

function Infomation() {
    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('first')}>
                    <p className={cx('name')}>Room Luxury v2</p>
                    <div className={cx('price')}>
                        <span>1.000.000 VND</span>
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
                        <span className={cx('review')}> (20 Review) </span>
                    </div>
                    <div className={cx('desc')}>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
                <div className={cx('second')}>
                    <div className={cx('category')}>
                        <div className={cx('customer')}>
                            <span>
                                <MdPeople></MdPeople>
                            </span>
                            <p>+2</p>
                        </div>
                        <div className={cx('type')}>
                            <span>
                                <FaBed></FaBed>
                            </span>
                            <p>Single</p>
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
                                {include.map((inc) => {
                                    return (
                                        <div className={cx('include')} key={inc.id}>
                                            <span> {inc.icons} </span>
                                            <p>{inc.name}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className={cx('included')}>
                            <span> Không bao gồm </span>
                            <div className={cx('p')}>
                                {uninclude.map((inc) => {
                                    return (
                                        <div className={cx('include')} key={inc.id}>
                                            <span> {inc.icons} </span>
                                            <p>{inc.name}</p>
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
