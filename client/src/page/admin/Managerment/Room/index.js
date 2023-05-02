import classNames from 'classnames/bind';
import styles from './Room.module.scss';
import image from '~/assets/images';
import { MdAddCircle, MdDelete } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Room() {
    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <img className={cx('bgtitle')} src={image.bgtitle} alt="bgtitle" />
                    <div className={cx('name')}>Quản lí phòng</div>
                    <div className={cx('breadcrumb')}>
                        <p>
                            <a href="http://localhost:3000/overview"> Tổng quan</a>
                        </p>
                        <p>/</p>
                        <p>Quản lí phòng</p>
                    </div>
                </div>
                <div className={cx('control')}>
                    <a href={cx('http://localhost:3000/create-room')}>
                        <div className={cx('create')}>
                            <MdAddCircle></MdAddCircle>New Product
                        </div>
                    </a>
                    <div className={cx('option')}>
                        <div className={cx('search')}>
                            <div className={cx('search-btn')}>
                                <FaSearch></FaSearch>
                            </div>
                            <input type="search" placeholder="Tìm kiếm..." />
                        </div>
                        <div className={cx('sort')}>
                            <select className={cx('sortBy')}>
                                <option value="volvo">Sort By</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className={cx('delete')}>
                            <div className={cx('delete-select')}>
                                Drop<MdDelete></MdDelete>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('list')}>
                    <div className={cx('nameTag')}>
                        <p className={cx('two')}>#</p>
                        <div className={cx('two')}>
                            <input type="checkbox" />
                        </div>
                        <p className={cx('thirty')}>Name Room</p>
                        <p className={cx('ten')}>Type</p>
                        <p className={cx('ten')}>Price</p>
                        <p className={cx('thirty')}>NumberCustomer</p>
                        <p className={cx('ten')}>Acreage</p>
                        <p className={cx('ten')}>Action</p>
                    </div>
                </div>
                {/* {Fragment.map((room, index) => {
                    return (
                        <div className={cx('info')} key={index}>
                            <div className={cx('room')}>
                                <p className={cx('two')}>#</p>
                                <div className={cx('two')}>
                                    <input type="checkbox" />
                                </div>
                                <p className={cx('thirty')}>{room.nameRoom}</p>
                                <p className={cx('ten')}>{room.typeRoom}</p>
                                <p className={cx('ten')}>{room.priceRoom}</p>
                                <p className={cx('thirty')}>{room.numberCustomer}</p>
                                <p className={cx('ten')}>{room.acreageRoom}</p>
                                <a href="http://localhost:3000/room" className={cx('ten')}>
                                    <div>Edit</div>
                                </a>
                            </div>
                        </div>
                    );
                })} */}
            </div>
        </main>
    );
}

export default Room;
