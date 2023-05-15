import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import authApi from '~/api/auth';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const cx = classNames.bind(styles);

function Account() {
    const [users, setUsers] = useState([]);
    const [selectedRole, setSelectedRole] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await authApi.getUserList();
                setUsers(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUsers();
    }, []);

    const handleRoleChange = (event, userId) => {
        const updatedRoles = { ...selectedRole, [userId]: event.target.value };
        setSelectedRole(updatedRoles);
    };

    const handleUpdateRole = async (event, userId) => {
        event.preventDefault(); // Chặn hành vi mặc định của form submit

        const role = typeof selectedRole[userId] === 'string' ? selectedRole[userId] : '';

        try {
            await authApi.updateRole(userId, role);
            toast.success(`Cập nhật vai trò thành công cho tài khoản có _id: ${userId}`);
        } catch (error) {
            toast.error(`Lỗi khi cập nhật vai trò cho tài khoản có _id: ${userId}`, error);
        }
    };

    return (
        <main className={cx('wrapper')}>
            <ToastContainer />
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <div className={cx('name')}>Quản lý tài khoản</div>
                    <div className={cx('breadcrumb')}>
                        <p>
                            <a href="http://localhost:3000/overview"> Tổng quan</a>
                        </p>
                        <p>/</p>
                        <p> danh sách tài khoản</p>
                    </div>
                </div>
                <div className={cx('list')}>
                    <div className={cx('menu')}>
                        <div className={cx('name')}>
                            <p>STT</p>
                            <p>Email</p>
                            <p>Vai trò</p>
                            <p>Tuỳ chọn</p>
                        </div>
                    </div>
                    <form className={cx('info')}>
                        {users.map((user) => (
                            <div className={cx('card')} key={user._id}>
                                <p> # </p>
                                <p>{user.email}</p>
                                <select
                                    value={selectedRole[user._id] || user.role}
                                    onChange={(event) => handleRoleChange(event, user._id)}
                                >
                                    <option value="admin">admin</option>
                                    <option value="customer">customer</option>
                                    {/* Thêm các lựa chọn vai trò khác nếu cần */}
                                </select>
                                <button className={cx('update')} onClick={(event) => handleUpdateRole(event, user._id)}>
                                    Sửa
                                </button>
                                {/* <div className={cx('delete')}>
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
                                </div> */}
                            </div>
                        ))}
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Account;
