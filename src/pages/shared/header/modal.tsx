import { navbarData } from "../../../constants/navbar";

export default function Modal() {
	return (
		<div className="absolute inset-0 top-24 bg-gray-100 z-50 flex flex-col md:hidden gap-8 items-end justify-start w-full h-screen text-gray-600 text-xl p-10">
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
	);
}
