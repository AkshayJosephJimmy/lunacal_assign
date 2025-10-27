import Slider from "react-slick";
// Example of where you might put this, often in your main App.js or index.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImageSlider(){
   let settings={
    
    infinite:true,
    speed:500,
    slidesToShow:3,
    slidesToScroll:1,


   };

    return(
        <div className="  h-[179px] relative top-34
         w-[652px]  bg-neutral-600 left-10 rounded-[8px]">
           <Slider {...settings}>
            {[1, 2, 3, 4, 5].map((n) => (
          <div key={n} className="px-3"> {/* 👈 spacing between slides */}
            <div className="h-[160px] rounded-3xl overflow-hidden bg-neutral-700">
              <img
                src={`https://via.placeholder.com/600x300?text=Slide+${n}`}
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






