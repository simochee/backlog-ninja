import { FormInput } from "@/components/FormInput";
import { Form } from "react-aria-components";
import { browser } from "wxt/browser";

export const OptionsApp = () => {
	return (
		<div className="px-4 py-5">
			<Form>
				<FormInput
					label={browser.i18n.getMessage("backlogDomain")}
					pattern="[a-z\-]+\.backlog\.(?:jp|com)"
					isRequired
					description={browser.i18n.getMessage("backlogDomainDescription")}
				/>
				<FormInput
					label={browser.i18n.getMessage("backlogAccessToken")}
					isRequired
				/>
			</Form>
		</div>
	);
};
