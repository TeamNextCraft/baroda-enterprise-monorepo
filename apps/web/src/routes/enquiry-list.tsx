import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowLeft,
	ArrowRight,
	ClipboardList,
	ExternalLink,
	PackageOpen,
	Trash2,
} from "lucide-react";
import { useEffect } from "react";

import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { Separator } from "#/components/ui/separator";
import { Textarea } from "#/components/ui/textarea";
import {
	clearEnquiry,
	hydrateEnquiryList,
	removeFromEnquiry,
	updateEnquiryNote,
} from "#/lib/enquiry/enquiry-store";
import type { EnquiryItemType } from "#/lib/enquiry/enquiry-types";
import { useEnquiry } from "#/lib/hooks/use-enquiry";

export const Route = createFileRoute("/enquiry-list")({
	component: EnquiryListPage,
});

const itemTypeLabels: Record<EnquiryItemType, string> = {
	product: "Product",
	service: "IT Service",
	surveillance: "Surveillance",
	"fire-safety": "Fire Safety",
};

function EnquiryListPage() {
	const { items, count, hydrated } = useEnquiry();

	useEffect(() => {
		hydrateEnquiryList();
	}, []);

	function handleClearList() {
		if (typeof window === "undefined") return;

		const confirmed = window.confirm(
			"Remove all products and services from your enquiry list?",
		);

		if (confirmed) clearEnquiry();
	}

	if (!hydrated) {
		return (
			<main className="page-wrap px-4 py-12 sm:py-16">
				<div className="mx-auto max-w-5xl animate-pulse space-y-6">
					<div className="h-4 w-32 rounded bg-muted" />
					<div className="h-10 w-72 max-w-full rounded bg-muted" />
					<div className="h-5 w-full max-w-xl rounded bg-muted" />
					<div className="grid gap-6 lg:grid-cols-[1fr_300px]">
						<div className="h-64 rounded-xl bg-muted" />
						<div className="h-56 rounded-xl bg-muted" />
					</div>
				</div>
			</main>
		);
	}

	return (
		<main className="pb-16">
			<section className="page-wrap px-4 pt-10 sm:pt-14">
				<div className="mx-auto max-w-5xl">
					<Link
						to="/"
						className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
					>
						<ArrowLeft className="h-4 w-4" />
						Continue browsing
					</Link>

					<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<Badge variant="secondary" className="mb-3 gap-2 px-3 py-1">
								<ClipboardList className="h-3.5 w-3.5" />
								Your project shortlist
							</Badge>
							<h1 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
								Your Enquiry List
							</h1>
							<p className="mt-3 max-w-2xl text-sm leading-6 text-(--ink-soft) sm:text-base">
								Bring your product and service requirements together in one
								place. Review your selections, add a few details, and send one
								enquiry to Baroda Enterprise.
							</p>
						</div>

						{count > 0 && (
							<div className="flex items-center gap-3">
								<Badge variant="outline" className="px-3 py-1.5 text-sm">
									{count} {count === 1 ? "item" : "items"}
								</Badge>
								<Button
									variant="ghost"
									size="sm"
									className="text-muted-foreground hover:text-destructive"
									onClick={handleClearList}
								>
									<Trash2 className="mr-2 h-4 w-4" />
									Clear list
								</Button>
							</div>
						)}
					</div>

					{items.length === 0 ? (
						<EmptyEnquiryList />
					) : (
						<div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
							<div className="space-y-4">
								{items.map((item, index) => (
									<EnquiryItemCard key={item.key} item={item} index={index} />
								))}

								<div className="flex flex-wrap items-center justify-between gap-3 pt-2">
									<Button asChild variant="outline">
										<Link to="/">
											<ArrowLeft className="mr-2 h-4 w-4" />
											Add more items
										</Link>
									</Button>
									<Button asChild>
										<Link to="/contact-us">
											Continue to enquiry form
											<ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									</Button>
								</div>
							</div>

							<EnquirySummary count={count} />
						</div>
					)}
				</div>
			</section>
		</main>
	);
}

