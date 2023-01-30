
export default function ContactSection() {
    return <div>
    {/* ABOUT */}
    <div id="contact" className='relative'>
        <div className="flex items-center flex-col bg-primary-500 h-[200vh] pt-[80px]">
            <div className="flex items-center flex-col mb-[70px]">
                <p className="flex justify-center items-center text-[60px] font-bold mb-[-6px] bg-white w-[310px] h-[90px] text-black rounded-full drop-shadow-xl pb-1 tracking-wider">
                    Contact
                </p>
            </div>
            <div className="relative w-[790px] h-[850px] bg-sky-200 rounded-[15px] overflow-hidden            
            before:bg-gradient-to-b  before:from-primary-900 before:via-primary-900 before:to-transparent before:top-[-50%] before:left-[-50%] before:absolute before:w-[800px] before:h-[900px] before:animate-spin-slow before:origin-bottom-right           
            after:bg-gradient-to-b  after:from-primary-900 after:via-primary-900 after:to-transparent after:top-[-50%] after:left-[-50%] after:absolute after:w-[800px] after:h-[900px] after:animate-spin-delay after:origin-bottom-right">
                <div className="flex flex-col absolute bg-primary-300 z-10 inset-[10px] rounded-[18px] py-[40px] px-[70px]">
                  <form action="https://formsubmit.co/kennethkoraag05@gmail.com" method="POST">
                    <div className="flex flex-row gap-8">
                      <div className="inputBox relative w-[100%] mt-[55px] isolate">
                        <input type="text" required="required" name="FirstName" className="relative w-[100%] p-[10px] pl-5 mt-[20px] bg-transparent border-none outline-0 text-[#2F4F4F] text-[20px] font-semibold tracking-wider z-[10]"/>
                        <span className="absolute left-0 pt-[20px] pr-[10px] pb-[10px] text-[26px] font-bold text-white tracking-wider">First Name</span>
                        <i className="absolute left-0 bottom-0 w-[100%] h-[4px] bg-white rounded-md"></i>
                      </div>  
                      <div className="inputBox relative w-[100%] mt-[55px] isolate">
                        <input type="text" required="required" name="lastName" className="relative w-[100%] p-[10px] pl-5 mt-[20px] bg-transparent border-none outline-0 text-[#2F4F4F] text-[20px] font-semibold tracking-wider z-[10]"/>
                        <span className="absolute left-0 pt-[20px] pr-[10px] pb-[10px] text-[26px] font-bold text-white tracking-wider">Last Name</span>
                        <i className="absolute left-0 bottom-0 w-[100%] h-[4px] bg-white rounded-md"></i>
                      </div>  
                    </div>

                    <div className="inputBox relative w-[100%] mt-[55px] isolate">
                        <input type="text" required="required" name="email" className="relative w-[100%] p-[10px] pl-5 mt-[19px] bg-transparent border-none outline-0 text-[#2F4F4F] text-[20px] font-semibold tracking-wider z-[10]"/>
                        <span className="absolute left-0 pt-[20px] pr-[10px] pb-[10px] text-[26px] font-bold text-white tracking-wider">Your Email</span>
                        <i className="absolute left-0 bottom-0 w-[100%] h-[4px] bg-white rounded-md"></i>
                    </div>  

                    <div className="inputBox relative w-[100%] mt-[55px] isolate">
                        <input type="text" required="required" name="subject" className="relative w-[100%] p-[10px] pl-5 mt-[20px] bg-transparent border-none outline-0 text-[#2F4F4F] text-[20px] font-semibold tracking-wider z-[10]"/>
                        <span className="absolute left-0 pt-[20px] pr-[10px] pb-[10px] text-[26px] font-bold text-white tracking-wider">Subject</span>
                        <i className="absolute left-0 bottom-0 w-[100%] h-[4px] bg-white rounded-md"></i>
                    </div>  
                    
                    <div className="inputBox relative w-[100%] mt-[55px] isolate">
                        <input type="text" required="required" name="body" className="relative w-[100%] p-[10px] pl-5 mt-[20px] bg-transparent border-none outline-0 text-[#2F4F4F] text-[20px] font-semibold tracking-wider z-[10]"/>
                        {/* <textarea name="" id="" cols="30" rows="10" require="required" className="relative w-[100%] p-[10px] pl-5 mt-[20px] bg-transparent border-none outline-0 text-black text-lg tracking-wider z-[10]"></textarea> */}
                        <span className="absolute left-0 pt-[20px] pr-[10px] pb-[10px] text-[26px] font-bold text-white tracking-wider">Message</span>
                        <i className="absolute left-0 bottom-0 w-[100%] h-[4px] bg-white rounded-md"></i>
                    </div> 
                    
                    <div className="flex flew-row gap-3 w-[850px] h-[50px] mt-[65px]">                      
                      <div className="bg-orange-500 text-center rounded-xl w-[14%] pt-[5px] cursor-pointer">
                        <button type="submit" className="text-[26px] font-bold tracking-wide text-white cursor-pointer"> 
                          Send 
                        </button>
                      </div>       
                      <div className="bg-orange-500 text-center rounded-xl w-[15%] pt-[5px] cursor-pointer">
                        <input type="reset" value="Reset" className="text-[26px] font-bold tracking-wide text-white cursor-pointer" />
                      </div>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    </div>          
  </div>
}


