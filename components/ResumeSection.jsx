import { useEffect } from "react";
// import { GrRotateRight } from "react-icons/gr";

export default function ResumeSection() {
	function handleClick(e) {
		e.target.closest(".card").classList.toggle("is-flipped");
	}

	useEffect(() => {
		if (typeof window == "undefined") return;

		const card = document.querySelectorAll(".flipper");
		card.forEach((e) => e.addEventListener("click", handleClick));
		return () => card.forEach((e) => e.removeEventListener("click", handleClick));
	}, []);

	return (
		<div>
			{/* RESUME */}
			<div id="resume" className="relative animate-fade-in">
				<div className="flex justify-start items-center flex-col bg-primary-100 w-[100%] h-[400vh] pt-[120px] s:pt-[100px] s:h-[220vh]">
					<div className="flex items-center flex-col mb-[90px] s:mb-[50px]">
						<p className="flex justify-center items-center text-[60px] font-bold mb-[-6px] mt-[80px] bg-white w-[310px] h-[90px] text-black rounded-full drop-shadow-xl pb-1 tracking-wide s:w-[170px] s:h-[55px] s:mt-[15px] s:mb-0 s:text-[30px]">Resume</p>
						{/* <div className="bg-primary-900 w-[120%] h-2 rounded-lg"></div> */}
					</div>
					{/* Education */}
					<p className="flex flex-start w-[60%] text-[43px] font-bold ml-3 s:w-[90%] s:text-[23px] s:ml-3">Education</p>

					{/* Elementary */}
					{/* front */}
					<div className="main relative bg-transparent w-[60%] h-[490px] mt-[20px] drop-shadow-2xl rounded-2xl s:w-[90%] s:h-[210px] s:mt-[12px]">
						<div className="card relative w-[100%] h-[100%] bg-white rounded-2xl s:w-[100%] s:h-[100%]">
							<div className="front absolute w-[90%] h-[90%] bg-white text-black mt-6 ml-[30px] s:w-[100%] s:h-[100%] s:mt-0 s:ml-0 s:rounded-2xl">
								<p className="text-[47px] font-bold text-primary-700 mb-[-18px] s:text-[24px] s:mb-[-7px] s:ml-3 s:mt-2">2012 - 2018</p>
								<p className="text-[45px] font-semibold mb-[5px] s:text-[23px] s:ml-3 s:mb-[3px]">Elementary School</p>
								<div className="flex flex-row items-center gap-4 text-[30px] font-normal ml-7 mb-1 s:text-[15px] s:ml-4 s:gap-2">
									<ion-icon name="hourglass-outline"></ion-icon>
									<p>6 Years</p>
								</div>
								<div className="flex flex-row items-center gap-4 text-[30px] font-normal ml-7 mb-1 s:text-[15px] s:ml-4 s:gap-2">
									<ion-icon name="location-outline"></ion-icon>
									<p>Bali Star Academy</p>
								</div>
								<div className="flex flex-row items-start gap-4 text-[30px] font-normal ml-7 s:text-[15px] s:ml-4 s:gap-2">
									<div className="pt-1 s:pt-[2px]">
										<ion-icon name="book-outline"></ion-icon>
									</div>
									<p>
										<span className="s:hidden">An elementary school I went to when I was 7 years old until I was 13 years old.</span> This is the place where I explore myself more as I grow up to find out what I like and what would I want to be in the future.
									</p>
								</div>
								<div className="flipper absolute right-[0px] top-[5px] text-[45px] text-primary-500 hover:text-[#FF597B] s:text-[26px] s:top-[10px] s:right-[15px]">
									<i class="fa-solid fa-rotate"></i>
								</div>
							</div>
							{/* back */}
							<div className="back absolute w-[100%] h-[100%] rounded-2xl z-8 s:w-[100%] s:h-[100%] s:mt-0 s:ml-0 s:rounded-2xl">
								<img src="/img/bsa2.jpeg" className="absolute w-[100%] h-[100%] opacity-40 left-0 right-0 top-0 bottom-0 rounded-2xl" alt="" />
								<div className="relative z-10 opacity-100 ml-8 mt-4 s:mt-3 s:ml-[10px]">
									<div className="w-[720px]">
										<div className="flex flex-row items-center gap-2 mt-2 s:gap-1">
											<p className="text-[45px] font-extrabold mt-2 s:text-[20px] s:mt-[-2px]">Bali Star Academy</p>
											<p className="text-[40px] font-medium  mt-2 s:text-[15px] s:mt-0">/ </p>
											<p className="text-[35px] font-semibold mt-4 s:text-[13px] s:mt-[3px]"> 2012-2018</p>
										</div>
										<p className="text-[33px] font-medium mt-[-6px] s:text-[12px]">Jl. Bypass Ngurah Rai, Sesetan, Denpasar, Bali</p>
									</div>
									<div className="flipper absolute right-[56px] top-[14px] text-[45px] text-primary-500 hover:text-[#FF597B] s:text-[26px] s:top-[-4px] s:right-[15px]">
										<i class="fa-solid fa-rotate"></i>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Junior High */}
					{/* front */}
					<div className="main relative bg-transparent w-[60%] h-[510px] mt-[50px] drop-shadow-2xl rounded-2xl s:w-[90%] s:h-[210px] s:mt-[30px]">
						<div className="card relative w-[100%] h-[100%] bg-white rounded-2xl s:w-[100%] s:h-[110%]">
							<div className="front absolute w-[90%] h-[90%] bg-white text-black mt-6 ml-[30px] s:w-[100%] s:h-[100%] s:mt-0 s:ml-0 s:rounded-2xl">
								<p className="text-[47px] font-bold text-primary-700 mb-[-18px] s:text-[24px] s:mb-[-7px] s:ml-3 s:mt-2">2018 - 2021</p>
								<p className="text-[45px] font-semibold mb-[5px] s:text-[23px] s:ml-3 s:mb-[3px]">Junior High School</p>
								<div className="flex flex-row items-center gap-4 text-[30px] font-normal ml-7 mb-1 s:text-[15px] s:ml-4 s:gap-2">
									<ion-icon name="hourglass-outline"></ion-icon>
									<p>3 Years</p>
								</div>
								<div className="flex flex-row items-center gap-4 text-[30px] font-normal ml-7 mb-1 s:text-[15px] s:ml-4 s:gap-2">
									<ion-icon name="location-outline"></ion-icon>
									<p>Bali Star Academy</p>
								</div>
								<div className="flex flex-row items-start gap-4 text-[30px] font-normal ml-7 s:text-[15px] s:ml-4 s:gap-2">
									<div className="pt-1 s:pt-[2px]">
										<ion-icon name="book-outline"></ion-icon>
									</div>
									<p>
										<span className="s:hidden">I still went to BSA to continue my education on the Junior High level.</span> On the 9th Grade I started hearing stuffs about programming from the people around me and that&apos;s why I started taking interest and started my coding journey.
									</p>
								</div>
								<div className="flipper absolute right-[0px] top-[5px] text-[45px] text-primary-500 hover:text-[#FF597B] s:text-[26px] s:top-[10px] s:right-[15px]">
									<i class="fa-solid fa-rotate"></i>
								</div>
							</div>
							{/* back */}
							<div className="back absolute w-[100%] h-[100%] rounded-2xl z-8 s:w-[100%] s:h-[100%] s:mt-0 s:ml-0 s:rounded-2xl">
								<img src="/img/bsa.jpeg" className="absolute w-[100%] h-[100%] opacity-40 left-0 right-0 top-0 bottom-0 rounded-2xl" alt="" />
								<div className="relative z-10 opacity-100 ml-8 mt-4 s:mt-3 s:ml-[10px]">
									<div className="w-[720px]">
										<div className="flex flex-row items-center gap-2 mt-2 s:gap-1">
											<p className="text-[45px] font-extrabold mt-2 s:text-[20px] s:mt-[-2px]">Bali Star Academy</p>
											<p className="text-[40px] font-medium  mt-2 s:text-[15px] s:mt-0">/ </p>
											<p className="text-[35px] font-semibold mt-4 s:text-[13px] s:mt-[3px]"> 2018-2021</p>
										</div>
										<p className="text-[33px] font-medium mt-[-6px] s:text-[12px]">Jl. Bypass Ngurah Rai, Sesetan, Denpasar, Bali</p>
									</div>
									<div className="flipper absolute right-[56px] top-[14px] text-[45px] text-primary-500 hover:text-[#FF597B] s:text-[26px] s:top-[-4px] s:right-[15px]">
										<i class="fa-solid fa-rotate"></i>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Senior High */}
					{/* front */}
					<div className="main relative bg-transparent w-[60%] h-[490px] mt-[50px] drop-shadow-2xl rounded-2xl s:w-[90%] s:h-[210px] s:mt-[51px]">
						<div className="card relative w-[100%] h-[100%] bg-white rounded-2xl s:w-[100%] s:h-[100%]">
							<div className="front absolute w-[90%] h-[90%] bg-white text-black mt-6 ml-[30px] s:w-[100%] s:h-[100%] s:mt-0 s:ml-0 s:rounded-2xl">
								<p className="text-[47px] font-bold text-primary-700 mb-[-15px] s:text-[24px] s:mb-[-7px] s:ml-3 s:mt-2">2021 - today</p>
								<p className="text-[45px] font-semibold mb-[5px] s:text-[23px] s:ml-3 s:mb-[3px]">Senior High School</p>
								<div className="flex flex-row items-center gap-4 text-[30px] font-normal ml-7 mb-1 s:text-[15px] s:ml-4 s:gap-2">
									<ion-icon name="hourglass-outline"></ion-icon>
									<p>~</p>
								</div>
								<div className="flex flex-row items-center gap-4 text-[30px] font-normal ml-7 mb-1 s:text-[15px] s:ml-4 s:gap-2">
									<ion-icon name="location-outline"></ion-icon>
									<p>SMK TI Bali Global Denpasar</p>
								</div>
								<div className="flex flex-row items-start gap-4 text-[30px] font-normal ml-7 s:text-[15px] s:ml-4 s:gap-2">
									<div className="pt-1 s:pt-[2px]">
										<ion-icon name="book-outline"></ion-icon>
									</div>
									<p>
										<span className="s:hidden">I went to SMK TI Bali Global Denpasar to continue my education journey.</span> Here I chose &apos;Rekayasa Perangkat Lunak&apos; as my major so that I can learn more about programming and go deeper into it.
									</p>
								</div>
								<div className="flipper absolute right-[0px] top-[5px] text-[45px] text-primary-500 hover:text-[#FF597B] s:text-[26px] s:top-[10px] s:right-[15px]">
									<i class="fa-solid fa-rotate"></i>
								</div>
							</div>
							{/* back */}
							<div className="back absolute w-[100%] h-[100%] rounded-2xl z-8 s:w-[100%] s:h-[100%] s:mt-0 s:ml-0 s:rounded-2xl">
								<img src="/img/baliglobal.jpeg" className="absolute w-[100%] h-[100%] opacity-30 left-0 right-0 top-0 bottom-0 rounded-2xl" alt="" />
								<div className="relative z-10 opacity-100 ml-8 mt-4 s:mt-3 s:ml-[10px]">
									<div className="w-[720px]">
										<div className="flex flex-row items-center gap-2 mt-2 s:gap-1">
											<p className="text-[42px] font-extrabold mt-3 s:text-[17px] s:mt-[-2px]">SMK TI Bali Global DPS</p>
											<p className="text-[40px] font-medium  mt-2 s:text-[15px] s:mt-0">/ </p>
											<p className="text-[35px] font-semibold mt-4 s:text-[13px] s:mt-[3px]"> 2021-Today</p>
										</div>
										<p className="text-[33px] font-medium mt-[-6px] s:text-[12px]"> Jl. Tukad Citarum No.44, Denpasar Selatan, Bali</p>
									</div>
									<div className="flipper absolute right-[56px] top-[14px] text-[45px] text-primary-500 hover:text-[#FF597B] s:text-[26px] s:top-[-4px] s:right-[15px]">
										<i class="fa-solid fa-rotate"></i>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Skillset */}
					<p className="flex flex-start w-[60%] text-[43px] font-bold ml-3 mt-[120px] s:w-[90%] s:text-[24px] s:ml-3 s:mt-[90px]">Skillsets</p>
					<div className="main relative bg-transparent w-[60%] h-[490px] mt-[20px] drop-shadow-2xl rounded-2xl s:w-[90%] s:h-[225px] s:mt-[12px]">
						<div className="card relative w-[100%] h-[100%] bg-[#FF597B] rounded-2xl s:w-[100%] s:h-[100%]">
							{/* front */}
							<div className="front absolute w-[90%] h-[90%] bg-[#FF597B] text-black mt-4 ml-[45px] s:w-[100%] s:h-[100%] s:mt-0 s:ml-0 s:rounded-2xl">
								<p className="text-[55px] font-bold text-[#FEDEFF] mt-[-2px] mb-[-10px] ml-[0px] tracking-wide s:text-[28px] s:ml-[14px] s:mt-[5px]">Characters</p>
								<div className="flex flex-row gap-10 mt-3 s:gap-1 s:mt-[11px]">
									{/* right */}
									<div className="ml-4">
										<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[45px] s:text-[14px] s:gap-2 s:ml-[10px]">
											<div className="pt-[15px] s:pt-[4px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary s:text-[18px]">Obedient</p>
										</div>
										<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[45px] s:text-[14px] s:gap-2 s:ml-[10px]">
											<div className="pt-[15px] s:pt-[4px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary s:text-[18px]">Honest</p>
										</div>

										<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[45px] s:text-[14px] s:gap-2 s:ml-[10px]">
											<div className="pt-[15px] s:pt-[4px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary s:text-[18px]">Attentive</p>
										</div>
										<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[45px] s:text-[14px] s:gap-2 s:ml-[10px]">
											<div className="pt-[15px] s:pt-[4px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary s:text-[18px]">Loyal</p>
										</div>
										<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[45px] s:text-[14px] s:gap-2 s:ml-[10px]">
											<div className="pt-[15px] s:pt-[4px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary s:text-[18px]">Confidence</p>
										</div>
										<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[45px] s:text-[14px] s:gap-2 s:ml-[10px]">
											<div className="pt-[15px] s:pt-[4px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary s:text-[18px]">Empathetic</p>
										</div>
									</div>
									{/* left */}
									<div>
										<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[45px] s:text-[14px] s:gap-2 s:ml-[20px]">
											<div className="pt-[15px] s:pt-[4px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary s:text-[18px]">Ambitious</p>
										</div>
										<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[45px] s:text-[14px] s:gap-2 s:ml-[20px]">
											<div className="pt-[15px] s:pt-[4px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary s:text-[18px]">Simple</p>
										</div>
										<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[45px] s:text-[14px] s:gap-2 s:ml-[20px]">
											<div className="pt-[15px] s:pt-[4px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary s:text-[18px]">Determined</p>
										</div>
										<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[45px] s:text-[14px] s:gap-2 s:ml-[20px]">
											<div className="pt-[15px] s:pt-[4px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary s:text-[18px]">Generous</p>
										</div>
										<div className="flex flex-row items-start gap-4 text-[25px] text-primary font-medium ml-[45px] s:text-[14px] s:gap-2 s:ml-[20px]">
											<div className="pt-[15px] s:pt-[4px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary s:text-[18px]">Willing to Learn</p>
										</div>
									</div>
								</div>

								<div className="flipper absolute right-[18px] top-[5px] text-[45px] text-primary-100 hover:text-white  s:text-[25px] s:top-[9px] s:right-[20px]">
									<i class="fa-solid fa-rotate"></i>
								</div>
							</div>
							{/* back */}
							<div className="back absolute w-[90%] h-[90%] bg-[#FF597B] text-black mt-4 ml-[45px] s:w-full s:h-[100%] s:mt-0 s:ml-0 s:rounded-2xl">
								{/* language */}
								<p className="text-[47px] font-bold text-[#FEDEFF] mb-[-5px] ml-[-3px] tracking-wide s:text-[20px] s:ml-[8px] s:mt-[7px]">Languages</p>
								<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[35px] s:text-[12px] s:gap-2 s:ml-[22px] s:mt-[3px]">
									<div className="pt-[12px] s:pt-[4px]">
										<ion-icon name="play-outline"></ion-icon>
									</div>
									<p className="text-[32px] font-semibold text-primary s:text-[16px]">Bahasa Indonesia (native)</p>
								</div>

								<div className="flex flex-row items-start gap-4 text-[25px] text-primary font-medium ml-[35px] s:text-[12px] s:gap-2 s:ml-[22px]">
									<div className="pt-[12px] s:pt-[4px]">
										<ion-icon name="play-outline"></ion-icon>
									</div>
									<p className="text-[32px] font-semibold text-primary s:text-[16px]">English (proficient)</p>
								</div>
								{/* programming language */}
								<p className="text-[45px] font-bold text-[#FEDEFF] mb-[-5px] ml-[-3px] mt-[20px] tracking-wide s:text-[18px] s:ml-[8px] s:mt-[9px]">Front-End Programming Languages</p>
								<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[35px] s:text-[12px] s:gap-2 s:ml-[22px] s:mt-[3px]">
									<div className="pt-[12px] s:pt-[4px]">
										<ion-icon name="play-outline"></ion-icon>
									</div>
									<p className="text-[32px] font-semibold text-primary s:text-[16px]">HTML</p>
								</div>

								<div className="flex flex-row items-start gap-4 text-[25px] text-primary font-medium ml-[35px] s:text-[12px] s:gap-2 s:ml-[22px]">
									<div className="pt-[12px] s:pt-[4px]">
										<ion-icon name="play-outline"></ion-icon>
									</div>
									<p className="text-[32px] font-semibold text-primary s:text-[16px]">Vanilla CSS</p>
								</div>
								<div className="flex flex-row items-start gap-4 text-[25px] text-primary font-medium ml-[35px] s:text-[12px] s:gap-2 s:ml-[22px]">
									<div className="pt-[12px] s:pt-[4px]">
										<ion-icon name="play-outline"></ion-icon>
									</div>
									<p className="text-[32px] font-semibold text-primary s:text-[16px]">Tailwind CSS</p>
								</div>
								<div className="flex flex-row items-start gap-4 text-[25px] text-primary font-medium ml-[35px] s:text-[12px] s:gap-2 s:ml-[22px]">
									<div className="pt-[12px] s:pt-[4px]">
										<ion-icon name="play-outline"></ion-icon>
									</div>
									<p className="text-[32px] font-semibold text-primary s:text-[16px]">Javascript (learning progress)</p>
								</div>
								<div className="flipper absolute right-[15px] top-[5px] text-[45px] text-primary-100 hover:text-white s:text-[25px] s:top-[9px] s:right-[20px]">
									<i class="fa-solid fa-rotate"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
