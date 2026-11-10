import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	ArrowUpRight,
	Boxes,
	Building2,
	CheckCircle2,
	ClipboardCheck,
	Cloud,
	Cpu,
	Database,
	Factory,
	FileCheck,
	Gauge,
	GitBranch,
	Monitor,
	Power,
	RefreshCw,
	Server,
	Settings,
	ShieldCheck,
	Store,
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

export const Route = createFileRoute("/services/it-infrastructure/")({
	component: ITInfrastructurePage,
});

const infrastructureServices = [
	{
		icon: Server,
		title: "Server infrastructure",
		description:
			"Plan and deploy server environments for business applications, shared resources and centralised workloads, based on the organisation's technical requirements.",
		points: [
			"Server sizing and configuration planning",
			"Physical server installation and setup",
			"Operating system and workload configuration",
		],
	},
	{
		icon: Database,
		title: "Storage & data infrastructure",
		description:
			"Assess storage requirements and organise capacity for business files, application data and shared workloads.",
		points: [
			"Storage capacity and performance assessment",
			"Network-attached and directly attached storage planning",
			"File-sharing and access structure considerations",
		],
	},
	{
		icon: Monitor,
		title: "Workstation & endpoint deployment",
		description:
			"Prepare workplace computers and related devices so teams have the equipment and configurations needed for their roles.",
		points: [
			"Desktop, laptop and workstation setup",
			"Operating system and approved application installation",
			"Peripheral and user-environment configuration",
		],
	},
	{
		icon: Boxes,
		title: "Virtualisation & consolidation",
		description:
			"Review opportunities to consolidate suitable workloads and make better use of available compute resources.",
		points: [
			"Virtualisation requirement assessment",
			"Workload and resource planning",
			"Host and virtual machine configuration scope",
		],
	},
	{
		icon: ShieldCheck,
		title: "Backup & recovery planning",
		description:
			"Consider how important business data should be backed up, retained and made available for recovery when required.",
		points: [
			"Backup requirement and retention assessment",
			"Local and off-site backup options review",
			"Recovery process and responsibility documentation",
		],
	},
	{
		icon: Cloud,
		title: "Cloud & hybrid infrastructure",
		description:
			"Assess whether selected workloads are better suited to on-premises, cloud or a combination of infrastructure environments.",
		points: [
			"Existing environment and workload review",
			"Cloud and hybrid architecture considerations",
			"Connectivity and migration planning inputs",
		],
	},
];

const infrastructureEnvironments = [
	{
		icon: Building2,
		title: "Corporate offices",
		description:
			"Coordinate servers, employee computers, shared storage, printers and workplace systems around the needs of office teams.",
		tags: ["Servers & storage", "Workstations", "Shared resources"],
	},
	{
		icon: Factory,
		title: "Industrial facilities",
		description:
			"Plan business IT infrastructure for administrative offices, operational support teams and facilities with specialised site requirements.",
		tags: ["On-site infrastructure", "Data access", "Site requirements"],
	},
	{
		icon: Store,
		title: "Retail & multi-location businesses",
		description:
			"Consider consistent IT environments across branches, stores and central offices, including shared services and remote locations.",
		tags: ["Branch infrastructure", "Central services", "Endpoint setup"],
	},
];

const infrastructureConsiderations = [
	{
		icon: Gauge,
		title: "Capacity & performance",
		description:
			"Account for current users, applications, data volumes and expected growth when selecting compute and storage resources.",
	},
	{
		icon: ShieldCheck,
		title: "Security & access",
		description:
			"Consider user permissions, administrative access, system updates, data protection and the controls appropriate to each workload.",
	},
	{
		icon: Power,
		title: "Availability & resilience",
		description:
			"Review power, cooling, backup, recovery and component dependencies that may affect the availability of business systems.",
	},
	{
		icon: Wrench,
		title: "Management & lifecycle",
		description:
			"Plan for documentation, monitoring responsibilities, maintenance needs, warranty coverage and future equipment refreshes.",
	},
];

