import { createStore } from "@tanstack/react-store";
import type { EnquiryItem, EnquiryState } from "./enquiry-types";

const STORAGE_KEY = "baroda-enquiry-list:v1";

export const enquiryStore = createStore<EnquiryState>({
	items: [],
	hydrated: false,
});

let hydrationStarted = false;

function persistItems(items: EnquiryItem[]) {
	if (typeof window === "undefined") return;

	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
	} catch (error) {
		console.error("Unable to save enquiry list:", error);
	}
}

export function hydrateEnquiryList() {
	if (typeof window === "undefined" || hydrationStarted) return;

	hydrationStarted = true;

	let items: EnquiryItem[] = [];

	try {
		const stored = window.localStorage.getItem(STORAGE_KEY);

		if (stored) {
			const parsed: unknown = JSON.parse(stored);

			if (Array.isArray(parsed)) {
				items = parsed;
			}
		}
	} catch (error) {
		console.error("Unable to restore enquiry list:", error);
	}

	enquiryStore.setState((state) => ({
		...state,
		items,
		hydrated: true,
	}));
}

function updateItems(updater: (items: EnquiryItem[]) => EnquiryItem[]) {
	let nextItems: EnquiryItem[] = [];

	enquiryStore.setState((state) => {
		nextItems = updater(state.items);

		return {
			...state,
			items: nextItems,
		};
	});

	if (enquiryStore.state.hydrated) {
		persistItems(nextItems);
	}
}

export function addToEnquiry(item: EnquiryItem) {
	updateItems((items) => {
		const alreadyExists = items.some((existing) => existing.key === item.key);

		if (alreadyExists) return items;

		return [...items, item];
	});
}

export function removeFromEnquiry(key: string) {
	updateItems((items) => items.filter((item) => item.key !== key));
}

export function updateEnquiryNote(key: string, note: string) {
	updateItems((items) =>
		items.map((item) => (item.key === key ? { ...item, note } : item)),
	);
}

export function clearEnquiry() {
	updateItems(() => []);
}
