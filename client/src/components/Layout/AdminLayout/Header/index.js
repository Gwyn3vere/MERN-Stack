import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FaSearch } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Header() {
    // const user = JSON.parse(localStorage.getItem('user'));

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('dot')}></div>
                <div className={cx('search')}>
                    <input type="search" />
                    <span>
                        <FaSearch />
                    </span>
                </div>
                <div className={cx('right')}>
                    <p>A</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
