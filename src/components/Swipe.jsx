import { Swiper , SwiperSlide } from "swiper/react"

import {  Pagination,  A11y } from 'swiper';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css"



const Swipe = () => {
  return (
    <div>
      
  <div className="slide mt-10 md:hidden">
        <Swiper
          modules={[ Pagination,  A11y]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true } }
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="slide bg-[#ffffff15] p-5 rounded-md">
            <img className='w-[100px]' src='../images/Rate.png'/>
            <h1 className='mt-5'>OmniGPT has completely
transformed the way my team works together.</h1>
<p className='font-thin pt-5'>“With the ability to seamlessly communicate across
multiple channels, we are able to collaborate in real-time and make decisions faster than ever. Plus, the AI-powered chatbot saves us time and resources by handling routine tasks and inquiries. I would highly recommend OmniGPT to any organization looking to improve their productivity and efficiency”</p>
<div className="user flex items-center gap-5 mt-5">
    <img src='../images/Ellipse.png' />
    <span>Luke John</span>
</div>
        </div>
      </SwiperSlide>
      <SwiperSlide><div className="slide bg-[#ffffff15] p-5 rounded-md">
            <img className='w-[100px]' src='../images/Rate.png'/>
            <h1 className='mt-5'>OmniGPT has completely
transformed the way my team works together.</h1>
<p className='font-thin pt-5'>“With the ability to seamlessly communicate across
multiple channels, we are able to collaborate in real-time and make decisions faster than ever. Plus, the AI-powered chatbot saves us time and resources by handling routine tasks and inquiries. I would highly recommend OmniGPT to any organization looking to improve their productivity and efficiency”</p>
<div className="user flex items-center gap-5 mt-5">
    <img src='../images/Ellipse.png' />
    <span>Luke John</span>
</div>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="slide bg-[#ffffff15] p-5 rounded-md">
            <img className='w-[100px]' src='../images/Rate.png'/>
            <h1 className='mt-5'>OmniGPT has completely
transformed the way my team works together.</h1>
<p className='font-thin pt-5'>“With the ability to seamlessly communicate across
multiple channels, we are able to collaborate in real-time and make decisions faster than ever. Plus, the AI-powered chatbot saves us time and resources by handling routine tasks and inquiries. I would highly recommend OmniGPT to any organization looking to improve their productivity and efficiency”</p>
<div className="user flex items-center gap-5 mt-5">
    <img src='../images/Ellipse.png' />
    <span>Luke John</span>
</div>
        </div></SwiperSlide>
      <SwiperSlide><div className="slide bg-[#ffffff15] p-5 rounded-md">
            <img className='w-[100px]' src='../images/Rate.png'/>
            <h1 className='mt-5'>OmniGPT has completely
transformed the way my team works together.</h1>
<p className='font-thin pt-5'>“With the ability to seamlessly communicate across
multiple channels, we are able to collaborate in real-time and make decisions faster than ever. Plus, the AI-powered chatbot saves us time and resources by handling routine tasks and inquiries. I would highly recommend OmniGPT to any organization looking to improve their productivity and efficiency”</p>
<div className="user flex items-center gap-5 mt-5">
    <img src='../images/Ellipse.png' />
    <span>Luke John</span>
</div>
        </div></SwiperSlide>
    </Swiper>
    </div>
    
    {/* Larger Screen */}
    
     <div className="slide hidden mt-10 md:block w-full">
        <Swiper
          modules={[ Pagination,  A11y]}
      spaceBetween={50}
      slidesPerView={2.5}
      pagination={{ clickable: true } }
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="slide bg-[#ffffff15] p-5 rounded-md">
            <img className='w-[100px]' src='../images/Rate.png'/>
            <h1 className='mt-5'>OmniGPT has completely
transformed the way my team works together.</h1>
<p className='font-thin pt-5'>“With the ability to seamlessly communicate across
multiple channels, we are able to collaborate in real-time and make decisions faster than ever. Plus, the AI-powered chatbot saves us time and resources by handling routine tasks and inquiries. I would highly recommend OmniGPT to any organization looking to improve their productivity and efficiency”</p>
<div className="user flex items-center gap-5 mt-5">
    <img src='../images/Ellipse.png' />
    <span>Luke John</span>
</div>
        </div>
      </SwiperSlide>
      <SwiperSlide><div className="slide bg-[#ffffff15] p-5 rounded-md">
            <img className='w-[100px]' src='../images/Rate.png'/>
            <h1 className='mt-5'>OmniGPT has completely
transformed the way my team works together.</h1>
<p className='font-thin pt-5'>“With the ability to seamlessly communicate across
multiple channels, we are able to collaborate in real-time and make decisions faster than ever. Plus, the AI-powered chatbot saves us time and resources by handling routine tasks and inquiries. I would highly recommend OmniGPT to any organization looking to improve their productivity and efficiency”</p>
<div className="user flex items-center gap-5 mt-5">
    <img src='../images/Ellipse.png' />
    <span>Luke John</span>
</div>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="slide bg-[#ffffff15] p-5 rounded-md">
            <img className='w-[100px]' src='../images/Rate.png'/>
            <h1 className='mt-5'>OmniGPT has completely
transformed the way my team works together.</h1>
<p className='font-thin pt-5'>“With the ability to seamlessly communicate across
multiple channels, we are able to collaborate in real-time and make decisions faster than ever. Plus, the AI-powered chatbot saves us time and resources by handling routine tasks and inquiries. I would highly recommend OmniGPT to any organization looking to improve their productivity and efficiency”</p>
<div className="user flex items-center gap-5 mt-5">
    <img src='../images/Ellipse.png' />
    <span>Luke John</span>
</div>
        </div></SwiperSlide>
      <SwiperSlide><div className="slide bg-[#ffffff15] p-5 rounded-md">
            <img className='w-[100px]' src='../images/Rate.png'/>
            <h1 className='mt-5'>OmniGPT has completely
transformed the way my team works together.</h1>
<p className='font-thin pt-5'>“With the ability to seamlessly communicate across
multiple channels, we are able to collaborate in real-time and make decisions faster than ever. Plus, the AI-powered chatbot saves us time and resources by handling routine tasks and inquiries. I would highly recommend OmniGPT to any organization looking to improve their productivity and efficiency”</p>
<div className="user flex items-center gap-5 mt-5">
    <img src='../images/Ellipse.png' />
    <span>Luke John</span>
</div>
        </div></SwiperSlide>
    </Swiper>
    </div>


    </div>
  )
}

export default Swipe
