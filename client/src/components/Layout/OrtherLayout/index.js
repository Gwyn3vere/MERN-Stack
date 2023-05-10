import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import Slider from './Slider';
import Footer from '../components/Footer';
import styles from './Index.module.scss';
import HeaderMB from '../components/HeaderMB';

const cx = classNames.bind(styles);

function CustomerLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Header className={cx('header')} />
                <Slider />
                <div className={cx('content')}>{children}</div>
                <Footer />
                <HeaderMB />
            </div>
        </div>
    );
}

export default CustomerLayout;
