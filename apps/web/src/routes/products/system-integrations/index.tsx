import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	ArrowUpRight,
	BadgeCheck,
	Blocks,
	Building2,
	CheckCircle2,
	ChevronRight,
	Cloud,
	Cog,
	Database,
	Factory,
	GitBranch,
	Headset,
	MonitorSmartphone,
	Network,
	PanelsTopLeft,
	Server,
	ShieldCheck,
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

export const Route = createFileRoute("/products/system-integrations/")({
	component: SystemIntegrationsPage,
});

const integrationAreas = [
	{
		icon: Network,
		title: "IT infrastructure integration",
		description:
			"Connect the network, servers, devices and workplace infrastructure your teams rely on.",
		points: [
			"Network and device connectivity",
			"Server and infrastructure coordination",
			"Planning for reliable communication between systems",
		],
	},
	{
		icon: PanelsTopLeft,
		title: "Business application integration",
		description:
			"Bring business applications and essential tools into a more connected working environment.",
		points: [
			"Application and platform connectivity",
			"Data exchange between supported systems",
			"Review of existing software workflows",
		],
	},
	{
		icon: ShieldCheck,
		title: "Security and surveillance integration",
		description:
			"Coordinate compatible security, access and surveillance solutions with your wider infrastructure.",
		points: [
			"Network-connected surveillance systems",
			"Security system coordination",
			"Centralised visibility where supported",
		],
	},
	{
		icon: Cloud,
		title: "Cloud and on-premises connectivity",
		description:
			"Plan how local infrastructure and cloud-based services work together around your requirements.",
		points: [
			"Cloud and local environment connectivity",
			"Access and configuration planning",
			"Hybrid infrastructure considerations",
		],
	},
	{
		icon: Workflow,
		title: "Workflow and process integration",
		description:
			"Reduce disconnected steps by connecting supported tools and shaping workflows around your operations.",
		points: [
			"Workflow discovery and mapping",
			"Task and information flow coordination",
			"Integration of supported business tools",
		],
	},
	{
		icon: Database,
		title: "Data and reporting connectivity",
		description:
			"Help relevant systems share information and make operational data easier to access.",
		points: [
			"Data source connectivity assessment",
			"Reporting workflow coordination",
			"Data flow and access considerations",
		],
	},
];

const deliverySteps = [
	{
		number: "01",
		icon: BadgeCheck,
		title: "Understand your environment",
		description:
			"We discuss your existing systems, business goals, users and integration challenges.",
	},
	{
		number: "02",
		icon: GitBranch,
		title: "Plan the integration",
		description:
			"We map system dependencies, compatibility considerations and the proposed approach.",
	},
	{
		number: "03",
		icon: Cog,
		title: "Implement and configure",
		description:
			"The agreed components are connected and configured according to the project scope.",
	},
	{
		number: "04",
		icon: CheckCircle2,
		title: "Test and hand over",
		description:
			"We review the agreed workflows, address identified issues and explain the delivered setup.",
	},
];

const outcomes = [
	{
		icon: Blocks,
		title: "A connected environment",
		description:
			"Bring compatible systems together instead of managing every tool in isolation.",
	},
	{
		icon: Workflow,
		title: "Clearer workflows",
		description:
			"Make information and processes easier to follow across the systems involved.",
	},
	{
		icon: MonitorSmartphone,
		title: "A setup that fits your teams",
		description:
			"Plan around the way your people work, the tools they use and the outcomes they need.",
	},
	{
		icon: Headset,
		title: "Support through the project",
		description:
			"Discuss configuration, handover and any ongoing support requirements with our team.",
	},
];

const industries = [
	{
		icon: Building2,
		title: "Corporate offices",
		description:
			"Coordinate workplace devices, business applications, networks and collaboration tools.",
	},
	{
		icon: Factory,
		title: "Industrial businesses",
		description:
			"Explore how operational systems, office infrastructure and security solutions can work together.",
	},
	{
		icon: ShoppingBag,
		title: "Retail and service organisations",
		description:
			"Connect supported business tools and infrastructure across customer-facing operations.",
	},
];

