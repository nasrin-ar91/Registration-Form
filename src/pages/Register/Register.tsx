import { useState, type SubmitEvent } from "react";
import Inputs from "../base/inputs";

type RegistrationData = {
	companyName: string;
	business: string;
	address: string;
	postCode: string;
	contactName: string;
	contactPhone: string;
	email: string;
	linkedin: string;
	idea: string;
};

export default function Register() {
	const [errors, setErrors] = useState<
		Partial<Record<keyof RegistrationData, string>>
	>({});

	const [data, setData] = useState<RegistrationData>({
		companyName: "",
		business: "",
		address: "",
		postCode: "",
		contactName: "",
		contactPhone: "",
		email: "",
		linkedin: "",
		idea: "",
	});

	const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (typeof data.companyName === "string" && data.companyName.length <= 2) {
			setErrors((olderrors) => ({
				...olderrors,
				companyName: "Please enter a valid company name!",
			}));
		}

		if (typeof data.business != "string") {
			setErrors((olderrors) => ({
				...olderrors,
				business: "Please enter a valid Business!",
			}));
		}

		if (isNaN(+data.postCode)) {
			setErrors((oldErrors) => ({
				...oldErrors,
				postCode: "Enter a valid postcode!",
			}));
		}

		if (isNaN(+data.contactPhone)) {
			setErrors((oldErrors) => ({
				...oldErrors,
				contactPhone: "Please enter a valid phone number!",
			}));
		}

		// const hasError = Object.values(errors).some((itemValue) => {
		// 	return itemValue !== undefined && itemValue !== "";
		// });

		// if (hasError) {
		// 	return;
		// } else {
		// 	console.log(data);
		// }
		console.log(data);
	};

	function handleChange(name: string, value: string) {
		setData((prev) => ({ ...prev, [name]: value }));
		setErrors((oldError) => ({ ...oldError, [name]: undefined }));
	}

	return (
		<div className="flex flex-col md:flex-row gap-15 md:gap-25 justify-between w-full h-screen p-10 md:px-20">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-8 w-full md:w-[60%]"
			>
				<h1 className="text-black text-4xl font-bold">Contact Us</h1>
				<p className="text-gray-400 text-md">
					Need an experiened and skilled hand with custom IT projects?
					<br />
					Fill out form to get a free consultation.
				</p>
				<Inputs
					type="text"
					name="companyName"
					value={data.companyName}
					required={true}
					placeholder="Your Company Name"
					error={errors.companyName}
					onchange={(value) => handleChange("companyName", value)}
				/>
				<Inputs
					type="text"
					name="business"
					value={data.business}
					required={true}
					placeholder="Nature of business"
					error={errors.business}
					onchange={(value) => handleChange("business", value)}
				/>
				<div className="flex gap-5 justify-between w-full">
					<div className="w-[70%]">
						<Inputs
							type="text"
							name="address"
							value={data.address}
							required={true}
							placeholder="Address"
							error={errors.address}
							onchange={(value) => handleChange("address", value)}
						/>
					</div>
					<div className="w-[30%]">
						<Inputs
							type="text"
							name="postCode"
							value={data.postCode}
							required={true}
							placeholder="Postcode"
							error={errors.postCode}
							onchange={(value) => handleChange("postCode", value)}
						/>
					</div>
				</div>

				<Inputs
					type="text"
					name="contactName"
					value={data.contactName}
					required={true}
					placeholder="Contact Name"
					error={errors.contactName}
					onchange={(value) => handleChange("contactName", value)}
				/>

				<Inputs
					type="text"
					name="contactPhone"
					value={data.contactPhone}
					required={true}
					placeholder="Contact Phone"
					error={errors.contactPhone}
					onchange={(value) => handleChange("contactPhone", value)}
				/>

				<Inputs
					type="email"
					name="email"
					value={data.email}
					required={true}
					placeholder="Email"
					error={errors.email}
					onchange={(value) => handleChange("email", value)}
				/>

				<Inputs
					type="text"
					name="linkedin"
					value={data.linkedin}
					required={true}
					placeholder="Linkedin"
					error={errors.linkedin}
					onchange={(value) => handleChange("linkedin", value)}
				/>

				<Inputs
					type="text"
					name="idea"
					value={data.idea}
					required={true}
					placeholder="Let's talk about your idea"
					error={errors.idea}
					onchange={(value) => handleChange("idea", value)}
				/>

				<div className="w-full">
					<label
						htmlFor="file-upload"
						className="box-border w-full h-[80px] mt-5 border border-dashed border-gray-300 bg-white flex items-center justify-center gap-3 text-[var(--primary-color)] cursor-pointer transform-border duration-200 hover:border-[var(--primary-color)] "
					>
						<img src="/svgs/upload.svg" alt="upload" />
						<span>Upload Additional File</span>
					</label>
					<input
						type="file"
						id="file-upload"
						name="attachment"
						accept="*/*"
						hidden
					/>
					<p className="m-5 text-sm text-[var(--primary-color)] leading-2">
						Attach file. File size of your documents should not exceed 10MB.
					</p>
				</div>
				<button
					disabled={Object.values(errors).some((error) => !!error)}
					className="w-full p-3 bg-green-600 text-white text-sm font-bold cursor-pointer disabled:bg-gray-400"
				>
					SUBMIT
				</button>
				<div className="flex gap-3 items-center justify-start">
					<input type="checkbox" id="chechBoxInput" />
					<label htmlFor="chechBoxInput" className="">
						I want to protect my data by signing an NDA
					</label>
				</div>
			</form>
			<div className="flex flex-col gap-10 justify-center items-start p-5 w-full md:w-[30%]">
				<h2 className="text-black text-2xl font-bold">Offices</h2>
				<div className="flex flex-col gap-6">
					<p className="text-gray-400">
						United States <br /> 5005th Avenue suite 400,NY 10110
					</p>
					<p className="text-gray-400">
						United Kingdom <br /> High St, Bromley BR1 10N
					</p>
					<p className="text-gray-400">
						France <br />
						80 Avenue des Terroirs de France, Paris
					</p>
				</div>
				<div className="flex flex-col gap-6">
					<h2 className="text-black text-xl font-bold">For Quick Inquiries</h2>
					<div className="flex items-center gap-2">
						<img src="/svgs/unitedKingdomFlag.svg" alt="Flag" />
						<p className="text-gray-400">+44 7777777777</p>
					</div>
					<div className="flex items-center gap-2">
						<img src="/svgs/unitedStatesFlag.svg" alt="Flag" />
						<p className="text-gray-400">+41 3333333330</p>
					</div>
				</div>
				<div className="flex flex-col gap-6">
					<h2 className="text-black text-sm font-bold">
						Would you like to join our newspaper?
					</h2>
					<div className="flex gap-2 items-center">
						<input
							type="email"
							placeholder="Email"
							className="border-b-2 border-gray-300 p-2"
						/>
						<button
							type="submit"
							className="bg-green-600 text-center p-2 text-white text-sm"
						>
							Send
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
