export type EnquiryItemType =
	| "product"
	| "service"
	| "surveillance"
	| "fire-safety";

export interface EnquiryItem {
	key: string;
	type: EnquiryItemType;

	name: string;
	description: string;
	image: string;
	href: string;

	note?: string;
}

export interface EnquiryState {
	items: EnquiryItem[];
	hydrated: boolean;
}
