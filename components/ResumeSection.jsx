
export default function ResumeSection() {
    return <div>
    {/* ABOUT */}
    <div id="resume" className='relative'>
        <div className="flex justify-start items-center flex-col bg-primary-100 w-[100%] h-[400vh] pt-[70px]">
            <div className="flex items-center flex-col mb-[90px]">
                <p className="flex justify-center items-center text-[60px] font-bold mb-[-6px] bg-white w-[310px] h-[90px] text-black rounded-full drop-shadow-xl pb-1">
                    Resume
                </p>
                {/* <div className="bg-primary-900 w-[120%] h-2 rounded-lg"></div> */}
            </div>

            {/* Education */}
            <p className="flex flex-start w-[60%] text-[40px] font-bold">
                Education
            </p>
             {/* Elementary */}
            <div className="bg-white w-[60%] h-[485px] mt-7 drop-shadow-2xl rounded-2xl">
                <div className="mt-7 ml-9 w-[90%]">
                    <p className="text-[44px] font-bold text-[#FF597B] mb-[-11px]">
                        2012 - 2018
                    </p>
                    <p className="text-[41px] font-semibold mb-[8px]">
                        Elementary School
                    </p>
                    <div className="flex flex-row items-center gap-4 text-[29px] font-norma ml-3 mb-1">
                        <ion-icon name="hourglass-outline"></ion-icon>
                        <p>
                            6 Years
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-4 text-[29px] font-normal ml-3 mb-1">
                        <ion-icon name="location-outline"></ion-icon>                       
                        <p>
                            Bali Star Academy
                        </p>
                    </div>
                    <div className="flex flex-row items-start gap-4 text-[29px] font-normal ml-3">
                        <div className="pt-1">
                            <ion-icon  name="book-outline"></ion-icon>
                        </div>                        
                        <p>
                            An elementary school I went to when I was 7 years old until I was 13 years old. This is the place where I explore myself more as I grow up to find out what I like and what would I want to be in the future.
                        </p>
                    </div>
                </div>               
            </div>
            {/* Junior High */}
            <div className="bg-[#FF597B] w-[60%] h-[485px] mt-[40px] drop-shadow-2xl text-primary rounded-2xl">
                <div className="mt-7 ml-9 w-[90%]">
                    <p className="text-[43px] font-bold text-[#FEDEFF] mb-[-10px]">
                        2018 - 2021
                    </p>
                    <p className="text-[41px] font-semibold mb-[6px]">
                        Junior High School
                    </p>
                    <div className="flex flex-row items-center gap-4 text-[29px] font-norma ml-3 mb-1">
                        <ion-icon name="hourglass-outline"></ion-icon>
                        <p>
                            3 Years
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-4 text-[29px] font-normal ml-3 mb-1">
                        <ion-icon name="location-outline"></ion-icon>                       
                        <p>
                            Bali Star Academy
                        </p>
                    </div>
                    <div className="flex flex-row items-start gap-4 text-[29px] font-normal ml-3">
                        <div className="pt-1">
                            <ion-icon  name="book-outline"></ion-icon>
                        </div>                        
                        <p>
                            I still went to BSA to continue my education on the Junior High level. On the 9th Grade I started hearing stuffs about programming from the people around me and that's why I started taking interest and started my coding journey.
                        </p>
                    </div>
                </div>               
            </div>
            {/* Senior High School */}
            <div className="bg-white w-[60%] h-[485px] mt-[40px] drop-shadow-2xl rounded-2xl">
                <div className="mt-7 ml-9 w-[90%]">
                    <p className="text-[44px] font-bold text-primary-700 mb-[-10px]">
                        2021 - today
                    </p>
                    <p className="text-[41px] font-semibold mb-[6px]">
                        Senior High School
                    </p>
                    <div className="flex flex-row items-center gap-4 text-[29px] font-norma ml-3 mb-1">
                        <ion-icon name="hourglass-outline"></ion-icon>
                        <p>
                            ~
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-4 text-[29px] font-normal ml-3 mb-1">
                        <ion-icon name="location-outline"></ion-icon>                       
                        <p>
                            SMK TI Bali Global Denpasar
                        </p>
                    </div>
                    <div className="flex flex-row items-start gap-4 text-[29px] font-normal ml-3">
                        <div className="pt-1">
                            <ion-icon  name="book-outline"></ion-icon>
                        </div>                        
                        <p>
                            I went to SMK TI Bali Global Denpasar to continue my education journey. Here I chose 'Rekayasa Perangkat Lunak' as my major so that I can learn more about programming and go deeper into it.
                        </p>
                    </div>
                </div>               
            </div>



            {/* SKILLSETS */}
            <p className="flex flex-start w-[60%] text-[40px] font-bold mt-[100px]">
                Skillset
            </p>
            <div className="bg-gradient-to-br from-primary-900 to-sky-700 w-[60%] h-[485px] mt-[30px] drop-shadow-2xl text-white font-extrabold rounded-xl">
                <div className="mt-7 ml-9 w-[90%]">
                    {/* Character */}
                    <p className="text-[50px] font-bold text-[#FEDEFF]">
                        Characters
                    </p>
                    <div className="flex flex-row items-center gap-4 text-[30px] font-medium ml-5">
                        <ion-icon name="play-outline"></ion-icon>                      
                        <p>
                            Determined
                        </p>
                    </div>
                    <div className="flex flex-row items-start gap-4 text-[30px] font-medium ml-5">
                        <div className="pt-1">
                            <ion-icon name="play-outline"></ion-icon>
                        </div>                        
                        <p>
                            Willing to Learn
                        </p>
                    </div>
                    <div className="flex flex-row items-start gap-4 text-[30px] font-medium ml-5">
                        <div className="pt-1">
                            <ion-icon name="play-outline"></ion-icon>
                        </div>                        
                        <p>
                            Obedient
                        </p>
                    </div>

                    {/* Languages */}
                    <p className="text-[48px] font-bold text-[#FEDEFF] mt-[35px]">
                        Languages
                    </p>
                    <div className="flex flex-row items-center gap-4 text-[29px] font-medium ml-5 mb-1">
                        <ion-icon name="play-outline"></ion-icon>                      
                        <p>
                            Bahasa Indonesia (native)
                        </p>
                    </div>
                    <div className="flex flex-row items-start gap-4 text-[29px] font-medium ml-5">
                        <div className="pt-1">
                            <ion-icon name="play-outline"></ion-icon>
                        </div>                        
                        <p>
                            English (proficient)
                        </p>
                    </div>
                </div>               
            </div>
        </div>
    </div>         
  </div>
}
