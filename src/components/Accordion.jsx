import  {useState} from 'react'


const Accordion = ({title , content , image}) => {

      const [isExpanded, setIsExpanded] = useState(false);

  function toggleAccordion() {
    setIsExpanded(!isExpanded);
  }


 return (
    <div className=" pb-5 ">
    
    
      <button  
        className={isExpanded ? "bg-[#fefe] flex items-center text-[#111826] justify-between w-full p-5 font-medium text-left rounded-t-md hover:bg-[#c7c7c7] transition-all duration-300 ease-in-out" : "flex items-center bg-[#ffffff15] justify-between w-full p-5 font-medium text-left rounded-md dark:hover:bg-gray-800"}
        onClick={toggleAccordion}
      >
        <span className="flex items-center">
         
          {title}
        </span>
        <svg
          className={`w-6 h-6 ${isExpanded ? 'rotate-180' : ''} shrink-0`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </button>
      {isExpanded && (
        <div className="flex gap-5 items-center p-5 rounded-b-md text-[#111826] bg-[#fefe] transition-all duration-500 ease-in-out">
          {content} 
          <img className='w-[70px]' src={image}/>
          
        </div>
      )}
    </div>
  )
}

export default Accordion
