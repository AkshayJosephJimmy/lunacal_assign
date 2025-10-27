import ArrowButtons from "./ArrowButton";
import ImageSlider from "./ImageSlider";
import QuestionMark from "./QuestionMark";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FiArrowLeftCircle } from "react-icons/fi";



function GalleryWidget() {
  return (
    <div className=" absolute  left-[clamp(0px,922px,calc(100vw-768px))]  top-[453px] rounded-2xl   h-[316px] w-full max-w-[720px]  bg-neutral-600  ">
        <QuestionMark/>
        <button className=" absolute h-[62px] w-[149px] top-6 left-10 rounded-[20px] bg-neutral-900 text-gray-100">Gallary</button>
        <button className=" absolute h-[50px] w-[140px] top-6 right-50 rounded-3xl text-white shadow-box  [box-shadow:inset_0_2px_0_rgba(255,255,255,0.2)] shadow-black bg-neutral-700">+ Add Image</button>
        <ArrowButtons/>
      <ImageSlider/>
      
    </div>
  );
}
export default GalleryWidget;









