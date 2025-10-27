import Nav from "./Nav";
import QuestionMark from "./QuestionMark";




function DetailsWidget() {
  return (
    <div className=" relative p-1 shadow-[8px_8px_6px_rgba(0,0,0,.6)] top-[96px]
    left-[clamp(0px,922px,calc(100vw-768px))] rounded-2xl  details-widget h-[316px] w-full max-w-[720px] bg-neutral-600  ">
        <QuestionMark/>
        <Nav/>
        <div className="h-3/4 w-3/4 mx-auto mt-4 text-gray-400 overflow-y-auto">

        <p className=" text-xl plus">
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
        </p>
        </div>
        
  <div class="handle">


  
</div>
<div className=" relative top-4 left-18 w-[600px] h-[6px] rounded-full bg-gradient-to-b from-[#3a3a3a] to-[#1f1f1f] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.6)]"></div>
     
    </div>
  );
}

export default DetailsWidget;