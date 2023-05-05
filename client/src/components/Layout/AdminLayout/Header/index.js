import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FaSearch } from 'react-icons/fa';
import { BsFillBellFill, BsMessenger } from 'react-icons/bs';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <div className={cx('search')}>
                        <input type="search" placeholder="Muốn tìm cái gì thì gõ vào đây..." />
                        <div className={cx('search-btn')}>
                            <FaSearch></FaSearch>
                        </div>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('icon')}>
                        <BsMessenger></BsMessenger>
                    </div>
                    <div className={cx('icon')}>
                        <BsFillBellFill></BsFillBellFill>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
