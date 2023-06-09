import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import image from '~/assets/images';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Script from './script';
import { FaHotel, FaServicestack, FaBed } from 'react-icons/fa';
import { BsFillCalendarEventFill, BsFillCalendarFill, BsStarFill } from 'react-icons/bs';
import { MdLocationOn, MdPeople } from 'react-icons/md';
import roomApi from '~/api/room';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);
const URL = process.env.REACT_APP_ANDRESS_IP;

function Home() {
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
    console.log(roomsList);

    const menuList = [
        { id: 1, name: 'Travel', icon: <MdLocationOn />, url: `${URL}/` },
        { id: 2, name: 'Rooms', icon: <FaHotel />, url: `${URL}/phong` },
        { id: 3, name: 'Service', icon: <FaServicestack />, url: `${URL}/dich-vu` },
        { id: 4, name: 'Event', icon: <BsFillCalendarEventFill />, url: `${URL}/su-kien` },
    ];

    const lordicon = [
        {
            id: 1,
            lord: (
                <lord-icon
                    src="https://cdn.lordicon.com/hmmzddsk.json"
                    trigger="loop"
                    colors="primary:#4be1ec,secondary:#cb5eee"
                    className={cx('lord-icon')}
                    style={{ width: '100px', height: '100px' }}
                ></lord-icon>
            ),
            name: 'Nhà hàng',
            desc: 'FastTravel sở hữu nhà hàng 5 sao cao cấp, đa dạng menu phục vụ khách hàng.',
        },
        {
            id: 2,
            lord: (
                <lord-icon
                    src="https://cdn.lordicon.com/dfxesbyu.json"
                    trigger="loop"
                    colors="primary:#4be1ec,secondary:#cb5eee"
                    style={{ width: '100px', height: '100px' }}
                ></lord-icon>
            ),
            name: 'Tham quan',
            desc: 'Nằm ở vị trí đắt địa có thể quan sát toàn bộ thành phố.',
        },
        {
            id: 3,
            lord: (
                <lord-icon
                    src="https://cdn.lordicon.com/jlvsilmg.json"
                    trigger="loop"
                    colors="primary:#4be1ec,secondary:#cb5eee"
                    style={{ width: '100px', height: '100px' }}
                ></lord-icon>
            ),
            name: 'Cửa hàng',
            desc: 'FastTravel có những cửa hàng lưu miện lưu lại những kí ức cho chuyến đi của bạn.',
        },
        {
            id: 4,
            lord: (
                <lord-icon
                    src="https://cdn.lordicon.com/ytuosppc.json"
                    trigger="loop"
                    delay="2000"
                    colors="primary:#4be1ec,secondary:#cb5eee"
                    style={{ width: '100px', height: '100px' }}
                ></lord-icon>
            ),
            name: 'Dịch vụ',
            desc: 'Có rất nhiều loại hình dịch vụ mà bạn có thể lựa chọn.',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('first')}>
                    <div className={cx('welcome')}>
                        <div className={cx('aboard')}>Welcome aboard</div>
                        <p>
                            chúng tôi sẽ giúp bạn tìm thấy những trải nghiệm và cuộc phiêu lưu tuyệt vời nhất. Vì vậy,
                            hãy tận hưởng hành trình của bạn
                        </p>
                        <span>Let's start</span>
                    </div>
                    <div className={cx('image')}>
                        <div className={cx('thumbnail')}>
                            <img className={cx('image-thumbnail')} src={image.bgGoldenBridge} alt="" />
                        </div>
                        <div className={cx('library')}>
                            <img className={cx('image-library')} src={image.bgHoiAn} alt="" />
                            <img className={cx('image-library')} src={image.bgBaNaHills} alt="" />
                            <img className={cx('image-library')} src={image.bgChuaLinhUng} alt="" />
                            <img className={cx('image-library')} src={image.bgMySon} alt="" />
                        </div>
                    </div>
                    <div className={cx('text')}>
                        <div className={cx('title')}>FastTravel</div>
                        <p className={cx('desc')}>
                            Khách sạn FastTravel toạ lạc tại trung tâm khu đô khị ABC thành phố Đà Nẵng, với vị trí địa
                            lí thuận lợi phù hợp cho chuyến đi của bạn.
                        </p>
                        <span>Ưu đãi đến 60% khi lần đầu đến.</span>
                        <div className={cx('button')}>Get Start</div>
                    </div>
                    <div className={cx('menu')}>
                        <div className={cx('title')}>Danh mục</div>
                        <div className={cx('choose')}>
                            {menuList.map((menu) => {
                                return (
                                    <div className={cx('button-mb')} key={menu.id}>
                                        <NavLink to={menu.url} activeclassname={cx('active')} className={cx('link')}>
                                            <i className={cx(`${menu.name}`)}> {menu.icon} </i>
                                            <p> {menu.name} </p>
                                        </NavLink>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={cx('second')}>
                    <div className={cx('title')}>
                        <p>Lựa chọn</p>
                        <span>Cho ngày nghỉ của bạn</span>
                    </div>
                    <p className={cx('desc')}>Các loại phòng được khách hàng lựa chọn và tin dùng nhiều nhất.</p>
                    <div className={cx('room')}>
                        <Slider {...settings}>
                            {roomsList.map((item) => {
                                return (
                                    <div className={cx('card')} key={item.id}>
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
                                            <p className={cx('acreage')}>{item.acreageRoom}</p>
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
                        </Slider>
                    </div>
                </div>
                <div className={cx('fifth')}>
                    <div className={cx('title')}>
                        <p>Thưởng thức</p>
                        <span>Kì nghỉ hè 2023</span>
                    </div>
                    <p className={cx('desc')}>Trải nghiệm các dịch vụ tiện nghi tại FastTravel.</p>
                    <div className={cx('services')}>
                        {lordicon.map((item) => {
                            return (
                                <div className={cx('serv')} key={item.id}>
                                    {item.lord}
                                    <div className={cx('items')}>
                                        <p> {item.name} </p>
                                        <span>{item.desc}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={cx('third')}>
                    <div className={cx('travelling')}>
                        <div className={cx('title')}>Địa điểm nổi tiếng</div>
                        <p className={cx('literature')}>
                            Toạ lạc ở vùng duyên hải Nam Trung Bộ, Đà Nẵng được đông đảo bạn bè quốc tế biết đến với
                            hình ảnh đô thị năng động và rực rỡ sắc màu. Hơn cả Cầu Vàng ẩn hiện sau màn sương sớm hay
                            tượng Cá Chép Hoá Rồng lập loè dưới ánh sáng pháo hoa, Đà Nẵng còn là trung tâm văn hoá,
                            giáo dục, y tế, chính trị, kinh tế, xã hội… quan trọng. Không hoa lệ như Sài Thành hay chỉn
                            chu chất Hà Nội, đi tự túc, bạn sẽ nhận ra sự giao thoa giữa các yếu tố “xưa” và “nay” trong
                            kiến trúc lẫn nhịp sống thường nhật của người dân bản địa.
                        </p>
                        <div className={cx('more')}>
                            <NavLink to="" className={cx('link')}>
                                <p> Xem thêm </p>
                            </NavLink>
                        </div>
                    </div>
                    <div className={cx('four-img')}>
                        <div className={cx('img1')}>
                            <img src={image.GoldenBridge} alt="" />
                        </div>
                        <div className={cx('img2')}>
                            <img src={image.MySonBeach} alt="" />
                        </div>
                        <div className={cx('img3')}>
                            <img src={image.ThapXaLoi} alt="" />
                        </div>
                        <div className={cx('img4')}>
                            <img src={image.HoiAnCity} alt="" />
                        </div>
                    </div>
                </div>
                <div className={cx('fourth')}>
                    <div className={cx('hope')}>
                        Hi vọng chuyến hành trình sẽ mang đến cho bạn một trãi nghiệm đáng nhớ cùng FastTravel
                    </div>
                    <p>Chúng tôi có nhiều điều đặt biệt dành cho bạn</p>
                    <div className={cx('thanks')}>Thank you</div>
                </div>
            </div>
            <Script />
        </main>
    );
}

export default Home;
