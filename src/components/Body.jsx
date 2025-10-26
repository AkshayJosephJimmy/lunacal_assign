import DetailsWidget from "./DetailsWidget";
import GalleryWidget from "./GalleryWidget";




function Body(){


    return(
        <div className="body-container relative flex flex-col justify-between bg-neutral-800 w-full h-screen ">
            <DetailsWidget/>
            <GalleryWidget/>
        </div>
    )
}
export default Body;















