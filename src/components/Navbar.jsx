import { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
 import { IoClose } from 'react-icons/io5';




const Navbar = () => {

  const [ nav , setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }


    const links = [
       
        { name : "Blog" , link : '/' },
        { name : "Contact Us" , link : '/' },
        { name : "Sign In" , link : '/' },
       
    ]


  return (
    <div>
      <header className='text-[#fff] p-5 font-odd '>
       
        <nav className='nav  flex items-center  justify-between p-2 rounded-md md:px-40'>
         <label><img className='w-[100px] md:w-[130px] mt-1 -ml-1.5 md:-ml-0' src='../images/logo.png' /></label>
         <ul className='hidden  md:flex gap-16'>
             {links.map((link)  => {
                 return (
                     <li className='' key={link.name}><a className='' href={link.link}>{link.name}</a></li>
                )
             })}       
         </ul>

        
         <button onClick={handleNav}  className={ !nav ? ' cursor-pointer md:hidden absolute right-3  ' : 'fixed z-40 right-3 ' }  >
            {!nav ? <HiOutlineMenu size={32}/> : <IoClose size={32}/> }       
         </button>
       
        {/* MObile Menu */}

               <div className={!nav ? ' fixed  top-[-100%]  ' :'fixed left-0 top-0 w-full  bg-[#070300] z-10  ease-in-out duration-500 '  }>
               <label><img className=' m-5 mt-8 w-[100px] md:hidden' src='../images/logo.png' /></label>
             
           
                <ul className='flex mt-2 p-6 flex-col h-[100vh] gap-3 md:hidden'>
               
                
                  {links.map((link)  => {
                 return (
                    
                         <li className='text-center   flex  items-center p-5 place-content-center  my-5 bg-red-400' key={link.name}><a className='' href={link.link}>{link.name}</a></li>
               
                )
             })}  

        

                 </ul>

          
                </div>



        </nav>
      
      </header>
    </div>
  )
}

export default Navbar

