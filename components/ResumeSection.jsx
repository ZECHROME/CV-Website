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
				<div className="flex justify-start items-center flex-col bg-primary-100 w-[100%] h-[400vh] pt-[120px]">
					<div className="flex items-center flex-col mb-[90px]">
						<p className="flex justify-center items-center text-[60px] font-bold mb-[-6px] mt-[80px] bg-white w-[310px] h-[90px] text-black rounded-full drop-shadow-xl pb-1 tracking-wide">Resume</p>
						{/* <div className="bg-primary-900 w-[120%] h-2 rounded-lg"></div> */}
					</div>
					{/* Education */}
					<p className="flex flex-start w-[60%] text-[43px] font-bold ml-3">Education</p>

					{/* Elementary */}
					{/* front */}
					<div className="main relative bg-transparent w-[60%] h-[490px] mt-[20px] drop-shadow-2xl rounded-2xl">
						<div className="card relative w-[100%] h-[100%] bg-white rounded-2xl">
							<div className="front absolute w-[90%] h-[90%] bg-white text-black mt-6 ml-[30px]">
								<p className="text-[47px] font-bold text-primary-700 mb-[-18px]">2012 - 2018</p>
								<p className="text-[45px] font-semibold mb-[5px]">Elementary School</p>
								<div className="flex flex-row items-center gap-4 text-[30px] font-normal ml-7 mb-1">
									<ion-icon name="hourglass-outline"></ion-icon>
									<p>6 Years</p>
								</div>
								<div className="flex flex-row items-center gap-4 text-[30px] font-normal ml-7 mb-1">
									<ion-icon name="location-outline"></ion-icon>
									<p>Bali Star Academy</p>
								</div>
								<div className="flex flex-row items-start gap-4 text-[30px] font-normal ml-7">
									<div className="pt-1">
										<ion-icon name="book-outline"></ion-icon>
									</div>
									<p>An elementary school I went to when I was 7 years old until I was 13 years old. This is the place where I explore myself more as I grow up to find out what I like and what would I want to be in the future.</p>
								</div>
								<div className="flipper absolute right-[0px] top-[5px] text-[45px] text-primary-500 hover:text-[#FF597B]">
									<i class="fa-solid fa-rotate"></i>
								</div>
							</div>
							{/* back */}
							<div className="back absolute w-[100%] h-[100%] rounded-2xl z-8">
								<img src="/img/bsa2.jpeg" className="absolute w-[100%] h-[100%] opacity-40 left-0 right-0 top-0 bottom-0 rounded-2xl" alt="" />
								<div className="relative z-10 opacity-100 ml-8 mt-4">
									<div className="w-[720px]">
										<div className="flex flex-row items-center gap-2 mt-2">
											<p className="text-[45px] font-extrabold mt-2">Bali Star Academy</p>
											<p className="text-[40px] font-medium  mt-2">/ </p>
											<p className="text-[35px] font-semibold mt-4"> 2012-2018</p>
										</div>
										<p className="text-[33px] font-medium mt-[-6px]">Jl. Bypass Ngurah Rai, Sesetan, Denpasar, Bali</p>
									</div>
									<div className="flipper absolute right-[56px] top-[14px] text-[45px] text-primary-500 hover:text-[#FF597B]">
										<i class="fa-solid fa-rotate"></i>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Junior High */}
					{/* front */}
					<div className="main relative bg-transparent w-[60%] h-[510px] mt-[50px] drop-shadow-2xl rounded-2xl">
						<div className="card relative w-[100%] h-[100%] bg-white rounded-2xl">
							<div className="front absolute w-[90%] h-[90%] bg-white text-black mt-6 ml-[30px]">
								<p className="text-[47px] font-bold text-primary-700 mb-[-18px]">2018 - 2021</p>
								<p className="text-[45px] font-semibold mb-[5px]">Junior High School</p>
								<div className="flex flex-row items-center gap-4 text-[30px] font-normal ml-7 mb-1">
									<ion-icon name="hourglass-outline"></ion-icon>
									<p>3 Years</p>
								</div>
								<div className="flex flex-row items-center gap-4 text-[30px] font-normal ml-7 mb-1">
									<ion-icon name="location-outline"></ion-icon>
									<p>Bali Star Academy</p>
								</div>
								<div className="flex flex-row items-start gap-4 text-[30px] font-normal ml-7">
									<div className="pt-1">
										<ion-icon name="book-outline"></ion-icon>
									</div>
									<p>I still went to BSA to continue my education on the Junior High level. On the 9th Grade I started hearing stuffs about programming from the people around me and that&apos;s why I started taking interest and started my coding journey.</p>
								</div>
								<div className="flipper absolute right-[0px] top-[5px] text-[45px] text-primary-500 hover:text-[#FF597B]">
									<i class="fa-solid fa-rotate"></i>
								</div>
							</div>
							{/* back */}
							<div className="back absolute w-[100%] h-[100%] rounded-2xl z-8">
								<img src="/img/bsa.jpeg" className="absolute w-[100%] h-[100%] opacity-40 left-0 right-0 top-0 bottom-0 rounded-2xl" alt="" />
								<div className="relative z-10 opacity-100 ml-8 mt-4">
									<div className="w-[720px]">
										<div className="flex flex-row items-center gap-2 mt-2">
											<p className="text-[45px] font-extrabold mt-2">Bali Star Academy</p>
											<p className="text-[40px] font-medium  mt-2">/ </p>
											<p className="text-[35px] font-semibold mt-4"> 2018-2021</p>
										</div>
										<p className="text-[33px] font-medium mt-[-6px]">Jl. Bypass Ngurah Rai, Sesetan, Denpasar, Bali</p>
									</div>
									<div className="flipper absolute right-[56px] top-[14px] text-[45px] text-primary-500 hover:text-[#FF597B]">
										<i class="fa-solid fa-rotate"></i>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Senior High */}
					{/* front */}
					<div className="main relative bg-transparent w-[60%] h-[490px] mt-[50px] drop-shadow-2xl rounded-2xl">
						<div className="card relative w-[100%] h-[100%] bg-white rounded-2xl">
							<div className="front absolute w-[90%] h-[90%] bg-white text-black mt-6 ml-[30px]">
								<p className="text-[47px] font-bold text-primary-700 mb-[-15px]">2021 - today</p>
								<p className="text-[45px] font-semibold mb-[5px]">Senior High School</p>
								<div className="flex flex-row items-center gap-4 text-[30px] font-normal ml-7 mb-1">
									<ion-icon name="hourglass-outline"></ion-icon>
									<p>~</p>
								</div>
								<div className="flex flex-row items-center gap-4 text-[30px] font-normal ml-7 mb-1">
									<ion-icon name="location-outline"></ion-icon>
									<p>SMK TI Bali Global Denpasar</p>
								</div>
								<div className="flex flex-row items-start gap-4 text-[30px] font-normal ml-7">
									<div className="pt-1">
										<ion-icon name="book-outline"></ion-icon>
									</div>
									<p>I went to SMK TI Bali Global Denpasar to continue my education journey. Here I chose &apos;Rekayasa Perangkat Lunak&apos; as my major so that I can learn more about programming and go deeper into it.</p>
								</div>
								<div className="flipper absolute right-[0px] top-[5px] text-[45px] text-primary-500 hover:text-[#FF597B]">
									<i class="fa-solid fa-rotate"></i>
								</div>
							</div>
							{/* back */}
							<div className="back absolute w-[100%] h-[100%] rounded-2xl z-8">
								<img src="/img/baliglobal.jpeg" className="absolute w-[100%] h-[100%] opacity-30 left-0 right-0 top-0 bottom-0 rounded-2xl" alt="" />
								<div className="relative z-10 opacity-100 ml-8 mt-4">
									<div className="w-[720px]">
										<div className="flex flex-row items-center gap-2 mt-2">
											<p className="text-[42px] font-extrabold mt-3">SMK TI Bali Global DPS</p>
											<p className="text-[40px] font-medium  mt-2">/ </p>
											<p className="text-[35px] font-semibold mt-4"> 2021-Today</p>
										</div>
										<p className="text-[33px] font-medium mt-[-6px]"> Jl. Tukad Citarum No.44, Denpasar Selatan, Bali</p>
									</div>
									<div className="flipper absolute right-[56px] top-[14px] text-[45px] text-primary-500 hover:text-[#FF597B]">
										<i class="fa-solid fa-rotate"></i>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Skillset */}
					<p className="flex flex-start w-[60%] text-[43px] font-bold ml-3 mt-[120px]">Skillsets</p>
					<div className="main relative bg-transparent w-[60%] h-[490px] mt-[20px] drop-shadow-2xl rounded-2xl">
						<div className="card relative w-[100%] h-[100%] bg-[#FF597B] rounded-2xl">
							{/* front */}
							<div className="front absolute w-[90%] h-[90%] bg-[#FF597B] text-black mt-4 ml-[45px]">
								<p className="text-[55px] font-bold text-[#FEDEFF] mt-[-2px] mb-[-10px] ml-[0px] tracking-wide">Characters</p>
								<div className="flex flex-row gap-10 mt-3">
									{/* right */}
									<div className="ml-4">
										<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[45px]">
											<div className="pt-[15px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary">Obedient</p>
										</div>
										<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[45px]">
											<div className="pt-[15px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary">Honest</p>
										</div>

										<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[45px]">
											<div className="pt-[15px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary">Attentive</p>
										</div>
										<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[45px]">
											<div className="pt-[15px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary">Loyal</p>
										</div>
										<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[45px]">
											<div className="pt-[15px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary">Confidence</p>
										</div>
										<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[45px]">
											<div className="pt-[15px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary">Empathetic</p>
										</div>
									</div>
									{/* left */}
									<div>
										<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[45px]">
											<div className="pt-[15px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary">Ambitious</p>
										</div>
										<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[45px]">
											<div className="pt-[15px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary">Simple</p>
										</div>
										<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[45px]">
											<div className="pt-[15px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary">Determined</p>
										</div>
										<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[45px]">
											<div className="pt-[15px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary">Generous</p>
										</div>
										<div className="flex flex-row items-start gap-4 text-[25px] text-primary font-medium ml-[45px]">
											<div className="pt-[15px]">
												<ion-icon name="play-outline"></ion-icon>
											</div>
											<p className="text-[40px] font-semibold text-primary">Willing to Learn</p>
										</div>
									</div>
								</div>

								<div className="flipper absolute right-[18px] top-[5px] text-[45px] text-primary-100 hover:text-white">
									<i class="fa-solid fa-rotate"></i>
								</div>
							</div>
							{/* back */}
							<div className="back absolute w-[90%] h-[90%] bg-[#FF597B] text-black mt-4 ml-[45px]">
								{/* language */}
								<p className="text-[47px] font-bold text-[#FEDEFF] mb-[-5px] ml-[-3px] tracking-wide">Languages</p>
								<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[35px]">
									<div className="pt-[12px]">
										<ion-icon name="play-outline"></ion-icon>
									</div>
									<p className="text-[32px] font-semibold text-primary">Bahasa Indonesia (native)</p>
								</div>

								<div className="flex flex-row items-start gap-4 text-[25px] text-primary font-medium ml-[35px]">
									<div className="pt-[12px]">
										<ion-icon name="play-outline"></ion-icon>
									</div>
									<p className="text-[32px] font-semibold text-primary">English (proficient)</p>
								</div>
								{/* programming language */}
								<p className="text-[45px] font-bold text-[#FEDEFF] mb-[-5px] ml-[-3px] mt-[20px] tracking-wide">Front-End Programming Languages</p>
								<div className="flex flex-row items-start gap-4 text-[23px] text-primary font-medium ml-[35px]">
									<div className="pt-[12px]">
										<ion-icon name="play-outline"></ion-icon>
									</div>
									<p className="text-[32px] font-semibold text-primary">HTML</p>
								</div>

								<div className="flex flex-row items-start gap-4 text-[25px] text-primary font-medium ml-[35px]">
									<div className="pt-[12px]">
										<ion-icon name="play-outline"></ion-icon>
									</div>
									<p className="text-[32px] font-semibold text-primary">Vanilla CSS</p>
								</div>
								<div className="flex flex-row items-start gap-4 text-[25px] text-primary font-medium ml-[35px]">
									<div className="pt-[12px]">
										<ion-icon name="play-outline"></ion-icon>
									</div>
									<p className="text-[32px] font-semibold text-primary">Tailwind CSS</p>
								</div>
								<div className="flex flex-row items-start gap-4 text-[25px] text-primary font-medium ml-[35px]">
									<div className="pt-[12px]">
										<ion-icon name="play-outline"></ion-icon>
									</div>
									<p className="text-[32px] font-semibold text-primary">Javascript (learning progress)</p>
								</div>
								<div className="flipper absolute right-[15px] top-[5px] text-[45px] text-primary-100 hover:text-white">
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
