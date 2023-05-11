import classNames from 'classnames/bind';
import styles from './Details.module.scss';
import useTab from './useTab';
import Infomation from './Infomation';
import Policy from './Policy';
import Gallery from './Gallery';
import Rating from './Rating';
import { MdPolicy } from 'react-icons/md';
import { AiFillInfoCircle, AiFillCamera, AiFillWechat } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import roomApi from '~/api/room';

const cx = classNames.bind(styles);
const URL = process.env.REACT_APP_ANDRESS_IP;

function Details() {
    const { slugRoom } = useParams();
    const navigate = useNavigate();
    const [roomDetail, setRoomDetail] = useState(null);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [totalDays, setTotalDays] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const data = await roomApi.getRoomBySlug(slugRoom);
                setRoomDetail(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchRoom();
    }, [slugRoom]);

    useEffect(() => {
        if (roomDetail && checkin && checkout) {
            const startDate = new Date(checkin);
            const endDate = new Date(checkout);
            const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
            const price = roomDetail.room.priceRoom;
            setTotalDays(days);
            setTotalPrice(days * price);
        }
    }, [roomDetail, checkin, checkout]);

    // Xử lý sự kiện thay đổi số lượng người lớn và trẻ em
    const handleAdultChange = (event) => {
        setAdults(parseInt(event.target.value));
    };
    const handleChildrenChange = (event) => {
        setChildren(parseInt(event.target.value));
    };

    // Xử lý sự kiện thay đổi ngày checkin và checkout
    const handleCheckinChange = (event) => {
        setCheckin(event.target.value);
        if (checkout) {
            // Tính toán số ngày và tổng giá tiền
            const startDate = new Date(event.target.value);
            const endDate = new Date(checkout);
            const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
            const price = roomDetail ? roomDetail.room.priceRoom : 0;
            setTotalDays(days);
            setTotalPrice(days * price);
        }
    };
    const handleCheckoutChange = (event) => {
        setCheckout(event.target.value);
        if (checkin) {
            // Tính toán số ngày và tổng giá tiền
            const startDate = new Date(checkin);
            const endDate = new Date(event.target.value);
            const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
            const price = roomDetail ? roomDetail.room.priceRoom : 0;
            setTotalDays(days);
            setTotalPrice(days * price);
        }
    };

    // Tạo active cho tabList
    const tabList = [
        { id: 1, icons: <AiFillInfoCircle />, name: 'Thông tin' },
        { id: 2, icons: <MdPolicy />, name: 'Chính sách' },
        { id: 3, icons: <AiFillCamera />, name: 'Thư viện' },
        { id: 4, icons: <AiFillWechat />, name: 'Đánh giá' },
    ];
    const [activeTab, onChangeTab] = useTab(tabList[0].id);
    const handleClickTab = (tabIndex) => {
        onChangeTab(tabIndex);
    };
    // Render component
    const [currentTab, setCurrentTab] = useState(1);
    const renderTabConent = () => {
        switch (currentTab) {
            case 1:
                return <Infomation roomDetail={roomDetail} />;
            case 2:
                return <Policy />;
            case 3:
                return <Gallery />;
            case 4:
                return <Rating />;
            default:
                return null;
        }
    };

    // Hàm sao lưu và chuyển hướng
    const handleBooking = () => {
        navigate('/dat-phong', {
            state: {
                checkin,
                checkout,
                adults,
                children,
                totalDays,
                totalPrice,
                room: slugRoom,
            },
        });
    };

    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('banner')}>
                    <img src={`${URL}/uploads/${roomDetail && roomDetail.room.thumbnailRoom.public_id}`} alt="" />
                </div>
                <div className={cx('room')}>
                    <div className={cx('table')}>
                        {tabList.map((tab) => {
                            return (
                                <div className={cx('tab')} key={tab.id} onClick={() => setCurrentTab(tab.id)}>
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
                        <div className={cx('left')}>{renderTabConent()}</div>
                        <div className={cx('right')}>
                            <div className={cx('sidebar')}>
                                <div className={cx('titlebar')}>
                                    <p>Đặt phòng</p>
                                    <span>Lên kế hoạt cho kì nghỉ tuyệt vời của bạn!</span>
                                </div>
                                <div className={cx('input-group')}>
                                    <div className={cx('group')}>
                                        <label htmlFor="adults">Người lớn</label>
                                        <input type="number" id="adults" value={adults} onChange={handleAdultChange} />
                                    </div>
                                    <div className={cx('group')}>
                                        <label htmlFor="children">Trẻ em</label>
                                        <input
                                            type="number"
                                            id="children"
                                            value={children}
                                            onChange={handleChildrenChange}
                                        />
                                    </div>
                                    <div className={cx('group')}>
                                        <label htmlFor="checkin">Ngày nhận phòng</label>
                                        <input
                                            type="date"
                                            id="checkin"
                                            value={checkin}
                                            onChange={handleCheckinChange}
                                        />
                                    </div>
                                    <div className={cx('group')}>
                                        <label htmlFor="checkout">Ngày trả phòng</label>
                                        <input
                                            type="date"
                                            id="checkout"
                                            value={checkout}
                                            onChange={handleCheckoutChange}
                                        />
                                    </div>
                                </div>
                                <div className={cx('review-group')}>
                                    <h2>Review</h2>
                                    <div>
                                        <div className={cx('review')}>
                                            <span>Thời gian:</span>

                                            {totalDays > 1 ? (
                                                <p>
                                                    {totalDays} ngày {totalDays - 1} đêm
                                                </p>
                                            ) : (
                                                <p>{totalDays} ngày</p>
                                            )}
                                        </div>
                                        <div className={cx('review')}>
                                            <span>Chi phí:</span>
                                            <p>{Number(totalPrice).toLocaleString()} VND</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('button')}>
                                    <button onClick={handleBooking}>Đặt phòng</button>
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
