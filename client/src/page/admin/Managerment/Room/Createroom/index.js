/* eslint-disable jsx-a11y/img-redundant-alt */
import classNames from 'classnames/bind';
import styles from './Createroom.module.scss';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiFillFileImage } from 'react-icons/ai';
import roomApi from '~/api/room';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const amenities = [
    { id: 1, name: 'Giường ngủ' },
    { id: 2, name: 'Tivi' },
    { id: 3, name: 'Điều hoà và quạt' },
    { id: 4, name: 'Két an toàn' },
    { id: 5, name: 'Tủ lạnh mini' },
    { id: 6, name: 'Phòng tắm' },
    { id: 7, name: 'Đồ dùng cá nhân' },
    { id: 8, name: 'Thiết bị điện' },
    { id: 9, name: 'Bàn làm việc' },
    { id: 10, name: 'Dịch vụ phòng' },
    { id: 11, name: 'Khu vực ghế ngồi' },
    { id: 12, name: 'Máy pha cà phê' },
    { id: 13, name: 'Máy chiếu' },
    { id: 14, name: 'Wifi/Internet' },
    { id: 15, name: 'Máy giặt và bếp nhỏ' },
    { id: 16, name: 'Khu vực tiếp khách' },
    { id: 17, name: 'Minibar' },
    { id: 18, name: 'Hồ bơi riêng' },
];