const deliverySteps = [
	{
		number: "01",
		icon: ClipboardCheck,
		title: "Understand the requirement",
		description:
			"Review the organisation's applications, users, devices, existing infrastructure, data needs and operational priorities.",
	},
	{
		number: "02",
		icon: GitBranch,
		title: "Plan the infrastructure",
		description:
			"Prepare a proposed scope covering suitable equipment, capacity, connectivity, deployment dependencies and implementation priorities.",
	},
	{
		number: "03",
		icon: Settings,
		title: "Supply, install & configure",
		description:
			"Implement the agreed hardware and software components, configure the environment and coordinate any required network dependencies.",
	},
	{
		number: "04",
		icon: FileCheck,
		title: "Validate & hand over",
		description:
			"Review the delivered setup against the agreed scope, record relevant configuration details and explain the handover to the customer.",
	},
];

const faqs = [
	{
		question: "What does IT infrastructure include?",
		answer:
			"IT infrastructure can include servers, storage, computers, operating systems, virtualisation, backup systems, cloud resources, power and the supporting network environment. The exact components depend on the organisation's applications, users, location and operational requirements.",
	},
	{
		question: "Can you set up IT infrastructure for a new office?",
		answer:
			"A new-office requirement can be assessed based on the number of users, applications, computers, shared resources, server or cloud needs, internet connectivity and site layout. The proposed scope should identify the equipment, installation work and any third-party dependencies.",
	},
	{
		question: "Can you upgrade our existing servers and storage?",
		answer:
			"Existing infrastructure can be reviewed to understand its condition, capacity, compatibility and performance requirements. Upgrade options depend on the current hardware, software versions, workload dependencies, data requirements and available budget.",
	},
	{
		question: "Do you provide both on-premises and cloud infrastructure?",
		answer:
			"On-premises, cloud and hybrid approaches can be considered during requirement assessment. The suitable model depends on workload behaviour, data requirements, connectivity, security needs, operating costs and the customer's preferred platforms.",
	},
	{
		question: "Can you help with data backup and recovery planning?",
		answer:
			"Backup and recovery requirements can be discussed as part of an infrastructure project. The plan should define which data is covered, backup frequency, retention, storage location, recovery responsibilities and how recovery procedures will be validated.",
	},
	{
		question: "Do you also provide networking services?",
		answer:
			"Network requirements can be considered alongside infrastructure planning, including connectivity between users, servers, storage and other devices. For dedicated network design, cabling, routing, switching and wireless requirements, see the Core Networking service page.",
	},
	{
		question: "Do you provide ongoing maintenance and support?",
		answer:
			"Ongoing support can be discussed as a separate service or within an agreed maintenance arrangement. The proposal should clearly define supported equipment, service hours, response targets, included activities, exclusions and escalation responsibilities.",
	},
	{
		question: "What information should we provide for a quotation?",
		answer:
			"Share your project location, approximate number of users and devices, applications in use, existing server and storage details, data requirements, expected growth, preferred platforms and any known performance or reliability issues. An inventory or site assessment can help establish a more accurate scope.",
	},
];

