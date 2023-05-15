import AccordionItem from "./Accordion"

const items = [

    {title: "Seamless Collaboration" ,
     content : "You can easily collaborate with friends and colleagues on projects, whether it's for work or personal use.",
    image: "../images/collab.png"
    },

     {title: "Multi-Channel Support" ,
     content : "You can easily collaborate with friends and colleagues on projects, whether it's for work or personal use.",
    image: "../images/collab.png"
    },

     {title: "Ai-Powered Assistance" ,
     content : "You can easily collaborate with friends and colleagues on projects, whether it's for work or personal use.",
    image: "../images/collab.png"
    },

     {title: "Easy to Use" ,
     content : "You can easily collaborate with friends and colleagues on projects, whether it's for work or personal use.",
    image: "../images/collab.png"
    },


]


const Value = () => {
  return (
    <div>
      <div className="container p-4 text-[#fefe] md:px-44 md:flex md:flex-row-reverse justify-between items-center">
        <div className="content mt-10 md:w-[40%] md:mt-20">
            <h1 className="text-4xl md:text-5xl">The <span className="text-[#1FC77E]">All-in-One </span> 
Solution for
Conversational
AI</h1>
       <div className="accordion mt-10">
           <div className="accordion-item">
           
    <div id="accordion-open" data-accordion="open" >
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} image={item.image} />
      ))}
    </div>
  
           </div>
       </div>
        </div>

        <div className="image flex justify-center mt-10">
          <img src="../images/bg_image.png" className="w-[300px] md:w-full" /> 
        </div>
      </div>

    </div>
  )
}

export default Value
