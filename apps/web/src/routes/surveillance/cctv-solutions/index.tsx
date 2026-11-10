import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	BadgeCheck,
	Building2,
	Camera,
	CheckCircle2,
	ClipboardCheck,
	Clock3,
	Eye,
	Factory,
	HardDrive,
	Home,
	LockKeyhole,
	MapPinned,
	Monitor,
	Network,
	ScanEye,
	Settings2,
	ShieldCheck,
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

export const Route = createFileRoute("/surveillance/cctv-solutions/")({
	component: CctvSolutionsPage,
});

const cctvServices = [
	{
		icon: Camera,
		title: "CCTV camera systems",
		description:
			"Plan a camera setup around the areas that need visibility, the environment in which each camera will operate and the level of detail required.",
		points: [
			"Indoor and outdoor camera options",
			"Coverage for entrances, common areas and workspaces",
			"Camera selection based on location and conditions",
		],
	},
	{
		icon: ScanEye,
		title: "Camera placement & coverage planning",
		description:
			"Identify useful camera positions and viewing angles while considering blind spots, lighting, mounting locations and the purpose of each view.",
		points: [
			"Site walk-through and coverage requirements",
			"Field-of-view and mounting considerations",
			"Review of overlaps and potential blind spots",
		],
	},
	{
		icon: HardDrive,
		title: "DVR, NVR & recording storage",
		description:
			"Select and configure recording equipment and storage capacity according to camera count, recording settings and the required retention period.",
		points: [
			"DVR and NVR configuration considerations",
			"Storage sizing and retention planning",
			"Playback, search and footage export workflow",
		],
	},
	{
		icon: Smartphone,
		title: "Remote viewing & user access",
		description:
			"Where supported by the selected equipment and network setup, configure authorised viewing through compatible computers and mobile devices.",
		points: [
			"Remote viewing requirements assessment",
			"User accounts and access permissions",
			"Secure connectivity and access settings",
		],
	},
	{
		icon: Network,
		title: "Network, cabling & integration",
		description:
			"Plan the network and cabling required to connect cameras, recorders, switches and viewing locations as part of the wider site infrastructure.",
		points: [
			"IP camera and network connectivity planning",
			"Power and cabling route considerations",
			"Integration with relevant existing infrastructure",
		],
	},
	{
		icon: Wrench,
		title: "Maintenance & troubleshooting",
		description:
			"Review system operation and help investigate issues affecting camera views, recording, connectivity, playback or authorised remote access.",
		points: [
			"Camera and recorder health checks",
			"Recording and playback checks",
			"Maintenance options based on agreed scope",
		],
	},
];

const cameraTypes = [
	{
		icon: Camera,
		title: "Dome cameras",
		description:
			"A compact form factor often considered for indoor areas such as reception spaces, corridors and other shared environments.",
		tags: ["Indoor areas", "Ceilings", "Shared spaces"],
	},
	{
		icon: Video,
		title: "Bullet cameras",
		description:
			"A visible camera style commonly considered for perimeter views, entrances, loading areas and selected outdoor locations.",
		tags: ["Perimeters", "Entrances", "Outdoor views"],
	},
	{
		icon: ScanEye,
		title: "PTZ cameras",
		description:
			"Pan-tilt-zoom options can provide adjustable viewing direction and zoom where the site layout and monitoring requirements justify them.",
		tags: ["Larger areas", "Adjustable views", "Operator control"],
	},
	{
		icon: Eye,
		title: "Special-purpose cameras",
		description:
			"Low-light, wide-dynamic-range, thermal or other specialised options may be considered when the operating conditions call for them.",
		tags: ["Low light", "Difficult lighting", "Special environments"],
	},
];

const systemComponents = [
	{
		icon: Camera,
		title: "Cameras",
		description:
			"Capture video from selected areas. Resolution, lens, field of view, lighting performance and environmental rating should match the location.",
	},
	{
		icon: HardDrive,
		title: "Recorder & storage",
		description:
			"DVRs or NVRs manage recording, playback and storage. Capacity depends on the number of cameras, settings and retention requirement.",
	},
	{
		icon: Network,
		title: "Network & connectivity",
		description:
			"Switches, routers and network links connect IP cameras, recorders and authorised viewing devices where the design requires them.",
	},
	{
		icon: Monitor,
		title: "Monitoring devices",
		description:
			"Local monitors or compatible computers can provide a viewing point for staff who are authorised to access the CCTV system.",
	},
];

