import { FaCog, FaProjectDiagram, FaTasks } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { TooltipButton } from "./ToolipButton";

type Props = {
	children: React.ReactNode;
};

const PopupLayout = ({ children }: Props) => {
	return (
		<div className="grid h-popup w-popup grid-cols-[1fr,auto]">
			<div>{children}</div>
			<div className="flex flex-col gap-1 bg-brand-100 px-2 py-4">
				<nav className="grid gap-2">
					<TooltipButton tooltip="お知らせ" active>
						<MdNotifications />
					</TooltipButton>
					<TooltipButton tooltip="プロジェクト">
						<FaProjectDiagram />
					</TooltipButton>
					<TooltipButton tooltip="課題">
						<FaTasks />
					</TooltipButton>
					<TooltipButton tooltip="Wiki">
						<TiDocumentText />
					</TooltipButton>
				</nav>
				<div className="mt-auto grid gap-4">
					<TooltipButton tooltip="スペースの切り替え">
						<img src="https://placehold.jp/48x48.png" alt="" />
					</TooltipButton>
					<TooltipButton tooltip="設定">
						<FaCog />
					</TooltipButton>
				</div>
			</div>
		</div>
	);
};

export default PopupLayout;
