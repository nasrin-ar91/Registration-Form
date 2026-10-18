type InputsProbs = {
	type: string;
	name: string;
	placeholder: string;
	value: string;
	error?: string;
	required?: boolean;
	onchange: (value: string) => void;
};

export default function Inputs({
	type = "text",
	name,
	value,
	placeholder,
	error,
	onchange,
}: InputsProbs) {
	return (
		<div className="flex flex-col items-start gap-2">
			<input
				type={type}
				id={name}
				name={name}
				value={value}
				placeholder={placeholder}
				required
				onChange={(e) => onchange(e.target.value)}
				className="border-b-2 border-gray-300 p-2 w-full"
			/>
			{error && <small className="text-red-700">{error}</small>}
		</div>
	);
}
