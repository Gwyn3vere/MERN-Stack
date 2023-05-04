import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsApple } from 'react-icons/bs';
import { FaFoursquare } from 'react-icons/fa';
import image from '~/assets/images';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Register() {
    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('form')}>
                    <div className={cx('left')}>
                        <img src={image.Register} alt="" />
                    </div>
                    <form className={cx('right')}>
                        <p className={cx('title')}>
                            <FaFoursquare className={cx('logo')}></FaFoursquare>Đăng ký
                        </p>
                        <div className={cx('input-group')}>
                            <div className={cx('input')}>
                                <label htmlFor="username">Email</label>
                                <input type="email" id="username" />
                            </div>
                            <div className={cx('input')}>
                                <label htmlFor="password">Mật khẩu</label>
                                <input type="password" id="password" />
                            </div>
                        </div>
                        <div className={cx('forgot')}>
                            <div className={cx('check')}>
                                <input type="checkbox" id="checkbox" />
                                <label htmlFor="checkbox">Nhớ mật khẩu</label>
                            </div>
                            <a href="http://localhost:3000/dang-nhap">
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
                            <a href="http://localhost:3000/dang-nhap">
                                <div className={cx('method')}>
                                    <i>
                                        <FcGoogle></FcGoogle>
                                    </i>
                                    <p>Đăng ký bằng Google</p>
                                </div>
                            </a>
                            <a href="http://localhost:3000/dang-nhap">
                                <div className={cx('method')}>
                                    <i>
                                        <BsFacebook></BsFacebook>
                                    </i>
                                    <p>Đăng ký bằng Facebook</p>
                                </div>
                            </a>
                            <a href="http://localhost:3000/dang-nhap">
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
                            <NavLink to={'http://localhost:3000/dang-nhap'}>
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
