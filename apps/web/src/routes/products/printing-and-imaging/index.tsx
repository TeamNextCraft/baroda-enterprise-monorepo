import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	BadgeCheck,
	Building2,
	CheckCircle2,
	ChevronRight,
	Factory,
	FileImage,
	Headset,
	Layers3,
	Printer,
	ScanLine,
	Settings2,
	ShoppingBag,
	Workflow,
} from "lucide-react";

import { Button } from "#/components/ui/button";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/products/printing-and-imaging/")({
	component: PrintingAndImagingPage,
});

const solutionAreas = [
	{
		icon: Printer,
		title: "Office printers",
		description:
			"Printing options for everyday office documents, team workgroups and business-critical output.",
		points: [
			"Desktop and workgroup printing",
			"Colour and monochrome options",
			"Print-volume planning",
		],
	},
	{
		icon: Layers3,
		title: "Multifunction systems",
		description:
			"Combine printing, copying and scanning in a practical document workflow for your workplace.",
		points: [
			"Print, copy and scan workflows",
			"Shared departmental devices",
			"Centralised device placement",
		],
	},
	{
		icon: ScanLine,
		title: "Scanning & digitisation",
		description:
			"Make paper-based information easier to organise, retrieve and share across your teams.",
		points: [
			"Document scanning",
			"Digital document workflows",
			"Support for archiving processes",
		],
	},
	{
		icon: FileImage,
		title: "Specialised imaging",
		description:
			"Explore imaging and output options for presentations, plans, graphics and other specialist needs.",
		points: [
			"Large-format output options",
			"Graphic and image printing",
			"Use-case based recommendations",
		],
	},
];

const serviceBenefits = [
	{
		icon: Settings2,
		title: "Requirement-based selection",
		description:
			"Recommendations based on your print volume, document types, available space and workflow needs.",
	},
	{
		icon: Workflow,
		title: "Workflow-focused setup",
		description:
			"Plan device placement and document workflows around the way your teams work.",
	},
	{
		icon: Headset,
		title: "Ongoing support",
		description:
			"Discuss installation, operating guidance, supplies and support requirements with our team.",
	},
];

const industries = [
	{
		icon: Building2,
		title: "Offices & businesses",
		description:
			"Everyday printing, copying and document sharing for teams of different sizes.",
	},
	{
		icon: Factory,
		title: "Industrial organisations",
		description:
			"Printing and scanning for operational documents, reports and internal processes.",
	},
	{
		icon: ShoppingBag,
		title: "Retail & service businesses",
		description:
			"Practical output solutions for invoices, forms, records and customer-facing needs.",
	},
];

const faqs = [
	{
		question: "Can you help us choose the right printer for our office?",
		answer:
			"Yes. Share your approximate monthly print volume, colour requirements, paper sizes and number of users. The team can use these details to discuss suitable options.",
	},
	{
		question: "Do you provide multifunction printing and scanning solutions?",
		answer:
			"You can enquire about multifunction systems that combine printing, copying and scanning. Final recommendations depend on your workflow and the products available through Baroda Enterprise.",
	},
	{
		question: "Can you recommend a solution for a large or multi-floor office?",
		answer:
			"Yes. Share your office layout, team size and document workflow requirements so the team can discuss device placement and a suitable setup.",
	},
	{
		question: "How can I request pricing or a product demonstration?",
		answer:
			"Use the Request a Quote button or contact Baroda Enterprise directly. Include your preferred device type, expected usage and location so the team can follow up with relevant details.",
	},
];

