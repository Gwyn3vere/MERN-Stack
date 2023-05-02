/* eslint-disable jsx-a11y/img-redundant-alt */
import classNames from 'classnames/bind';
import styles from './Createroom.module.scss';
import image from '~/assets/images';
import useImageUpload from './useImageUpload';
import { BsFillImageFill } from 'react-icons/bs';
import useLibraryUpload from './useLibraryUpload';

const cx = classNames.bind(styles);

function Createroom() {
    const { imageUrl, imageLabel, thumbnailVisible, handleImageChange } = useImageUpload();
    const { images, handleInputChange } = useLibraryUpload();

    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <img className={cx('bgtitle')} src={image.bgtitle} alt="bgtitle" />
                    <div className={cx('name')}>Create Room</div>
                    <div className={cx('breadcrumb')}>
                        <p>
                            <a href="http://localhost:3000/overview"> Tổng quan</a>
                        </p>
                        <p>/</p>
                        <p>
                            <a href="http://localhost:3000/room"> Quản lí phòng</a>
                        </p>
                        <p>/</p>
                        <p> Tạo phòng</p>
                    </div>
                </div>

                <form className={cx('form')} encType="multipart/form-data">
                    <div className={cx('row')}>
                        <div className={cx('left')}>
                            <div className={cx('left-group-form')}>
                                <label htmlFor="nameRoom">Tên phòng</label>
                                <input type="text" className={cx('nameRoom')} id="nameRoom" name="nameRoom" />
                                <p>Tên phòng một được dưới 10 kí tự.</p>
                            </div>
                            <div className={cx('left-group-form')}>
                                <label htmlFor="slugRoom">Slug phòng</label>
                                <input type="text" className={cx('slugRoom')} id="slugRoom" name="slugRoom" />
                            </div>
                            <div className={cx('left-group-select')}>
                                <div className={cx('selection')}>
                                    <label htmlFor="typeRoom">Loại phòng</label>
                                    <select className={cx('typeRoom')} id="typeRoom" name="typeRoom">
                                        <option value="">-- Chọn loại phòng --</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div className={cx('selection')}>
                                    <label htmlFor="acreageRoom">Diện tích</label>
                                    <select className={cx('acreageRoom')} id="acreageRoom" name="acreageRoom">
                                        <option value="">-- Diện tích phòng --</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </div>
                            <div className={cx('left-select')}>
                                <div className={cx('selection')}>
                                    <label htmlFor="numberCustomer">Số lượng khách có thể ở</label>
                                    <select className={cx('numberCustomer')} id="numberCustomer" name="numberCustomer">
                                        <option value="">-- Số lượng tối đa --</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </div>
                            <div className={cx('left-group-form')}>
                                <label htmlFor="descRoom">Mô tả</label>
                                <textarea
                                    className={cx('descRoom')}
                                    id="descRoom"
                                    cols="10"
                                    rows="20"
                                    name="descRoom"
                                />
                            </div>
                        </div>
                        <div className={cx('right')}>
                            <div className={cx('group-thumbnail')}>
                                <div className={cx('thumbnail')}>Thumbnail</div>
                                <label htmlFor="thumbnailRoom" style={{ border: thumbnailVisible ? '' : 'none' }}>
                                    <BsFillImageFill
                                        className={cx('icon-image')}
                                        style={{ display: thumbnailVisible ? '' : 'none' }}
                                    ></BsFillImageFill>
                                    <p>{imageLabel}</p>
                                    {imageUrl && <img src={imageUrl} alt="Selected Image" />}
                                </label>
                                <input
                                    id="thumbnailRoom"
                                    name="thumbnailRoom"
                                    type="file"
                                    onChange={(e) => {
                                        handleImageChange(e);
                                    }}
                                    style={{ display: 'none' }}
                                />
                            </div>
                            <div className={cx('group-library')}>
                                <div className={cx('library')}>library</div>

                                <label htmlFor="libraryRoom">
                                    {images.length > 0 ? (
                                        <div className={cx('image-grid')}>
                                            {images.map((image) => (
                                                <img
                                                    key={image}
                                                    src={image}
                                                    alt="uploaded image"
                                                    className={cx('image-item')}
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <div className={cx('upload-box')}>
                                            <BsFillImageFill className={cx('icon-image')}></BsFillImageFill>
                                            <p>Chọn tối đa 6 ảnh của bạn vào đây.</p>
                                        </div>
                                    )}
                                </label>
                                <input
                                    type="file"
                                    id="libraryRoom"
                                    multiple
                                    name="libraryRoom"
                                    style={{ display: 'none' }}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className={cx('noft')}>
                                <p>
                                    bạn cần thêm ít nhất 6 hình ảnh thư viện và một ảnh đại diện. Hãy chú ý đến chất
                                    lượng của hình ảnh bạn thêm vào, tuân thủ các tiêu chuẩn về màu nền. Hình ảnh phải
                                    có kích thước nhất định. Lưu ý rằng phòng khách sạn hiển thị tất cả các chi tiết
                                </p>
                            </div>
                            <div className={cx('left-group-form')}>
                                <label htmlFor="priceRoom">Giá phòng</label>
                                <input type="text" className={cx('priceRoom')} id="priceRoom" name="priceRoom" />
                            </div>
                            <div className={cx('button')}>
                                <button className={cx('btn-1')} type="submit" form="form1" value="Submit">
                                    Submit
                                </button>
                                <button className={cx('btn-2')} type="submit" form="form1" value="Submit">
                                    Reset Form
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Createroom;
