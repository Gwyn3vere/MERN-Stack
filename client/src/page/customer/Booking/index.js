import classNames from 'classnames/bind';
import styles from './Booking.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import roomApi from '~/api/room';
import orderApi from '~/api/order';

const cx = classNames.bind(styles);
const URL = process.env.REACT_APP_ANDRESS_IP;

function Booking() {
    const navigate = useNavigate();
    const location = useLocation();
    const [roomDetail, setRoomDetail] = useState();
    const [roomQuantity, setRoomQuantity] = useState(1);
    const { checkin, checkout, adults, children, totalDays, totalPrice, room } = location.state;
    const [newTotalPrice, setNewTotalPrice] = useState(totalPrice);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        quantity: 1,
        note: '',
    });

    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const data = await roomApi.getRoomBySlug(room);
                setRoomDetail(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchRoom();
    }, [room]);

    const handleQuantityInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'quantity') {
            const quantityValue = parseInt(value);
            setRoomQuantity(quantityValue);
            setNewTotalPrice(quantityValue * totalPrice);
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user._id;

        const order = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            quantity: roomQuantity,
            adults: adults,
            children: children,
            note: formData.note,
            room: roomDetail.room.nameRoom,
            checkin: checkin,
            checkout: checkout,
            total: newTotalPrice,
            user: userId,
        };

        try {
            if (roomQuantity <= roomDetail.room.quantityRoom) {
                const response = await orderApi.createOrder(order);
                console.log('Đặt phòng thành công!', response);

                // cập nhật lại quantityRoom
                const updatedRoom = await roomApi.updateRoomQuantity(
                    roomDetail.room._id,
                    roomDetail.room.quantityRoom - roomQuantity,
                );
                console.log('Cập nhật số lượng phòng thành công!', updatedRoom);

                toast.success('Tạo phòng thành công');
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            } else {
                toast.error(
                    'Số lượng phòng đã đạt quá số lượng phòng hiện có: còn ' + roomDetail.room.quantityRoom + ' phòng',
                );
            }
        } catch (error) {
            console.log('Đặt phòng không thành công!', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleNumberChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: parseInt(value),
        }));
    };

    return (
        <main className={cx('wrapper')}>
            <ToastContainer />
            <div className={cx('container')}>
                <div className={cx('banner')}>
                    <img src={`${URL}/uploads/${roomDetail && roomDetail.room.thumbnailRoom.public_id}`} alt="" />
                </div>
                <div className={cx('room')}>
                    <div className={cx('table')}>
                        <div className={cx('tab')}>
                            <div className={cx('link')}>
                                <p>Đặt phòng</p>
                            </div>
                        </div>
                    </div>
                    <form className={cx('list')} onSubmit={handleSubmit}>
                        <div className={cx('right')}>
                            <div className={cx('sidebar')}>
                                <div className={cx('check')}>
                                    <h3>Chi tiết</h3>
                                    <div className={cx('info1')}>
                                        <div className={cx('checkin')}>
                                            <span>Ngày nhận phòng: </span>
                                            <p>{checkin}</p>
                                        </div>
                                        <div className={cx('checkin')}>
                                            <span>Ngày trả phòng: </span>
                                            <p>{checkout}</p>
                                        </div>
                                        <div className={cx('checkin')}>
                                            <span>Tổng ngày: </span>
                                            <p>
                                                {totalDays} ngày {totalDays - 1} đêm
                                            </p>
                                        </div>
                                        <div className={cx('checkin')}>
                                            <span>Tổng khách: </span>
                                            <p>
                                                {adults} người lớn {children} trẻ em
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('detail')}></div>
                            </div>
                            <div className={cx('sidebar')}>
                                <div className={cx('check')}>
                                    <h3>Thông tin phòng</h3>
                                    <div className={cx('info1')}>
                                        <div className={cx('checkin')}>
                                            <span>Tên phòng: </span>
                                            <p>{roomDetail && roomDetail.room.nameRoom}</p>
                                        </div>
                                        <div className={cx('checkin')}>
                                            <span>Giá phòng: </span>
                                            <p>{Number(totalPrice).toLocaleString()} VND</p>
                                        </div>
                                        <div className={cx('checkin')}>
                                            <span>Phí dịch vụ: </span>
                                            <p>0 VND</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('total')}>
                                <div className={cx('price')}>
                                    <div className={cx('checkin')}>
                                        <span>Tổng tiền: </span>
                                        <p>{Number(newTotalPrice).toLocaleString()} VND</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('left')}>
                            <div className={cx('form')}>
                                <h1> Thông tin khách hàng</h1>
                                <div className={cx('input-group')}>
                                    <label htmlFor="name">Tên khách hàng</label>
                                    <input type="text" id="name" name="name" onChange={handleInputChange} />
                                </div>
                                <div className={cx('customer')}>
                                    <div className={cx('input-group')}>
                                        <label htmlFor="phone">Số điện thoại</label>
                                        <input type="number" id="phone" name="phone" onChange={handleNumberChange} />
                                    </div>
                                    <div className={cx('input-group')}>
                                        <label htmlFor="email">Email khách</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            // value={`${user.email}`}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className={cx('input-group')}>
                                    <label htmlFor="quantity">Số lượng phòng</label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        name="quantity"
                                        value={roomQuantity}
                                        onChange={handleQuantityInputChange}
                                    />
                                </div>
                                <div className={cx('input-group')}>
                                    <label htmlFor="note">Ghi chú</label>
                                    <textarea
                                        type="text"
                                        id="note"
                                        rows="10"
                                        name="note"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className={cx('check')}>
                                <button className={cx('check-btn')} type="submit">
                                    <p>Xác nhận</p>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Booking;
