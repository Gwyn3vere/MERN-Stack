import classNames from 'classnames/bind';
import styles from './Overview.module.scss';
import { BsFillSquareFill } from 'react-icons/bs';

const cx = classNames.bind(styles);

function Overview() {
    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <div className={cx('title-1')}>
                        <div className={cx('icon')}>
                            <BsFillSquareFill></BsFillSquareFill>
                        </div>
                        <div className={cx('name')}>Thống kê chung</div>
                    </div>
                    <div className={cx('title-2')}>asd</div>
                </div>
                <div className={cx('parameter')}></div>
                <div className={cx('list')}></div>
            </div>
        </main>
    );
}

export default Overview;
