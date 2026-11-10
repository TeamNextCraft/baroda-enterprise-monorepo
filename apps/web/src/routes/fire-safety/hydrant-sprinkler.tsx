import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	BadgeCheck,
	Building2,
	CheckCircle2,
	ClipboardCheck,
	Cylinder,
	Droplets,
	Factory,
	Fan,
	FileCheck2,
	Gauge,
	HardHat,
	Home,
	Layers3,
	Network,
	ShieldCheck,
	Siren,
	Waves,
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

export const Route = createFileRoute("/fire-safety/hydrant-sprinkler")({
	component: HydrantSprinklerPage,
});

const systemServices = [
	{
		icon: Waves,
		title: "Fire hydrant systems",
		description:
			"Plan hydrant networks that provide designated firefighting outlets around suitable buildings and site areas. The arrangement depends on the property, access, water supply and applicable design requirements.",
		points: [
			"External and internal hydrant planning",
			"Hydrant points, landing valves and access",
			"Coordination with pumps, tanks and pipework",
		],
	},
	{
		icon: Droplets,
		title: "Automatic sprinkler systems",
		description:
			"Coordinate sprinkler protection for appropriate building spaces, with head selection, layout and water distribution matched to the occupancy, hazard classification and ceiling arrangement.",
		points: [
			"Sprinkler head and coverage coordination",
			"Piping, control valves and alarm interfaces",
			"Area-by-area design and installation planning",
		],
	},
	{
		icon: Siren,
		title: "Wet risers & standpipes",
		description:
			"Consider vertical fire-water distribution for buildings where internal firefighting outlets are required. Riser configuration and outlet locations must align with building height, access and the approved design.",
		points: [
			"Riser and landing-valve arrangements",
			"Floor-wise outlet and access planning",
			"Pressure-zone and water-supply coordination",
		],
	},
	{
		icon: Fan,
		title: "Fire hose reels",
		description:
			"Plan hose-reel locations and connections for suitable building areas, ensuring that equipment is accessible and coordinated with the water supply and the building's emergency arrangements.",
		points: [
			"Hose-reel location and accessibility",
			"Cabinet, hose and nozzle considerations",
			"Connection to the designed water network",
		],
	},
	{
		icon: Gauge,
		title: "Fire pumps & water storage",
		description:
			"Coordinate the pumps, controllers, tanks and associated equipment required to deliver the specified water flow and pressure for the fire protection network.",
		points: [
			"Water storage and replenishment review",
			"Pump selection and control arrangement",
			"Pump-room access and service clearances",
		],
	},
	{
		icon: Wrench,
		title: "Testing & maintenance support",
		description:
			"Define inspection, testing and maintenance activities for the installed hydrant and sprinkler equipment according to the system design, manufacturer instructions and agreed scope.",
		points: [
			"Visual checks of valves, piping and equipment",
			"Specified flow, pressure and functional tests",
			"Inspection records and corrective-action tracking",
		],
	},
];

const systemTypes = [
	{
		icon: Waves,
		title: "Hydrant networks",
		description:
			"Hydrant systems distribute fire-fighting water to selected internal or external outlets. Their design considers building arrangement, fire-service access, outlet positions, water demand and the required pressure at the relevant points.",
		tags: ["External hydrants", "Landing valves", "Fire brigade access"],
	},
	{
		icon: Droplets,
		title: "Automatic sprinkler networks",
		description:
			"Sprinkler systems use heat-responsive heads connected to a water distribution network. Head type, spacing, pipe sizing, hazard classification and control equipment must be selected for the protected area.",
		tags: ["Sprinkler heads", "Zone control", "Water distribution"],
	},
	{
		icon: Network,
		title: "Wet risers & hose reels",
		description:
			"Risers and hose reels bring firefighting water to designated building floors or areas. Outlet locations, system configuration, signage and accessibility need to be coordinated with the building layout.",
		tags: ["Vertical distribution", "Floor outlets", "Hose-reel points"],
	},
	{
		icon: Gauge,
		title: "Pump & water-supply arrangements",
		description:
			"Pumps, tanks, controllers and associated valves support the performance of the fire-water network. Capacity and configuration should follow the engineered demand and applicable requirements.",
		tags: ["Fire pumps", "Water storage", "Pressure & flow"],
	},
];

