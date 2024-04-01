import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
const Slider = () => {
    const sliders = [
        "/images/carosel/1.jpg",
        "/images/carosel/2.jpg",
        "/images/carosel/3.jpg",
        "/images/carosel/4.jpg",
        "/images/carosel/5.jpg",
    ]
    return (
        <div className='max-w-[400px] max-h-[400px] min-w-[550px] min-h-[400px] h-full w-full rounded-lg  shadow-2xl'>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 2500,
                }}
                modules={[Autoplay]}
                className="h-full w-full rounded overflow-hidden">
                {
                    sliders.map((slider, index) => {
                        return <SwiperSlide key={index}>
                            <div className='min-w-[550px] min-h-[400px] bg-cover bg-center bg-no-repeat rounded'
                                style={{
                                    backgroundImage: `url(${slider})`,
                                }}
                            >
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    );
};

export default Slider;