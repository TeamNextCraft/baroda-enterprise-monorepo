import { createFileRoute, Link } from "@tanstack/react-router";
import {
	Activity,
	ArrowRight,
	BadgeCheck,
	BellRing,
	Building2,
	Cable,
	CheckCircle2,
	ClipboardCheck,
	Factory,
	FileCheck2,
	Home,
	Layers3,
	MapPinned,
	MonitorCog,
	Network,
	RadioTower,
	SearchCheck,
	ShieldCheck,
	Siren,
	Thermometer,
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

export const Route = createFileRoute("/fire-safety/fire-detection")({
	component: FireDetectionPage,
});

const detectionServices = [
	{
		icon: SearchCheck,
		title: "Fire detection system planning",
		description:
			"Review the building layout, occupancy, environmental conditions and known hazards to help define an appropriate detection approach and device locations.",
		points: [
			"Review of floor plans and site conditions",
			"Detector type and location coordination",
			"Zoning and coverage considerations",
		],
	},
	{
		icon: MonitorCog,
		title: "Fire alarm control panels",
		description:
			"Plan the control and indication equipment that receives device signals, identifies alarm or fault conditions and supports the agreed system arrangement.",
		points: [
			"Conventional and addressable panel options",
			"Zone, loop and device-capacity considerations",
			"Panel location and operator access",
		],
	},
	{
		icon: BellRing,
		title: "Alarm notification devices",
		description:
			"Coordinate audible and visual notification so occupants and designated staff can be alerted in a way that suits the premises and its operating environment.",
		points: [
			"Sounders, hooters and bells",
			"Visual indicators where appropriate",
			"Notification coverage and audibility review",
		],
	},
	{
		icon: Siren,
		title: "Manual call points & interfaces",
		description:
			"Include manual alarm initiation and agreed interfaces with other building systems where the design and equipment support those functions.",
		points: [
			"Manual call point placement considerations",
			"Input and output interface modules",
			"Coordination with selected building systems",
		],
	},
	{
		icon: Network,
		title: "System integration & communication",
		description:
			"Review how detection devices, panels, remote indicators and approved interfaces communicate across the proposed system architecture.",
		points: [
			"Loop, zone and network architecture review",
			"Panel-to-panel communication considerations",
			"Interfaces with agreed building equipment",
		],
	},
	{
		icon: Wrench,
		title: "Testing & maintenance support",
		description:
			"Define an appropriate programme for functional checks, fault review and maintenance of installed equipment, based on the agreed service scope.",
		points: [
			"Detector, call point and alarm-device checks",
			"Panel status and fault-condition review",
			"Maintenance records and follow-up actions",
		],
	},
];

const systemTypes = [
	{
		icon: Layers3,
		title: "Conventional fire alarm systems",
		description:
			"Conventional systems organise initiating devices into zones. The control panel indicates the zone associated with an alarm condition, while further investigation identifies the specific device or area.",
		tags: [
			"Zone-based indication",
			"Smaller or simpler layouts",
			"Wired devices",
		],
	},
	{
		icon: Network,
		title: "Addressable fire alarm systems",
		description:
			"Addressable systems identify individual compatible devices on a loop or network, which can support more specific event information and system management in larger or more complex premises.",
		tags: [
			"Individual device identification",
			"Loop architecture",
			"Expandable design",
		],
	},
	{
		icon: RadioTower,
		title: "Wireless fire detection systems",
		description:
			"Wireless devices communicate with compatible control equipment by radio. Suitability depends on the building fabric, radio conditions, device approvals, battery management and system design.",
		tags: [
			"Radio communication",
			"Reduced signal cabling",
			"Site survey required",
		],
	},
	{
		icon: BellRing,
		title: "Standalone smoke & heat alarms",
		description:
			"Standalone alarms provide local warning at the device. They may be appropriate in some settings, but they are not automatically a substitute for a building-wide fire detection and alarm system where one is required.",
		tags: ["Local warning", "Smoke or heat sensing", "Application dependent"],
	},
];

const systemComponents = [
	{
		icon: Activity,
		title: "Smoke & heat detectors",
		description:
			"Detector technology and location should reflect the space, expected conditions, potential fire risks and the possibility of unwanted alarms.",
		tags: [
			"Optical / photoelectric",
			"Heat detection",
			"Special application devices",
		],
	},
	{
		icon: MonitorCog,
		title: "Control & indicating equipment",
		description:
			"The fire alarm control panel receives system information and provides indication of alarm, supervisory and fault conditions according to its design.",
		tags: ["Control panel", "Loop / zone indication", "Power supply"],
	},
	{
		icon: Siren,
		title: "Manual call points & notification",
		description:
			"Manual call points allow a person to raise an alarm, while sounders and visual devices communicate the alarm condition to occupants.",
		tags: ["Manual call points", "Hooters / sounders", "Visual notification"],
	},
	{
		icon: Cable,
		title: "Cabling, modules & interfaces",
		description:
			"Cables, isolators and compatible interface modules connect system devices and support the designed operation of associated equipment.",
		tags: ["Fire alarm cabling", "Input / output modules", "Device isolators"],
	},
];

const propertyTypes = [
	{
		icon: Home,
		title: "Residential buildings",
		description:
			"Apartments, housing societies, residential towers and shared facilities may need coordinated detection and alarm arrangements based on building height, layout, occupancy and applicable requirements.",
		tags: ["Apartments & towers", "Housing societies", "Common areas"],
		href: "/fire-safety/residential",
	},
	{
		icon: Factory,
		title: "Industrial facilities",
		description:
			"Factories, production areas and warehouses may have process, storage, dust, heat or environmental conditions that influence detector selection and alarm-system design.",
		tags: ["Factories", "Production areas", "Warehouses"],
		href: "/fire-safety/industrial",
	},
	{
		icon: Building2,
		title: "Commercial properties",
		description:
			"Offices, retail spaces, hotels, healthcare premises and educational buildings require consideration of public access, occupancy patterns, escape routes and operating hours.",
		tags: ["Offices & retail", "Hotels & hospitals", "Educational buildings"],
		href: "/fire-safety/commercial",
	},
] as const;

const planningFactors = [
	{
		icon: Building2,
		title: "Building use & occupancy",
		description:
			"Understand the building's purpose, occupant profile, operating hours, floor arrangement and areas that may be occupied by visitors, staff or residents.",
	},
	{
		icon: Thermometer,
		title: "Environmental conditions",
		description:
			"Temperature, humidity, dust, steam, airflow and other site conditions can affect detector suitability and the risk of unwanted alarms.",
	},
	{
		icon: MapPinned,
		title: "Detector locations & coverage",
		description:
			"Review ceiling height, room geometry, obstructions, ventilation and manufacturer guidance before determining device type, spacing and location.",
	},
	{
		icon: BellRing,
		title: "Alarm notification & evacuation",
		description:
			"Consider how alarm signals will reach occupants, how different areas are notified and how the arrangement supports the building's emergency procedures.",
	},
	{
		icon: Zap,
		title: "Power, cabling & resilience",
		description:
			"Review cable routes, power supplies, standby arrangements, circuit supervision and continuity requirements for the proposed equipment.",
	},
	{
		icon: ShieldCheck,
		title: "Applicable standards & upkeep",
		description:
			"Confirm applicable codes, approvals and inspection requirements with qualified professionals and the relevant authority. Assign responsibility for routine testing and maintenance.",
	},
];

const deliverySteps = [
	{
		number: "01",
		icon: ClipboardCheck,
		title: "Review the premises",
		description:
			"Discuss the site use, floor plans, occupancy, environmental conditions, existing equipment and any known alarm or detection issues.",
	},
	{
		number: "02",
		icon: FileCheck2,
		title: "Define the system scope",
		description:
			"Identify the proposed system type, compatible equipment, device locations, zoning or loop arrangement, interfaces and project responsibilities.",
	},
	{
		number: "03",
		icon: Cable,
		title: "Install & configure",
		description:
			"Coordinate the agreed equipment, cabling, device installation and control-panel configuration in line with the approved project scope and manufacturer instructions.",
	},
	{
		number: "04",
		icon: BadgeCheck,
		title: "Test & hand over",
		description:
			"Complete the agreed functional checks, explain normal and alarm indications to the designated representative and provide relevant handover information.",
	},
];

const relatedSolutions = [
	{
		title: "Residential Fire Safety",
		description:
			"Fire protection planning for apartments, housing societies, homes and residential towers.",
		href: "/fire-safety/residential",
	},
	{
		title: "Industrial Fire Safety",
		description:
			"Fire detection and protection considerations for factories, warehouses and industrial premises.",
		href: "/fire-safety/industrial",
	},
	{
		title: "Commercial Fire Safety",
		description:
			"Fire safety solutions for offices, retail spaces, healthcare and other commercial buildings.",
		href: "/fire-safety/commercial",
	},
	{
		title: "Fire Suppression Systems",
		description:
			"Explore complementary systems intended to control or suppress fires in suitable applications.",
		href: "/fire-safety/fire-suppression",
	},
] as const;

const faqs = [
	{
		question:
			"What is the difference between a conventional and an addressable fire alarm system?",
		answer:
			"A conventional panel generally identifies the zone in which an alarm condition has occurred. An addressable panel can identify an individual compatible device and its location on the system. The appropriate option depends on the building layout, scale, operational needs and applicable requirements.",
	},
	{
		question: "Which detectors are used in a fire detection system?",
		answer:
			"Common options include smoke detectors and heat detectors. Other technologies may be appropriate for particular hazards or environments. Selection and placement should be based on the space, expected conditions, manufacturer guidance and the applicable design requirements.",
	},
	{
		question: "Can an existing fire alarm system be upgraded?",
		answer:
			"An upgrade may be possible after reviewing the existing panel, devices, wiring, condition, documentation and compatibility. The review should also consider whether the current arrangement remains appropriate for the building and applicable requirements.",
	},
	{
		question:
			"Can the fire alarm system connect to sprinklers or other building systems?",
		answer:
			"A fire alarm system may interface with selected equipment, such as approved releasing controls, smoke-control equipment or monitoring interfaces, where the design and compatible products support it. Each interface needs to be specifically engineered, tested and documented.",
	},
	{
		question: "Are wireless fire alarm systems suitable for every building?",
		answer:
			"No. Wireless suitability depends on radio conditions, building materials, layout, device approval, battery supervision, maintenance access and applicable requirements. A site assessment is needed before choosing a wireless arrangement.",
	},
	{
		question: "How often should fire detection and alarm equipment be tested?",
		answer:
			"Testing frequency and procedures should follow applicable requirements, system and device manufacturer instructions, and the building's maintenance plan. The responsible party should keep appropriate records and address faults promptly.",
	},
	{
		question:
			"Does installing a fire alarm system automatically provide a Fire Safety Certificate or NOC?",
		answer:
			"No. Installation alone does not guarantee a Fire Safety Certificate, NOC or other approval. The applicable process may involve design review, documentation, inspection and a decision by the relevant authority. Any approval-related assistance must be separately confirmed and handled by appropriately authorised professionals.",
	},
	{
		question:
			"What information is needed for a fire detection system quotation?",
		answer:
			"Share the property address, building use, number of floors, approximate area, floor plans, ceiling heights where available, existing panel and device details, known environmental conditions and the requested scope. Photos and previous inspection documents can support an initial discussion.",
	},
];

function FireDetectionPage() {
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
								<BellRing className="h-3.5 w-3.5" />
								Fire Safety / Detection & Alarm Systems
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								Fire detection and alarm systems designed around your building.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Explore smoke and heat detection, fire alarm panels, manual call
								points and occupant notification solutions for residential,
								commercial and industrial premises. Baroda Enterprise can
								discuss your site, review the existing arrangement and help
								define an appropriate system scope.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Discuss Your Project <ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#fire-detection-services">Explore Solutions</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Smoke & heat detection
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Alarm & notification devices
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Installation scope planning
								</span>
							</div>
						</div>

						<div className="relative">
							<div className="overflow-hidden rounded-2xl border border-(--line) bg-background shadow-xl">
								<img
									src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1100&q=85"
									alt="Technical team reviewing building systems"
									className="h-64 w-full object-cover sm:h-80 lg:h-[390px]"
								/>
								<div className="grid gap-4 p-5 sm:grid-cols-2">
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<SearchCheck className="h-4 w-4 text-red-600" />
											Early detection
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Select suitable detection technology for the space and its
											operating conditions.
										</p>
									</div>
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<Siren className="h-4 w-4 text-red-600" />
											Occupant alerting
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Coordinate alarm indication and notification with the
											building's emergency procedures.
										</p>
									</div>
								</div>
							</div>
							<div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-(--line) bg-background p-4 shadow-lg sm:flex">
								<div className="rounded-lg bg-red-500/10 p-2 text-red-700 dark:text-red-300">
									<BellRing className="h-5 w-5" />
								</div>
								<div>
									<p className="text-sm font-semibold text-(--ink)">
										Detection & notification
									</p>
									<p className="text-xs text-(--ink-soft)">
										Devices, panels and alarm outputs
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
						A coordinated detection approach
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Detect, indicate and communicate an alarm condition.
					</h2>
				</div>
				<div className="space-y-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
					<p>
						A fire detection and alarm system uses compatible initiating
						devices, control equipment and notification appliances to identify
						an alarm condition and alert people in the premises. The system
						needs to suit the building's use, layout, environmental conditions
						and emergency arrangements.
					</p>
					<p>
						Detector type, device spacing, zoning, panel capacity, cable routes
						and interfaces should be considered together. The final design and
						installation scope must follow applicable requirements, manufacturer
						instructions and the input of appropriately qualified professionals
						where required.
					</p>
				</div>
			</section>

			{/* Services */}
			<section className="page-wrap mt-16" id="fire-detection-services">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Detection & alarm services
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Explore the main elements of a fire detection and alarm project.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						The exact scope depends on the premises, existing equipment and
						project requirements. Confirm the services, product compatibility
						and testing responsibilities available from Baroda Enterprise before
						finalising a project.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{detectionServices.map((service) => {
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

			{/* System types */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Common system architectures
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Different detection architectures serve different building needs.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Conventional, addressable and wireless arrangements have different
						capabilities and design constraints. The right choice should be
						based on the building, required functionality, applicable standards
						and compatible equipment.
					</p>
				</div>

				<div className="mt-8 grid gap-4 lg:grid-cols-2">
					{systemTypes.map((system) => {
						const Icon = system.icon;
						return (
							<Card key={system.title} className="rounded-2xl border-(--line)">
								<CardHeader>
									<div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-700 dark:text-red-300">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle className="text-lg">{system.title}</CardTitle>
									<CardDescription className="leading-7">
										{system.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="flex flex-wrap gap-2">
									{system.tags.map((tag) => (
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

			{/* Components */}
			<section className="page-wrap mt-16">
				<div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							System components
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							A coordinated system is more than just detectors.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							Detection devices, manual initiation, control equipment,
							notification appliances, wiring and interfaces must work together
							as a complete system. Equipment selection and compatibility need
							to be checked at the design stage.
						</p>
						<Button asChild variant="outline" className="mt-6 gap-2">
							<Link to="/contact-us">
								Discuss your requirements <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						{systemComponents.map((component) => {
							const Icon = component.icon;
							return (
								<Card
									key={component.title}
									className="rounded-2xl border-(--line)"
								>
									<CardHeader>
										<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
											<Icon className="h-5 w-5" />
										</div>
										<CardTitle className="text-base">
											{component.title}
										</CardTitle>
										<CardDescription className="leading-6">
											{component.description}
										</CardDescription>
									</CardHeader>
									<CardContent className="flex flex-wrap gap-2">
										{component.tags.map((tag) => (
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

			{/* Property types */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Buildings & facilities
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Detection and alarm planning for different types of premises.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						The building type and its daily operation influence device
						selection, alarm notification, system zoning and maintenance
						arrangements.
					</p>
				</div>

				<div className="mt-8 grid gap-4 lg:grid-cols-3">
					{propertyTypes.map((property) => {
						const Icon = property.icon;
						return (
							<Card
								key={property.title}
								className="rounded-2xl border-(--line)"
							>
								<CardHeader>
									<div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-700 dark:text-red-300">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle className="text-lg">{property.title}</CardTitle>
									<CardDescription className="leading-6">
										{property.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="flex flex-wrap gap-2">
										{property.tags.map((tag) => (
											<Badge
												key={tag}
												variant="secondary"
												className="font-normal"
											>
												{tag}
											</Badge>
										))}
									</div>
									<Link
										to={property.href}
										className="inline-flex items-center gap-2 text-sm font-semibold text-red-700 transition-colors hover:text-red-800 dark:text-red-300 dark:hover:text-red-200"
									>
										Explore building solutions{" "}
										<ArrowRight className="h-4 w-4" />
									</Link>
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
							Start with the site conditions and the intended system operation.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							A site review helps identify unsuitable device locations,
							environmental challenges, existing system limitations and the
							information needed to prepare a practical installation scope.
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
										<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-700 dark:text-red-300">
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
							Our approach
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							A clear process from site review to system handover.
						</h2>
					</div>
					<p className="max-w-md text-sm leading-6 text-(--ink-soft)">
						Project responsibilities, equipment compatibility, testing and
						documentation should be agreed before installation begins.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{deliverySteps.map((step) => {
						const Icon = step.icon;
						return (
							<Card key={step.number} className="rounded-2xl border-(--line)">
								<CardHeader>
									<div className="flex items-center justify-between">
										<span className="text-3xl font-bold tracking-tight text-red-600/70">
											{step.number}
										</span>
										<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
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

			{/* Information for quotation */}
			<section className="page-wrap mt-16">
				<div className="grid gap-8 overflow-hidden rounded-3xl border border-(--line) bg-muted/40 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
					<div>
						<Badge variant="outline" className="mb-3">
							Prepare for a discussion
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							What to share when requesting a fire detection quotation.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							A few site details can help establish the initial scope. A site
							visit and review by the appropriate professionals may be needed
							before device quantities, design and pricing are finalised.
						</p>
						<Button asChild className="mt-6 gap-2">
							<Link to="/contact-us">
								Send an Enquiry <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>
					<div className="grid gap-3 sm:grid-cols-2">
						{[
							"Property address and building use",
							"Number of floors and approximate area",
							"Floor plans and ceiling heights, if available",
							"Existing panel, detector and alarm details",
							"Environmental conditions such as dust or steam",
							"Areas requiring detection or notification",
							"Existing cabling and available power arrangements",
							"Previous inspection records and known system issues",
						].map((item) => (
							<div
								key={item}
								className="flex items-start gap-3 rounded-xl border border-(--line) bg-background p-4"
							>
								<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
								<span className="text-sm leading-6 text-(--ink-soft)">
									{item}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Related solutions */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Explore fire safety
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Related fire protection solutions.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Fire detection is one part of a broader fire and life-safety
						strategy. Explore related building solutions or discuss the
						requirements of your premises with the team.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{relatedSolutions.map((solution) => (
						<Card key={solution.title} className="rounded-2xl border-(--line)">
							<CardHeader>
								<CardTitle className="text-base">{solution.title}</CardTitle>
								<CardDescription className="leading-6">
									{solution.description}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Link
									to={solution.href}
									className="inline-flex items-center gap-2 text-sm font-semibold text-red-700 transition-colors hover:text-red-800 dark:text-red-300 dark:hover:text-red-200"
								>
									Explore service <ArrowRight className="h-4 w-4" />
								</Link>
							</CardContent>
						</Card>
					))}
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
							Fire detection & alarm FAQs.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft)">
							Have a question about an existing panel, new installation or
							building requirement? Share the site details so the relevant
							options can be discussed.
						</p>
						<Button asChild variant="outline" className="mt-6 gap-2">
							<Link to="/contact-us">
								Ask a Question <ArrowRight className="h-4 w-4" />
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

			{/* Final CTA */}
			<section className="page-wrap mt-16">
				<div className="relative isolate overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#7f1d1d,#b91c1c_55%,#ea580c)] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
					<div className="pointer-events-none absolute -right-12 -top-20 -z-10 h-72 w-72 rounded-full border border-white/15" />
					<div className="pointer-events-none absolute -right-2 -top-10 -z-10 h-52 w-52 rounded-full border border-white/15" />
					<div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
						<div className="max-w-2xl">
							<Badge className="mb-4 border border-white/25 bg-white/10 text-white hover:bg-white/10">
								Fire Detection & Alarm Systems
							</Badge>
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
								Discuss the detection and alarm needs of your building.
							</h2>
							<p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
								Tell us about your property, existing equipment and the areas
								you want to protect. We can discuss the site information, the
								system options under consideration and the next steps for
								defining a project scope.
							</p>
						</div>
						<div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
							<Button asChild size="lg" variant="secondary" className="gap-2">
								<Link to="/contact-us">
									Request a Discussion <ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
							>
								<Link to="/">Back to Home</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
