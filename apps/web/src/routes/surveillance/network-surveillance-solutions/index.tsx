import { createFileRoute, Link } from "@tanstack/react-router";
import {
	Activity,
	ArrowRight,
	BadgeCheck,
	Building2,
	Cable,
	Camera,
	CheckCircle2,
	ClipboardCheck,
	Database,
	Factory,
	HardDrive,
	Home,
	LockKeyhole,
	MapPinned,
	Monitor,
	Network,
	RadioTower,
	Router,
	Server,
	Settings2,
	ShieldCheck,
	Signal,
	Smartphone,
	Video,
	Wrench,
	Zap,
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

export const Route = createFileRoute(
	"/surveillance/network-surveillance-solutions/",
)({
	component: NetworkSurveillanceSolutionsPage,
});

const solutionServices = [
	{
		icon: Camera,
		title: "IP camera network planning",
		description:
			"Plan network-connected cameras around the site's coverage requirements, available infrastructure, camera locations and expected video traffic.",
		points: [
			"Camera location and connectivity review",
			"Network capacity and uplink assessment",
			"Coverage planning for indoor and outdoor areas",
		],
	},
	{
		icon: Network,
		title: "PoE switching & connectivity",
		description:
			"Connect compatible IP cameras through a suitable wired network, with Power over Ethernet considered where supported by the selected devices.",
		points: [
			"PoE switch and port planning",
			"Cable route and distance assessment",
			"Power budget and uplink considerations",
		],
	},
	{
		icon: Server,
		title: "NVR & video management setup",
		description:
			"Configure compatible recording equipment or video management software to organise camera streams, recording schedules and authorised viewing.",
		points: [
			"NVR or VMS compatibility review",
			"Recording and user-access configuration",
			"Storage capacity and retention planning",
		],
	},
	{
		icon: Smartphone,
		title: "Remote viewing & multi-site access",
		description:
			"Evaluate secure ways for approved users to view cameras from authorised devices and, where supported, access multiple locations through a central interface.",
		points: [
			"Remote access requirement assessment",
			"User roles and permission configuration",
			"Multi-site viewing options where supported",
		],
	},
	{
		icon: ShieldCheck,
		title: "Network segmentation & protection",
		description:
			"Review how surveillance devices connect to the wider business network and apply suitable separation and access controls where the infrastructure allows.",
		points: [
			"Camera network and VLAN planning",
			"Device credentials and access review",
			"Firewall and remote-access considerations",
		],
	},
	{
		icon: Wrench,
		title: "Testing, troubleshooting & support",
		description:
			"Check camera connectivity, recording and authorised viewing, then discuss ongoing support options for the installed network surveillance environment.",
		points: [
			"Camera, link and recording checks",
			"Connectivity and stream troubleshooting",
			"Maintenance options within agreed scope",
		],
	},
];

const networkElements = [
	{
		icon: Camera,
		title: "IP cameras",
		description:
			"Network-connected cameras capture video and send streams to compatible recording or management equipment. Resolution, frame rate, codecs and low-light needs affect network and storage requirements.",
		tags: ["Indoor / outdoor", "Fixed / PTZ options", "Stream-dependent"],
	},
	{
		icon: Router,
		title: "PoE switches & network devices",
		description:
			"Switches and network equipment connect cameras, recorders and viewing workstations. Port speeds, PoE standards, power budgets and uplink capacity should be matched to the design.",
		tags: ["PoE / PoE+ options", "Managed switching", "Uplink capacity"],
	},
	{
		icon: HardDrive,
		title: "NVR & storage",
		description:
			"Recording equipment and storage retain video according to configured schedules and retention requirements. Capacity depends on camera count, stream settings, recording mode and retention period.",
		tags: ["Recording", "Retention planning", "Storage capacity"],
	},
	{
		icon: Monitor,
		title: "VMS & monitoring workstations",
		description:
			"Compatible video management software and workstations can help authorised operators view live feeds, review recordings and manage cameras across supported locations.",
		tags: ["Live view", "Playback", "User permissions"],
	},
];

const environments = [
	{
		icon: Building2,
		title: "Corporate offices",
		description:
			"Connect cameras across entrances, reception areas, corridors, parking facilities and selected restricted spaces, while keeping surveillance traffic appropriately managed.",
		tags: ["Office premises", "Parking areas", "Multiple floors"],
	},
	{
		icon: Factory,
		title: "Industrial facilities & warehouses",
		description:
			"Plan camera connectivity for production areas, loading bays, storage spaces, perimeter locations and gatehouses, considering cable routes and environmental conditions.",
		tags: ["Factories", "Warehouses", "Perimeter areas"],
	},
	{
		icon: Home,
		title: "Residential & commercial properties",
		description:
			"Support network video coverage for apartment buildings, housing societies, retail premises and other properties with shared entrances or multiple camera locations.",
		tags: ["Housing societies", "Retail premises", "Common areas"],
	},
];

const planningFactors = [
	{
		icon: Signal,
		title: "Bandwidth & network capacity",
		description:
			"Estimate aggregate camera traffic using the expected resolution, frame rate, codec, scene activity and number of simultaneous live or playback streams. Check switch and uplink capacity before adding cameras.",
	},
	{
		icon: Database,
		title: "Recording storage & retention",
		description:
			"Define recording schedules and the required retention period. Storage sizing should account for the number of cameras, stream settings, motion-based recording, redundancy and the recorder's supported limits.",
	},
	{
		icon: LockKeyhole,
		title: "Network security & user access",
		description:
			"Use unique device credentials, restrict administrative access, review firmware updates and control remote connectivity. Separate surveillance traffic from business systems where appropriate and supported.",
	},
	{
		icon: Cable,
		title: "Cabling, distance & topology",
		description:
			"Review cable type, route, distance, environmental exposure and network topology. Longer distances or site layouts may require fibre links, intermediate switches or other suitable network designs.",
	},
	{
		icon: Zap,
		title: "Power continuity",
		description:
			"Check the power requirements of cameras, PoE switches, recorders and network equipment. Consider suitable backup power for critical components based on the site's continuity needs.",
	},
	{
		icon: ShieldCheck,
		title: "Privacy & camera placement",
		description:
			"Position cameras for legitimate site-security purposes, limit views into private areas, define who can access footage and establish appropriate retention and disclosure procedures.",
	},
];

const deliverySteps = [
	{
		number: "01",
		icon: ClipboardCheck,
		title: "Review the site & requirements",
		description:
			"Discuss the property, camera count, coverage objectives, existing network, recording expectations, remote-viewing needs and any current CCTV equipment.",
	},
	{
		number: "02",
		icon: MapPinned,
		title: "Plan the network design",
		description:
			"Review camera locations, cable routes, PoE requirements, bandwidth, uplinks, recording capacity, network separation and access permissions before finalising the scope.",
	},
	{
		number: "03",
		icon: Settings2,
		title: "Install & configure",
		description:
			"Install and connect the agreed cameras and network equipment, configure compatible recording software or NVRs, and apply agreed device and user settings.",
	},
	{
		number: "04",
		icon: BadgeCheck,
		title: "Test & hand over",
		description:
			"Check live streams, recording, playback, remote access and relevant network links. Explain the agreed operating procedures and document key configuration details.",
	},
];

const relatedServices = [
	{
		icon: Video,
		title: "CCTV Solutions",
		description:
			"Explore camera selection, coverage planning, recording equipment and installation for different property types.",
		href: "/surveillance/cctv-solutions/",
	},
	{
		icon: LockKeyhole,
		title: "Access Control Systems",
		description:
			"Coordinate surveillance with controlled entry points and compatible access-control equipment where required.",
		href: "/surveillance/access-control-systems/",
	},
	{
		icon: Network,
		title: "Core Networking",
		description:
			"Plan the switching, cabling, wireless and connectivity infrastructure that supports connected surveillance devices.",
		href: "/services/core-networking/",
	},
	{
		icon: Wrench,
		title: "Annual Maintenance Contract",
		description:
			"Discuss ongoing support and maintenance arrangements for installed surveillance and network equipment.",
		href: "/services/amc/",
	},
] as const;

const faqs = [
	{
		question: "What is network surveillance?",
		answer:
			"Network surveillance generally uses IP cameras connected over a data network. Video is sent to compatible recording or video management equipment and can be viewed by authorised users according to the system's configuration.",
	},
	{
		question:
			"How is network surveillance different from an analogue CCTV system?",
		answer:
			"IP surveillance cameras transmit digital video over a network and commonly connect to an NVR or VMS. Traditional analogue systems use different camera signal and cabling arrangements, often with a DVR. The best option depends on the existing installation, site requirements and equipment compatibility.",
	},
	{
		question: "Do IP cameras need a separate network?",
		answer:
			"Not in every installation, but surveillance traffic should be planned carefully. A dedicated physical network or a logically separated VLAN may be appropriate depending on the camera count, bandwidth, security requirements and existing network design.",
	},
	{
		question: "What is a PoE switch, and why is it used?",
		answer:
			"A Power over Ethernet switch can carry network data and electrical power over a compatible Ethernet cable to supported cameras. The switch standard, per-port power and total power budget must meet the connected devices' requirements.",
	},
	{
		question: "How much storage is needed for video recording?",
		answer:
			"Storage depends on the number of cameras, resolution, frame rate, codec, recording schedule, scene activity and desired retention period. The recorder's supported drive capacity and any redundancy requirements also matter, so storage should be sized for the actual design.",
	},
	{
		question: "Can I view cameras remotely?",
		answer:
			"Remote viewing may be available through a compatible recorder or VMS and its supported application. It should be configured with appropriate authentication, user permissions and secure network access. Features vary by product and may require licences or additional configuration.",
	},
	{
		question: "Can an existing CCTV system be connected to a network?",
		answer:
			"Possibly. The existing camera type, recorder, network interfaces, cabling and available integration options need to be checked. Some systems can be upgraded or integrated, while others may require replacement equipment or a separate design.",
	},
	{
		question: "Can network surveillance cover more than one building?",
		answer:
			"Some NVR and VMS platforms support multiple sites, but the design depends on network connectivity between locations, bandwidth, user permissions, licensing and the selected platform's capabilities.",
	},
	{
		question: "What information is needed for a quotation?",
		answer:
			"Share the site location, property type, approximate camera count, areas to be covered, existing cameras and network equipment, recording and retention expectations, remote-viewing needs and any integration requirements. A site assessment may be needed to confirm the installation scope.",
	},
];

function NetworkSurveillanceSolutionsPage() {
	return (
		<main className="pb-20">
			{/* Hero */}
			<section className="page-wrap pt-8 sm:pt-12">
				<div className="relative isolate overflow-hidden rounded-3xl border border-(--line) bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.14),transparent_42%),linear-gradient(135deg,var(--header-bg),var(--background))] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
					<div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-72 w-72 rounded-full border border-red-500/15" />
					<div className="pointer-events-none absolute -right-5 -top-9 -z-10 h-52 w-52 rounded-full border border-red-500/15" />

					<div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
						<div>
							<Badge
								variant="outline"
								className="mb-5 gap-2 border-red-500/30 bg-red-500/10 px-3 py-1 text-red-700 dark:text-red-300"
							>
								<Network className="h-3.5 w-3.5" />
								Surveillance / Network Surveillance Solutions
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								Connected surveillance built around your network and site.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Plan and connect IP cameras, PoE networking, recording systems
								and authorised remote viewing as one coordinated surveillance
								environment. Baroda Enterprise can help assess your existing
								infrastructure and define a suitable approach for offices,
								residential properties and industrial facilities.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Discuss Your Requirements <ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#network-surveillance-services">Explore Solutions</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									IP camera connectivity
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Network & recording planning
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Secure viewing considerations
								</span>
							</div>
						</div>

						<div className="relative">
							<div className="overflow-hidden rounded-2xl border border-(--line) bg-background shadow-xl">
								<img
									src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1100&q=85"
									alt="Security camera monitoring a building environment"
									className="h-64 w-full object-cover sm:h-80 lg:h-[390px]"
								/>
								<div className="grid gap-4 p-5 sm:grid-cols-2">
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<Network className="h-4 w-4 text-red-600" />
											Connected camera network
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Connect compatible IP cameras, switches and recording
											equipment around the site's network design.
										</p>
									</div>
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<Monitor className="h-4 w-4 text-red-600" />
											Centralised video access
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Organise live viewing and recorded footage for authorised
											users on compatible platforms.
										</p>
									</div>
								</div>
							</div>
							<div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-(--line) bg-background p-4 shadow-lg sm:flex">
								<div className="rounded-lg bg-red-500/10 p-2 text-red-700 dark:text-red-300">
									<Activity className="h-5 w-5" />
								</div>
								<div>
									<p className="text-sm font-semibold text-(--ink)">
										Plan beyond the camera
									</p>
									<p className="text-xs text-(--ink-soft)">
										Network, storage, access and power
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
						More than camera connectivity
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Bring cameras, recording and network infrastructure together.
					</h2>
				</div>
				<div className="space-y-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
					<p>
						An IP surveillance system depends on more than the cameras
						themselves. Switch capacity, cabling, network topology, recording
						equipment, storage and authorised access all influence how the
						complete installation performs.
					</p>
					<p>
						Baroda Enterprise can review these elements with you and help define
						an installation scope that fits your property, existing network and
						operational requirements. Equipment selection and integrations
						should be confirmed against the actual site and supported device
						specifications.
					</p>
				</div>
			</section>

			{/* Services */}
			<section className="page-wrap mt-16" id="network-surveillance-services">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Network surveillance services
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Plan every part of a connected video surveillance system.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Coordinate camera connectivity, switching, recording and access
						requirements as part of one practical design. The final scope
						depends on the property, selected products and existing network.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{solutionServices.map((service) => {
						const Icon = service.icon;
						return (
							<Card
								key={service.title}
								className="h-full rounded-2xl border-(--line)"
							>
								<CardHeader>
									<div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-700 dark:text-red-300">
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
												<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
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

			{/* Components */}
			<section className="page-wrap mt-16">
				<div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							Core system elements
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Understand the equipment behind network video.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							Each element needs to be selected and configured in relation to
							the others. Confirm product compatibility, capacity and supported
							features before finalising the system.
						</p>
						<Button asChild variant="outline" className="mt-6 gap-2">
							<Link to="/contact-us">
								Discuss system requirements <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						{networkElements.map((element) => {
							const Icon = element.icon;
							return (
								<Card
									key={element.title}
									className="rounded-2xl border-(--line)"
								>
									<CardHeader>
										<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
											<Icon className="h-5 w-5" />
										</div>
										<CardTitle className="text-base">{element.title}</CardTitle>
										<CardDescription className="leading-6">
											{element.description}
										</CardDescription>
									</CardHeader>
									<CardContent className="flex flex-wrap gap-2">
										{element.tags.map((tag) => (
											<Badge
												key={tag}
												variant="secondary"
												className="font-normal"
											>
												{tag}
											</Badge>
										))}
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>
			</section>

			{/* Environments */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Where network surveillance can be used
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Plan connected surveillance around your property.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Camera placement, connectivity and recording needs vary by
						environment. The design should reflect the site's operating
						conditions and legitimate monitoring objectives.
					</p>
				</div>

				<div className="mt-8 grid gap-4 lg:grid-cols-3">
					{environments.map((environment) => {
						const Icon = environment.icon;
						return (
							<Card
								key={environment.title}
								className="rounded-2xl border-(--line)"
							>
								<CardHeader>
									<div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-700 dark:text-red-300">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle className="text-lg">{environment.title}</CardTitle>
									<CardDescription className="leading-6">
										{environment.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="flex flex-wrap gap-2">
									{environment.tags.map((tag) => (
										<Badge
											key={tag}
											variant="secondary"
											className="font-normal"
										>
											{tag}
										</Badge>
									))}
								</CardContent>
							</Card>
						);
					})}
				</div>
			</section>

			{/* Planning factors */}
			<section className="page-wrap mt-16">
				<div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							Before installation
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Design for reliable video, sensible access and future needs.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							A site assessment helps identify network constraints and agree the
							practical requirements before equipment is selected or
							installation begins.
						</p>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						{planningFactors.map((factor) => {
							const Icon = factor.icon;
							return (
								<div
									key={factor.title}
									className="rounded-2xl border border-(--line) bg-background p-5"
								>
									<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
										<Icon className="h-5 w-5" />
									</div>
									<h3 className="text-base font-semibold text-(--ink)">
										{factor.title}
									</h3>
									<p className="mt-2 text-sm leading-6 text-(--ink-soft)">
										{factor.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Delivery process */}
			<section className="page-wrap mt-16">
				<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
					<div className="max-w-2xl">
						<Badge variant="outline" className="mb-3">
							Our approach
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							From site review to tested surveillance connectivity.
						</h2>
					</div>
					<p className="max-w-md text-sm leading-6 text-(--ink-soft)">
						A clear process helps align the camera layout, network design,
						recording configuration and handover requirements.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{deliverySteps.map((step) => {
						const Icon = step.icon;
						return (
							<Card key={step.number} className="rounded-2xl border-(--line)">
								<CardHeader>
									<div className="flex items-center justify-between">
										<span className="text-sm font-bold tracking-widest text-red-600">
											{step.number}
										</span>
										<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-700 dark:text-red-300">
											<Icon className="h-5 w-5" />
										</div>
									</div>
									<CardTitle className="pt-3 text-base">{step.title}</CardTitle>
									<CardDescription className="leading-6">
										{step.description}
									</CardDescription>
								</CardHeader>
							</Card>
						);
					})}
				</div>
			</section>

			{/* Related services */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Related solutions
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Build a more connected security environment.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Network surveillance may form part of a wider CCTV, access,
						connectivity and maintenance requirement.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{relatedServices.map((service) => {
						const Icon = service.icon;
						return (
							<Card
								key={service.title}
								className="flex h-full flex-col rounded-2xl border-(--line)"
							>
								<CardHeader className="flex-1">
									<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle className="text-base">{service.title}</CardTitle>
									<CardDescription className="leading-6">
										{service.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Button
										asChild
										variant="ghost"
										className="h-auto px-0 text-red-700 hover:bg-transparent hover:text-red-800 dark:text-red-300"
									>
										<Link to={service.href} className="gap-2">
											Explore service <ArrowRight className="h-4 w-4" />
										</Link>
									</Button>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</section>

			{/* FAQs */}
			<section className="page-wrap mt-16">
				<div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							Frequently asked questions
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Network surveillance questions, answered.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft)">
							Have a site-specific requirement? Share your camera, network or
							recording details and discuss the options with our team.
						</p>
						<Button asChild className="mt-6 gap-2">
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
				<div className="relative isolate overflow-hidden rounded-3xl border border-red-500/20 bg-[linear-gradient(120deg,rgba(239,68,68,0.12),transparent_55%),var(--header-bg)] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
					<div className="pointer-events-none absolute -right-12 -top-20 -z-10 h-64 w-64 rounded-full border border-red-500/15" />
					<div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
						<div className="max-w-2xl">
							<Badge
								variant="outline"
								className="mb-4 gap-2 border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300"
							>
								<RadioTower className="h-3.5 w-3.5" />
								Plan your network surveillance system
							</Badge>
							<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
								Need connected surveillance for your property?
							</h2>
							<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
								Tell us about your site, camera coverage, existing network and
								recording requirements. We can discuss the next steps for a
								suitable network surveillance installation.
							</p>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
							<Button asChild size="lg" className="gap-2">
								<Link to="/contact-us">
									Request a Consultation <ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button asChild size="lg" variant="outline">
								<Link to="/surveillance/cctv-solutions/">
									Explore CCTV Solutions
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