function ITInfrastructurePage() {
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
								<Server className="h-3.5 w-3.5" />
								Services / IT Infrastructure
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								Build an IT foundation that supports your business.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Bring together servers, storage, workplace devices and cloud
								resources with infrastructure planned around your organisation.
								Baroda Enterprise can help assess, deploy and configure the IT
								components your teams rely on.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Discuss Your Infrastructure{" "}
										<ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#infrastructure-services">Explore Services</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-blue-600" />
									Servers & storage
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-blue-600" />
									Workplace systems
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-blue-600" />
									Cloud & hybrid options
								</span>
							</div>
						</div>

						<div className="relative">
							<div className="overflow-hidden rounded-2xl border border-(--line) bg-background shadow-xl">
								<img
									src="https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=1100&q=85"
									alt="Enterprise server racks in an IT infrastructure environment"
									className="h-64 w-full object-cover sm:h-80 lg:h-[390px]"
								/>
								<div className="grid gap-4 p-5 sm:grid-cols-2">
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<Database className="h-4 w-4 text-blue-600" />
											Compute & data
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Consider server capacity, storage needs and the workloads
											that support daily business operations.
										</p>
									</div>
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<Cloud className="h-4 w-4 text-blue-600" />
											Flexible environments
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Assess on-premises, cloud and hybrid options against your
											technical and operational requirements.
										</p>
									</div>
								</div>
							</div>
							<div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-(--line) bg-background p-4 shadow-lg sm:flex">
								<div className="rounded-lg bg-blue-500/10 p-2 text-blue-700 dark:text-blue-300">
									<ShieldCheck className="h-5 w-5" />
								</div>
								<div>
									<p className="text-sm font-semibold text-(--ink)">
										Planned around your operations
									</p>
									<p className="text-xs text-(--ink-soft)">
										Scope defined before implementation
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Introduction */}
			<section className="page-wrap mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
				<div>
					<Badge variant="secondary" className="mb-3">
						The foundation behind your technology
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Give your business systems the infrastructure they need to work
						together.
					</h2>
				</div>
				<div className="space-y-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
					<p>
						Business applications depend on more than individual computers.
						Servers, storage, operating systems, user devices, backup resources
						and connectivity all contribute to the environment your teams use
						every day. When these components are selected or configured without
						a clear plan, capacity, support and future upgrades can become
						harder to manage.
					</p>
					<p>
						An IT infrastructure project starts by understanding the workloads,
						users, site conditions and existing equipment. The proposed solution
						can then define the relevant hardware, software, deployment tasks
						and support responsibilities for the agreed scope.
					</p>
				</div>
			</section>

			{/* Services */}
			<section className="page-wrap mt-16" id="infrastructure-services">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						IT infrastructure services
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Infrastructure services for your business environment.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Whether you are setting up a new workplace, upgrading existing
						equipment or reviewing your infrastructure architecture, discuss the
						requirements with our team. The final scope is confirmed after
						reviewing your environment and priorities.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{infrastructureServices.map((service) => {
						const Icon = service.icon;
						return (
							<Card
								key={service.title}
								className="h-full rounded-2xl border-(--line)"
							>
								<CardHeader>
									<div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700 dark:text-blue-300">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle className="text-lg">{service.title}</CardTitle>
									<CardDescription className="text-sm leading-6">
										{service.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ul className="space-y-2">
										{service.points.map((point) => (
											<li
												key={point}
												className="flex items-start gap-2 text-sm text-(--ink-soft)"
											>
												<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
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

			{/* Environments */}
			<section className="page-wrap mt-16">
				<div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							Business environments
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Infrastructure planning for different ways of working.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							The right infrastructure depends on the applications, people,
							equipment and working patterns at each site. Share your current
							setup and planned changes so the project can be scoped in context.
						</p>
						<Button asChild variant="outline" className="mt-6 gap-2">
							<Link to="/contact-us">
								Talk to our team <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						{infrastructureEnvironments.map((environment) => {
							const Icon = environment.icon;
							return (
								<Card
									key={environment.title}
									className="rounded-2xl border-(--line)"
								>
									<CardHeader>
										<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
											<Icon className="h-5 w-5" />
										</div>
										<CardTitle className="text-base">
											{environment.title}
										</CardTitle>
										<CardDescription className="leading-6">
											{environment.description}
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="flex flex-wrap gap-2">
											{environment.tags.map((tag) => (
												<Badge
													key={tag}
													variant="secondary"
													className="font-normal"
												>
													{tag}
												</Badge>
											))}
										</div>
									</CardContent>
								</Card>
							);
						})}
						<Card className="flex flex-col justify-between rounded-2xl border-dashed border-blue-500/40 bg-blue-500/5 p-5 sm:col-span-2">
							<div>
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700 dark:text-blue-300">
									<Cpu className="h-5 w-5" />
								</div>
								<h3 className="mt-4 text-base font-semibold text-(--ink)">
									Planning a new facility or major upgrade?
								</h3>
								<p className="mt-2 max-w-xl text-sm leading-6 text-(--ink-soft)">
									Share details about new locations, additional users, business
									applications or equipment refresh projects. The infrastructure
									plan should account for the site's actual needs and
									constraints.
								</p>
							</div>
							<Button
								asChild
								variant="link"
								className="mt-3 h-auto w-fit gap-2 px-0"
							>
								<Link to="/contact-us">
									Share your requirement <ArrowUpRight className="h-4 w-4" />
								</Link>
							</Button>
						</Card>
					</div>
				</div>
			</section>

			{/* Infrastructure considerations */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						What goes into the plan
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Consider the full infrastructure lifecycle, not just the hardware.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Capacity, resilience, security and long-term management all
						influence the infrastructure decisions that support your business.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{infrastructureConsiderations.map((item) => {
						const Icon = item.icon;
						return (
							<Card key={item.title} className="rounded-2xl border-(--line)">
								<CardHeader>
									<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle className="text-base">{item.title}</CardTitle>
									<CardDescription className="leading-6">
										{item.description}
									</CardDescription>
								</CardHeader>
							</Card>
						);
					})}
				</div>
			</section>

			{/* Related services */}
			<section className="page-wrap mt-16">
				<div className="grid gap-4 md:grid-cols-2">
					<Card className="rounded-2xl border-(--line)">
						<CardHeader>
							<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700 dark:text-blue-300">
								<GitBranch className="h-5 w-5" />
							</div>
							<CardTitle>Core networking</CardTitle>
							<CardDescription className="leading-6">
								Explore network design, structured cabling, routing, switching
								and wireless connectivity for your infrastructure.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Button asChild variant="link" className="h-auto gap-2 px-0">
								<Link to="/services/core-networking/">
									Explore Core Networking <ArrowUpRight className="h-4 w-4" />
								</Link>
							</Button>
						</CardContent>
					</Card>

					<Card className="rounded-2xl border-(--line)">
						<CardHeader>
							<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700 dark:text-blue-300">
								<RefreshCw className="h-5 w-5" />
							</div>
							<CardTitle>Annual maintenance contracts</CardTitle>
							<CardDescription className="leading-6">
								Discuss planned maintenance and support arrangements for
								eligible IT equipment and infrastructure.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Button asChild variant="link" className="h-auto gap-2 px-0">
								<Link to="/services/amc/">
									Explore AMC Services <ArrowUpRight className="h-4 w-4" />
								</Link>
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Project process */}
			<section className="page-wrap mt-16">
				<div className="rounded-3xl border border-(--line) bg-muted/30 px-6 py-10 sm:px-10 sm:py-12">
					<div className="max-w-2xl">
						<Badge variant="outline" className="mb-3">
							Project approach
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							From requirement assessment to infrastructure handover.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							A clear delivery process helps define the project scope,
							equipment, implementation activities and handover expectations.
						</p>
					</div>

					<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{deliverySteps.map((step) => {
							const Icon = step.icon;
							return (
								<div key={step.number} className="relative">
									<div className="flex items-center justify-between">
										<p className="text-sm font-bold tracking-widest text-blue-600">
											{step.number}
										</p>
										<Icon className="h-5 w-5 text-(--ink-soft)" />
									</div>
									<h3 className="mt-3 text-base font-semibold text-(--ink)">
										{step.title}
									</h3>
									<p className="mt-2 text-sm leading-6 text-(--ink-soft)">
										{step.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="page-wrap mt-16">
				<div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							FAQs
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Questions about IT infrastructure.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							Need help understanding what your business requires? Contact the
							team with your existing setup, project plans or infrastructure
							challenges.
						</p>
						<Button asChild variant="outline" className="mt-6 gap-2">
							<Link to="/contact-us">
								Ask a question <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem key={faq.question} value={`item-${index + 1}`}>
								<AccordionTrigger className="text-left text-sm font-semibold text-(--ink)">
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
				<div className="relative isolate overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#172b4d,#1e40af)] px-6 py-10 text-white sm:px-10 sm:py-14">
					<div className="pointer-events-none absolute -right-16 -top-24 -z-10 h-72 w-72 rounded-full border border-white/10" />
					<div className="pointer-events-none absolute -right-5 -top-12 -z-10 h-52 w-52 rounded-full border border-white/10" />
					<div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
						<div className="max-w-2xl">
							<Badge className="mb-4 border border-white/20 bg-white/10 text-white hover:bg-white/10">
								Plan your IT infrastructure
							</Badge>
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
								Let’s create an IT environment that is ready for your business.
							</h2>
							<p className="mt-4 text-sm leading-7 text-blue-100 sm:text-base">
								Tell us about your users, applications, equipment and future
								plans. Our team can discuss the infrastructure options and
								practical next steps for your project.
							</p>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
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
								<Link to="/products/hardware-components/">
									Browse Hardware <ArrowUpRight className="h-4 w-4" />
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
