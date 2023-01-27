
export default function ContactSection() {
    return <div>
    {/* ABOUT */}
    <div id="contact" className='relative'>
        <div className="flex items-center flex-col bg-primary-100 h-[200vh] pt-[70px]">
            <div className="flex items-center flex-col mb-[90px]">
                <p className="flex justify-center items-center text-[60px] font-bold mb-[-6px] bg-white w-[310px] h-[90px] text-black rounded-full drop-shadow-xl pb-1">
                    Contact
                </p>
            </div>
            <div className="relative w-[800px] h-[900px] bg-primary rounded-[15px] overflow-hidden 
            
            before:bg-gradient-to-b  before:from-primary-900 before:via-primary-900 before:to-transparent before:top-[-50%] before:left-[-50%] before:absolute before:w-[800px] before:h-[900px] before:animate-spin-slow before:origin-bottom-right
            
            after:bg-gradient-to-b  after:from-primary-900 after:via-primary-900 after:to-transparent after:top-[-50%] after:left-[-50%] after:absolute after:w-[800px] after:h-[900px] after:animate-spin-delay after:origin-bottom-right
            ">
                <div className="absolute bg-white z-10 inset-[10px] rounded-[18px]"></div>
            </div>
        </div>
    </div>          
  </div>
}


