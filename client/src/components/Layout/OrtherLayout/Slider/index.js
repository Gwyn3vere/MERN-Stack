import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import image from '~/assets/images';

const cx = classNames.bind(styles);

function Slider() {
    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('banner')}>
                    <img src={image.bgDaNang} alt="" />
                    <div className={cx('title')}>
                        <p>Let's go now</p>
                        <span>Explore and Travel</span>
                    </div>
                </div>
                <div className={cx('booking')}>
                    <form className={cx('form')}>
                        <div className={cx('input')}>
                            <select>
                                <option>Loại phòng</option>
                            </select>
                        </div>
                        <div className={cx('input')}>
                            <select className={cx('border')}>
                                <option>Số lượng</option>
                            </select>
                        </div>
                        <div className={cx('input')}>
                            <select className={cx('border')}>
                                <option>Số lượng khách</option>
                            </select>
                        </div>
                        <div className={cx('input')}>
                            <button>Tìm nhanh</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Slider;
