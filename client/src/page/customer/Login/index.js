import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import authApi from '~/api/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsApple } from 'react-icons/bs';
import { FaFoursquare } from 'react-icons/fa';
import image from '~/assets/images';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
const URL = process.env.REACT_APP_ANDRESS_IP;

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleLogin = (event) => {
        event.preventDefault();
        if (!email || !password) {
            toast.error('Vui lòng nhập đầy đủ thông tin');
            return;
        }
        authApi
            .login(email, password)
            .then((response) => {
                toast.success('Đăng nhập thành công!', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    toast.error('Email hoặc mật khẩu không chính xác!', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                    });
                } else {
                    toast.error('Đăng nhập không thành công!', {
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
                        <img src={image.Login} alt="" />
                    </div>
                    <form className={cx('right')} onSubmit={handleLogin}>
                        <p className={cx('title')}>
                            <FaFoursquare className={cx('logo')}></FaFoursquare>Đăng nhập
                        </p>
                        <div className={cx('input-group')}>
                            <div className={cx('input')}>
                                <label htmlFor="username">Email</label>
                                <input type="email" id="username" value={email} onChange={handleChangeEmail} />
                            </div>
                            <div className={cx('input')}>
                                <label htmlFor="password">Mật khẩu</label>
                                <input type="password" id="password" value={password} onChange={handleChangePassword} />
                            </div>
                        </div>
                        <div className={cx('forgot')}>
                            <div className={cx('check')}>
                                <input type="checkbox" id="checkbox" />
                                <label htmlFor="checkbox">Nhớ mật khẩu</label>
                            </div>
                            <a href={`${URL}/dang-nhap`}>
                                <p>Quên mật khẩu?</p>
                            </a>
                        </div>
                        <div className={cx('button')}>
                            <button type="submit">Đăng nhập</button>
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
                                    <p>Tiếp tục với Google</p>
                                </div>
                            </a>
                            <a href={`${URL}/dang-nhap`}>
                                <div className={cx('method')}>
                                    <i>
                                        <BsFacebook></BsFacebook>
                                    </i>
                                    <p>Tiếp tục với Facebook</p>
                                </div>
                            </a>
                            <a href={`${URL}/dang-nhap`}>
                                <div className={cx('method')}>
                                    <i>
                                        <BsApple></BsApple>
                                    </i>
                                    <p>Tiếp tục với Apple</p>
                                </div>
                            </a>
                        </div>
                        <div className={cx('or')}>
                            <div className={cx('border')}></div>
                            <div className={cx('text')}>Chưa có tài khoản ?</div>
                            <div className={cx('border')}></div>
                        </div>
                        <div className={cx('had')}>
                            <div className={cx('login')}>
                                <p>Đăng nhập</p>
                            </div>
                            <NavLink to={`${URL}/dang-ky`}>
                                <div className={cx('register')}>
                                    <p>Đăng ký</p>
                                </div>
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Login;
