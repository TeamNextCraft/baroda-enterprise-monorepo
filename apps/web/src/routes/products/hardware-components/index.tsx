import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	BadgeCheck,
	BatteryCharging,
	Building2,
	Cable,
	CheckCircle2,
	ChevronRight,
	Cpu,
	Database,
	Factory,
	Laptop,
	Monitor,
	Network,
	PackageCheck,
	Printer,
	Router,
	Server,
	ShieldCheck,
	Wrench,
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

export const Route = createFileRoute("/products/hardware-components/")({
	component: HardwareComponentsPage,
});

const hardwareCategories = [
	{
		icon: Laptop,
		title: "Desktops, laptops & workstations",
		description:
			"Explore computing devices for everyday office work, specialist applications and demanding workloads.",
		points: [
			"Business desktops and laptops",
			"Workstations for specialised tasks",
			"Device specifications based on usage",
		],
	},
	{
		icon: Server,
		title: "Servers & storage",
		description:
			"Review server and storage hardware requirements for business applications, shared data and infrastructure.",
		points: [
			"Tower and rack server options",
			"NAS and storage solutions",
			"Capacity and scalability considerations",
		],
	},
	{
		icon: Router,
		title: "Networking components",
		description:
			"Plan the network hardware needed to connect users, devices and locations across your organisation.",
		points: [
			"Routers and network switches",
			"Wireless access points",
			"Network adapters and connectivity components",
		],
	},
	{
		icon: Cpu,
		title: "Computer components & upgrades",
		description:
			"Identify compatible components for new builds, replacement requirements and supported device upgrades.",
		points: [
			"Processors, memory and motherboards",
			"Internal storage and expansion components",
			"Compatibility checks for supported systems",
		],
	},
	{
		icon: Monitor,
		title: "Displays & peripherals",
		description:
			"Equip workspaces with the displays and accessories employees need for day-to-day productivity.",
		points: [
			"Business monitors and displays",
			"Keyboards, mice and docking accessories",
			"Printers, scanners and other peripherals",
		],
	},
	{
		icon: BatteryCharging,
		title: "Power & connectivity accessories",
		description:
			"Consider supporting hardware that helps keep devices powered, connected and ready for use.",
		points: [
			"UPS and backup power options",
			"Cables, adapters and connectivity accessories",
			"Power and accessory requirements by device",
		],
	},
];

const procurementSteps = [
	{
		icon: Wrench,
		title: "Understand the requirement",
		description:
			"Discuss the work the hardware needs to support, the number of users and devices, and any existing infrastructure or compatibility constraints.",
	},
	{
		icon: Cpu,
		title: "Review suitable specifications",
		description:
			"Compare relevant specifications such as processor, memory, storage, connectivity, capacity and expected workload.",
	},
	{
		icon: PackageCheck,
		title: "Confirm the quotation",
		description:
			"Review the proposed make and model, quantity, availability, warranty information and commercial terms before placing an order.",
	},
	{
		icon: ShieldCheck,
		title: "Plan delivery and support",
		description:
			"Discuss delivery, configuration, deployment or after-sales support requirements as part of the confirmed project scope.",
	},
];

const buyingConsiderations = [
	{
		icon: CheckCircle2,
		title: "Choose for the workload",
		description:
			"Match device specifications to the applications, number of users and performance requirements—not just the model name.",
	},
	{
		icon: Cable,
		title: "Check compatibility",
		description:
			"Consider ports, network standards, operating environment, existing equipment and required accessories before purchasing.",
	},
	{
		icon: Database,
		title: "Plan for future needs",
		description:
			"Allow for expected growth, storage capacity, expansion options and the lifecycle of the equipment.",
	},
	{
		icon: BadgeCheck,
		title: "Review warranty details",
		description:
			"Confirm warranty coverage, service conditions, included accessories and support arrangements for the selected product.",
	},
];