const systemComponents = [
	{
		icon: Gauge,
		title: "Fire pumps & controllers",
		description:
			"Pump sets and control equipment support the specified flow and pressure requirements. Selection, sequencing, power supply and accessibility should be coordinated with the design.",
		tags: ["Pump sets", "Controllers", "Power & access"],
	},
	{
		icon: Cylinder,
		title: "Tanks, valves & fittings",
		description:
			"Storage tanks, isolation valves, check valves, alarm valves and associated fittings form part of the fire-water supply and distribution arrangement.",
		tags: ["Water storage", "Control valves", "Fittings"],
	},
	{
		icon: Network,
		title: "Piping & distribution network",
		description:
			"Pipework, supports, risers and branches need to follow the approved routing and hydraulic design while remaining accessible for inspection and maintenance.",
		tags: ["Main & branch lines", "Risers", "Supports"],
	},
	{
		icon: Droplets,
		title: "Sprinkler heads & hydrant outlets",
		description:
			"Terminal devices are selected and positioned for their intended use, including sprinkler heads, landing valves, hydrant points, hose reels and nozzles.",
		tags: ["Sprinkler heads", "Landing valves", "Hose reels"],
	},
];

const propertyTypes = [
	{
		icon: Home,
		title: "Residential buildings",
		description:
			"Apartments, housing societies and residential towers may require coordinated hydrant, riser and sprinkler arrangements based on building height, occupancy, layout and applicable requirements.",
		tags: ["Apartments & towers", "Basements & parking", "Common areas"],
		href: "/fire-safety/residential",
	},
	{
		icon: Factory,
		title: "Industrial facilities",
		description:
			"Factories, warehouses and process facilities may have storage, production or material-handling risks that influence hydrant coverage, sprinkler design, water demand and specialist protection needs.",
		tags: ["Factories", "Warehouses", "Production areas"],
		href: "/fire-safety/industrial",
	},
	{
		icon: Building2,
		title: "Commercial properties",
		description:
			"Offices, hotels, retail properties and public buildings need fire-water systems planned around occupancy, circulation, building operations and emergency access.",
		tags: ["Offices & retail", "Hotels", "Public buildings"],
		href: "/fire-safety/commercial",
	},
] as const;

const planningFactors = [
	{
		icon: HardHat,
		title: "Building use & hazard profile",
		description:
			"Review occupancy, building height, materials, storage arrangements, operations and fire-risk characteristics before defining system coverage and demand.",
	},
	{
		icon: Gauge,
		title: "Hydraulic design & performance",
		description:
			"System calculations should establish the required flow, pressure, pipe sizing and simultaneous demand for the applicable design scenario.",
	},
	{
		icon: Droplets,
		title: "Water source & storage capacity",
		description:
			"Check the available water source, storage volume, replenishment, pump arrangement and reliability against the system's engineered requirements.",
	},
	{
		icon: Layers3,
		title: "Coverage, zoning & access",
		description:
			"Coordinate sprinkler coverage, hydrant and hose-reel locations, risers, valves and access routes with the building layout and intended use.",
	},
	{
		icon: Zap,
		title: "Power, alarms & interfaces",
		description:
			"Where specified, coordinate pump power and controls, water-flow or valve monitoring, alarm interfaces and other building-system connections.",
	},
	{
		icon: ShieldCheck,
		title: "Applicable standards & upkeep",
		description:
			"Confirm applicable codes, approval requirements, inspection intervals and manufacturer instructions with suitably qualified professionals, then define the maintenance responsibilities.",
	},
];

