import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { IoLogoFoursquare } from 'react-icons/io';
import { IoLogoTiktok } from 'react-icons/io5';
import { RiInstagramFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookMessenger, FaFacebook } from 'react-icons/fa';

const cx = classNames.bind(styles);

const icons = [
    { id: 1, icon: <RiInstagramFill /> },
    { id: 2, icon: <FaFacebook /> },
    { id: 3, icon: <AiOutlineTwitter /> },
    { id: 4, icon: <FaFacebookMessenger /> },
    { id: 5, icon: <IoLogoTiktok /> },
];

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <div className={cx('logo')}>
                        <IoLogoFoursquare className={cx('icon')}></IoLogoFoursquare>
                        <p>
                            <span>Fast</span>Travel
                        </p>
                    </div>
                    <div className={cx('copyright')}>
                        <p>
                            Tất cả các ảnh được sử dụng trong đề tài này đều lấy từ các nguồn pexels, freepik,
                            google,...
                        </p>
                    </div>
                    <div className={cx('email')}>
                        <label htmlFor="emailForm">Nhận thêm các thông tin mới nhất từ chúng tôi.</label>
                        <input type="email" id="emailForm" placeholder="exmaple@gmail.com" />
                    </div>
                </div>
                <div className={cx('mid')}>
                    <div className={cx('category')}>ReactJS - Native</div>
                    <div className={cx('link')}>
                        <p>Axios</p>
                        <p>SASS</p>
                        <p>Customize CRA</p>
                        <p>Slick carousel</p>
                        <p>React app rewired</p>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('category')}>Nodejs Express</div>
                    <div className={cx('link')}>
                        <p>Cors</p>
                        <p>Nodemon</p>
                        <p>Multer</p>
                        <p>Cloudinary</p>
                        <p>Express validator</p>
                        <div className={cx('ico')}>
                            {icons.map((item) => {
                                return <i key={item.id}> {item.icon} </i>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
