import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import orderApi from '~/api/order';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const cx = classNames.bind(styles);

function Order() {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await orderApi.getOrderList();
                setOrders(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchOrders();
    }, []);

    // Hàm xử lý khi người dùng nhấp vào nút "Xem chi tiết"
    const handleViewDetails = (order) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
        document.body.classList.add('modal-open');
    };

    // Hàm xử lý khi người dùng đóng modal
    const handleCloseModal = () => {
        setSelectedOrder(null);
        setIsModalOpen(false);
        document.body.classList.remove('modal-open');
    };

    return (
        <main className={cx('wrapper')}>
            <ToastContainer />
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <div className={cx('name')}>Quản lý đơn đặt phòng</div>
                    <div className={cx('breadcrumb')}>
                        <p>
                            <a href="http://localhost:3000/overview"> Tổng quan</a>
                        </p>
                        <p>/</p>
                        <p> danh sách đơn đặt phòng</p>
                    </div>
                </div>
                <div className={cx('list')}>
                    <div className={cx('menu')}>
                        <div className={cx('name')}>
                            <p>STT</p>
                            <p>Tên người đặt</p>
                            <p>Tên phòng</p>
                            <p>Ngày đặt phòng</p>
                            <p>Số lượng</p>
                            <p>Tuỳ chọn</p>
                        </div>
                    </div>
                    <form className={cx('info')}>
                        {orders.map((order, index) => (
                            <div className={cx('card')} key={order._id}>
                                <p> {index + 1} </p>
                                <p>{order.name}</p>
                                <p> {order.room} </p>
                                <p> {new Date(order.createdAt).toLocaleDateString()} </p>
                                <p> {order.quantity} </p>
                                <div className={cx('option')}>
                                    <div className={cx('update')} onClick={() => handleViewDetails(order)}>
                                        Xem chi tiết
                                    </div>
                                    <div className={cx('cancel')}>Huỷ đơn</div>
                                </div>
                            </div>
                        ))}
                    </form>
                </div>
                <div className={cx('fade', isModalOpen && 'fade-in')}>
                    {selectedOrder && (
                        <div className={cx('size')} onClick={handleCloseModal}>
                            <div className={cx('modal')}>
                                <span className={cx('close')} onClick={handleCloseModal}>
                                    <p className={cx('close-btn')}>&times;</p>
                                </span>
                                <div className={cx('modal-content')}>
                                    <h2>Thông tin chi tiết đơn đặt phòng</h2>
                                    <p>Tên người đặt phòng: {selectedOrder.name}</p>
                                    <p>Phòng: {selectedOrder.room}</p>
                                    <p>Ngày đặt: {new Date(selectedOrder.createdAt).toLocaleDateString()}</p>
                                    <p>Số lượng: {selectedOrder.quantity}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

export default Order;
