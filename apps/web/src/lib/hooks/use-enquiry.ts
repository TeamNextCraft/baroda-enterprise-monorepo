import { useSelector } from "@tanstack/react-store";
import { enquiryStore } from "../enquiry/enquiry-store";

export function useEnquiry() {
	const items = useSelector(enquiryStore, (state) => state.items);

	const hydrated = useSelector(enquiryStore, (state) => state.hydrated);

	return {
		items,
		count: items.length,
		hydrated,
	};
}