function EnquiryItemCard({
	item,
	index,
}: {
	item: {
		key: string;
		type: EnquiryItemType;
		name: string;
		description: string;
		image: string;
		href: string;
		note?: string;
	};
	index: number;
}) {
	return (
		<Card className="overflow-hidden border-(--line) shadow-sm">
			<CardContent className="p-4 sm:p-5">
				<div className="flex flex-col gap-4 sm:flex-row">
					<div className="relative h-28 w-full shrink-0 overflow-hidden rounded-lg bg-muted sm:h-28 sm:w-36">
						{item.image ? (
							<img
								src={item.image}
								alt={item.name}
								className="h-full w-full object-cover"
								loading="lazy"
							/>
						) : (
							<div className="flex h-full items-center justify-center text-muted-foreground">
								<PackageOpen className="h-8 w-8" />
							</div>
						)}
					</div>

					<div className="min-w-0 flex-1">
						<div className="flex flex-wrap items-center gap-2">
							<Badge variant="secondary">{itemTypeLabels[item.type]}</Badge>
							<span className="text-xs text-muted-foreground">
								Item {index + 1}
							</span>
						</div>

						<h2 className="mt-2 text-lg font-semibold text-(--ink)">
							{item.name}
						</h2>
						<p className="mt-1 text-sm leading-5 text-(--ink-soft)">
							{item.description}
						</p>

						<div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
							<Link
								to={item.href as never}
								className="inline-flex items-center text-xs font-semibold text-primary hover:underline"
							>
								View details
								<ExternalLink className="ml-1 h-3 w-3" />
							</Link>
							<Button
								variant="ghost"
								size="sm"
								className="h-auto px-0 py-0 text-xs text-muted-foreground hover:bg-transparent hover:text-destructive"
								onClick={() => removeFromEnquiry(item.key)}
							>
								<Trash2 className="mr-1.5 h-3.5 w-3.5" />
								Remove
							</Button>
						</div>
					</div>
				</div>

				<Separator className="my-4" />

				<div className="space-y-2">
					<label
						htmlFor={`enquiry-note-${item.key}`}
						className="text-sm font-medium text-(--ink)"
					>
						Specific requirements{" "}
						<span className="font-normal text-muted-foreground">
							(optional)
						</span>
					</label>
					<Textarea
						id={`enquiry-note-${item.key}`}
						value={item.note ?? ""}
						onChange={(event) =>
							updateEnquiryNote(item.key, event.target.value)
						}
						placeholder={`Add details about your ${item.name.toLowerCase()} requirements...`}
						className="min-h-20 resize-y"
						maxLength={1000}
					/>
					<p className="text-right text-xs text-muted-foreground">
						{(item.note ?? "").length}/1000
					</p>
				</div>
			</CardContent>
		</Card>
	);
}

function EnquirySummary({ count }: { count: number }) {
	return (
		<Card className="border-(--line) shadow-sm lg:sticky lg:top-24">
			<CardHeader>
				<CardTitle className="text-lg">Enquiry summary</CardTitle>
				<CardDescription>
					A quick overview of the items you want to discuss.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex items-center justify-between text-sm">
					<span className="text-muted-foreground">Selected items</span>
					<span className="font-semibold text-(--ink)">{count}</span>
				</div>

				<Separator className="my-4" />

				<div className="rounded-lg bg-muted/60 p-3">
					<p className="text-sm font-medium text-(--ink)">
						No payment required
					</p>
					<p className="mt-1 text-xs leading-5 text-muted-foreground">
						This is an enquiry list, not a shopping cart. Baroda Enterprise will
						review your requirements and contact you to discuss the right
						solution and quotation.
					</p>
				</div>

				<Button asChild className="mt-5 w-full">
					<Link to="/contact-us">
						Continue to enquiry form
						<ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</Button>
				<p className="mt-3 text-center text-xs text-muted-foreground">
					Your list stays saved in this browser while you continue.
				</p>
			</CardContent>
		</Card>
	);
}

function EmptyEnquiryList() {
	return (
		<Card className="border-dashed shadow-none">
			<CardContent className="flex flex-col items-center px-6 py-14 text-center sm:py-20">
				<div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
					<ClipboardList className="h-8 w-8" />
				</div>
				<h2 className="text-xl font-semibold text-(--ink)">
					Your enquiry list is empty
				</h2>
				<p className="mt-2 max-w-md text-sm leading-6 text-(--ink-soft)">
					Explore our products and services, then add the items you would like
					to discuss. You can combine IT, surveillance and fire safety
					requirements in one enquiry.
				</p>
				<Button asChild className="mt-6">
					<Link to="/">
						Explore products and services
						<ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</Button>
			</CardContent>
		</Card>
	);
}