const customerEnvironments = [
	{
		icon: Building2,
		title: "Offices & growing businesses",
		description:
			"Equip teams with business computers, displays, peripherals and network hardware as your organisation grows.",
	},
	{
		icon: Factory,
		title: "Industrial organisations",
		description:
			"Review hardware requirements for office teams, operational departments, stores and business infrastructure.",
	},
	{
		icon: Network,
		title: "Multi-location organisations",
		description:
			"Coordinate device and network component requirements across branches, sites and distributed teams.",
	},
];

const faqs = [
	{
		question: "What types of hardware can I enquire about?",
		answer:
			"You can enquire about business desktops, laptops, workstations, servers, storage, networking components, computer upgrades, displays, peripherals, UPS options and related accessories. Share your requirement so the team can confirm which products and models are currently available.",
	},
	{
		question: "Can you recommend hardware for my business?",
		answer:
			"You can share the applications you use, the number of users, the type of work being performed and your preferred budget range. The team can discuss suitable specifications and available options based on the information provided.",
	},
	{
		question: "Do you supply specific brands and models?",
		answer:
			"Brand, model and stock availability should be confirmed for each enquiry. Mention your preferred manufacturer or product reference when requesting a quotation, and the team can check the available options.",
	},
	{
		question: "Can you help check compatibility with our existing systems?",
		answer:
			"Share the make and model of your existing equipment, its specifications and the component or accessory you want to add. Compatibility can then be reviewed for the specific devices and intended configuration.",
	},
	{
		question: "Do you provide installation or configuration?",
		answer:
			"Configuration, installation and deployment support can be discussed when you submit your requirement. The team should confirm which activities are available and include the agreed scope in the quotation.",
	},
	{
		question: "What information should I provide to get a quotation?",
		answer:
			"Include the hardware type, quantity, intended use, preferred specifications or model, delivery location and any compatibility or support requirements. A target budget and expected purchase timeline can also help narrow down suitable options.",
	},
];

