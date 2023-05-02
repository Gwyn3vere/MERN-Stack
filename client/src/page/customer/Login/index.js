import classNames from 'classnames/bind';
import styles from './Login.module.scss';
// import image from '~/assets/images';
import { SiGmail } from 'react-icons/si';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

const cx = classNames.bind(styles);

function Login() {
    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('tittle')}></div>
                <div className={cx('card')}>
                    <form className={cx('login')}>
                        <div className={cx('name')}>
                            <h1>Đăng nhập</h1>
                        </div>
                        <div className={cx('form-group')}>
                            <input type="text" id="username" placeholder="Tên đăng nhập" />
                        </div>
                        <div className={cx('form-group')}>
                            <input type="password" id="password" placeholder="Mật khẩu" />
                        </div>
                        <a className={cx('forget-pass')} href="http://localhost:3000/dang-nhap">
                            <div className={cx('forget')}>Quên mật khẩu</div>
                        </a>
                        <div className={cx('form-group')}>
                            <div className={cx('submit')}>Đăng nhập</div>
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
                            Chưa có tài khoản? <a href="http://localhost:3000/dang-ky">Đăng ký</a>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Login;
