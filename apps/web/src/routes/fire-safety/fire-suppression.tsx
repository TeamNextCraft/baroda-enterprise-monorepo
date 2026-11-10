import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	BadgeCheck,
	Building2,
	CheckCircle2,
	ClipboardCheck,
	CookingPot,
	Cylinder,
	Droplets,
	Factory,
	Fan,
	FileCheck2,
	Flame,
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

export const Route = createFileRoute("/fire-safety/fire-suppression")({
	component: FireSuppressionPage,
});

const suppressionServices = [
	{
		icon: Droplets,
		title: "Automatic sprinkler systems",
		description:
			"Plan water-based sprinkler protection for suitable building areas, with system design coordinated to the hazard, occupancy, water supply and applicable requirements.",
		points: [
			"Hazard and occupancy review",
			"Sprinkler layout and coverage coordination",
			"Water supply and control-valve considerations",
		],
	},
	{
		icon: Waves,
		title: "Fire hydrant & hose-reel systems",
		description:
			"Coordinate building fire-water distribution and firefighting outlets so designated responders can access the equipment provided for the premises.",
		points: [
			"Hydrant, landing-valve and hose-reel planning",
			"Piping, access and pressure considerations",
			"Fire-water storage and pump coordination",
		],
	},
	{
		icon: Cylinder,
		title: "Clean-agent & gaseous suppression",
		description:
			"Consider specialised gaseous suppression for suitable protected enclosures where the hazard, occupancy, equipment and enclosure conditions support its use.",
		points: [
			"Protected-room and hazard suitability review",
			"Agent storage and discharge arrangement",
			"Releasing controls, alarms and safety interlocks",
		],
	},
	{
		icon: Flame,
		title: "Foam & special-hazard systems",
		description:
			"Review foam or other specialised suppression approaches for particular flammable-liquid or process hazards, subject to a competent hazard assessment and engineered design.",
		points: [
			"Hazard and fuel assessment",
			"Foam proportioning and discharge considerations",
			"Compatibility with site emergency procedures",
		],
	},
	{
		icon: CookingPot,
		title: "Kitchen hood suppression",
		description:
			"Plan automatic protection for suitable commercial cooking equipment, extraction hoods and associated duct areas using compatible, application-specific systems.",
		points: [
			"Cooking line and hood assessment",
			"Nozzle placement and system coverage",
			"Equipment shutdown and alarm interfaces where required",
		],
	},
	{
		icon: Wrench,
		title: "Inspection & maintenance support",
		description:
			"Define inspection, functional testing and maintenance activities for installed suppression equipment according to the system type, manufacturer guidance and agreed scope.",
		points: [
			"Visual condition and accessibility checks",
			"Valve, pump or cylinder status review as applicable",
			"Maintenance records and corrective-action tracking",
		],
	},
];

const systemTypes = [
	{
		icon: Droplets,
		title: "Water-based systems",
		description:
			"Sprinklers, hydrants, standpipes and hose reels use a designed water supply and distribution network. Suitability depends on the fire risk, building use, water availability, pressure and the required system arrangement.",
		tags: ["Sprinklers", "Hydrants & hose reels", "Fire pumps and storage"],
	},
	{
		icon: Cylinder,
		title: "Clean-agent & gas systems",
		description:
			"Gaseous agents may be considered for selected enclosed hazards, such as certain electrical or technology spaces. Room integrity, people safety, agent selection, warning and release controls are important design factors.",
		tags: ["Protected enclosures", "Releasing controls", "Room integrity"],
	},
	{
		icon: Flame,
		title: "Foam & special-hazard systems",
		description:
			"Foam and other specialised technologies may be appropriate for defined industrial hazards. The system must be selected for the materials and process involved and designed by suitably competent professionals.",
		tags: [
			"Flammable-liquid hazards",
			"Process-specific design",
			"Specialist assessment",
		],
	},
	{
		icon: CookingPot,
		title: "Local application systems",
		description:
			"Dedicated systems can protect specific equipment or risk areas, including commercial cooking appliances. The protected equipment, fuel or energy isolation and discharge arrangement must be coordinated.",
		tags: ["Kitchen hoods", "Equipment protection", "Local application"],
	},
];

