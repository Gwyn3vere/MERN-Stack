import classNames from 'classnames/bind';
import styles from './Index.module.scss';
import Backdoor from '../components/Backdoor';
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
                    <Backdoor />
                    <div className={cx('content')}>{children}</div>
                </div>
            )}
        </div>
    );
}

export default CustomerLayout;
