import { useState } from "react";
import Register from "../Register/Register";
import Header from "../shared/header/Header";
import Modal from "../shared/header/modal";

export default function Home() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="flex flex-col w-full h-screen relative overflow-y-auto ">
			<Header setIsMenuOpen={setIsMenuOpen} />
			<Register />
			{isMenuOpen && <Modal />}
		</div>
	);
}
