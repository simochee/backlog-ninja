import { Popover } from "@base-ui-components/react/popover";

export const SwitchSpace = () => {
	return (
		<Popover.Root openOnHover>
			<Popover.Trigger className="aspect-square w-full">
				<img src="https://placehold.jp/48x48.png" alt="" />
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Positioner
					side="left"
					sideOffset={16}
					align="end"
					alignOffset={4}
				>
					<Popover.Popup className="overflow-hidden rounded">
						<Popover.Arrow className="-right-1">
							<span className="block h-0 w-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-brand-600" />
						</Popover.Arrow>
						<ul className="max-h-96 overflow-y-auto border border-b-0">
							{Array.from({ length: 2 }).map((_, i) => (
								<li key={`${_}`} className="w-64 border-b last:border-b-0">
									<button
										type="button"
										className="grid w-full grid-cols-[auto,1fr] items-center gap-2 px-4 py-2 text-left hover:bg-yellow-50"
									>
										<img
											className="aspect-square w-8"
											src="https://placehold.jp/48x48.png"
											alt=""
										/>
										<span className="grid">
											<span className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm">
												{"サンプル".repeat(i + 1)}
											</span>
											<span className="overflow-hidden overflow-ellipsis whitespace-nowrap text-2xs">{`${"sample".repeat(i + 1)}.backlog.com`}</span>
										</span>
									</button>
								</li>
							))}
						</ul>
						<Popover.Title className="grid h-10 items-center bg-brand-600 px-4 font-bold text-sm text-white">
							スペース
						</Popover.Title>
					</Popover.Popup>
				</Popover.Positioner>
			</Popover.Portal>
		</Popover.Root>
	);
};
