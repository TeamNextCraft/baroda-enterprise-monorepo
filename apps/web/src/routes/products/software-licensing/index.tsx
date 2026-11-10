import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	BadgeCheck,
	Building2,
	CalendarClock,
	CheckCircle2,
	ChevronRight,
	Cloud,
	Code2,
	Factory,
	FileCheck2,
	FileKey2,
	Headset,
	Laptop,
	LockKeyhole,
	MonitorCog,
	Network,
	PackageCheck,
	RefreshCw,
	ShieldCheck,
	Users,
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

export const Route = createFileRoute("/products/software-licensing/")({
	component: SoftwareLicensingPage,
});

const licensingAreas = [
	{
		icon: Laptop,
		title: "Operating system licences",
		description:
			"Explore operating system licensing options for business desktops, laptops and other supported devices.",
		points: [
			"Desktop and laptop operating systems",
			"New device and upgrade requirements",
			"Edition and usage considerations",
		],
	},
	{
		icon: Users,
		title: "Productivity & collaboration",
		description:
			"Licensing for the everyday tools teams use to create documents, communicate and work together.",
		points: [
			"Office and productivity applications",
			"Email and collaboration subscriptions",
			"User-based and device-based plans",
		],
	},
	{
		icon: ShieldCheck,
		title: "Security software",
		description:
			"Discuss software licensing needs for endpoint protection and other security tools in your environment.",
		points: [
			"Endpoint and device protection",
			"Security management platforms",
			"Coverage based on users and devices",
		],
	},
	{
		icon: Network,
		title: "Server & infrastructure software",
		description:
			"Review licensing requirements for business servers, infrastructure platforms and connected environments.",
		points: [
			"Server operating systems",
			"Infrastructure and network-related tools",
			"Deployment and access requirements",
		],
	},
	{
		icon: Code2,
		title: "Business & professional applications",
		description:
			"Find licensing options for the specialist applications your teams need for business operations.",
		points: [
			"Business and accounting applications",
			"Design and productivity tools",
			"Role-specific software requirements",
		],
	},
	{
		icon: Cloud,
		title: "Cloud software subscriptions",
		description:
			"Compare subscription-based options and plan renewals around the way your organisation works.",
		points: [
			"Cloud-based business applications",
			"Subscription and renewal planning",
			"User and service-level requirements",
		],
	},
];

const lifecycleServices = [
	{
		icon: FileCheck2,
		title: "Requirements assessment",
		description:
			"Understand the software, number of users or devices, deployment model and intended usage before selecting a licence.",
	},
	{
		icon: PackageCheck,
		title: "Licence sourcing & procurement",
		description:
			"Discuss suitable licensing options and procurement availability based on your requirements and the software publisher's terms.",
	},
	{
		icon: MonitorCog,
		title: "Deployment coordination",
		description:
			"Plan licence assignment, activation and setup coordination for the agreed software and deployment scope.",
	},
	{
		icon: CalendarClock,
		title: "Renewal planning",
		description:
			"Keep track of subscription periods and renewal dates so your team can review upcoming licensing needs in time.",
	},
];

const benefits = [
	{
		icon: FileKey2,
		title: "Understand what you are buying",
		description:
			"Review licence type, term, user or device limits and usage conditions before moving ahead.",
	},
	{
		icon: RefreshCw,
		title: "Plan renewals proactively",
		description:
			"Bring renewal dates and subscription requirements into view to support timely decisions.",
	},
	{
		icon: LockKeyhole,
		title: "Consider compliance requirements",
		description:
			"Organise licence records and understand the publisher terms that apply to your software usage.",
	},
	{
		icon: Headset,
		title: "Get help with the process",
		description:
			"Discuss selection, procurement and deployment coordination with the Baroda Enterprise team.",
	},
];

const customerTypes = [
	{
		icon: Building2,
		title: "Offices & growing businesses",
		description:
			"Plan software access for employees, departments and new starters as your organisation grows.",
	},
	{
		icon: Factory,
		title: "Industrial organisations",
		description:
			"Review software needs across office teams, operational departments and business infrastructure.",
	},
	{
		icon: Network,
		title: "Multi-location teams",
		description:
			"Coordinate requirements across branches, locations and distributed workforces.",
	},
];

