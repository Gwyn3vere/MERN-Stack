import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import Slider from './Slider';
import Footer from '../components/Footer';
import styles from './Index.module.scss';
import HeaderMB from '../components/HeaderMB';
import { useState, useEffect } from 'react';
import { PulseLoader } from 'react-spinners';
import { FaFoursquare } from 'react-icons/fa';

const cx = classNames.bind(styles);

function CustomerLayout({ children }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
    return (
        <div className={cx('wrapper')}>
            {loading ? (
                <div className={cx('loading')}>
                    <span>
                        <FaFoursquare></FaFoursquare>
                        <p>FastTravel</p>
                    </span>
                    <PulseLoader loading={loading} size={10} color={'#90f353'} />
                </div>
            ) : (
                <div className={cx('container')}>
                    <Header className={cx('header')} />
                    <Slider />
                    <div className={cx('content')}>{children}</div>
                    <Footer />
                    <HeaderMB />
                </div>
            )}
        </div>
    );
}

export default CustomerLayout;