function Createroom() {
    const navigate = useNavigate();
    const { getRootProps, getInputProps } = useDropzone({
        accept: '',
        onDrop: (acceptedFiles) => {
            setFormValues((prevValues) => ({
                ...prevValues,
                thumbnailRoom: acceptedFiles[0],
            }));
        },
    });
    const [formValues, setFormValues] = useState({
        nameRoom: '',
        slugRoom: '',
        priceRoom: '',
        quantityRoom: '',
        numberCustomer: '',
        bedRoom: '',
        descRoom: '',
        typeRoom: '',
        acreageRoom: '',
        codeRoom: '',
        amenitiesRoom: [],
        thumbnailRoom: null,
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };
    const handleAmenitiesChange = (e) => {
        const { value } = e.target;
        const isChecked = e.target.checked;
        setFormValues((prevValues) => {
            let amenitiesRoom = [...prevValues.amenitiesRoom];
            if (isChecked) {
                amenitiesRoom.push(value);
            } else {
                amenitiesRoom = amenitiesRoom.filter((item) => item !== value);
            }
            return {
                ...prevValues,
                amenitiesRoom,
            };
        });
    };
    const handleThumbnailChange = (e) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            thumbnailRoom: e.target.files[0],
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nameRoom', formValues.nameRoom);
        formData.append('slugRoom', formValues.slugRoom);
        formData.append('priceRoom', formValues.priceRoom);
        formData.append('quantityRoom', formValues.quantityRoom);
        formData.append('numberCustomer', formValues.numberCustomer);
        formData.append('bedRoom', formValues.bedRoom);
        formData.append('descRoom', formValues.descRoom);
        formData.append('typeRoom', formValues.typeRoom);
        formData.append('acreageRoom', formValues.acreageRoom);
        formData.append('codeRoom', formValues.codeRoom);
        formData.append('amenitiesRoom', JSON.stringify(formValues.amenitiesRoom));
        if (typeof formValues.thumbnailRoom === 'object' && formValues.thumbnailRoom !== null) {
            formData.append('thumbnailRoom', formValues.thumbnailRoom);
        }

        const errors = {};

        if (formValues.thumbnailRoom === null || typeof formValues.thumbnailRoom !== 'object') {
            errors.thumbnailRoom = 'Vui lòng chọn ảnh cho phòng';
        }

        for (let [key, value] of formData.entries()) {
            if (value === null || value === '') {
                errors[key] = `${key} Không được để trống`;
            } else if (
                key === 'priceRoom' ||
                key === 'quantityRoom' ||
                key === 'numberCustomer' ||
                key === 'acreageRoom'
            ) {
                if (value <= 0) {
                    errors[key] = 'Giá trị phải lớn hơn 0';
                }
            } else if (key === 'amenitiesRoom') {
                if (value.length === 0) {
                    errors[key] = 'Phải chọn ít nhất 1 tiện ích';
                }
            } else if (key === 'nameRoom' || key === 'bedRoom' || key === 'typeRoom' || key === 'descRoom') {
                if (/[*&^%$#@!()+={}|[\]\\]/g.test(value)) {
                    errors[key] = 'Không được chứa kí tự đặc biệt';
                }
            }
        }

        if (Object.keys(errors).length > 0) {
            // Hiển thị toast cho từng lỗi
            for (let key in errors) {
                toast.error(errors[key]);
            }
            return;
        }

        roomApi
            .createRoom(formData)
            .then((response) => {
                toast.success('Tạo phòng thành công');
                setTimeout(() => {
                    navigate('/room');
                }, 3000);
            })
            .catch((error) => {
                // xử lý lỗi khi gửi dữ liệu lên server
            });
    };
    return (
        <main className={cx('wrapper')}>
            <ToastContainer />
            <div className={cx('container')}>
                <div className={cx('title')}>
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

                <form className={cx('form')} encType="multipart/form-data" onSubmit={handleSubmit}>
                    <div className={cx('row')}>
                        <div className={cx('left')}>
                            <div className={cx('group')}>
                                <label htmlFor="nameRoom">Tên phòng</label>
                                <input
                                    type="text"
                                    id="nameRoom"
                                    name="nameRoom"
                                    value={formValues.nameRoom}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={cx('group')}>
                                <label htmlFor="slugRoom">Slug phòng</label>
                                <input
                                    type="text"
                                    id="slugRoom"
                                    name="slugRoom"
                                    value={formValues.slugRoom}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={cx('number')}>
                                <div className={cx('group', 'float1')}>
                                    <label htmlFor="quantityRoom">số lượng phòng</label>
                                    <input
                                        type="number"
                                        id="quantityRoom"
                                        name="quantityRoom"
                                        value={formValues.quantityRoom}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={cx('group', 'float2')}>
                                    <label htmlFor="priceRoom">Giá phòng</label>
                                    <input
                                        type="number"
                                        id="priceRoom"
                                        name="priceRoom"
                                        value={formValues.quantipriceRoomyRoom}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className={cx('select')}>
                                <div className={cx('group', 'float1')}>
                                    <label htmlFor="typeRoom">Loại phòng</label>
                                    <select
                                        id="typeRoom"
                                        name="typeRoom"
                                        value={formValues.typeRoom}
                                        onChange={handleChange}
                                    >
                                        <option value="">Chọn loại phòng</option>
                                        <option value="Standard">Standard</option>
                                        <option value="Superior">Superior</option>
                                        <option value="Deluxe">Deluxe</option>
                                        <option value="Suite">Suite</option>
                                        <option value="Junior Suite">Junior Suite</option>
                                        <option value="Family Suite">Family Suite</option>
                                        <option value="Senior Suite">Senior Suite</option>
                                        <option value="Executive Suite">Executive Suite</option>
                                    </select>
                                </div>
                                <div className={cx('group', 'float3')}>
                                    <label htmlFor="acreageRoom">Diện tích</label>
                                    <select
                                        id="acreageRoom"
                                        name="acreageRoom"
                                        value={formValues.acreageRoom}
                                        onChange={handleChange}
                                    >
                                        <option value="">Chọn diện tích</option>
                                        <option value="20m2">20m2</option>
                                        <option value="30m2">30m2</option>
                                        <option value="40m2">40m2</option>
                                        <option value="50m2">50m2</option>
                                        <option value="60m2">60m2</option>
                                        <option value="70m2">50m2</option>
                                        <option value="100m2">100m2</option>
                                        <option value="150m2">150m2</option>
                                    </select>
                                </div>
                                <div className={cx('group', 'float2')}>
                                    <label htmlFor="bedRoom">Loại giường</label>
                                    <select
                                        id="bedRoom"
                                        name="bedRoom"
                                        value={formValues.bedRoom}
                                        onChange={handleChange}
                                    >
                                        <option value="">Chọn loại giường</option>
                                        <option value="Single">Single</option>
                                        <option value="Twin">Twin</option>
                                        <option value="Double">Double</option>
                                        <option value="Triple">Triple</option>
                                        <option value="King">King</option>
                                    </select>
                                </div>
                            </div>
                            <div className={cx('number')}>
                                <div className={cx('group', 'float1')}>
                                    <label htmlFor="numberCustomer">số lượng khách có thể ở</label>
                                    <input
                                        type="number"
                                        id="numberCustomer"
                                        name="numberCustomer"
                                        value={formValues.numberCustomer}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={cx('group', 'float2')}>
                                    <label htmlFor="codeRoom">Mã phòng</label>
                                    <input
                                        type="text"
                                        id="codeRoom"
                                        name="codeRoom"
                                        value={formValues.codeRoom}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx('right')}>
                            <div className={cx('thumbnail')}>
                                <label htmlFor="thumbnailRoom">Thumbnail</label>
                                <div {...getRootProps()} className={cx('image')}>
                                    <input {...getInputProps()} name="thumbnailRoom" onChange={handleThumbnailChange} />
                                    {formValues.thumbnailRoom && (
                                        <img
                                            src={URL.createObjectURL(formValues.thumbnailRoom)}
                                            alt="Thumbnail"
                                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                                        />
                                    )}
                                    {!formValues.thumbnailRoom && (
                                        <p style={{ border: '1px dashed #000' }}>
                                            <AiFillFileImage className={cx('drop-img')}></AiFillFileImage>
                                            Kéo và thả ảnh vào đây hoặc nhấp để chọn ảnh
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col')}>
                        <div className={cx('check')}>
                            <label htmlFor="amenitiesRoom">Tiện nghi</label>
                            <div className={cx('box')}>
                                {amenities.map((item) => {
                                    return (
                                        <div className={cx('checkbox')} key={item.id}>
                                            <input
                                                type="checkbox"
                                                name="amenitiesRoom"
                                                value={item.name}
                                                onChange={handleAmenitiesChange}
                                            />
                                            <p> {item.name} </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className={cx('desc')}>
                            <label htmlFor="descRoom">Mô tả chi tiết</label>
                            <textarea
                                id="descRoom"
                                cols="10"
                                rows="30"
                                name="descRoom"
                                value={formValues.descRoom}
                                onChange={handleChange}
                            />
                            <button type="submit">Tạo phòng</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Createroom;
