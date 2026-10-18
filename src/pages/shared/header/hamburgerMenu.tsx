type HamburgerMenuProbs = {
	onclick: () => void;
};

export default function HamburgerMenu({ onclick }: HamburgerMenuProbs) {
	return (
		<button
			onClick={onclick}
			className="flex flex-col items-center gap-1.5 absolute right-10 top-10 cursor-pointer md:hidden"
		>
			<span className="w-6 h-0.5 bg-gray-600"></span>
			<span className="w-6 h-0.5 bg-gray-600"></span>
			<span className="w-6 h-0.5 bg-gray-600"></span>
		</button>
	);
}