const deliverySteps = [
	{
		number: "01",
		icon: ClipboardCheck,
		title: "Review the building & requirements",
		description:
			"Review the site, building use, floor plans, occupancy, existing fire-water facilities, water source and available project or authority documentation.",
	},
	{
		number: "02",
		icon: FileCheck2,
		title: "Define the system scope",
		description:
			"Coordinate the required hydrant, sprinkler, riser, hose-reel, pump and storage arrangements with the appropriate competent design professionals.",
	},
	{
		number: "03",
		icon: Layers3,
		title: "Install & coordinate equipment",
		description:
			"Carry out the agreed installation of pipework, valves, pumps, outlets and sprinkler equipment in line with the approved design and manufacturer instructions.",
	},
	{
		number: "04",
		icon: BadgeCheck,
		title: "Test, document & hand over",
		description:
			"Complete the specified inspections and functional or performance tests, record the results and provide the agreed system handover and maintenance information.",
	},
];

const relatedSolutions = [
	{
		title: "Fire Suppression Systems",
		description:
			"Explore water-based and specialised suppression options for different building and process hazards.",
		href: "/fire-safety/fire-suppression",
	},
	{
		title: "Fire Detection & Alarm Systems",
		description:
			"Coordinate detection, control panels and alarm notification with the building's fire protection arrangements.",
		href: "/fire-safety/fire-detection",
	},
	{
		title: "Residential Fire Safety",
		description:
			"Fire protection planning for apartments, housing societies, homes and residential towers.",
		href: "/fire-safety/residential",
	},
	{
		title: "Industrial Fire Safety",
		description:
			"Fire protection considerations for factories, warehouses and industrial premises.",
		href: "/fire-safety/industrial",
	},
] as const;

const faqs = [
	{
		question:
			"What is the difference between a fire hydrant and a sprinkler system?",
		answer:
			"A hydrant system provides designated outlets for firefighting operations, typically using hoses handled by trained responders. A sprinkler system uses heat-responsive heads connected to a water network and is intended to operate automatically in the affected area when its operating conditions are reached. They serve different purposes and may both be required in a building.",
	},
	{
		question: "Does every building need both hydrants and sprinklers?",
		answer:
			"Not necessarily. The required fire-water and sprinkler provisions depend on the building's use, height, area, occupancy, hazard, local requirements and approved design. A site-specific review is needed to determine the applicable provisions.",
	},
	{
		question:
			"What information is needed to plan a hydrant or sprinkler system?",
		answer:
			"Useful information includes the site address, building use, floor plans, height, floor areas, ceiling details, occupancy, storage or process hazards, available water source, existing fire protection drawings and any authority or consultant comments.",
	},
	{
		question: "Why are fire pumps and water tanks important?",
		answer:
			"They may be needed to provide the water quantity, flow and pressure required by the designed system. Their number, capacity and configuration should be determined through the applicable design calculations and requirements rather than a generic rule of thumb.",
	},
	{
		question:
			"Can an existing building be upgraded with hydrants or sprinklers?",
		answer:
			"An existing building may be assessed for an upgrade, but feasibility depends on the building layout, available space, water supply, structural and service constraints, operations and applicable approval requirements. The existing system should be surveyed before proposing modifications.",
	},
	{
		question: "How are hydrant and sprinkler systems tested?",
		answer:
			"Testing depends on the system and its design. It may include inspections, pump and controller checks, valve and alarm checks, flow or pressure tests and other specified functional tests. The test plan should follow applicable requirements, manufacturer instructions and the approved project scope.",
	},
	{
		question: "How often should the system be maintained?",
		answer:
			"Inspection and maintenance frequencies depend on the system type, applicable requirements, manufacturer guidance and site conditions. A documented maintenance plan should identify the checks, responsible persons, records and corrective actions.",
	},
	{
		question: "Does installation guarantee a Fire Safety Certificate or NOC?",
		answer:
			"No. Installing a hydrant or sprinkler system does not by itself guarantee a Fire Safety Certificate, NOC or other regulatory approval. The applicable process may require design documentation, inspections and a decision by the relevant authority. Approval-related work must be handled by appropriately authorised professionals.",
	},
];

