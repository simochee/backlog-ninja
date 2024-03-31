import clsx from "clsx";
import { useId } from "react";
import {
	Collection,
	Tab,
	TabList,
	TabPanel,
	Tabs,
} from "react-aria-components";
import { browser } from "wxt/browser";
import { FormInput } from "./FormInput";

const TAB_LIST_ITEMS = [
	{ id: "oauth2", label: browser.i18n.getMessage("authorizationOAuth2") },
	{ id: "pat", label: browser.i18n.getMessage("authorizationApiKey") },
] as const;

export const FormAuthorization = () => {
	const labelId = useId();

	return (
		<div className="grid gap-y-1">
			<p id={labelId} className="text-zinc-600 dark:text-zinc-400">
				{browser.i18n.getMessage("authorizationMethods")}
			</p>
			<Tabs aria-describedby={labelId}>
				<TabList className="flex flex-wrap gap-x-4 gap-y-2">
					<Collection items={TAB_LIST_ITEMS}>
						{({ id, label }) => (
							<Tab
								key={id}
								id={id}
								className="flex items-center gap-x-2 text-zinc-800 dark:text-zinc-100"
							>
								{(state) => (
									<>
										<span
											className={clsx(
												"block h-4 w-4 rounded-full",
												state.isSelected
													? "border-5 border-zinc-900 dark:border-zinc-100"
													: "border-2 border-zinc-600 dark:border-zinc-400",
											)}
										/>
										<span className="cursor-default">{label}</span>
									</>
								)}
							</Tab>
						)}
					</Collection>
				</TabList>
				<TabPanel id="oauth2">
					<div className="mt-1">
						<p className="text-xs text-zinc-500">
							{browser.i18n.getMessage("oauth2Description")}
						</p>
					</div>
				</TabPanel>
				<TabPanel id="pat">
					<div className="mt-5">
						<FormInput
							label={browser.i18n.getMessage("apiKey")}
							name="apiKey"
							description={browser.i18n.getMessage("apiKeyDescription")}
							isRequired
						/>
					</div>
				</TabPanel>
			</Tabs>
		</div>
	);
};
