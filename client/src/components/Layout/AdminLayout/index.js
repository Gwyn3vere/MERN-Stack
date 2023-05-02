import classNames from 'classnames/bind';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './Index.module.scss';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar className={cx('sidebar')} />
            <div className={cx('container')}>
                <Header className={cx('header')} />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default AdminLayout;