function PrintingAndImagingPage() {
	return (
		<main className="pb-20">
			{/* Hero */}
			<section className="page-wrap pt-8 sm:pt-12">
				<div className="relative isolate overflow-hidden rounded-3xl border border-(--line) bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.16),transparent_42%),linear-gradient(135deg,var(--header-bg),var(--background))] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
					<div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-72 w-72 rounded-full border border-orange-500/15" />
					<div className="pointer-events-none absolute -right-5 -top-9 -z-10 h-52 w-52 rounded-full border border-orange-500/15" />

					<div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
						<div>
							<Badge
								variant="outline"
								className="mb-5 gap-2 border-orange-500/30 bg-orange-500/10 px-3 py-1 text-orange-700 dark:text-orange-300"
							>
								<Printer className="h-3.5 w-3.5" />
								Products / Printing & Imaging
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								Printing and imaging solutions for the way your business works.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Find practical printing, copying and scanning options for your
								workplace. Baroda Enterprise can help you explore suitable
								equipment and document workflows based on your business needs.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Request a Quote <ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#solutions">Explore Solutions</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-primary" />{" "}
									Business-focused recommendations
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-primary" /> Printing and
									scanning options
								</span>
							</div>
						</div>

						{/* Decorative product showcase */}
						<div className="relative mx-auto w-full max-w-lg">
							<div className="absolute -inset-5 rounded-[2rem] bg-orange-500/10 blur-2xl" />
							<div className="relative rounded-3xl border border-(--line) bg-card/90 p-5 shadow-2xl backdrop-blur sm:p-7">
								<div className="flex items-center justify-between border-b border-(--line) pb-4">
									<div>
										<p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
											Workplace essentials
										</p>
										<p className="mt-1 text-lg font-semibold text-(--ink)">
											Print. Scan. Share.
										</p>
									</div>
									<div className="rounded-2xl bg-orange-500/10 p-3 text-orange-600 dark:text-orange-300">
										<Printer className="h-7 w-7" />
									</div>
								</div>

								<div className="my-6 rounded-2xl border border-(--line) bg-muted/40 p-5">
									<div className="mx-auto flex max-w-[270px] flex-col items-center">
										<div className="flex h-5 w-40 items-center justify-center rounded-t-xl bg-slate-500/70">
											<span className="h-1 w-12 rounded-full bg-slate-200/80" />
										</div>
										<div className="w-full rounded-xl border border-slate-400/30 bg-gradient-to-br from-slate-200 to-slate-400 p-4 shadow-lg dark:from-slate-600 dark:to-slate-800">
											<div className="mx-auto h-12 w-24 rounded-md border border-slate-500/30 bg-slate-800/90 p-2">
												<div className="h-full rounded-sm bg-emerald-400/70" />
											</div>
											<div className="mt-4 flex items-center justify-between">
												<span className="h-1.5 w-16 rounded-full bg-slate-500/50" />
												<span className="h-2 w-2 rounded-full bg-emerald-500" />
											</div>
										</div>
										<div className="h-3 w-[88%] rounded-b-lg bg-slate-500/70" />
										<div className="h-2 w-[70%] rounded-b-lg bg-slate-400/60" />
									</div>
									<div className="mt-5 grid grid-cols-3 gap-2">
										{["Print", "Copy", "Scan"].map((label, index) => (
											<div
												key={label}
												className="rounded-xl border border-(--line) bg-card px-2 py-3 text-center"
											>
												{index === 0 ? (
													<Printer className="mx-auto h-4 w-4 text-primary" />
												) : index === 1 ? (
													<Layers3 className="mx-auto h-4 w-4 text-primary" />
												) : (
													<ScanLine className="mx-auto h-4 w-4 text-primary" />
												)}
												<span className="mt-1 block text-xs font-medium text-(--ink)">
													{label}
												</span>
											</div>
										))}
									</div>
								</div>

								<div className="grid grid-cols-2 gap-3">
									<div className="rounded-xl bg-muted/50 p-3">
										<p className="text-xs text-muted-foreground">
											For your team
										</p>
										<p className="mt-1 text-sm font-semibold text-(--ink)">
											Office workflows
										</p>
									</div>
									<div className="rounded-xl bg-muted/50 p-3">
										<p className="text-xs text-muted-foreground">
											For your documents
										</p>
										<p className="mt-1 text-sm font-semibold text-(--ink)">
											Digital access
										</p>
									</div>
								</div>
							</div>
							<div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-(--line) bg-card p-4 shadow-xl sm:flex">
								<div className="rounded-xl bg-primary/10 p-2 text-primary">
									<ScanLine className="h-5 w-5" />
								</div>
								<div>
									<p className="text-xs text-muted-foreground">
										One connected workflow
									</p>
									<p className="text-sm font-semibold text-(--ink)">
										Paper to digital
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Intro strip */}
			<section className="page-wrap mt-12">
				<div className="grid gap-5 rounded-2xl border border-(--line) bg-card p-6 sm:grid-cols-3 sm:p-8">
					<div className="sm:col-span-3">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
							Designed around your requirements
						</p>
						<h2 className="mt-2 max-w-3xl text-2xl font-bold tracking-tight text-(--ink) sm:text-3xl">
							The right setup starts with understanding your document workflow.
						</h2>
					</div>
					<p className="text-sm leading-7 text-(--ink-soft)">
						Different teams have different printing needs. Consider print
						volume, document size, colour requirements and the number of users
						before selecting equipment.
					</p>
					<p className="text-sm leading-7 text-(--ink-soft)">
						A well-planned setup can make shared devices easier to access and
						help teams manage routine document tasks more consistently.
					</p>
					<p className="text-sm leading-7 text-(--ink-soft)">
						Talk to Baroda Enterprise about your requirements and get guidance
						on options that fit your workplace.
					</p>
				</div>
			</section>

			{/* Solution areas */}
			<section className="page-wrap mt-20" id="solutions">
				<div className="max-w-2xl">
					<Badge variant="secondary">What we offer</Badge>
					<h2 className="mt-4 text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Printing and imaging options for everyday work and specialised
						tasks.
					</h2>
					<p className="mt-4 leading-7 text-(--ink-soft)">
						Explore common solution areas. Product availability, specifications
						and supported brands can be confirmed with our team.
					</p>
				</div>

				<div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
					{solutionAreas.map((item) => {
						const Icon = item.icon;
						return (
							<Card
								key={item.title}
								className="group flex h-full flex-col border-(--line) transition-all hover:-translate-y-1 hover:shadow-lg"
							>
								<CardHeader>
									<div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
										<Icon className="h-6 w-6" />
									</div>
									<CardTitle className="text-lg">{item.title}</CardTitle>
									<CardDescription className="leading-6">
										{item.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="mt-auto">
									<ul className="space-y-2 border-t border-(--line) pt-4">
										{item.points.map((point) => (
											<li
												key={point}
												className="flex items-start gap-2 text-sm text-(--ink-soft)"
											>
												<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
												{point}
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</section>

			{/* Why work with us */}
			<section className="mt-20 bg-muted/40 py-16">
				<div className="page-wrap">
					<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
						<div>
							<Badge variant="outline">A practical approach</Badge>
							<h2 className="mt-4 text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
								More than choosing a printer.
							</h2>
							<p className="mt-4 leading-7 text-(--ink-soft)">
								The equipment is only one part of an effective printing setup.
								Think about where devices will be placed, who needs access and
								how documents move through your organisation.
							</p>
							<Button asChild className="mt-7 gap-2">
								<Link to="/contact-us">
									Discuss Your Requirements <ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							{serviceBenefits.map((benefit, index) => {
								const Icon = benefit.icon;
								return (
									<Card
										key={benefit.title}
										className={`border-(--line) bg-card ${index === 2 ? "sm:col-span-2" : ""}`}
									>
										<CardContent className="flex gap-4 p-5">
											<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
												<Icon className="h-5 w-5" />
											</div>
											<div>
												<h3 className="font-semibold text-(--ink)">
													{benefit.title}
												</h3>
												<p className="mt-1 text-sm leading-6 text-(--ink-soft)">
													{benefit.description}
												</p>
											</div>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			{/* Industries */}
			<section className="page-wrap mt-20">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
						Who can benefit
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Solutions for different working environments.
					</h2>
					<p className="mt-4 leading-7 text-(--ink-soft)">
						From a small office to a multi-team facility, start with the tasks
						your people need to complete every day.
					</p>
				</div>

				<div className="mt-8 grid gap-5 md:grid-cols-3">
					{industries.map((industry) => {
						const Icon = industry.icon;
						return (
							<Card key={industry.title} className="border-(--line)">
								<CardContent className="p-6">
									<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-(--ink)">
										<Icon className="h-6 w-6" />
									</div>
									<h3 className="mt-5 text-lg font-semibold text-(--ink)">
										{industry.title}
									</h3>
									<p className="mt-2 text-sm leading-6 text-(--ink-soft)">
										{industry.description}
									</p>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</section>

			{/* Selection checklist */}
			<section className="page-wrap mt-20">
				<div className="grid gap-8 overflow-hidden rounded-3xl border border-(--line) bg-card p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
					<div>
						<Badge variant="secondary">Before you choose</Badge>
						<h2 className="mt-4 text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							A few details help us recommend the right option.
						</h2>
						<p className="mt-4 leading-7 text-(--ink-soft)">
							Share a little about your workplace and how you use printed
							documents. This helps narrow down the products and configuration
							worth considering.
						</p>
					</div>

					<div className="grid gap-3 sm:grid-cols-2">
						{[
							"Expected monthly print volume",
							"Colour or monochrome requirements",
							"Number of users or departments",
							"Paper sizes and document types",
							"Printing, copying and scanning needs",
							"Installation location and space",
						].map((item) => (
							<div
								key={item}
								className="flex items-start gap-3 rounded-xl bg-muted/60 p-4 text-sm text-(--ink)"
							>
								<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
								{item}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="page-wrap mt-20">
				<div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
					<div>
						<Badge variant="outline">FAQs</Badge>
						<h2 className="mt-4 text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Questions about printing and imaging?
						</h2>
						<p className="mt-4 leading-7 text-(--ink-soft)">
							Here are a few things to consider when planning a printing or
							scanning setup for your organisation.
						</p>
						<Button asChild variant="outline" className="mt-6 gap-2">
							<Link to="/contact-us">
								Ask Our Team <ChevronRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem key={faq.question} value={`faq-${index}`}>
								<AccordionTrigger className="text-left font-semibold text-(--ink)">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="leading-7 text-(--ink-soft)">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</section>

			{/* Final CTA */}
			<section className="page-wrap mt-20">
				<div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(115deg,#172b42,#263f59)] px-6 py-10 text-white sm:px-10 sm:py-14">
					<div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/10" />
					<div className="pointer-events-none absolute -right-4 -top-12 h-48 w-48 rounded-full border border-white/10" />
					<div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
						<div className="max-w-2xl">
							<div className="flex items-center gap-2 text-sm font-semibold text-orange-300">
								<BadgeCheck className="h-4 w-4" /> Let’s plan your setup
							</div>
							<h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
								Looking for the right printing solution for your business?
							</h2>
							<p className="mt-4 leading-7 text-slate-200">
								Tell us what you need to print, scan or manage. Our team can
								discuss suitable options for your workplace.
							</p>
						</div>
						<div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
							<Button
								asChild
								size="lg"
								className="bg-orange-500 text-white hover:bg-orange-600"
							>
								<Link to="/contact-us">
									Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
							>
								<a href="#solutions">View Solution Areas</a>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
