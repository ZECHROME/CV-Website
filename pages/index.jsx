import Head from "next/head";
import { Poppins } from "@next/font/google";
import { Chivo } from "@next/font/google";

//Components
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const chivo = Chivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>CV Kenneth Gerald Jerome Koraag</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
				<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
			</Head>
			<main className="min-h-screen bg-primary">
				<nav className="p-5 bg-white drop-shadow-xl w--[100%] h-[100px] md:flex md:items-center md:justify-between fixed left-0 right-0 z-[999]">
					<div className="flex justify-between items-center">
						<div>
							<span className="text-[29px] font-[Poppins] font-extrabold mr-2">Kenneth Koraag</span>
							<span className="text-[23px] font-[Poppins] font-normal">/ Junior Web Developer</span>
						</div>

						<span className="text-3xl cursor-pointer mx-2 md:invisible">
							<ion-icon name="menu-outline"></ion-icon>
						</span>
					</div>

					<ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 md:my-0 md:pl-0 pl-5 md:opacity-100 opacity-0 top-[-4000px] transition-all ease-in duration-500">
						<li className="mx-5 my-6 md:my-0">
							<a href="#about" className="text-[25px] hover:text-blue-500 active:text-blue-500 duration-500">
								About Me
							</a>
						</li>
						<li className="mx-5 my-6 md:my-0">
							<a href="#resume" className="text-[25px] hover:text-blue-500 active:text-blue-500 duration-500">
								Resume
							</a>
						</li>
						<li className="mx-5 my-6 md:my-0">
							<a href="#contact" className="text-[25px] hover:text-blue-500 active:text-blue-500 duration-500 mr-1">
								Contact
							</a>
						</li>
					</ul>
				</nav>

				<AboutSection />
				<ResumeSection />
				<ContactSection />

				<div className="bg-primary w-[100%]">
					<div className="flex justify-between items-center bg-white h-[80px]">
						<div>
							<p className="text-[28px] font-bold ml-6">Made by Kenneth Koraag.</p>
						</div>

						<div className="flex flex-row justify-center">
							<div className="mr-7">
								<p className="text-[21px] font-bold text-center">Call</p>
								<p className="text-[19px] font-normal">089665319781</p>
							</div>

							<div className="mr-7">
								<p className="text-[21px] font-semibold text-center">Email</p>
								<p className="text-[19px] font-seminormal">kennethkoraag05@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