const faqs = [
	{
		question:
			"What information do I need before requesting a software licence?",
		answer:
			"Share the software or task you need it for, the number of users or devices, your preferred deployment model and any current licence or subscription details. If you are unsure which product or plan is suitable, describe the work your team needs to do.",
	},
	{
		question: "Can you help with new licences and renewals?",
		answer:
			"You can enquire about new software licensing and renewal requirements. Availability, eligible plans, pricing and renewal options depend on the relevant publisher and the terms of the licence.",
	},
	{
		question:
			"Can you help us choose between user-based and device-based licensing?",
		answer:
			"The team can discuss the differences based on how many people use the software, which devices they use and the publisher's licensing terms. The correct option depends on the specific product and intended usage.",
	},
	{
		question: "Do you provide genuine software licences?",
		answer:
			"Tell us which software you need so the team can confirm the available procurement route, publisher, licence type and applicable documentation before you proceed. Do not rely on a quote until the product and licence terms have been confirmed.",
	},
	{
		question: "Can you assist with licence deployment and activation?",
		answer:
			"Deployment or activation coordination can be discussed as part of the project scope. The exact assistance available depends on the software, publisher requirements and access permissions.",
	},
	{
		question: "Can you review the licences our business already owns?",
		answer:
			"You can discuss your current software inventory and renewal schedule with the team. A review can help identify information to verify, such as assigned users, devices, licence terms and upcoming renewal dates; it is not a substitute for a formal publisher or legal compliance audit.",
	},
];

