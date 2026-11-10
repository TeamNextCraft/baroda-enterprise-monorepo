import { createFileRoute, Link } from "@tanstack/react-router";
import {
	Activity,
	ArrowRight,
	ArrowUpRight,
	Building2,
	Cable,
	CheckCircle2,
	ChevronRight,
	ClipboardCheck,
	Factory,
	Gauge,
	GitBranch,
	Laptop,
	Network,
	RadioTower,
	Router,
	Settings,
	ShieldCheck,
	Store,
	Wifi,
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

export const Route = createFileRoute("/services/core-networking/")({
	component: CoreNetworkingPage,
});

const networkingServices = [
	{
		icon: Network,
		title: "Network assessment & design",
		description:
			"Review the existing environment and plan a network layout around your site, users, applications and connectivity requirements.",
		points: [
			"Review of current network infrastructure",
			"Network layout and capacity planning",
			"Wired and wireless coverage considerations",
		],
	},
	{
		icon: Router,
		title: "Routing & switching",
		description:
			"Connect users, servers, devices and network segments through appropriately selected and configured network equipment.",
		points: [
			"Router and managed switch configuration",
			"VLAN and network segmentation planning",
			"Inter-network and internet connectivity",
		],
	},
	{
		icon: Wifi,
		title: "Wireless network solutions",
		description:
			"Plan wireless access for offices, facilities and shared spaces, considering coverage, capacity and the devices in use.",
		points: [
			"Wireless access point placement planning",
			"Business Wi-Fi configuration",
			"Guest and staff access considerations",
		],
	},
	{
		icon: Cable,
		title: "Structured cabling",
		description:
			"Create an organised physical network foundation for workstations, access points, servers, cameras and other connected devices.",
		points: [
			"Copper cabling and outlet planning",
			"Network racks and patch-panel organisation",
			"Fibre connectivity requirements assessment",
		],
	},
	{
		icon: ShieldCheck,
		title: "Network security & segmentation",
		description:
			"Consider network access, segmentation and perimeter controls as part of a network designed for your operating environment.",
		points: [
			"Network access and permission planning",
			"Separation of relevant device networks",
			"Firewall and security-system coordination",
		],
	},
	{
		icon: Activity,
		title: "Troubleshooting & optimisation",
		description:
			"Investigate connectivity and performance concerns, then recommend practical changes based on the findings.",
		points: [
			"Connectivity and performance diagnosis",
			"Configuration review and documentation",
			"Recommendations for capacity or coverage improvements",
		],
	},
];

const networkEnvironments = [
	{
		icon: Building2,
		title: "Office networks",
		description:
			"Connect employee workstations, printers, meeting rooms, servers and business applications across an office environment.",
		tags: ["Wired LAN", "Business Wi-Fi", "Guest access"],
	},
	{
		icon: Factory,
		title: "Industrial facilities",
		description:
			"Plan network connectivity for offices, operational areas and supported devices, with attention to site layout and operational needs.",
		tags: ["Site connectivity", "Device segmentation", "Fibre links"],
	},
	{
		icon: Store,
		title: "Retail & multi-site businesses",
		description:
			"Coordinate connectivity across branches, stores and central locations, based on the applications and devices each site uses.",
		tags: ["Branch connectivity", "Central coordination", "Wi-Fi"],
	},
];

const deliverySteps = [
	{
		number: "01",
		icon: ClipboardCheck,
		title: "Assess the site",
		description:
			"Understand the building layout, user count, connected devices, existing equipment and current connectivity challenges.",
	},
	{
		number: "02",
		icon: GitBranch,
		title: "Design the network",
		description:
			"Prepare a proposed network layout covering equipment, cabling, wireless coverage, segmentation and connectivity needs.",
	},
	{
		number: "03",
		icon: Settings,
		title: "Install & configure",
		description:
			"Implement the agreed network components and configure supported devices according to the approved project scope.",
	},
	{
		number: "04",
		icon: CheckCircle2,
		title: "Test & hand over",
		description:
			"Review connectivity, document the agreed configuration and explain the delivered network setup to the customer.",
	},
];

const networkConsiderations = [
	{
		icon: Gauge,
		title: "Capacity & performance",
		description:
			"Plan for the expected number of users, connected devices, applications and traffic patterns, with room for anticipated growth.",
	},
	{
		icon: ShieldCheck,
		title: "Access & security",
		description:
			"Consider who and what should connect, how networks should be separated and which security controls are appropriate.",
	},
	{
		icon: RadioTower,
		title: "Coverage & connectivity",
		description:
			"Account for building layout, physical obstructions, cable routes, wireless coverage and links between floors or sites.",
	},
	{
		icon: Wrench,
		title: "Management & support",
		description:
			"Consider equipment access, configuration records, troubleshooting requirements and any ongoing support arrangement.",
	},
];

const faqs = [
	{
		question: "What is included in a core networking project?",
		answer:
			"The scope depends on the site and requirement. A project may include network assessment and design, structured cabling, routers and switches, wireless access points, configuration, connectivity testing and handover documentation. The quotation should specify the equipment, labour, services and exclusions included.",
	},
	{
		question:
			"Can you set up a new network for an office or industrial facility?",
		answer:
			"A new network requirement can be assessed for offices, industrial facilities and other business environments. Share the site layout, approximate user and device count, number of floors or buildings, and the applications that need connectivity so the proposed scope can be reviewed.",
	},
	{
		question: "Can you improve or expand our existing network?",
		answer:
			"Existing networks can be reviewed to identify possible capacity, coverage, cabling, configuration or connectivity improvements. Recommendations depend on the current equipment, network design, site conditions and the issues you are experiencing.",
	},
	{
		question: "Do you provide both wired and wireless networking?",
		answer:
			"Wired LAN and wireless networking requirements can be planned together or separately. The appropriate combination depends on device type, mobility, bandwidth needs, building layout and the reliability requirements of each area.",
	},
	{
		question:
			"Can separate networks be created for employees, guests and devices?",
		answer:
			"Network segmentation, such as separating staff, guest and selected device traffic, can be considered during design. The available options depend on the network hardware, configuration capabilities and security requirements.",
	},
	{
		question: "Do you work with specific router, switch or Wi-Fi brands?",
		answer:
			"Supported brands and models should be confirmed with the team before a project is planned. You can share any existing equipment or preferred vendor requirements so compatibility and availability can be reviewed.",
	},
	{
		question: "Do you offer ongoing network maintenance?",
		answer:
			"Ongoing support and maintenance can be discussed separately or as part of a broader support arrangement. The agreed scope should define supported equipment, service hours, response targets, monitoring responsibilities and any exclusions.",
	},
	{
		question: "What information is needed for a networking quotation?",
		answer:
			"Provide the project location, building or floor layout if available, approximate number of users and devices, number of network points, current equipment, internet connection details and a summary of the required work. A site assessment may be useful before a detailed proposal is prepared.",
	},
];

function CoreNetworkingPage() {
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
								Services / Core Networking
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								Build a reliable network foundation for your business.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Connect your people, devices and business systems with network
								infrastructure planned around your workplace. Baroda Enterprise
								can help assess, design, install and configure wired and
								wireless networking solutions for offices and business
								facilities.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Discuss Your Network <ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#networking-services">Explore Services</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-blue-600" />
									Wired & wireless networks
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-blue-600" />
									Planned for your site
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-blue-600" />
									Configuration & testing
								</span>
							</div>
						</div>

						<div className="relative">
							<div className="overflow-hidden rounded-2xl border border-(--line) bg-background shadow-xl">
								<img
									src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1100&q=85"
									alt="Organised network servers and infrastructure in a server rack"
									className="h-64 w-full object-cover sm:h-80 lg:h-[390px]"
								/>
								<div className="grid gap-4 p-5 sm:grid-cols-2">
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<Router className="h-4 w-4 text-blue-600" />
											Connected infrastructure
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Coordinate network equipment, cabling and connected
											business devices in one planned environment.
										</p>
									</div>
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<Wifi className="h-4 w-4 text-blue-600" />
											Wired & wireless access
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Consider access, coverage and capacity across the areas
											where your teams work.
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
										Designed around your needs
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
						The network behind your operations
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Bring your workplace devices and systems onto a considered network.
					</h2>
				</div>
				<div className="space-y-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
					<p>
						A business network is more than internet access. It connects
						workstations, servers, printers, wireless devices, security systems
						and the applications your teams use every day. Poor coverage,
						unclear configurations or an unplanned layout can make those
						connections difficult to manage.
					</p>
					<p>
						A core networking project starts by understanding the site and its
						requirements. Equipment selection, cabling, network configuration,
						access controls and testing can then be scoped to suit the
						environment and the work that needs to be done.
					</p>
				</div>
			</section>

			{/* Services */}
			<section className="page-wrap mt-16" id="networking-services">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Networking services
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Networking services for the way your business operates.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Discuss the parts of your network that need to be designed,
						installed, upgraded or reviewed. The final project scope is
						confirmed after assessing your requirements and existing
						infrastructure.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{networkingServices.map((service) => {
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
							Environments we can assess
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Network planning for different business environments.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							Each site has different users, devices, layouts and operating
							priorities. Share how your organisation works so the network
							approach can be considered in the right context.
						</p>
						<Button asChild variant="outline" className="mt-6 gap-2">
							<Link to="/contact-us">
								Talk to our team <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						{networkEnvironments.map((environment) => {
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
									<Laptop className="h-5 w-5" />
								</div>
								<h3 className="mt-4 text-base font-semibold text-(--ink)">
									Have a different site or network requirement?
								</h3>
								<p className="mt-2 max-w-xl text-sm leading-6 text-(--ink-soft)">
									Tell us about campuses, warehouses, mixed-use facilities or
									multi-building environments. The design should reflect the
									actual site conditions and connectivity needs.
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

			{/* Design considerations */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						What goes into the design
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						A network plan should account for more than equipment.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Site layout, current infrastructure, business applications and
						future requirements all influence the right network approach.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{networkConsiderations.map((item) => {
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

			{/* Process */}
			<section className="page-wrap mt-16">
				<div className="rounded-3xl border border-(--line) bg-muted/30 px-6 py-10 sm:px-10 sm:py-12">
					<div className="max-w-2xl">
						<Badge variant="outline" className="mb-3">
							Project approach
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							From site assessment to network handover.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							A structured process helps establish what is required, what will
							be delivered and how the completed setup will be reviewed.
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
							Questions about core networking.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							Have a requirement that is not covered here? Contact the team with
							your site details and current networking challenges.
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
								Plan your network project
							</Badge>
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
								Let’s build the right network for your workplace.
							</h2>
							<p className="mt-4 text-sm leading-7 text-blue-100 sm:text-base">
								Tell us about your site, connected devices and current network
								requirements. Our team can discuss the next steps for your
								networking project.
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
								<Link to="/services/amc/">
									Explore Maintenance <ChevronRight className="h-4 w-4" />
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
