import { Check, Plus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "#/components/ui/button";
import { addToEnquiry } from "#/lib/enquiry/enquiry-store";
import type { EnquiryItem } from "#/lib/enquiry/enquiry-types";
import { useEnquiry } from "#/lib/hooks/use-enquiry";

interface Props {
	item: EnquiryItem;
}

export function AddToEnquiryButton({ item }: Props) {
	const { items, hydrated } = useEnquiry();

	const isAdded = items.some((existing) => existing.key === item.key);

	function handleAdd() {
		if (!hydrated) return;

		if (isAdded) {
			toast.info("This item is already in your enquiry list.");
			return;
		}

		addToEnquiry(item);
		toast.success(`${item.name} added to your enquiry list.`);
	}

	return (
		<Button
			variant={isAdded ? "secondary" : "default"}
			disabled={!hydrated}
			onClick={handleAdd}
		>
			{isAdded ? (
				<>
					<Check className="mr-2 h-4 w-4" />
					Added to Enquiry
				</>
			) : (
				<>
					<Plus className="mr-2 h-4 w-4" />
					Add to Enquiry
				</>
			)}
		</Button>
	);
}
