import { AppButton } from "@/components/AppButton";
import { FormAuthorization } from "@/components/FormAuthorization";
import { FormInput } from "@/components/FormInput";
import { Form, Heading } from "react-aria-components";
import { browser } from "wxt/browser";

export const NewSpace = () => {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);

		const domain = data.get("domain") as string;
		const accessToken = data.get("accessToken") as string | null;
	};

	return (
		<div className="px-4 py-5 grid gap-5">
			<Heading className="text-lg dark:text-zinc-100">
				新しいスペースを接続する
			</Heading>
			<Form className="grid gap-y-5" onSubmit={handleSubmit}>
				<FormInput
					label={browser.i18n.getMessage("backlogDomain")}
					name="domain"
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