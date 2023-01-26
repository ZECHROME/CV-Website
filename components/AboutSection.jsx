
export default function AboutSection() {
    return <>
    {/* ABOUT */}
    <div id="#about" className='relative'>
          <div className='bg-primary-600 w-[40%] h-[1100px] inline-block absolute'></div>
          {/* main container */}
          <div className='flex bg-white w-[75%] h-[600px] inline-block translate-x-[15rem] translate-y-[15rem] drop-shadow-lg'>
            {/* column 1 */}
            <div className='w-[40%] h-[100%] drop-shadow-2xl'>
              <div className='flex justify-start items-center py-5 gap-3 flex-col my-0 bg-orange-200 w-[100%] h-[90%]'>
                <img className='w-[230px] h-[230px] rounded-[50%]' src="/img/profile.jpeg" />
                <div className='flex justify-center align-center flex-col mt-4'>
                  <p className='text-[45px] font-extrabold leading-none'>
                    Kenneth Gerald
                  </p>
                  <p className='text-[45px] font-extrabold'>
                    Jerome Koraag
                  </p>
                </div>
                <div className='bg-primary-900 w-[155px] h-[3px]'></div>
                <p className='text-[32px] font-extralight'>
                  C V &nbsp; P R O J E C T
                </p>
              </div>
  
              <div className='flex justify-center items-center space-x-8 bg-gray-100 h-[10%] pt-2'>
                <span className='text-[40px] cursor-pointer hover:scale-110'>
                  <a href="https://www.facebook.com/kenneth.koraag.9" target="_blank">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>                 
                </span>          
                <span className='text-[40px] cursor-pointer hover:scale-110'>
                  <a href="https://www.instagram.com/kenny.kora/" target="_blank">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>                 
                </span> 
                <span className='text-[40px] cursor-pointer hover:scale-110'>
                  <a href="https://github.com/ZECHROME?tab=repositories" target="_blank">
                    <ion-icon name="logo-github"></ion-icon>
                  </a>                 
                </span>             
              </div>
            </div>

            {/* column 2 */}
            <div className='w-[60%] h-[100%] bg-white'>
              <div>
                <p className='text-7xl font-extrabold mt-8 ml-6'>
                  Welcome
                </p>
                <p className='text-5xl font-medium mt-2 ml-8'>
                  to my CV website!
                </p>
              </div>             
              <div className='flex gap-3 ml-7 mt-10'>
                <button className='bg-primary-700 w-[160px] h-[53px] rounded-full text-white font-bold text-xl hover:bg-white hover:text-black hover:border-4 hover:border-primary-700 transition-all'>
                  Resume
                </button>
                <button className='bg-white w-[160px] h-[53px] rounded-full border-4 border-primary-700 font-bold text-xl hover:bg-primary-700 hover:text-white transition-all'>
                  Contact
                </button>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-[24px] font-medium mt-10 ml-7 mr-8'>
                  Hi! I'm an ameteur website developer specializing in website developing. Had done some projects about web development given by my school involving front end development.
                </p>
                <p className='text-[24px] font-medium mt-3 ml-7 mr-5'>
                  I am currently doing an internship at Taksu Tech HQ and I would be happy to receive more projects in the future!
                </p>
              </div>
            </div>
          </div>

        </div>
    </>
}