

const Hero = () => {
  return (
    <div>
      
      <div className="container p-4 text-[#fefe] md:px-44">
        <div className="hero md:flex flex-row-reverse justify-between items-center ">
            <img className="block md:hidden" src="../images/hero_imageM.png"/>
            <img className="hidden md:block w-[400px]" src="../images/hero_image.png"/>
            <div className="content pt-10 md:w-[40%]">
                {/* <img className="absolute w-[250px] mt-9 " src="../images/Graphic.png"/> */}
                <h1 className="text-4xl font-medium pb-5 relative md:font-semibold md:text-5xl">Bring the power of AI to your <span className="bg-Bg_image bg-center bg-cover">conversations</span></h1>
                <h3 className="text-2xl pb-5 ">Work Faster , Smarter, and Better Togerther</h3>
                <p className="opacity-[] font-light pb-5">Experience the power of AI language models with OmniGPT. Our chat platform provides seamless communication across multiple channels.</p>
                <h3 className="text-[20px] pb-5">Try the OmniGPT for free.
15-day trial, no credit card
required.</h3>
                <a href="/" className="w-full block text-center py-5 bg-[#1FC77E] rounded mt-2 text-[20px] md:w-[50%]">Start your free trial</a>
            </div>
        </div>
      </div>


    </div>
  )
}

export default Hero
