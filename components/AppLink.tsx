import { Link } from "react-router-dom";

type Props = React.ComponentProps<typeof Link> & {
	icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const AppLink = ({ icon: Icon, children, ...props }: Props) => {
	return (
		<Link
			className="inline-flex items-center gap-x-1 text-zinc-600 underline dark:text-zinc-400 focus:dark:text-zinc-200 focus:text-zinc-800 hover:dark:text-zinc-200 hover:text-zinc-800 focus:no-underline hover:no-underline"
			{...props}
		>
			{Icon && <Icon width={16} height={16} />}
			{children}
		</Link>
	);
};