const environments = [
	{
		icon: Home,
		title: "Residential buildings",
		description:
			"Plan coverage for selected entrances, parking areas, building perimeters, lobbies and common spaces in apartments and housing societies.",
		tags: ["Apartments", "Housing societies", "Residential towers"],
	},
	{
		icon: Factory,
		title: "Industrial facilities",
		description:
			"Consider visibility across gates, production areas, warehouses, loading bays and site boundaries while accounting for operating conditions.",
		tags: ["Factories", "Warehouses", "Industrial premises"],
	},
	{
		icon: Building2,
		title: "Commercial properties",
		description:
			"Support visibility for offices, retail spaces, hotels and other customer-facing or staff-only areas through a site-specific camera plan.",
		tags: ["Offices", "Retail", "Commercial buildings"],
	},
];

const planningFactors = [
	{
		icon: MapPinned,
		title: "Coverage objectives",
		description:
			"List the areas that need monitoring and the reason each view is required. Identify entrances, movement routes, assets and operational zones before choosing camera positions.",
	},
	{
		icon: Zap,
		title: "Lighting & environment",
		description:
			"Consider daylight, shadows, night-time lighting, weather exposure, dust, vibration and temperature so the selected equipment is suitable for its location.",
	},
	{
		icon: Clock3,
		title: "Recording & retention",
		description:
			"Set a realistic footage-retention target and consider camera count, image quality, frame rate, recording schedule and available storage capacity together.",
	},
	{
		icon: LockKeyhole,
		title: "Privacy & authorised access",
		description:
			"Define who can view, export and manage footage. Camera placement should respect privacy, avoid inappropriate areas and follow applicable legal requirements.",
	},
];

const deliverySteps = [
	{
		number: "01",
		icon: ClipboardCheck,
		title: "Understand the site",
		description:
			"Discuss the property, operating hours, security objectives, existing equipment, important areas and any constraints around cabling, power or network access.",
	},
	{
		number: "02",
		icon: MapPinned,
		title: "Plan cameras & recording",
		description:
			"Identify proposed camera locations, viewing angles, equipment requirements, recording approach, storage needs and authorised viewing arrangements.",
	},
	{
		number: "03",
		icon: Settings2,
		title: "Install & configure",
		description:
			"Coordinate the agreed installation, connect the system components and configure recording, time settings, user permissions and supported viewing features.",
	},
	{
		number: "04",
		icon: BadgeCheck,
		title: "Test & hand over",
		description:
			"Check camera views, recording, playback and agreed remote-access functions. Explain the operating basics and document relevant system details.",
	},
];

const relatedServices = [
	{
		icon: Network,
		title: "Core Networking",
		description:
			"Plan the wired and wireless connectivity that IP cameras and network video recorders may require.",
		href: "/services/core-networking/",
	},
	{
		icon: ShieldCheck,
		title: "Enterprise Security",
		description:
			"Consider network access, device security and account controls around connected surveillance equipment.",
		href: "/services/enterprise-security/",
	},
	{
		icon: Wrench,
		title: "Annual Maintenance Contract",
		description:
			"Discuss ongoing maintenance arrangements for CCTV equipment and other covered technology assets.",
		href: "/services/amc/",
	},
];

const faqs = [
	{
		question: "What is included in a CCTV solution?",
		answer:
			"A CCTV solution may include cameras, mounting accessories, cabling, power equipment, a DVR or NVR, storage and local or remote viewing arrangements. The exact system depends on the site, coverage objectives, recording needs and selected equipment.",
	},
	{
		question: "What is the difference between DVR and NVR systems?",
		answer:
			"DVR systems generally record video from analogue cameras, while NVR systems are designed to record video from IP cameras over a network. The appropriate option depends on the existing infrastructure, camera requirements, expansion plans and project budget.",
	},
	{
		question: "Can I view CCTV footage on my mobile phone?",
		answer:
			"Remote viewing may be available when the selected recorder or camera supports it and the network is configured appropriately. It also requires authorised accounts, suitable connectivity and secure access settings.",
	},
	{
		question: "How many days of footage can a CCTV system store?",
		answer:
			"Retention depends on storage capacity, camera count, resolution, frame rate, compression, recording schedule and motion settings. The storage requirement should be calculated around the retention period you need rather than assuming a fixed number of days.",
	},
	{
		question: "Can an existing CCTV system be upgraded?",
		answer:
			"In many cases, selected cameras, recorders, storage or network components can be upgraded or reused. Compatibility, equipment condition, cabling and the required features should be checked before deciding what to retain or replace.",
	},
	{
		question: "Are CCTV cameras suitable for factories and warehouses?",
		answer:
			"CCTV can be planned for industrial environments, but camera selection must account for lighting, dust, moisture, temperature, vibration, mounting positions and the operational activity in each area. Some locations may require equipment designed for specific environmental conditions.",
	},
	{
		question: "Can CCTV be integrated with an existing network?",
		answer:
			"IP cameras and network video recorders can often use an existing network, but capacity, cabling, PoE availability, network segmentation, cybersecurity and the impact on other business traffic should be assessed first.",
	},
	{
		question: "Where should CCTV cameras not be installed?",
		answer:
			"Cameras should not be positioned in areas where people have a reasonable expectation of privacy, such as toilets or changing rooms. Coverage should be limited to a legitimate purpose, access to footage should be controlled, and applicable privacy and legal requirements should be followed.",
	},
	{
		question: "What information is needed for a CCTV quotation?",
		answer:
			"Share the property type and location, approximate site size, number of floors or key areas, preferred camera locations, existing CCTV or network equipment, desired recording retention and whether remote viewing is required. A site assessment may be needed to finalise the design.",
	},
];

