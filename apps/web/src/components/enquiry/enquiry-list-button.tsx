import { Link } from "@tanstack/react-router";
import { ClipboardList } from "lucide-react";
import { Button } from "#/components/ui/button";
import { useEnquiry } from "#/lib/hooks/use-enquiry";

export function EnquiryListButton() {
	const { count, hydrated } = useEnquiry();

	return (
		<Button asChild variant="outline" className="relative">
			<Link to="/enquiry-list">
				<ClipboardList className="mr-2 h-4 w-4" />

				<span>My Enquiries</span>

				{hydrated && count > 0 && (
					<span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
						{count}
					</span>
				)}
			</Link>
		</Button>
	);
}
