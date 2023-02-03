// import { useRef } from "react";

export default function ContactSection() {
	function handleSubmit(e) {
		e.preventDefault();

		let form = e.target;
		let firstName = form.querySelector("#firstName").value;
		let lastName = form.querySelector("#lastName").value;
		let email = form.querySelector("#email").value;
		let subject = form.querySelector("#subject").value;
		let message = form.querySelector("#message").value;

		form.reset();

		fetch("https://formsubmit.co/ajax/kennethkoraag05@gmail.com", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				name: `${firstName} ${lastName}`,
				email,
				subject,
				message,
			}),
		})
			.then((e) => alert("Berhasil") || e.json())
			.then(console.log)
			.catch((err) => console.log(err) || alert("gagal"));
	}

	return (
		<div>
			{/* CONTACT */}
			<div id="contact" className="relative animate-fade-in">
				<div className="flex items-center flex-col bg-[#FFC1CC] h-[200vh] pt-[100px]">
					<div className="flex items-center flex-col mb-[70px]">
						<p className="flex justify-center items-center text-[60px] font-bold mb-[-6px] bg-white w-[310px] h-[90px] text-black rounded-full drop-shadow-xl pb-1 tracking-wider mt-[100px]">Contact</p>
					</div>
					<div
						className="relative w-[820px] h-[900px] bg-sky-200 rounded-[15px] overflow-hidden            
            			before:bg-gradient-to-b  before:from-primary-1000 before:via-primary-1000 before:to-transparent before:top-[-50%] before:left-[-50%] before:absolute before:w-[800px] before:h-[900px] before:animate-spin-slow before:origin-bottom-right           
            			after:bg-gradient-to-b  after:from-primary-1000 after:via-primary-1000 after:to-transparent after:top-[-50%] after:left-[-50%] after:absolute after:w-[800px] after:h-[900px] after:animate-spin-delay after:origin-bottom-right"
					>
						<div className="flex flex-col absolute bg-[#FC8EAC] z-10 inset-[10px] rounded-[18px] py-[30px] px-[70px]">
							<form action="https://formsubmit.co/kennethkoraag05@gmail.com" method="POST" onSubmit={handleSubmit}>
								<div className="flex flex-row gap-8">
									<div className="inputBox relative w-[100%] mt-[55px] isolate">
										<input type="text" required="required" name="FirstName" placeholder=" " autoComplete="off" id="firstName" className="relative w-[100%] p-[10px] pl-5 mt-[20px] bg-transparent border-none outline-0 text-[#2F4F4F] text-[20px] font-semibold tracking-wider z-[10]" />
										<span className="absolute left-0 pt-[20px] pr-[10px] pb-[15px] text-[27px] font-bold text-white tracking-wider">First Name</span>
										<i className="absolute left-0 bottom-0 w-[100%] h-[4px] bg-white rounded-md"></i>
									</div>
									<div className="inputBox relative w-[100%] mt-[55px] isolate">
										<input type="text" required="required" name="lastName" placeholder=" " autoComplete="off" id="lastName" className="relative w-[100%] p-[10px] pl-5 mt-[20px] bg-transparent border-none outline-0 text-[#2F4F4F] text-[20px] font-semibold tracking-wider z-[10]" />
										<span className="absolute left-0 pt-[20px] pr-[10px] pb-[15px] text-[27px] font-bold text-white tracking-wider">Last Name</span>
										<i className="absolute left-0 bottom-0 w-[100%] h-[4px] bg-white rounded-md"></i>
									</div>
								</div>

								<div className="inputBox relative w-[100%] mt-[55px] isolate">
									<input type="email" required="required" name="email" placeholder=" " autoComplete="off" id="email" className="relative w-[100%] p-[10px] pl-5 mt-[19px] bg-transparent border-none outline-0 text-[#2F4F4F] text-[20px] font-semibold tracking-wider z-[10]" />
									<span className="absolute left-0 pt-[20px] pr-[10px] pb-[15px] text-[27px] font-bold text-white tracking-wider">Your Email</span>
									<i className="absolute left-0 bottom-0 w-[100%] h-[4px] bg-white rounded-md"></i>
								</div>

								<div className="inputBox relative w-[100%] mt-[55px] isolate">
									<input type="text" required="required" name="subject" placeholder=" " autoComplete="off" id="subject" className="relative w-[100%] p-[10px] pl-5 mt-[20px] bg-transparent border-none outline-0 text-[#2F4F4F] text-[20px] font-semibold tracking-wider z-[10]" />
									<span className="absolute left-0 pt-[20px] pr-[10px] pb-[15px] text-[27px] font-bold text-white tracking-wider">Subject</span>
									<i className="absolute left-0 bottom-0 w-[100%] h-[4px] bg-white rounded-md"></i>
								</div>

								<div className="inputBox relative w-[100%] mt-[55px] isolate">
									<input type="text" required="required" name="body" placeholder=" " autoComplete="off" id="message" className="relative w-[100%] p-[10px] pl-5 mt-[20px] bg-transparent border-none outline-0 text-[#2F4F4F] text-[20px] font-semibold tracking-wider z-[10]" />
									<span className="absolute left-0 pt-[20px] pr-[10px] pb-[15px] text-[27px] font-bold text-white tracking-wider">Message</span>
									<i className="absolute left-0 bottom-0 w-[100%] h-[4px] bg-white rounded-md"></i>
								</div>

								<div className="flex flew-row gap-5 w-[850px] h-[52px] mt-[75px]">
									<div className="bg-orange-500 text-center rounded-xl w-[15%] pt-[5px] cursor-pointer">
										<button type="submit" className="text-[26px] font-bold tracking-wide text-white cursor-pointer">
											Send
										</button>
									</div>
									<div className="bg-orange-500 text-center rounded-xl w-[16%] pt-[5px] cursor-pointer">
										<input type="reset" value="Reset" className="text-[26px] font-bold tracking-wide text-white cursor-pointer" />
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
