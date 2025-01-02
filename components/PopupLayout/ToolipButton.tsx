import { clsx } from "clsx";

type Props = {
	tooltip: string;
	active?: boolean;
	children: React.ReactNode;
};

export const TooltipButton = ({ tooltip, active, children }: Props) => {
	return (
		<div className="group relative rounded">
			<button
				type="button"
				className={clsx(
					"grid aspect-square w-full place-items-center rounded-sm text-2xl",
					active
						? "bg-brand-200 text-brand-600"
						: "text-neutral-500 hover:bg-brand-200 hover:text-brand-600",
				)}
				disabled={active}
			>
				{children}
			</button>
			{!active && (
				<p className="-translate-y-1/2 -translate-x-4 invisible absolute top-1/2 right-full whitespace-nowrap rounded bg-neutral-800 px-3 py-1 text-sm text-white group-hover:visible">
					{tooltip}
					<span className="-translate-y-1/2 absolute top-1/2 right-0 h-0 w-0 translate-x-full border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-neutral-800" />
				</p>
			)}
		</div>
	);
};
