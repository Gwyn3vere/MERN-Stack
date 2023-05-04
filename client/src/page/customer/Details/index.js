import classNames from 'classnames/bind';
import styles from './Details.module.scss';
import image from '~/assets/images';
import useTab from './useTab';
import { MdPolicy } from 'react-icons/md';
import { AiFillInfoCircle, AiFillCamera, AiFillWechat } from 'react-icons/ai';
import { useState } from 'react';
import Infomation from './Infomation';
import Policy from './Policy';
import Gallery from './Gallery';
import Rating from './Rating';

const cx = classNames.bind(styles);

function Details() {
    // Tạo active cho tabList
    const tabList = [
        { id: 1, icons: <AiFillInfoCircle />, name: 'Thông tin' },
        { id: 2, icons: <MdPolicy />, name: 'Chính sách' },
        { id: 3, icons: <AiFillCamera />, name: 'Thư viện' },
        { id: 4, icons: <AiFillWechat />, name: 'Đánh giá' },
    ];
    const [activeTab, onChangeTab] = useTab(tabList[0].id);
    const handleClickTab = (tabIndex) => {
        onChangeTab(tabIndex);
    };

    // Render component
    const [currentTab, setCurrentTab] = useState(1);

    const renderTabConent = () => {
        switch (currentTab) {
            case 1:
                return <Infomation />;
            case 2:
                return <Policy />;
            case 3:
                return <Gallery />;
            case 4:
                return <Rating />;
            default:
                return null;
        }
    };

    const types = [
        { id: 1, name: 'VIP' },
        { id: 2, name: 'Standand' },
        { id: 3, name: 'Super' },
        { id: 4, name: 'Luxury' },
        { id: 5, name: 'King' },
        { id: 6, name: 'Trendy' },
        { id: 7, name: 'Popular' },
        { id: 8, name: 'Vintage' },
    ];

    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('banner')}>
                    <img src={image.bgChuaLinhUng} alt="" />
                    <p>Thông tin chi tiết</p>
                </div>
                <div className={cx('room')}>
                    <div className={cx('table')}>
                        {tabList.map((tab) => {
                            return (
                                <div className={cx('tab')} key={tab.id} onClick={() => setCurrentTab(tab.id)}>
                                    <div
                                        className={cx('link', activeTab === tab.id ? 'active' : '')}
                                        onClick={() => handleClickTab(tab.id)}
                                    >
                                        <i> {tab.icons} </i>
                                        <p>{tab.name}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={cx('list')}>
                        <div className={cx('left')}>{renderTabConent()}</div>
                        <div className={cx('right')}>
                            <div className={cx('sidebar')}>
                                <div className={cx('titlebar')}>
                                    <p>Đặt phòng</p>
                                    <span>Lên kế hoạt cho kì nghỉ tuyệt vời của bạn!</span>
                                </div>
                                <div className={cx('input-group')}>
                                    <input type="search" placeholder="Tìm kiếm phòng" />
                                    <input type="text" placeholder="Loại phòng" />
                                    <input type="date" />
                                </div>
                                <div className={cx('radio-group')}>
                                    <div className={cx('sortby')}>
                                        <p>Lọc theo loại phòng</p>
                                    </div>
                                    {types.map((type) => {
                                        return (
                                            <div className={cx('check')} key={type.id}>
                                                <input type="radio" id="radioId" value={type.name} />
                                                <label htmlFor="radioId"> {type.name} </label>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className={cx('button')}>
                                    <button>Đặt phòng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Details;