const systemComponents = [
	{
		icon: Droplets,
		title: "Pumps, tanks & water supply",
		description:
			"Water-based systems rely on an adequate supply, suitable storage and correctly selected pumping and control arrangements where required.",
		tags: ["Fire-water storage", "Pumps & controllers", "Supply reliability"],
	},
	{
		icon: Network,
		title: "Piping, valves & distribution",
		description:
			"Pipework, valves, supports and distribution components need to be compatible with the system design and accessible for inspection and maintenance.",
		tags: ["Pipe networks", "Control valves", "Supports & fittings"],
	},
	{
		icon: Siren,
		title: "Detection & releasing controls",
		description:
			"Where automatic release is used, compatible detection, control panels, warning devices, manual controls and interlocks must operate as an engineered sequence.",
		tags: ["Releasing panel", "Pre-discharge warning", "Manual controls"],
	},
	{
		icon: Cylinder,
		title: "Agents, cylinders & nozzles",
		description:
			"Specialised systems use a specified extinguishing agent and compatible storage and discharge equipment selected for the protected hazard and environment.",
		tags: ["Agent storage", "Discharge nozzles", "Pressure & quantity checks"],
	},
];

const propertyTypes = [
	{
		icon: Home,
		title: "Residential buildings",
		description:
			"Apartments, housing societies and residential towers may require coordinated water-based protection and firefighting facilities based on height, occupancy, layout and applicable requirements.",
		tags: ["Apartments & towers", "Common areas", "Basements & parking"],
		href: "/fire-safety/residential",
	},
	{
		icon: Factory,
		title: "Industrial facilities",
		description:
			"Factories, warehouses and process facilities may involve combustible storage, flammable liquids, machinery or specialised risks that influence the suppression technology and system design.",
		tags: ["Factories", "Warehouses", "Process areas"],
		href: "/fire-safety/industrial",
	},
	{
		icon: Building2,
		title: "Commercial properties",
		description:
			"Offices, hotels, retail properties, kitchens and other public buildings need protection that reflects occupancy, building operations, equipment and evacuation arrangements.",
		tags: ["Offices & retail", "Hotels & kitchens", "Public buildings"],
		href: "/fire-safety/commercial",
	},
] as const;

const planningFactors = [
	{
		icon: HardHat,
		title: "Hazard & occupancy assessment",
		description:
			"Identify the materials, processes, equipment, storage arrangement, occupancy and likely fire scenarios before selecting a suppression approach.",
	},
	{
		icon: Layers3,
		title: "System compatibility & design",
		description:
			"Check the suitability of the selected technology, equipment, discharge arrangement, interfaces and design criteria for the protected area.",
	},
	{
		icon: Gauge,
		title: "Water, pressure & agent capacity",
		description:
			"For water-based systems, review supply, storage, flow and pressure. For agent systems, review agent quantity, enclosure conditions and discharge requirements.",
	},
	{
		icon: Zap,
		title: "Detection, alarms & shutdowns",
		description:
			"Where automatic operation is specified, coordinate detection, warning, release controls and any required equipment or power shutdown interlocks.",
	},
	{
		icon: Fan,
		title: "People safety & evacuation",
		description:
			"Consider occupant warning, escape routes, ventilation or room isolation, safe access and re-entry procedures, particularly for enclosed gaseous systems.",
	},
	{
		icon: ShieldCheck,
		title: "Standards, approvals & upkeep",
		description:
			"Confirm applicable codes, product approvals, inspection requirements and authority processes with qualified professionals. Define who will test and maintain the system.",
	},
];

const deliverySteps = [
	{
		number: "01",
		icon: ClipboardCheck,
		title: "Assess the site & hazard",
		description:
			"Review the property, fire hazards, occupancy, floor plans, existing fire protection, utilities and any available risk or engineering documentation.",
	},
	{
		number: "02",
		icon: FileCheck2,
		title: "Define the engineered scope",
		description:
			"Determine the suitable system type, protected areas, equipment, interfaces, design responsibilities and project requirements with the appropriate competent professionals.",
	},
	{
		number: "03",
		icon: Layers3,
		title: "Install & coordinate equipment",
		description:
			"Coordinate the agreed pumps, piping, valves, cylinders, nozzles, controls and interfaces in line with the approved design and manufacturer instructions.",
	},
	{
		number: "04",
		icon: BadgeCheck,
		title: "Test & hand over",
		description:
			"Complete the specified inspections and functional tests, record results, explain system operation and provide the agreed handover and maintenance information.",
	},
];

