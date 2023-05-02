import classNames from 'classnames/bind';
import styles from './Register.module.scss';
// import image from '~/assets/images';
import { SiGmail } from 'react-icons/si';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

const cx = classNames.bind(styles);

function Register() {
    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('tittle')}></div>
                <div className={cx('card')}>
                    <form className={cx('login')}>
                        <div className={cx('name')}>
                            <h1>Đăng ký</h1>
                        </div>
                        <div className={cx('form-group')}>
                            <input type="text" id="username" placeholder="Tên đăng nhập" />
                        </div>
                        <div className={cx('form-group')}>
                            <input type="text" id="phone" placeholder="Số điện thoại" />
                        </div>
                        <div className={cx('form-group')}>
                            <input type="password" id="password" placeholder="Mật khẩu" />
                        </div>
                        <div className={cx('form-group')}>
                            <div className={cx('submit')}>Đăng ký</div>
                        </div>
                        <div className={cx('method')}>Hoặc tiếp tục với</div>
                        <div className={cx('orther')}>
                            <div className={cx('icon')}>
                                <SiGmail></SiGmail>
                            </div>
                            <div className={cx('icon')}>
                                <BsFacebook></BsFacebook>
                            </div>
                            <div className={cx('icon')}>
                                <AiFillInstagram></AiFillInstagram>
                            </div>
                        </div>
                        <div className={cx('register')}>
                            Đã có tài khoản? <a href="http://localhost:3000/dang-nhap">Đăng nhập</a>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Register;
