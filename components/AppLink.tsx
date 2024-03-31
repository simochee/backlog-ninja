import { Link } from "react-router-dom";

type Props = React.ComponentProps<typeof Link> & {
	icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const AppLink = ({ icon: Icon, children, ...props }: Props) => {
	return (
		<Link
			className="inline-flex gap-x-1 items-center text-zinc-600 dark:text-zinc-400 underline hover:no-underline focus:no-underline hover:text-zinc-800 focus:text-zinc-800 hover:dark:text-zinc-200 focus:dark:text-zinc-200"
			{...props}
		>
			{Icon && <Icon width={16} height={16} />}
			{children}
		</Link>
	);
};