const relatedSolutions = [
	{
		title: "Fire Detection & Alarm Systems",
		description:
			"Explore detection, control panels and alarm notification that may form part of a coordinated fire protection arrangement.",
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
	{
		title: "Commercial Fire Safety",
		description:
			"Fire safety solutions for offices, retail spaces, kitchens and other commercial properties.",
		href: "/fire-safety/commercial",
	},
] as const;

const faqs = [
	{
		question:
			"What is the difference between fire detection and fire suppression?",
		answer:
			"Detection systems identify signs of fire and provide an alarm. Suppression systems are intended to control or extinguish a fire using a suitable agent or water-based arrangement. They may be coordinated, but they perform different functions and need appropriate design and interfaces.",
	},
	{
		question: "Which fire suppression system is suitable for my building?",
		answer:
			"There is no single system that suits every property. Selection depends on the hazard, occupancy, building layout, materials, equipment, water supply, environmental conditions and applicable requirements. A site and hazard assessment is needed before specifying a system.",
	},
	{
		question: "Are sprinkler systems suitable for every type of fire risk?",
		answer:
			"No. Sprinklers are widely used for many building applications, but specific hazards may require a different or complementary approach. The design must account for the materials and processes present and should be prepared by suitably competent professionals.",
	},
	{
		question: "Where are clean-agent or gaseous suppression systems used?",
		answer:
			"They may be considered for selected enclosed spaces where water discharge could be unsuitable, such as certain electrical or technology rooms. Suitability depends on the hazard, enclosure integrity, agent choice, occupant safety and applicable standards.",
	},
	{
		question:
			"Can a fire alarm system automatically activate suppression equipment?",
		answer:
			"Some engineered systems use compatible detection and releasing controls to initiate a suppression sequence. The design may include pre-discharge warnings, delays, manual controls and equipment interlocks. These functions must be specifically designed, tested and documented.",
	},
	{
		question:
			"Does installing a suppression system guarantee a Fire Safety Certificate or NOC?",
		answer:
			"No. Installation by itself does not guarantee a Fire Safety Certificate, NOC or other regulatory approval. The applicable process may involve design review, documentation, inspections and a decision by the relevant authority. Approval-related services must be separately confirmed and handled by appropriately authorised professionals.",
	},
	{
		question:
			"How often should a suppression system be inspected or maintained?",
		answer:
			"The required inspection and maintenance schedule depends on the system type, applicable requirements and manufacturer instructions. Water-based and gaseous systems have different components and checks. The building should have a documented maintenance plan and address identified faults promptly.",
	},
	{
		question: "What information is needed for a fire suppression quotation?",
		answer:
			"Share the site address, building use, floor plans, area and ceiling heights, occupancy, materials or processes present, existing fire protection details, water supply information where available, and the areas or equipment to be protected. Photos and previous inspection documents can also help with an initial discussion.",
	},
];

function FireSuppressionPage() {
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
								<Flame className="h-3.5 w-3.5" />
								Fire Safety / Suppression Systems
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								Fire suppression solutions planned for the risks in your
								building.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Explore sprinkler, hydrant, gaseous, foam and specialist
								suppression options for suitable residential, commercial and
								industrial applications. Baroda Enterprise can discuss your
								premises, review the protection requirements and help define an
								appropriate project scope.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Discuss Your Project <ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#fire-suppression-services">Explore Solutions</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Water-based protection
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Special-hazard options
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									System testing & upkeep
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
											<Droplets className="h-4 w-4 text-red-600" />
											Suitable suppression
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Match the system technology to the hazard, building and
											operating conditions.
										</p>
									</div>
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<ShieldCheck className="h-4 w-4 text-red-600" />
											Coordinated protection
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Consider detection, warning, interfaces and ongoing
											maintenance as part of the system.
										</p>
									</div>
								</div>
							</div>
							<div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-(--line) bg-background p-4 shadow-lg sm:flex">
								<div className="rounded-lg bg-red-500/10 p-2 text-red-700 dark:text-red-300">
									<Flame className="h-5 w-5" />
								</div>
								<div>
									<p className="text-sm font-semibold text-(--ink)">
										Fire suppression
									</p>
									<p className="text-xs text-(--ink-soft)">
										System selection, installation & support
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
						Protection matched to the hazard
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Select the right suppression approach for the space and its risks.
					</h2>
				</div>
				<div className="space-y-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
					<p>
						Fire suppression systems are designed to control or extinguish a
						fire using a suitable medium, such as water, foam or a gaseous
						agent. The correct choice depends on the materials and processes
						present, occupancy, building arrangement, water availability and the
						potential consequences of a discharge.
					</p>
					<p>
						Sprinklers, hydrants, clean-agent systems and specialist local
						application systems are not interchangeable. Their design,
						installation and interfaces should be determined by appropriately
						competent professionals in accordance with applicable requirements
						and manufacturer instructions.
					</p>
				</div>
			</section>

			{/* Services */}
			<section className="page-wrap mt-16" id="fire-suppression-services">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Suppression services
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Explore fire suppression systems for different applications.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						The available scope should be confirmed with Baroda Enterprise
						before publication or quotation. Each system requires a suitability
						review and, where applicable, specialist engineering and approval.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{suppressionServices.map((service) => {
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
						Common suppression technologies
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Different hazards call for different suppression technologies.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						System selection should be based on a documented assessment of the
						protected hazard, people who may be present, building conditions and
						the applicable design criteria.
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
							Every component has to work as part of one coordinated system.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							A suppression installation may include water supplies, pumps,
							pipework, valves, agent storage, discharge devices, detection,
							control panels and alarm interfaces. The exact equipment depends
							on the selected technology and approved design.
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

			{/* Properties */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Building & industry applications
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Suppression planning for residential, industrial and commercial
						spaces.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						The protection strategy should reflect the building's use, fire
						hazards, occupancy, operations and applicable requirements.
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
									<CardTitle>{property.title}</CardTitle>
									<CardDescription className="leading-7">
										{property.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="mb-4 flex flex-wrap gap-2">
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
									<Button asChild variant="link" className="h-auto px-0">
										<Link to={property.href}>
											Explore solution <ArrowRight className="ml-1 h-4 w-4" />
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
				<div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							Before selecting a system
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Important factors in a suppression project.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							Suppression technology should never be selected only by product
							type or price. The protected hazard, people safety and system
							design all matter.
						</p>
						<div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
							<div className="flex items-center gap-2 font-semibold text-(--ink)">
								<ShieldCheck className="h-5 w-5 text-red-600" />
								Design and compliance matter
							</div>
							<p className="mt-2 text-sm leading-6 text-(--ink-soft)">
								Confirm the applicable standards, authority requirements,
								equipment approvals and design responsibilities with qualified
								professionals before installation.
							</p>
						</div>
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

			{/* Process */}
			<section className="page-wrap mt-16" id="installation-process">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Project approach
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						A structured approach from site review to handover.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Project stages and responsibilities should be agreed before work
						begins, including design approval, installation scope, testing and
						documentation.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{deliverySteps.map((step) => {
						const Icon = step.icon;
						return (
							<Card key={step.number} className="rounded-2xl border-(--line)">
								<CardHeader>
									<div className="flex items-center justify-between">
										<span className="text-3xl font-bold tracking-tight text-red-600/80">
											{step.number}
										</span>
										<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-700 dark:text-red-300">
											<Icon className="h-5 w-5" />
										</div>
									</div>
									<CardTitle className="mt-3 text-base">{step.title}</CardTitle>
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
				<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<Badge variant="outline" className="mb-3">
							Explore more
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Related fire safety solutions.
						</h2>
					</div>
					<p className="max-w-md text-sm leading-6 text-(--ink-soft)">
						Suppression is one part of a wider fire and life-safety strategy.
						Explore related building solutions and detection systems.
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
								<Button asChild variant="link" className="h-auto px-0">
									<Link to={solution.href}>
										Learn more <ArrowRight className="ml-1 h-4 w-4" />
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
							Fire suppression questions, answered.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft)">
							Have a project-specific question? Share your building details and
							the type of hazard or equipment you need to protect.
						</p>
						<Button asChild className="mt-6 gap-2">
							<Link to="/contact-us">
								Ask our team <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem key={faq.question} value={`item-${index + 1}`}>
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

			{/* Final CTA */}
			<section className="page-wrap mt-16">
				<div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.18),transparent_45%),linear-gradient(135deg,var(--header-bg),var(--background))] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
					<div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
						<div className="max-w-2xl">
							<Badge
								variant="outline"
								className="mb-4 border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300"
							>
								Plan your fire protection project
							</Badge>
							<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
								Need to discuss a fire suppression system for your premises?
							</h2>
							<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
								Contact Baroda Enterprise to discuss the building, fire hazard,
								existing protection and the next steps for defining a suitable
								project scope.
							</p>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
							<Button asChild size="lg" className="gap-2">
								<Link to="/contact-us">
									Request a Consultation <ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button asChild size="lg" variant="outline">
								<Link to="/fire-safety/fire-detection">
									Explore Fire Detection
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
