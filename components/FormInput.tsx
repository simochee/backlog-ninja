import { ExclamationCircleIcon } from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import {
	FieldError,
	Input,
	Label,
	Text,
	TextField,
} from "react-aria-components";

type Props = React.ComponentProps<typeof TextField> & {
	label: string;
	description?: string;
};

export const FormInput = ({ label, description, ...props }: Props) => {
	return (
		<TextField className="grid gap-y-1" {...props}>
			<Label className="text-zinc-600 dark:text-zinc-400">{label}</Label>
			<Input
				className={({ isInvalid }) =>
					clsx(
						"rounded border px-3 py-2 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100",
						isInvalid
							? "border-red-600 dark:border-red-400"
							: "border-zinc-300 dark:border-zinc-600",
					)
				}
			/>
			{description && (
				<Text slot="description" className="text-xs text-zinc-500">
					{description}
				</Text>
			)}
			<FieldError className="text-red-600 text-xs dark:text-red-400">
				{(values) =>
					values.validationErrors.map((error) => (
						<span className="flex items-start gap-x-1 leading-4">
							<ExclamationCircleIcon width={16} height={16} />
							{error}
						</span>
					))
				}
			</FieldError>
		</TextField>
	);
};
