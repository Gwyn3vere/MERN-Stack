import classNames from 'classnames/bind';
import styles from './Backdoor.module.scss';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const cx = classNames.bind(styles);

function Backdoor() {
    const goBack = () => {
        window.history.back();
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <button onClick={goBack}>
                    <span>
                        <AiOutlineArrowLeft></AiOutlineArrowLeft>
                    </span>
                </button>
                <h1>Cài đặt và bảo mật</h1>
            </div>
        </header>
    );
}

export default Backdoor;