function HardwareComponentsPage() {
	return (
		<main className="pb-20">
			{/* Hero */}
			<section className="page-wrap pt-8 sm:pt-12">
				<div className="relative isolate overflow-hidden rounded-3xl border border-(--line) bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.16),transparent_42%),linear-gradient(135deg,var(--header-bg),var(--background))] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
					<div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-72 w-72 rounded-full border border-sky-500/15" />
					<div className="pointer-events-none absolute -right-5 -top-9 -z-10 h-52 w-52 rounded-full border border-sky-500/15" />

					<div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
						<div>
							<Badge
								variant="outline"
								className="mb-5 gap-2 border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sky-700 dark:text-sky-300"
							>
								<Cpu className="h-3.5 w-3.5" />
								Products / Hardware Components
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								The right hardware to keep your business moving.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Explore business computing devices, servers, storage, networking
								components and workplace accessories. Start with what your team
								needs to do, then identify hardware specifications that fit your
								environment and plans for growth.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Request a Quote <ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#hardware-categories">Explore Hardware</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-primary" />
									Business-focused hardware selection
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-primary" />
									Specifications matched to requirements
								</span>
							</div>
						</div>

						{/* Hardware overview card */}
						<div className="relative mx-auto w-full max-w-lg">
							<div className="absolute -inset-5 rounded-[2rem] bg-sky-500/10 blur-2xl" />
							<div className="relative rounded-3xl border border-(--line) bg-card/95 p-5 shadow-2xl backdrop-blur sm:p-7">
								<div className="flex items-center justify-between border-b border-(--line) pb-4">
									<div>
										<p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
											Hardware overview
										</p>
										<p className="mt-1 text-lg font-semibold text-(--ink)">
											Build your setup
										</p>
									</div>
									<div className="rounded-2xl bg-sky-500/10 p-3 text-sky-600 dark:text-sky-300">
										<Monitor className="h-7 w-7" />
									</div>
								</div>

								<div className="my-6 grid grid-cols-2 gap-3">
									{[
										{
											icon: Laptop,
											label: "Computing",
											detail: "PCs & workstations",
										},
										{
											icon: Server,
											label: "Infrastructure",
											detail: "Servers & storage",
										},
										{
											icon: Router,
											label: "Networking",
											detail: "Connect your devices",
										},
										{
											icon: Printer,
											label: "Peripherals",
											detail: "Workspace essentials",
										},
									].map((item) => {
										const Icon = item.icon;
										return (
											<div
												key={item.label}
												className="rounded-2xl border border-(--line) bg-muted/30 p-4"
											>
												<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
													<Icon className="h-5 w-5" />
												</div>
												<p className="text-sm font-semibold text-(--ink)">
													{item.label}
												</p>
												<p className="mt-1 text-xs text-muted-foreground">
													{item.detail}
												</p>
											</div>
										);
									})}
								</div>

								<div className="rounded-xl bg-muted/50 p-4">
									<div className="flex items-center gap-3">
										<div className="rounded-xl bg-primary/10 p-2 text-primary">
											<CheckCircle2 className="h-5 w-5" />
										</div>
										<div>
											<p className="text-xs text-muted-foreground">
												Start with your requirements
											</p>
											<p className="text-sm font-semibold text-(--ink)">
												Compare specifications and compatibility
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-(--line) bg-card p-4 shadow-xl sm:flex">
								<div className="rounded-xl bg-primary/10 p-2 text-primary">
									<PackageCheck className="h-5 w-5" />
								</div>
								<div>
									<p className="text-xs text-muted-foreground">
										Plan before procurement
									</p>
									<p className="text-sm font-semibold text-(--ink)">
										Hardware for your needs
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
							Hardware selected around your environment
						</p>
						<h2 className="mt-2 max-w-3xl text-2xl font-bold tracking-tight text-(--ink) sm:text-3xl">
							Good hardware decisions start with the job each device needs to
							do.
						</h2>
					</div>
					<p className="text-sm leading-7 text-(--ink-soft)">
						Different teams need different levels of computing performance,
						storage, connectivity and reliability. Understanding the workload
						helps narrow down the specifications that matter.
					</p>
					<p className="text-sm leading-7 text-(--ink-soft)">
						Existing equipment also matters. Ports, operating requirements,
						network standards and compatibility can affect which components or
						upgrades are suitable.
					</p>
					<p className="text-sm leading-7 text-(--ink-soft)">
						Tell Baroda Enterprise what you are planning to purchase or upgrade.
						Product availability, models, warranty and support options can be
						confirmed for your specific enquiry.
					</p>
				</div>
			</section>

			{/* Hardware categories */}
			<section className="page-wrap mt-20" id="hardware-categories">
				<div className="max-w-2xl">
					<Badge variant="secondary">Hardware categories</Badge>
					<h2 className="mt-4 text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Components and equipment for business technology.
					</h2>
					<p className="mt-4 leading-7 text-(--ink-soft)">
						Browse common hardware categories for business environments.
						Specific brands, models, configurations and stock availability
						should be confirmed with the Baroda Enterprise team.
					</p>
				</div>

				<div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
					{hardwareCategories.map((item) => {
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

			{/* Procurement process */}
			<section className="mt-20 bg-muted/40 py-16">
				<div className="page-wrap">
					<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
						<div>
							<Badge variant="outline">From requirement to procurement</Badge>
							<h2 className="mt-4 text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
								Make your next hardware purchase with a clear plan.
							</h2>
							<p className="mt-4 leading-7 text-(--ink-soft)">
								Whether you are equipping a new office, replacing devices or
								planning an infrastructure upgrade, a structured requirement
								review can make it easier to compare suitable options.
							</p>
							<Button asChild className="mt-7 gap-2">
								<Link to="/contact-us">
									Discuss Your Requirement <ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							{procurementSteps.map((step, index) => {
								const Icon = step.icon;
								return (
									<Card
										key={step.title}
										className={`border-(--line) bg-card ${index === 3 ? "sm:col-span-2" : ""}`}
									>
										<CardContent className="flex gap-4 p-5">
											<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
												<Icon className="h-5 w-5" />
											</div>
											<div>
												<h3 className="font-semibold text-(--ink)">
													{step.title}
												</h3>
												<p className="mt-1 text-sm leading-6 text-(--ink-soft)">
													{step.description}
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

			{/* Buying considerations */}
			<section className="page-wrap mt-20">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
						Before you choose
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Consider more than the device price.
					</h2>
					<p className="mt-4 leading-7 text-(--ink-soft)">
						Specifications, compatibility, warranty and future requirements all
						play a part in selecting hardware for your organisation.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
					{buyingConsiderations.map((item) => {
						const Icon = item.icon;
						return (
							<Card key={item.title} className="border-(--line)">
								<CardContent className="p-6">
									<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-(--ink)">
										<Icon className="h-6 w-6" />
									</div>
									<h3 className="mt-5 text-base font-semibold text-(--ink)">
										{item.title}
									</h3>
									<p className="mt-2 text-sm leading-6 text-(--ink-soft)">
										{item.description}
									</p>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</section>

			{/* Customer environments */}
			<section className="page-wrap mt-20">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
						Who we serve
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Hardware options for different business environments.
					</h2>
					<p className="mt-4 leading-7 text-(--ink-soft)">
						Start with the way your organisation works and the equipment your
						teams need to support it.
					</p>
				</div>

				<div className="mt-8 grid gap-5 md:grid-cols-3">
					{customerEnvironments.map((customer) => {
						const Icon = customer.icon;
						return (
							<Card key={customer.title} className="border-(--line)">
								<CardContent className="p-6">
									<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-(--ink)">
										<Icon className="h-6 w-6" />
									</div>
									<h3 className="mt-5 text-lg font-semibold text-(--ink)">
										{customer.title}
									</h3>
									<p className="mt-2 text-sm leading-6 text-(--ink-soft)">
										{customer.description}
									</p>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</section>

			{/* Enquiry checklist */}
			<section className="page-wrap mt-20">
				<div className="grid gap-8 overflow-hidden rounded-3xl border border-(--line) bg-card p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
					<div>
						<Badge variant="secondary">Prepare your enquiry</Badge>
						<h2 className="mt-4 text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Tell us a little about the hardware you need.
						</h2>
						<p className="mt-4 leading-7 text-(--ink-soft)">
							You do not need to know every technical specification. Share the
							task, quantity and any existing equipment details you have so the
							team can understand your requirement.
						</p>
					</div>

					<div className="grid gap-3 sm:grid-cols-2">
						{[
							"Hardware category and intended use",
							"Required quantity and user count",
							"Preferred brand, model or specifications",
							"Existing devices or compatibility needs",
							"Delivery location and expected timeline",
							"Warranty, configuration or support needs",
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
							Questions about hardware and components?
						</h2>
						<p className="mt-4 leading-7 text-(--ink-soft)">
							Find answers to common questions before discussing your hardware
							requirements with our team.
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
							<div className="flex items-center gap-2 text-sm font-semibold text-sky-200">
								<BadgeCheck className="h-4 w-4" /> Let’s plan your hardware
								needs
							</div>
							<h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
								Looking for hardware for your business?
							</h2>
							<p className="mt-4 leading-7 text-slate-200">
								Tell us what you need to equip, upgrade or connect. Share the
								quantity, intended use and any preferred specifications, and
								start a conversation with Baroda Enterprise.
							</p>
						</div>
						<div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
							<Button
								asChild
								size="lg"
								className="bg-sky-500 text-white hover:bg-sky-600"
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
								<a href="#hardware-categories">View Hardware Categories</a>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
