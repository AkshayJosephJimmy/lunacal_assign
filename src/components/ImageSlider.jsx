import Slider from "react-slick";
import { useRef } from "react";
// Example of where you might put this, often in your main App.js or index.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function ImageSlider({sliderRef,setImage,image}) {
    
   let settings={
    
    infinite:false,
    speed:500,
    slidesToShow:3,
    slidesToScroll:1,
    arrows:false,


   };

    return(
        <div className=" z-0 h-[190px] overflow-visible relative top-30
         w-[652px]  bg-neutral-600 left-10 rounded-[8px]">
           <Slider ref={sliderRef}{...settings}>
            {image.map((n) => (
          <div key={n} className="p-5 overflow-visible"> {/* 👈 spacing between slides */}
            <div className="h-[160px] z-100 rounded-3xl overflow-hidden bg-neutral-700 
            hover:-rotate-3 hover:-translate-y-2 hover:scale-110 hover:shadow-2xl shadow-black transition-all duration-300 ease-in-out">
              <img
                src={`${n}`}
                alt={`Slide ${n}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
          
            
            

            </Slider>
        </div>
    )
}
export default ImageSlider;






