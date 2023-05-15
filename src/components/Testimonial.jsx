
import Swipe from './Swipe';



const Testimonial = () => {
  return (
    <div>
      
      <div className="relative container p-4 text-[#fefe] md:px-44">
        <div className="content mt-10 md:mt-20 flex justify-between">
            <h1 className="text-4xl md:text-5xl md:w-[50%]">See What People Are <span className="text-[#1FC77E]">Saying About US</span></h1>
            <img className='absolute right-0 w-[200px] md:w-[300px] md:right-36 md:top-20' src='../images/side.png'/>
        </div>
    
       <div className="slide mt-10 md:mt-20 ">
           <Swipe />
       </div>

      </div>


    </div>
  )
}

export default Testimonial
