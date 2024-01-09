"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

const GalleryFooter = () => {
    return (
        <div className='w-full h-full dark:bg-transparent '>
            <Swiper 
                pagination={{clickable:true}}
                autoplay={{delay: 2500, disableOnInteraction: false}}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>Slider 1</SwiperSlide>
                <SwiperSlide>Slider 2</SwiperSlide>
                <SwiperSlide>Slider 3</SwiperSlide>
                <SwiperSlide>Slider 4</SwiperSlide>
                <SwiperSlide>Slider 5</SwiperSlide>
                <SwiperSlide>Slider 6</SwiperSlide>
                <SwiperSlide>Slider 7</SwiperSlide>
                <SwiperSlide>Slider 8</SwiperSlide>
                <SwiperSlide>Slider 9</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default GalleryFooter