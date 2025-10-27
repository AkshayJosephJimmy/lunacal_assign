import ArrowButtons from "./ArrowButton";
import ImageSlider from "./ImageSlider";
import QuestionMark from "./QuestionMark";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FiArrowLeftCircle } from "react-icons/fi";
import { useRef } from "react";
import { useState } from "react";



function GalleryWidget() {
  const fileInputRef =useRef(null);
  const sliderRef=useRef(null);
  const [image,setImage]=useState( ["https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
  "https://images.unsplash.com/photo-1519608487953-e999c86e7455"])
   const handleButtonClick = () => {
    fileInputRef.current.click();
  };
    const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage((prev) => [...prev, imageUrl]);
    }
  };
  console.log("images",image);
  return (
    <div className=" absolute shadow-[8px_8px_6px_rgba(0,0,0,.6)]  left-[clamp(0px,922px,calc(100vw-768px))]  top-[453px] rounded-2xl   h-[316px] w-full max-w-[720px]  bg-neutral-600  ">
        <QuestionMark/>
        <button className=" absolute h-[62px] w-[149px] top-6 left-10 rounded-[20px] bg-neutral-900 text-gray-100">Gallary</button>
        <button className=" absolute h-[50px] w-[140px] top-6 right-50 rounded-3xl text-white shadow-box  
        [box-shadow:inset_0_2px_0_rgba(255,255,255,0.2)] shadow-black bg-neutral-700" onClick={handleButtonClick}>
          + Add Image</button>
          <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleAddImage}
        className="hidden"
      />
        <ArrowButtons sliderRef={sliderRef}/>
      <ImageSlider  sliderRef={sliderRef}setImage={setImage} image={image}/>
      <div className=" relative top-36 left-18 w-[600px] h-[6px] rounded-full bg-gradient-to-b from-[#3a3a3a] to-[#1f1f1f] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.6)]"></div>
    </div>
  );
}
export default GalleryWidget;