function HydrantSprinklerPage() {
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
								<Droplets className="h-3.5 w-3.5" />
								Fire Safety / Hydrant & Sprinkler Systems
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								Fire hydrant & sprinkler systems planned around your building.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Explore fire hydrant, wet riser, hose-reel and automatic
								sprinkler solutions for residential, commercial and industrial
								properties. Baroda Enterprise can discuss your site requirements
								and help define an appropriate project scope with the relevant
								competent professionals.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Discuss Your Project <ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#hydrant-sprinkler-services">Explore Systems</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Hydrant & riser networks
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Automatic sprinklers
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Testing & maintenance
								</span>
							</div>
						</div>

						<div className="relative">
							<div className="overflow-hidden rounded-2xl border border-(--line) bg-background shadow-xl">
								<img
									src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1100&q=85"
									alt="Technical team reviewing building fire protection infrastructure"
									className="h-64 w-full object-cover sm:h-80 lg:h-[390px]"
								/>
								<div className="grid gap-4 p-5 sm:grid-cols-2">
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<Waves className="h-4 w-4 text-red-600" />
											Fire-water distribution
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Coordinate hydrants, risers, outlets, pumps and water
											storage around the building's needs.
										</p>
									</div>
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<Droplets className="h-4 w-4 text-red-600" />
											Sprinkler protection
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Consider head selection, coverage, zoning and hydraulic
											requirements for each protected area.
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
										Fire-water systems
									</p>
									<p className="text-xs text-(--ink-soft)">
										Planning, installation & support
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
						Building-wide fire-water protection
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Plan hydrant and sprinkler systems as part of an integrated safety
						design.
					</h2>
				</div>
				<div className="space-y-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
					<p>
						Hydrant systems provide designated firefighting outlets, while
						automatic sprinkler systems are designed to operate in the affected
						area when their heat-responsive elements activate. Wet risers,
						standpipes and hose reels provide additional ways to distribute
						firefighting water through suitable buildings.
					</p>
					<p>
						The correct configuration depends on building use, height,
						occupancy, hazard, available water supply, flow and pressure
						requirements and applicable standards. Design calculations,
						equipment selection, installation and testing should be carried out
						or reviewed by suitably competent professionals.
					</p>
				</div>
			</section>

			{/* Services */}
			<section className="page-wrap mt-16" id="hydrant-sprinkler-services">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Hydrant & sprinkler services
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Fire-water systems for buildings and facilities.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Each project needs a site-specific scope. Confirm the equipment,
						design responsibilities, installation work and maintenance coverage
						available from Baroda Enterprise before requesting a quotation.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{systemServices.map((service) => {
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
						System configurations
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Understand the main parts of a fire-water network.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Hydrants, sprinklers, risers and pump arrangements perform different
						roles. The required combination should be established from the
						building's fire strategy and applicable design criteria.
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
				<div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							System components
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Coordinate every part of the fire-water infrastructure.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							Performance depends on more than the visible outlets. Pumps,
							storage, pipework, valves and terminal devices must work together
							as a complete system and remain accessible for inspection.
						</p>
						<Button asChild className="mt-6 gap-2">
							<Link to="/contact-us">
								Discuss Your Requirements <ArrowRight className="h-4 w-4" />
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
										<div className="mb-1 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
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
												variant="outline"
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
						Fire-water protection for different property types.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Building use and fire hazards influence the type, coverage and
						configuration of hydrant and sprinkler systems.
					</p>
				</div>

				<div className="mt-8 grid gap-4 lg:grid-cols-3">
					{propertyTypes.map((property) => {
						const Icon = property.icon;
						return (
							<Card
								key={property.title}
								className="flex h-full flex-col rounded-2xl border-(--line)"
							>
								<CardHeader>
									<div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-700 dark:text-red-300">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle className="text-lg">{property.title}</CardTitle>
									<CardDescription className="leading-7">
										{property.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="mt-auto">
									<div className="mb-5 flex flex-wrap gap-2">
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
									<Button asChild variant="outline" className="w-full gap-2">
										<Link to={property.href}>
											Explore solution <ArrowRight className="h-4 w-4" />
										</Link>
									</Button>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</section>

			{/* Planning factors */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Before installation
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Important considerations for a reliable system design.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						A hydrant or sprinkler proposal should be based on the site, the
						required performance and applicable codes—not simply a standard
						equipment list.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{planningFactors.map((factor) => {
						const Icon = factor.icon;
						return (
							<Card key={factor.title} className="rounded-2xl border-(--line)">
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
			</section>

			{/* Process */}
			<section className="page-wrap mt-16">
				<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
					<div className="max-w-2xl">
						<Badge variant="outline" className="mb-3">
							Project approach
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							From site review to system handover.
						</h2>
					</div>
					<p className="max-w-md text-sm leading-6 text-(--ink-soft)">
						A structured process helps align the system scope, installation
						activities, testing and documentation.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{deliverySteps.map((step) => {
						const Icon = step.icon;
						return (
							<Card key={step.number} className="rounded-2xl border-(--line)">
								<CardHeader>
									<div className="mb-3 flex items-center justify-between">
										<span className="text-2xl font-bold tracking-tight text-red-600">
											{step.number}
										</span>
										<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-700 dark:text-red-300">
											<Icon className="h-5 w-5" />
										</div>
									</div>
									<CardTitle className="text-base">{step.title}</CardTitle>
									<CardDescription className="leading-6">
										{step.description}
									</CardDescription>
								</CardHeader>
							</Card>
						);
					})}
				</div>
			</section>

			{/* Related solutions */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Related fire safety solutions
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Explore complementary fire protection services.
					</h2>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{relatedSolutions.map((solution) => (
						<Card
							key={solution.href}
							className="flex h-full flex-col rounded-2xl border-(--line)"
						>
							<CardHeader>
								<CardTitle className="text-base">{solution.title}</CardTitle>
								<CardDescription className="leading-6">
									{solution.description}
								</CardDescription>
							</CardHeader>
							<CardContent className="mt-auto">
								<Button asChild variant="ghost" className="-ml-3 gap-2">
									<Link to={solution.href}>
										Learn more <ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* FAQs */}
			<section className="page-wrap mt-16">
				<div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							Frequently asked questions
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Questions about hydrant & sprinkler systems.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft)">
							Have a building-specific question? Share the site details with our
							team so the requirements can be discussed in context.
						</p>
						<Button asChild className="mt-6 gap-2">
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

			{/* CTA */}
			<section className="page-wrap mt-16">
				<div className="relative isolate overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#7f1d1d,#b91c1c_55%,#dc2626)] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
					<div className="pointer-events-none absolute -right-12 -top-20 -z-10 h-72 w-72 rounded-full border border-white/15" />
					<div className="pointer-events-none absolute -right-2 -top-10 -z-10 h-52 w-52 rounded-full border border-white/15" />
					<div className="relative max-w-3xl">
						<Badge className="mb-4 border border-white/20 bg-white/10 text-white hover:bg-white/10">
							Plan your fire-water system
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							Discuss your hydrant and sprinkler requirements with our team.
						</h2>
						<p className="mt-4 max-w-2xl text-sm leading-7 text-red-50 sm:text-base">
							Share your building type, location, floor plans and current fire
							protection arrangements. The project scope can then be discussed
							against the site's needs and applicable requirements.
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<Button asChild size="lg" variant="secondary" className="gap-2">
								<Link to="/contact-us">
									Request a Consultation <ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
							>
								<Link to="/fire-safety/residential">
									Explore Fire Safety Services
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
