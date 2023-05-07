/* eslint-disable jsx-a11y/img-redundant-alt */
import classNames from 'classnames/bind';
import styles from './Createroom.module.scss';
import image from '~/assets/images';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiFillFileImage } from 'react-icons/ai';

const cx = classNames.bind(styles);

function Createroom() {
    const [files, setFiles] = useState([]);

    const onDrop = (acceptedFiles) => {
        setFiles(acceptedFiles);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
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
                            <div className={cx('group')}>
                                <label htmlFor="nameRoom">Tên phòng</label>
                                <input type="text" id="nameRoom" />
                            </div>
                            <div className={cx('group')}>
                                <label htmlFor="slugRoom">Tên phòng</label>
                                <input type="text" id="slugRoom" />
                            </div>
                            <div className={cx('number')}>
                                <div className={cx('group', 'float1')}>
                                    <label htmlFor="quantityRoom">số lượng phòng</label>
                                    <input type="number" id="quantityRoom" />
                                </div>
                                <div className={cx('group', 'float2')}>
                                    <label htmlFor="priceRoom">Giá phòng</label>
                                    <input type="number" id="priceRoom" />
                                </div>
                            </div>
                            <div className={cx('select')}>
                                <div className={cx('group', 'float1')}>
                                    <label htmlFor="typeRoom">Loại phòng</label>
                                    <select id="typeRoom">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="vw">VW</option>
                                        <option value="audi" selected>
                                            Audi
                                        </option>
                                    </select>
                                </div>
                                <div className={cx('group', 'float3')}>
                                    <label htmlFor="acreageRoom">Diện tích</label>
                                    <select id="acreageRoom">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="vw">VW</option>
                                        <option value="audi" selected>
                                            Audi
                                        </option>
                                    </select>
                                </div>
                                <div className={cx('group', 'float2')}>
                                    <label htmlFor="bedRoom">Giường ngủ</label>
                                    <select id="bedRoom">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="vw">VW</option>
                                        <option value="audi" selected>
                                            Audi
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className={cx('number')}>
                                <div className={cx('group', 'float1')}>
                                    <label htmlFor="numberCustomer">số lượng khách có thể ở</label>
                                    <input type="number" id="numberCustomer" />
                                </div>
                                <div className={cx('group', 'float2')}>
                                    <label htmlFor="codeRoom">Mã phòng</label>
                                    <input type="text" id="codeRoom" />
                                </div>
                            </div>
                        </div>
                        <div className={cx('right')}>
                            <div className={cx('thumbnail')}>
                                <label htmlFor="thumbnailRoom">Thumbnail</label>
                                <div
                                    {...getRootProps()}
                                    className={cx('image')}
                                    style={{ border: files.length > 0 ? 'none' : '2px dashed #fff' }}
                                >
                                    <input {...getInputProps()} />
                                    <AiFillFileImage
                                        className={cx('drop-img')}
                                        style={{ display: files.length > 0 ? 'none' : 'block' }}
                                    ></AiFillFileImage>
                                    <p style={{ display: files.length > 0 ? 'none' : 'block' }}>
                                        Thêm hoặc thả ảnh vào đây
                                    </p>
                                    {files.map((file) => (
                                        <img key={file.name} src={URL.createObjectURL(file)} alt={file.name} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col')}>
                        <div className={cx('check')}>
                            <label htmlFor="amenitiesRoom">Tiện nghi</label>
                        </div>
                        <div className={cx('desc')}>
                            <label htmlFor="descRoom">Mô tả chi tiết</label>
                            <textarea id="descRoom" cols="10" rows="30" />
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Createroom;
