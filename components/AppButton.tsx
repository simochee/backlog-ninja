import clsx from "clsx";
import { Button } from "react-aria-components";

type Props = React.ComponentProps<typeof Button> & {
	icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	variant?: "fill" | "outline";
};

export const AppButton = ({
	icon: Icon,
	variant = "fill",
	children,
	...props
}: Props) => {
	return (
		<Button
			className={clsx(
				"flex h-9 items-center gap-x-1 rounded pr-5 disabled:border-0 disabled:bg-zinc-600 disabled:text-zinc-400",
				Icon ? "pl-2" : "pl-5",
				variant === "fill" && [
					"bg-zinc-200 font-bold text-zinc-800 dark:bg-zinc-700 dark:text-zinc-50",
					{
						"hover:bg-zinc-300 focus:bg-zinc-300 focus:dark:bg-zinc-500 hover:dark:bg-zinc-500":
							!props.isDisabled,
					},
				],
			)}
			{...props}
		>
			<>
				{Icon && <Icon width={20} height={20} />}
				{children}
			</>
		</Button>
	);
};