function SoftwareLicensingPage() {
	return (
		<main className="pb-20">
			{/* Hero */}
			<section className="page-wrap pt-8 sm:pt-12">
				<div className="relative isolate overflow-hidden rounded-3xl border border-(--line) bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.17),transparent_42%),linear-gradient(135deg,var(--header-bg),var(--background))] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
					<div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-72 w-72 rounded-full border border-blue-500/15" />
					<div className="pointer-events-none absolute -right-5 -top-9 -z-10 h-52 w-52 rounded-full border border-blue-500/15" />

					<div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
						<div>
							<Badge
								variant="outline"
								className="mb-5 gap-2 border-blue-500/30 bg-blue-500/10 px-3 py-1 text-blue-700 dark:text-blue-300"
							>
								<FileKey2 className="h-3.5 w-3.5" />
								Products / Software Licensing
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								Software licensing made clearer for your business.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Find licensing options for the software your organisation
								depends on. From understanding user and device requirements to
								planning procurement, deployment and renewals, start with a
								solution that fits the way your team works.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Request a Quote <ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#licensing-areas">Explore Licensing</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-primary" />
									Business-focused licence selection
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-primary" />
									New licences and renewals
								</span>
							</div>
						</div>

						{/* Decorative licensing overview */}
						<div className="relative mx-auto w-full max-w-lg">
							<div className="absolute -inset-5 rounded-[2rem] bg-blue-500/10 blur-2xl" />
							<div className="relative rounded-3xl border border-(--line) bg-card/95 p-5 shadow-2xl backdrop-blur sm:p-7">
								<div className="flex items-center justify-between border-b border-(--line) pb-4">
									<div>
										<p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
											Software overview
										</p>
										<p className="mt-1 text-lg font-semibold text-(--ink)">
											Plan your licences
										</p>
									</div>
									<div className="rounded-2xl bg-blue-500/10 p-3 text-blue-600 dark:text-blue-300">
										<FileKey2 className="h-7 w-7" />
									</div>
								</div>

								<div className="my-6 space-y-3">
									{[
										{
											icon: Laptop,
											label: "Operating systems",
											detail: "Devices & editions",
										},
										{
											icon: Users,
											label: "Productivity tools",
											detail: "Users & subscriptions",
										},
										{
											icon: ShieldCheck,
											label: "Security software",
											detail: "Coverage & protection",
										},
										{
											icon: Cloud,
											label: "Cloud applications",
											detail: "Plans & renewals",
										},
									].map((item) => {
										const Icon = item.icon;
										return (
											<div
												key={item.label}
												className="flex items-center gap-3 rounded-xl border border-(--line) bg-muted/30 p-3"
											>
												<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
													<Icon className="h-5 w-5" />
												</div>
												<div className="min-w-0 flex-1">
													<p className="text-sm font-semibold text-(--ink)">
														{item.label}
													</p>
													<p className="mt-0.5 text-xs text-muted-foreground">
														{item.detail}
													</p>
												</div>
												<CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
											</div>
										);
									})}
								</div>

								<div className="grid grid-cols-2 gap-3">
									<div className="rounded-xl bg-muted/50 p-3">
										<p className="text-xs text-muted-foreground">
											Before purchase
										</p>
										<p className="mt-1 text-sm font-semibold text-(--ink)">
											Check requirements
										</p>
									</div>
									<div className="rounded-xl bg-muted/50 p-3">
										<p className="text-xs text-muted-foreground">
											After purchase
										</p>
										<p className="mt-1 text-sm font-semibold text-(--ink)">
											Plan renewals
										</p>
									</div>
								</div>
							</div>
							<div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-(--line) bg-card p-4 shadow-xl sm:flex">
								<div className="rounded-xl bg-primary/10 p-2 text-primary">
									<CalendarClock className="h-5 w-5" />
								</div>
								<div>
									<p className="text-xs text-muted-foreground">
										Keep the timeline visible
									</p>
									<p className="text-sm font-semibold text-(--ink)">
										Licence & renewal planning
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
							Licensing built around your usage
						</p>
						<h2 className="mt-2 max-w-3xl text-2xl font-bold tracking-tight text-(--ink) sm:text-3xl">
							The right licence depends on who uses the software, where it runs
							and what it allows.
						</h2>
					</div>
					<p className="text-sm leading-7 text-(--ink-soft)">
						Software publishers offer different licence models, editions and
						subscription terms. The details matter when planning access for
						individuals, teams and devices.
					</p>
					<p className="text-sm leading-7 text-(--ink-soft)">
						Reviewing your current environment and expected usage can help you
						ask better questions and compare suitable options before purchase.
					</p>
					<p className="text-sm leading-7 text-(--ink-soft)">
						Talk to Baroda Enterprise about the software your organisation
						needs. Product availability and licence terms can be confirmed for
						your specific enquiry.
					</p>
				</div>
			</section>

			{/* Licensing areas */}
			<section className="page-wrap mt-20" id="licensing-areas">
				<div className="max-w-2xl">
					<Badge variant="secondary">What you can enquire about</Badge>
					<h2 className="mt-4 text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Licensing options for essential business software.
					</h2>
					<p className="mt-4 leading-7 text-(--ink-soft)">
						Explore common categories of business software. Supported
						publishers, products, editions and procurement options should be
						confirmed with the Baroda Enterprise team.
					</p>
				</div>

				<div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
					{licensingAreas.map((item) => {
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

			{/* Licence lifecycle */}
			<section className="mt-20 bg-muted/40 py-16">
				<div className="page-wrap">
					<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
						<div>
							<Badge variant="outline">Support across the lifecycle</Badge>
							<h2 className="mt-4 text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
								Think beyond the initial purchase.
							</h2>
							<p className="mt-4 leading-7 text-(--ink-soft)">
								Software needs can change as your organisation hires, adds
								devices or adopts new tools. Plan for the full licence
								lifecycle, from understanding requirements to reviewing
								renewals.
							</p>
							<Button asChild className="mt-7 gap-2">
								<Link to="/contact-us">
									Discuss Your Requirements <ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							{lifecycleServices.map((service, index) => {
								const Icon = service.icon;
								return (
									<Card
										key={service.title}
										className={`border-(--line) bg-card ${index === 3 ? "sm:col-span-2" : ""}`}
									>
										<CardContent className="flex gap-4 p-5">
											<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
												<Icon className="h-5 w-5" />
											</div>
											<div>
												<h3 className="font-semibold text-(--ink)">
													{service.title}
												</h3>
												<p className="mt-1 text-sm leading-6 text-(--ink-soft)">
													{service.description}
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

			{/* Benefits */}
			<section className="page-wrap mt-20">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
						A considered approach
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Make informed software decisions.
					</h2>
					<p className="mt-4 leading-7 text-(--ink-soft)">
						A little preparation can make software selection, purchasing and
						renewals easier to manage.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
					{benefits.map((benefit) => {
						const Icon = benefit.icon;
						return (
							<Card key={benefit.title} className="border-(--line)">
								<CardContent className="p-6">
									<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-(--ink)">
										<Icon className="h-6 w-6" />
									</div>
									<h3 className="mt-5 text-base font-semibold text-(--ink)">
										{benefit.title}
									</h3>
									<p className="mt-2 text-sm leading-6 text-(--ink-soft)">
										{benefit.description}
									</p>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</section>

			{/* Customer types */}
			<section className="page-wrap mt-20">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
						Who can benefit
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Software licensing for different business environments.
					</h2>
					<p className="mt-4 leading-7 text-(--ink-soft)">
						Whether you manage one office or multiple teams, start with the
						software your people need to do their work.
					</p>
				</div>

				<div className="mt-8 grid gap-5 md:grid-cols-3">
					{customerTypes.map((customer) => {
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
							A few details help us understand your licensing needs.
						</h2>
						<p className="mt-4 leading-7 text-(--ink-soft)">
							You do not need to know the exact licence name to get started.
							Tell us what software your team uses or what you want to achieve.
						</p>
					</div>

					<div className="grid gap-3 sm:grid-cols-2">
						{[
							"Software name or intended use",
							"Number of users and devices",
							"New purchase or renewal",
							"Current licence or subscription details",
							"Cloud or on-premises preference",
							"Organisation and project location",
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
							Questions about software licensing?
						</h2>
						<p className="mt-4 leading-7 text-(--ink-soft)">
							Find answers to common questions before discussing your software
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
							<div className="flex items-center gap-2 text-sm font-semibold text-blue-200">
								<BadgeCheck className="h-4 w-4" /> Let’s plan your software
								needs
							</div>
							<h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
								Looking for software licences for your business?
							</h2>
							<p className="mt-4 leading-7 text-slate-200">
								Tell us which tools your team needs, how many users require
								access and whether you are purchasing or renewing. We can help
								you discuss the available options.
							</p>
						</div>
						<div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
							<Button
								asChild
								size="lg"
								className="bg-blue-500 text-white hover:bg-blue-600"
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
								<a href="#licensing-areas">View Licensing Areas</a>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
