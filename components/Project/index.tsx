type Props = {
	projectKey: string;
	name: string;
	useWiki: boolean;
	useFileSharing: boolean;
	useSubversion: boolean;
	useGit: boolean;
};

const Project = ({
	projectKey,
	name,
	useWiki,
	useFileSharing,
	useSubversion,
	useGit,
}: Props) => {
	const navItems = [
		{ action: "add", label: "課題の追加", enabled: true },
		{ action: "find", label: "課題", enabled: true },
		{ action: "wiki", label: "Wiki", enabled: useWiki },
		{ action: "file", label: "ファイル", enabled: useFileSharing },
		{ action: "subversion", label: "Subversion", enabled: useSubversion },
		{ action: "git", label: "Git", enabled: useGit },
	].filter(({ enabled }) => enabled);

	return (
		<button
			type="button"
			className="grid grid-cols-[auto,1fr] gap-y-1 p-4 hover:bg-yellow-50"
		>
			<img
				className="h-7 w-7 object-cover"
				src="https://placehold.jp/320x320.png"
				alt=""
			/>
			<span className="flex items-end gap-1 self-center px-3 text-sm leading-none">
				<span className="line-clamp-1">{name}</span>
				<span className="text-2xs">({projectKey})</span>
			</span>
			<span className="col-start-2 flex flex-wrap">
				{navItems.map(({ action, label }) => (
					<button
						key={action}
						type="button"
						className="border-gray-300 border-r px-3 text-gray-500 text-xs leading-tight last:border-0 hover:text-black hover:underline"
					>
						{label}
					</button>
				))}
			</span>
		</button>
	);
};

export default Project;