function CctvSolutionsPage() {
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
								<Camera className="h-3.5 w-3.5" />
								Surveillance / CCTV Solutions
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								CCTV solutions planned around your property and operations.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Improve visibility across important areas with a CCTV system
								designed around your site, camera coverage, recording needs and
								authorised viewing requirements. Baroda Enterprise can help
								assess the environment and plan a suitable surveillance setup
								for residential, commercial and industrial properties.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Discuss Your CCTV Requirements{" "}
										<ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#cctv-services">Explore Solutions</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Camera coverage planning
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Recording & storage options
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Residential & industrial sites
								</span>
							</div>
						</div>

						<div className="relative">
							<div className="overflow-hidden rounded-2xl border border-(--line) bg-background shadow-xl">
								<img
									src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1100&q=85"
									alt="CCTV security camera mounted on a building"
									className="h-64 w-full object-cover sm:h-80 lg:h-[390px]"
								/>
								<div className="grid gap-4 p-5 sm:grid-cols-2">
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<Eye className="h-4 w-4 text-red-600" />
											Planned coverage
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Match camera positions and viewing angles to the areas
											that need monitoring.
										</p>
									</div>
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<HardDrive className="h-4 w-4 text-red-600" />
											Practical recording
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Align recording settings and storage capacity with the
											required footage-retention period.
										</p>
									</div>
								</div>
							</div>
							<div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-(--line) bg-background p-4 shadow-lg sm:flex">
								<div className="rounded-lg bg-red-500/10 p-2 text-red-700 dark:text-red-300">
									<ShieldCheck className="h-5 w-5" />
								</div>
								<div>
									<p className="text-sm font-semibold text-(--ink)">
										Site-specific design
									</p>
									<p className="text-xs text-(--ink-soft)">
										Coverage matched to your requirements
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
						A considered surveillance setup
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Useful CCTV starts with knowing what you need to see.
					</h2>
				</div>
				<div className="space-y-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
					<p>
						A CCTV system is more than a collection of cameras. The location and
						angle of each camera, available lighting, recording method, network
						capacity and access permissions all affect how useful the system
						will be in day-to-day operations.
					</p>
					<p>
						Baroda Enterprise can discuss the purpose of the installation,
						identify important viewing areas and help define a suitable system
						scope. The final equipment and configuration should be selected
						after considering the site conditions, compatibility and the
						footage-retention requirements.
					</p>
				</div>
			</section>

			{/* Services */}
			<section className="page-wrap mt-16" id="cctv-services">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						CCTV services
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						The key parts of a complete CCTV project.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						From camera placement to recording and remote viewing, each part
						should work together. The scope can be tailored to a new
						installation or an assessment of an existing system.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{cctvServices.map((service) => {
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

			{/* Camera types */}
			<section className="page-wrap mt-16">
				<div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							Camera options
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Choose camera types for the location, not just the specification
							sheet.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							Different camera designs suit different viewing tasks. Selection
							should account for field of view, mounting height, lighting,
							environmental conditions and the level of detail needed.
						</p>
						<Button asChild variant="outline" className="mt-6 gap-2">
							<Link to="/contact-us">
								Discuss camera options <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						{cameraTypes.map((cameraType) => {
							const Icon = cameraType.icon;
							return (
								<Card
									key={cameraType.title}
									className="rounded-2xl border-(--line)"
								>
									<CardHeader>
										<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
											<Icon className="h-5 w-5" />
										</div>
										<CardTitle className="text-base">
											{cameraType.title}
										</CardTitle>
										<CardDescription className="leading-6">
											{cameraType.description}
										</CardDescription>
									</CardHeader>
									<CardContent className="flex flex-wrap gap-2">
										{cameraType.tags.map((tag) => (
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

			{/* System components */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						How the system fits together
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						A connected system from camera to viewing point.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						A CCTV design should account for the complete video path: capture,
						connectivity, recording, storage and authorised playback.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{systemComponents.map((component) => {
						const Icon = component.icon;
						return (
							<Card
								key={component.title}
								className="rounded-2xl border-(--line)"
							>
								<CardHeader>
									<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-700 dark:text-red-300">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle className="text-base">{component.title}</CardTitle>
									<CardDescription className="leading-6">
										{component.description}
									</CardDescription>
								</CardHeader>
							</Card>
						);
					})}
				</div>
			</section>

			{/* Environments */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Where CCTV can be used
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Surveillance planning for different types of properties.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Every property has a different layout, operating pattern and set of
						priorities. Camera coverage should be planned around those
						differences rather than applying one layout everywhere.
					</p>
				</div>

				<div className="mt-8 grid gap-4 lg:grid-cols-3">
					{environments.map((environment) => {
						const Icon = environment.icon;
						return (
							<Card
								key={environment.title}
								className="h-full rounded-2xl border-(--line)"
							>
								<CardHeader>
									<div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-(--ink)">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle>{environment.title}</CardTitle>
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
				<div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							Before installation
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Four decisions that shape a useful CCTV setup.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							Defining the requirements early helps avoid unnecessary cameras,
							unsuitable viewing angles, insufficient storage or access
							arrangements that are difficult to manage.
						</p>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						{planningFactors.map((factor) => {
							const Icon = factor.icon;
							return (
								<Card
									key={factor.title}
									className="rounded-2xl border-(--line)"
								>
									<CardHeader>
										<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
											<Icon className="h-5 w-5" />
										</div>
										<CardTitle className="text-base">{factor.title}</CardTitle>
										<CardDescription className="leading-6">
											{factor.description}
										</CardDescription>
									</CardHeader>
								</Card>
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
							Project approach
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							From site assessment to system handover.
						</h2>
					</div>
					<p className="max-w-md text-sm leading-6 text-(--ink-soft)">
						A defined process helps align the camera layout, equipment,
						installation work and final configuration with the agreed scope.
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
									<CardTitle className="pt-2 text-base">{step.title}</CardTitle>
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
						Related services
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Support the surveillance system with the right infrastructure.
					</h2>
				</div>

				<div className="mt-8 grid gap-4 md:grid-cols-3">
					{relatedServices.map((service) => {
						const Icon = service.icon;
						return (
							<Card key={service.title} className="rounded-2xl border-(--line)">
								<CardHeader>
									<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle className="text-base">{service.title}</CardTitle>
									<CardDescription className="leading-6">
										{service.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Button asChild variant="link" className="h-auto p-0">
										<Link to={service.href as never} className="gap-2">
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
			<section className="page-wrap mt-16" id="faqs">
				<div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							Frequently asked questions
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							CCTV solutions: common questions.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							Have a site-specific question? Share your requirements with our
							team and discuss the next steps for your surveillance project.
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
								<AccordionTrigger className="text-left text-sm font-semibold sm:text-base">
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
				<div className="relative isolate overflow-hidden rounded-3xl border border-red-500/20 bg-[linear-gradient(120deg,rgba(239,68,68,0.12),transparent_65%),var(--header-bg)] px-6 py-10 sm:px-10 sm:py-12">
					<div className="pointer-events-none absolute -right-12 -top-20 -z-10 h-64 w-64 rounded-full border border-red-500/15" />
					<div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
						<div className="max-w-2xl">
							<Badge
								variant="outline"
								className="mb-4 border-red-500/30 text-red-700 dark:text-red-300"
							>
								Plan your surveillance project
							</Badge>
							<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
								Let’s discuss the right CCTV setup for your property.
							</h2>
							<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
								Tell us about your site, the areas you want to monitor and your
								recording requirements. Our team can discuss the next steps for
								assessing and planning your CCTV solution.
							</p>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
							<Button asChild size="lg" className="gap-2">
								<Link to="/contact-us">
									Request a CCTV Consultation <ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button asChild size="lg" variant="outline">
								<Link to="/surveillance/cctv-solutions/">Back to top</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