const faqs = [
	{
		question: "What does a system integration project involve?",
		answer:
			"A system integration project connects two or more compatible systems so they can exchange information or work together. The exact scope depends on your existing setup, the systems involved and your business requirements.",
	},
	{
		question: "Can you integrate our existing systems?",
		answer:
			"In many cases, existing systems can be part of an integration project. We first need to understand the products, versions, interfaces and access available to assess compatibility and define a realistic scope.",
	},
	{
		question: "Do you work with cloud and on-premises systems?",
		answer:
			"Cloud-based and on-premises environments can be considered. The recommended approach depends on the platforms involved, security requirements, connectivity and the way your organisation operates.",
	},
	{
		question:
			"Can you connect surveillance or security systems with IT infrastructure?",
		answer:
			"Compatible network-connected surveillance and security systems may be incorporated into a wider infrastructure plan. The devices, software, network requirements and intended functions need to be reviewed before confirming compatibility.",
	},
	{
		question: "What information should I share to get a proposal?",
		answer:
			"Share a brief overview of your organisation, the systems you currently use, what you want them to do together, the project location and any known timelines. You can also provide a system diagram or equipment list if available.",
	},
];

function SystemIntegrationsPage() {
	return (
		<main className="pb-20">
			{/* Hero */}
			<section className="page-wrap pt-8 sm:pt-12">
				<div className="relative isolate overflow-hidden rounded-3xl border border-(--line) bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.16),transparent_42%),linear-gradient(135deg,var(--header-bg),var(--background))] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
					<div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-72 w-72 rounded-full border border-blue-500/15" />
					<div className="pointer-events-none absolute -right-5 -top-9 -z-10 h-52 w-52 rounded-full border border-blue-500/15" />

					<div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
						<div>
							<Badge
								variant="outline"
								className="mb-5 gap-2 border-blue-500/30 bg-blue-500/10 px-3 py-1 text-blue-700 dark:text-blue-300"
							>
								<Network className="h-3.5 w-3.5" />
								Products / System Integrations
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								Bring your business systems together.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Connect the technology your organisation depends on. Baroda
								Enterprise helps assess integration requirements across IT
								infrastructure, business applications, security systems and
								workplace workflows.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Discuss Your Project <ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#integration-areas">Explore Integration Areas</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-primary" />
									Planned around your requirements
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-primary" />
									Compatibility-led approach
								</span>
							</div>
						</div>

						{/* Illustrative integration overview */}
						<div className="relative mx-auto w-full max-w-lg">
							<div className="absolute -inset-5 rounded-[2rem] bg-blue-500/10 blur-2xl" />
							<div className="relative rounded-3xl border border-(--line) bg-card/95 p-5 shadow-2xl backdrop-blur sm:p-7">
								<div className="flex items-center justify-between border-b border-(--line) pb-4">
									<div>
										<p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
											Connected systems
										</p>
										<p className="mt-1 text-lg font-semibold text-(--ink)">
											One coordinated environment
										</p>
									</div>
									<div className="rounded-2xl bg-blue-500/10 p-3 text-blue-600 dark:text-blue-300">
										<Network className="h-7 w-7" />
									</div>
								</div>

								<div className="relative my-6 overflow-hidden rounded-2xl border border-(--line) bg-muted/30 p-4 sm:p-5">
									<div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-500/30" />
									<div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20" />

									<div className="relative z-10 grid grid-cols-2 gap-3">
										<div className="rounded-xl border border-(--line) bg-card p-3 text-center shadow-sm">
											<Server className="mx-auto h-5 w-5 text-primary" />
											<p className="mt-2 text-xs font-semibold text-(--ink)">
												Infrastructure
											</p>
										</div>
										<div className="rounded-xl border border-(--line) bg-card p-3 text-center shadow-sm">
											<PanelsTopLeft className="mx-auto h-5 w-5 text-primary" />
											<p className="mt-2 text-xs font-semibold text-(--ink)">
												Applications
											</p>
										</div>
										<div className="rounded-xl border border-(--line) bg-card p-3 text-center shadow-sm">
											<ShieldCheck className="mx-auto h-5 w-5 text-primary" />
											<p className="mt-2 text-xs font-semibold text-(--ink)">
												Security
											</p>
										</div>
										<div className="rounded-xl border border-(--line) bg-card p-3 text-center shadow-sm">
											<Database className="mx-auto h-5 w-5 text-primary" />
											<p className="mt-2 text-xs font-semibold text-(--ink)">
												Business data
											</p>
										</div>
									</div>

									<div className="relative z-10 mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-700 dark:text-blue-300">
										<Workflow className="h-4 w-4" />
										Connected workflows
									</div>
								</div>

								<div className="grid grid-cols-2 gap-3">
									<div className="rounded-xl bg-muted/50 p-3">
										<p className="text-xs text-muted-foreground">Start with</p>
										<p className="mt-1 text-sm font-semibold text-(--ink)">
											Your current systems
										</p>
									</div>
									<div className="rounded-xl bg-muted/50 p-3">
										<p className="text-xs text-muted-foreground">
											Work towards
										</p>
										<p className="mt-1 text-sm font-semibold text-(--ink)">
											A connected workflow
										</p>
									</div>
								</div>
							</div>
							<div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-(--line) bg-card p-4 shadow-xl sm:flex">
								<div className="rounded-xl bg-primary/10 p-2 text-primary">
									<GitBranch className="h-5 w-5" />
								</div>
								<div>
									<p className="text-xs text-muted-foreground">
										Integration approach
									</p>
									<p className="text-sm font-semibold text-(--ink)">
										Plan. Connect. Test.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Intro */}
			<section className="page-wrap mt-12">
				<div className="grid gap-6 rounded-2xl border border-(--line) bg-card p-6 sm:grid-cols-3 sm:p-8">
					<div className="sm:col-span-3">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
							Integration built around your environment
						</p>
						<h2 className="mt-2 max-w-3xl text-2xl font-bold tracking-tight text-(--ink) sm:text-3xl">
							Make your technology work together, not in silos.
						</h2>
					</div>
					<p className="text-sm leading-7 text-(--ink-soft)">
						Organisations often use a mix of hardware, software, networks and
						cloud platforms. An integration project starts by understanding how
						those components are used today.
					</p>
					<p className="text-sm leading-7 text-(--ink-soft)">
						The right approach depends on compatibility, available interfaces,
						data requirements, security considerations and the results your team
						wants to achieve.
					</p>
					<p className="text-sm leading-7 text-(--ink-soft)">
						Baroda Enterprise can discuss your existing setup and help define a
						practical scope for connecting the systems involved.
					</p>
				</div>
			</section>

			{/* Integration areas */}
			<section className="page-wrap mt-16" id="integration-areas">
				<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
							What can be connected
						</p>
						<h2 className="max-w-2xl text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Integration areas for your business technology.
						</h2>
					</div>
					<p className="max-w-md text-sm leading-7 text-(--ink-soft)">
						Start with the systems you already use and identify where better
						connectivity can support your operations.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
					{integrationAreas.map((area) => {
						const Icon = area.icon;
						return (
							<Card
								key={area.title}
								className="h-full border-(--line) bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
							>
								<CardHeader>
									<div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle className="text-lg">{area.title}</CardTitle>
									<CardDescription className="text-sm leading-6">
										{area.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ul className="space-y-2">
										{area.points.map((point) => (
											<li
												key={point}
												className="flex items-start gap-2 text-sm text-(--ink-soft)"
											>
												<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
												<span>{point}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</section>

			{/* Benefits */}
			<section className="page-wrap mt-16">
				<div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
					<div>
						<p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
							Why consider integration
						</p>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							A more coordinated way to manage technology.
						</h2>
						<p className="mt-5 text-sm leading-7 text-(--ink-soft)">
							System integration is not simply about connecting equipment. It is
							about understanding how people, processes and technology interact,
							then planning a setup that supports the work being done.
						</p>
						<Button asChild variant="outline" className="mt-6 gap-2">
							<Link to="/contact-us">
								Talk to Our Team <ArrowUpRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						{outcomes.map((outcome) => {
							const Icon = outcome.icon;
							return (
								<div
									key={outcome.title}
									className="rounded-2xl border border-(--line) bg-card p-5"
								>
									<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
										<Icon className="h-5 w-5" />
									</div>
									<h3 className="font-semibold text-(--ink)">
										{outcome.title}
									</h3>
									<p className="mt-2 text-sm leading-6 text-(--ink-soft)">
										{outcome.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Process */}
			<section className="page-wrap mt-16" id="process">
				<div className="text-center">
					<p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
						How we approach a project
					</p>
					<h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						From understanding your setup to a tested connection.
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-(--ink-soft)">
						A structured process helps define the scope, identify dependencies
						and review the completed integration against agreed requirements.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
					{deliverySteps.map((step) => {
						const Icon = step.icon;
						return (
							<Card
								key={step.number}
								className="relative border-(--line) bg-card"
							>
								<CardHeader>
									<div className="flex items-center justify-between">
										<span className="text-3xl font-bold tracking-tight text-primary/30">
											{step.number}
										</span>
										<div className="rounded-xl bg-primary/10 p-3 text-primary">
											<Icon className="h-5 w-5" />
										</div>
									</div>
									<CardTitle className="pt-2 text-base">{step.title}</CardTitle>
									<CardDescription className="text-sm leading-6">
										{step.description}
									</CardDescription>
								</CardHeader>
							</Card>
						);
					})}
				</div>
			</section>

			{/* Industries */}
			<section className="page-wrap mt-16">
				<div className="rounded-3xl border border-(--line) bg-muted/30 p-6 sm:p-10">
					<div className="max-w-2xl">
						<p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
							Environments we can discuss
						</p>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Integration planning across different industries.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft)">
							Each organisation has a different technology environment. Tell us
							about your operations and the systems you want to connect.
						</p>
					</div>

					<div className="mt-8 grid gap-4 md:grid-cols-3">
						{industries.map((industry) => {
							const Icon = industry.icon;
							return (
								<Card key={industry.title} className="border-(--line) bg-card">
									<CardHeader>
										<div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
											<Icon className="h-5 w-5" />
										</div>
										<CardTitle className="text-lg">{industry.title}</CardTitle>
										<CardDescription className="leading-6">
											{industry.description}
										</CardDescription>
									</CardHeader>
								</Card>
							);
						})}
					</div>
				</div>
			</section>

			{/* FAQs */}
			<section className="page-wrap mt-16">
				<div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
							Frequently asked questions
						</p>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Have questions about system integration?
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft)">
							Here are a few things to consider before planning an integration
							project. Contact us to discuss your particular environment.
						</p>
					</div>

					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem key={faq.question} value={`faq-${index}`}>
								<AccordionTrigger className="text-left font-semibold text-(--ink)">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-sm leading-7 text-(--ink-soft)">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</section>

			{/* CTA */}
			<section className="page-wrap mt-16">
				<div className="relative isolate overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#142536,#1e4970)] px-6 py-10 text-white sm:px-10 sm:py-14">
					<div className="pointer-events-none absolute -right-16 -top-24 -z-10 h-72 w-72 rounded-full border border-white/10" />
					<div className="pointer-events-none absolute -right-4 -top-12 -z-10 h-48 w-48 rounded-full border border-white/10" />

					<div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
						<div className="max-w-2xl">
							<Badge className="mb-4 border border-white/20 bg-white/10 text-white hover:bg-white/10">
								Let's connect your systems
							</Badge>
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
								Start with a conversation about your technology.
							</h2>
							<p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base">
								Tell us what systems you use, where the gaps are and what you
								want to achieve. Our team can help you discuss the next steps.
							</p>
						</div>

						<div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
							<Button asChild size="lg" variant="secondary" className="gap-2">
								<Link to="/contact-us">
									Request a Consultation <ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
							>
								<a href="#integration-areas">
									Review Integration Areas <ChevronRight className="h-4 w-4" />
								</a>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
