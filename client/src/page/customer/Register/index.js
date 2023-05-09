import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import authApi from '~/api/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsApple } from 'react-icons/bs';
import { FaFoursquare } from 'react-icons/fa';
import image from '~/assets/images';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);
const URL = process.env.REACT_APP_ANDRESS_IP;

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        if (!email || !password) {
            toast.error('Vui lòng nhập đầy đủ thông tin');
            return;
        }
        if (password.length < 6) {
            toast.error('Mật khẩu phải có ít nhất 6 kí tự');
            return;
        }
        authApi
            .register(email, password)
            .then((response) => {
                toast.success('Đăng ký thành công!', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
            })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    toast.error('Email đã được đăng ký!', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                    });
                } else {
                    toast.error('Đăng ký không thành công!', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                    });
                }
            });
    };
    return (
        <main className={cx('wrapper')}>
            <ToastContainer />
            <div className={cx('container')}>
                <div className={cx('form')}>
                    <div className={cx('left')}>
                        <img src={image.Register} alt="" />
                    </div>
                    <form className={cx('right')} onSubmit={handleRegister}>
                        <p className={cx('title')}>
                            <FaFoursquare className={cx('logo')}></FaFoursquare>Đăng ký
                        </p>
                        <div className={cx('input-group')}>
                            <div className={cx('input')}>
                                <label htmlFor="username">Email</label>
                                <input
                                    type="email"
                                    id="username"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                            <div className={cx('input')}>
                                <label htmlFor="password">Mật khẩu</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className={cx('forgot')}>
                            <a href={`${URL}/dang-nhap`}>
                                <p>Mật khẩu không được dưới 6 kí tự!</p>
                            </a>
                        </div>
                        <div className={cx('button')}>
                            <button type="submit">Đăng ký</button>
                        </div>
                        <div className={cx('or')}>
                            <div className={cx('border')}></div>
                            <div className={cx('text')}>hoặc</div>
                            <div className={cx('border')}></div>
                        </div>
                        <div className={cx('orther')}>
                            <a href={`${URL}/dang-nhap`}>
                                <div className={cx('method')}>
                                    <i>
                                        <FcGoogle></FcGoogle>
                                    </i>
                                    <p>Đăng ký bằng Google</p>
                                </div>
                            </a>
                            <a href={`${URL}/dang-nhap`}>
                                <div className={cx('method')}>
                                    <i>
                                        <BsFacebook></BsFacebook>
                                    </i>
                                    <p>Đăng ký bằng Facebook</p>
                                </div>
                            </a>
                            <a href={`${URL}/dang-nhap`}>
                                <div className={cx('method')}>
                                    <i>
                                        <BsApple></BsApple>
                                    </i>
                                    <p>Đăng ký bằng Apple</p>
                                </div>
                            </a>
                        </div>
                        <div className={cx('or')}>
                            <div className={cx('border')}></div>
                            <div className={cx('text')}>Đã có tài khoản ?</div>
                            <div className={cx('border')}></div>
                        </div>
                        <div className={cx('had')}>
                            <NavLink to={`${URL}/dang-nhap`}>
                                <div className={cx('register')}>
                                    <p>Đăng nhập</p>
                                </div>
                            </NavLink>
                            <div className={cx('login')}>
                                <p>Đăng ký</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Register;
