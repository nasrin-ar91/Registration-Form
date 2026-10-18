import HamburgerMenu from "./hamburgerMenu";
import { navbarData } from "../../../constants/navbar";

type HeadreProps = {
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setIsMenuOpen }: HeadreProps) {
	function handleClick() {
		setIsMenuOpen((prev) => !prev);
	}

	return (
		<div className="bg-gray-300 flex gap-25 px-10 md:px-20 py-2 md:py-1 items-center justify-between relative sticky top-0">
			<img
				src="/images/green.png"
				alt="logo"
				className="w-40 md:w-60 opacity-60"
			/>
			<HamburgerMenu onclick={handleClick} />

			<div className="hidden md:flex gap-15 items-center text-gray-600 text-xl">
				{navbarData.map((item) => (
					<a
						key={item.href}
						href={item.href}
						className="active:no-underline relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-0.5 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full"
					>
						{item.text}
					</a>
				))}
			</div>
		</div>
	);
}
