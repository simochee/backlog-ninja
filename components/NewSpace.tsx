import { AppButton } from "@/components/AppButton";
import { FormAuthorization } from "@/components/FormAuthorization";
import { FormInput } from "@/components/FormInput";
import { appendToken } from "@/utils/token";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { Form, Heading } from "react-aria-components";
import { browser } from "wxt/browser";
import { AppLink } from "./AppLink";

export const NewSpace = () => {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);

		const host = data.get("host") as string;
		const apiKey = data.get("apiKey") as string | null;

		await appendToken(host, apiKey);
	};

	return (
		<div className="px-4 py-5 grid gap-5">
			<div className="grid gap-2 place-items-start">
				<AppLink to="/" icon={ChevronLeftIcon}>
					破棄して戻る
				</AppLink>
				<Heading className="text-lg dark:text-zinc-100">
					新しいスペースを接続する
				</Heading>
			</div>
			<Form className="grid gap-y-5" onSubmit={handleSubmit}>
				<FormInput
					label={browser.i18n.getMessage("backlogDomain")}
					name="host"
					pattern="[a-z\-]+\.backlog\.(?:jp|com)"
					isRequired
					description={browser.i18n.getMessage("backlogDomainDescription")}
				/>
				<FormAuthorization />
				<div className="flex justify-end">
					<AppButton type="submit" variant="fill" isDisabled={false}>
						保存
					</AppButton>
				</div>
			</Form>
		</div>
	);
};
