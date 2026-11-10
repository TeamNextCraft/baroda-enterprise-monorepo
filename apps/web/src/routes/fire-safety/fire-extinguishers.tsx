import { createFileRoute, Link } from "@tanstack/react-router";
import {
	AlertTriangle,
	ArrowRight,
	BadgeCheck,
	Building2,
	CheckCircle2,
	ClipboardCheck,
	Clock3,
	Factory,
	FileCheck2,
	Flame,
	Gauge,
	HardHat,
	Home,
	MapPin,
	PackageCheck,
	ShieldCheck,
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

export const Route = createFileRoute("/fire-safety/fire-extinguishers")({
	component: FireExtinguishersPage,
});

const extinguisherServices = [
	{
		icon: PackageCheck,
		title: "Extinguisher supply & installation",
		description:
			"Discuss portable fire extinguisher options for your building and arrange suitable supply and installation according to the identified risks and agreed project scope.",
		points: [
			"Equipment recommendations based on site requirements",
			"Placement and mounting coordination",
			"Visibility, access and signage considerations",
		],
	},
	{
		icon: ShieldCheck,
		title: "Selection & coverage planning",
		description:
			"Review the types of materials, equipment and activities present in each area before deciding which extinguisher agents and capacities are suitable.",
		points: [
			"Identify likely fire risks by area",
			"Consider extinguisher type and rating",
			"Coordinate locations with site circulation",
		],
	},
	{
		icon: ClipboardCheck,
		title: "Inspection & maintenance",
		description:
			"Establish an inspection and maintenance approach for the installed equipment, following applicable requirements and the manufacturer's instructions.",
		points: [
			"Visual condition and accessibility checks",
			"Pressure, seal and service-status review as applicable",
			"Inspection records and corrective actions",
		],
	},
	{
		icon: Wrench,
		title: "Refilling & servicing support",
		description:
			"Where included in the company's service capability, coordinate extinguisher refilling, recharging or servicing through suitable personnel and authorised facilities.",
		points: [
			"Service eligibility and condition assessment",
			"Agent-specific servicing requirements",
			"Service labels and documentation where applicable",
		],
	},
	{
		icon: MapPin,
		title: "Placement, mounting & signage",
		description:
			"Plan visible and accessible extinguisher locations that are coordinated with the building layout, escape routes, site operations and applicable requirements.",
		points: [
			"Location planning for key risk areas",
			"Suitable brackets, cabinets or stands",
			"Identification and directional signage",
		],
	},
	{
		icon: HardHat,
		title: "User orientation",
		description:
			"Help the customer understand extinguisher locations, basic precautions and the importance of raising the alarm and following the site's emergency procedure.",
		points: [
			"Equipment identification and location briefing",
			"Basic operating-principle awareness",
			"Emergency response and evacuation reminders",
		],
	},
];

const extinguisherTypes = [
	{
		icon: Flame,
		title: "ABC dry powder extinguishers",
		description:
			"A commonly used multipurpose powder option for a range of ordinary combustible, flammable-liquid and gas-related fire risks, subject to the extinguisher's approved rating and suitability for the specific hazard.",
		tags: [
			"Multipurpose option",
			"Industrial & commercial use",
			"Check rating and suitability",
		],
	},
	{
		icon: Zap,
		title: "CO₂ extinguishers",
		description:
			"Carbon dioxide extinguishers may be considered for certain flammable-liquid and energised electrical-equipment risks. Suitability depends on the application, environment and equipment rating; they are not a universal solution.",
		tags: [
			"Electrical equipment areas",
			"Certain liquid-fire risks",
			"Ventilation considerations",
		],
	},
	{
		icon: Thermometer,
		title: "Foam extinguishers",
		description:
			"Foam-based extinguishers may be suitable for selected ordinary-combustible and flammable-liquid risks. They should not be used where the agent is unsuitable, including certain energised electrical hazards.",
		tags: [
			"Selected liquid-fire risks",
			"Material compatibility",
			"Application-specific",
		],
	},
	{
		icon: Gauge,
		title: "Water & water-mist extinguishers",
		description:
			"Water-based options may be used for appropriate ordinary-combustible fire risks. Water-mist products have specific approvals and limitations, so the exact model and its rating must be checked before selection.",
		tags: [
			"Suitable ordinary combustibles",
			"Model-specific ratings",
			"Check electrical restrictions",
		],
	},
	{
		icon: Flame,
		title: "Wet chemical extinguishers",
		description:
			"Wet chemical units are designed for particular cooking-oil and fat fire risks, making them relevant to selected commercial kitchens and food-service environments.",
		tags: [
			"Commercial kitchens",
			"Cooking oils & fats",
			"Kitchen-specific placement",
		],
	},
	{
		icon: ShieldCheck,
		title: "Clean-agent extinguishers",
		description:
			"Clean-agent options may be considered for selected areas containing sensitive equipment where residue is a concern. Agent type, approvals, room conditions and application limitations must be reviewed.",
		tags: [
			"Sensitive equipment areas",
			"Residue considerations",
			"Agent-specific limitations",
		],
	},
];

const propertyTypes = [
	{
		icon: Home,
		title: "Residential buildings",
		description:
			"Apartments, housing societies, residential towers and villas may need portable extinguishers in suitable common, service and higher-risk areas, as determined by the building's requirements.",
		tags: [
			"Common areas",
			"Electrical & utility rooms",
			"Parking and service areas",
		],
		href: "/fire-safety/residential",
	},
	{
		icon: Factory,
		title: "Industrial facilities",
		description:
			"Factories, workshops and warehouses need extinguisher selection that considers production processes, stored materials, machinery, electrical installations and site-specific hazards.",
		tags: ["Production areas", "Warehouses", "Workshops & utilities"],
		href: "/fire-safety/industrial",
	},
	{
		icon: Building2,
		title: "Commercial properties",
		description:
			"Offices, retail spaces, hotels, educational buildings and healthcare premises need accessible equipment matched to their occupancy, operations and local requirements.",
		tags: ["Offices & retail", "Hotels & institutions", "Commercial kitchens"],
		href: "/fire-safety/commercial",
	},
] as const;

const planningFactors = [
	{
		icon: AlertTriangle,
		title: "Identify the fire risk",
		description:
			"Consider the materials, processes, equipment and activities present in each area. Different hazards require different extinguishing agents and equipment ratings.",
	},
	{
		icon: BadgeCheck,
		title: "Check approvals & ratings",
		description:
			"Confirm the extinguisher's type, capacity, rating, marking and suitability against the relevant hazard and applicable standards before procurement or placement.",
	},
	{
		icon: MapPin,
		title: "Plan accessible locations",
		description:
			"Locations should be visible, identifiable and reachable without creating obstructions or placing people in unnecessary danger. Coordinate positions with the site's emergency plan.",
	},
	{
		icon: Clock3,
		title: "Maintain service readiness",
		description:
			"Define inspection, maintenance and servicing responsibilities, including records, due dates, defects and arrangements for equipment that is removed from service.",
	},
	{
		icon: HardHat,
		title: "Consider users & environment",
		description:
			"Account for the people expected to use the equipment, access conditions, temperature, weather exposure, corrosion and other environmental factors.",
	},
	{
		icon: FileCheck2,
		title: "Coordinate with the fire strategy",
		description:
			"Portable extinguishers complement—not replace—other required fire protection and life-safety measures, evacuation procedures and trained emergency response.",
	},
];

const deliverySteps = [
	{
		number: "01",
		icon: ClipboardCheck,
		title: "Review the site & its hazards",
		description:
			"Understand the property type, floor layout, occupancy, materials, processes, existing equipment and any available fire-safety assessment or drawings.",
	},
	{
		number: "02",
		icon: FileCheck2,
		title: "Recommend suitable equipment",
		description:
			"Identify the extinguisher types, ratings, capacities and approximate locations required for the agreed scope, subject to applicable design and regulatory requirements.",
	},
	{
		number: "03",
		icon: PackageCheck,
		title: "Supply & install as agreed",
		description:
			"Coordinate the supply, mounting, identification and handover of the selected equipment, using suitable products and competent personnel.",
	},
	{
		number: "04",
		icon: BadgeCheck,
		title: "Record & plan maintenance",
		description:
			"Provide the agreed equipment and service details, explain inspection responsibilities and establish the next maintenance or review actions.",
	},
];

const relatedSolutions = [
	{
		title: "Fire Detection & Alarm Systems",
		description:
			"Coordinate portable firefighting equipment with detection, alarm and occupant-notification arrangements.",
		href: "/fire-safety/fire-detection",
	},
	{
		title: "Fire Suppression Systems",
		description:
			"Explore fixed suppression options for buildings, equipment and specialist hazards.",
		href: "/fire-safety/fire-suppression",
	},
	{
		title: "Fire Hydrant & Sprinkler Systems",
		description:
			"Review building-wide fire-water distribution and automatic sprinkler protection.",
		href: "/fire-safety/hydrant-sprinkler",
	},
	{
		title: "Industrial Fire Safety",
		description:
			"Explore fire-protection planning for factories, warehouses and industrial premises.",
		href: "/fire-safety/industrial",
	},
] as const;

const faqs = [
	{
		question: "Which type of fire extinguisher is right for my building?",
		answer:
			"There is no single extinguisher suitable for every fire risk. Selection depends on the materials and processes present, the equipment involved, the location, the extinguisher's approved rating and applicable requirements. A site-specific review should be completed before selecting equipment.",
	},
	{
		question:
			"What is the difference between ABC powder and CO₂ extinguishers?",
		answer:
			"They use different extinguishing agents and have different applications and limitations. ABC dry powder is a multipurpose option for certain classes of fire, while CO₂ may be suitable for selected liquid and energised electrical-equipment risks. The label, rating and manufacturer's instructions must be checked for the actual hazard.",
	},
	{
		question: "Can one extinguisher be used for every type of fire?",
		answer:
			"No. Some agents can be ineffective or dangerous for particular hazards. For example, water-based agents are not suitable for every electrical or flammable-liquid situation, and cooking-oil fires need equipment specifically rated for that risk. Use only equipment marked as suitable for the fire type.",
	},
	{
		question: "Where should fire extinguishers be installed?",
		answer:
			"Locations depend on the building layout, hazard areas, travel distances, access, visibility and applicable requirements. Extinguishers should be identifiable and accessible, without obstructing escape routes. Final placement should be confirmed through a competent site assessment.",
	},
	{
		question: "Do you provide extinguisher refilling and recharging?",
		answer:
			"Refilling or recharging should only be offered where Baroda Enterprise has the appropriate capability or an arrangement with a suitable service provider. The need for service depends on the extinguisher type, condition, use history and manufacturer instructions.",
	},
	{
		question: "How often should extinguishers be inspected?",
		answer:
			"Inspection and maintenance intervals depend on applicable requirements, the extinguisher type, manufacturer instructions and site conditions. The building should maintain a documented schedule and arrange qualified servicing whenever an inspection identifies a defect or service requirement.",
	},
	{
		question:
			"Do portable extinguishers replace a fire alarm or sprinkler system?",
		answer:
			"No. Portable extinguishers are one part of a wider fire and life-safety strategy. Detection, alarms, evacuation provisions, hydrants, sprinklers or specialised suppression may also be required depending on the building and its hazards.",
	},
	{
		question:
			"Does installing extinguishers guarantee a Fire Safety Certificate or NOC?",
		answer:
			"No. Supplying or installing extinguishers does not by itself guarantee a Fire Safety Certificate, NOC or regulatory approval. The applicable requirements may include other systems, documentation, inspections and a decision by the relevant authority.",
	},
];

function FireExtinguishersPage() {
	return (
		<main className="pb-20">
			{/* Hero */}
			<section className="page-wrap pt-8 sm:pt-12">
				<div className="relative isolate overflow-hidden rounded-3xl border border-(--line) bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.16),transparent_42%),linear-gradient(135deg,var(--header-bg),var(--background))] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
					<div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-72 w-72 rounded-full border border-red-500/15" />
					<div className="pointer-events-none absolute -right-5 -top-9 -z-10 h-52 w-52 rounded-full border border-red-500/15" />

					<div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
						<div>
							<Badge
								variant="outline"
								className="mb-5 gap-2 border-red-500/30 bg-red-500/10 px-3 py-1 text-red-700 dark:text-red-300"
							>
								<Flame className="h-3.5 w-3.5" />
								Fire Safety / Fire Extinguishers
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								Fire extinguishers selected for your building's risks.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Explore portable fire extinguisher options for residential,
								commercial and industrial properties. Baroda Enterprise can
								discuss your site requirements, equipment selection, placement
								and agreed maintenance scope.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Request an Extinguisher Quote{" "}
										<ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#extinguisher-types">Explore Extinguisher Types</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Risk-based selection
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Placement planning
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Inspection support
								</span>
							</div>
						</div>

						<div className="relative">
							<div className="overflow-hidden rounded-2xl border border-(--line) bg-background p-5 shadow-xl sm:p-7">
								<div className="flex items-center justify-between gap-3">
									<div>
										<p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700 dark:text-red-300">
											Portable fire protection
										</p>
										<h2 className="mt-2 text-2xl font-bold text-(--ink)">
											The right equipment. The right location.
										</h2>
									</div>
									<div className="rounded-2xl bg-red-500/10 p-3 text-red-700 dark:text-red-300">
										<Flame className="h-8 w-8" />
									</div>
								</div>

								<div className="mt-7 grid grid-cols-2 gap-3">
									{[
										{
											label: "Dry powder",
											note: "Multipurpose options",
											icon: PackageCheck,
										},
										{
											label: "CO₂",
											note: "Selected equipment risks",
											icon: Zap,
										},
										{
											label: "Foam & water",
											note: "Application-specific",
											icon: Gauge,
										},
										{
											label: "Wet chemical",
											note: "Kitchen fire risks",
											icon: Thermometer,
										},
									].map(({ label, note, icon: Icon }) => (
										<div
											key={label}
											className="rounded-xl border border-(--line) bg-muted/40 p-4"
										>
											<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-background text-red-700 dark:text-red-300">
												<Icon className="h-5 w-5" />
											</div>
											<p className="mt-3 text-sm font-semibold text-(--ink)">
												{label}
											</p>
											<p className="mt-1 text-xs leading-5 text-(--ink-soft)">
												{note}
											</p>
										</div>
									))}
								</div>

								<div className="mt-4 flex items-start gap-3 rounded-xl bg-red-500/5 p-4">
									<ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-red-700 dark:text-red-300" />
									<p className="text-xs leading-5 text-(--ink-soft)">
										Extinguisher type and rating must match the specific fire
										hazard. No single agent is suitable for every situation.
									</p>
								</div>
							</div>
							<div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-(--line) bg-background p-4 shadow-lg sm:flex">
								<div className="rounded-lg bg-red-500/10 p-2 text-red-700 dark:text-red-300">
									<BadgeCheck className="h-5 w-5" />
								</div>
								<div>
									<p className="text-sm font-semibold text-(--ink)">
										Site-specific selection
									</p>
									<p className="text-xs text-(--ink-soft)">
										Hazards, access & equipment rating
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
						Portable fire protection
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Choose extinguishers based on the fire risk—not just the building
						type.
					</h2>
				</div>
				<div className="space-y-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
					<p>
						Fire extinguishers are portable first-response equipment intended
						for use on fires that are at an early stage, by people who can do so
						safely and have suitable instruction. The extinguisher agent, rating
						and capacity must be appropriate for the potential fire involving
						the materials or equipment in that area.
					</p>
					<p>
						Baroda Enterprise can discuss the property's use, site conditions,
						existing equipment and required service scope. Equipment selection
						and placement should be confirmed by competent personnel against
						applicable standards, manufacturer instructions and the site's wider
						fire and evacuation plan.
					</p>
				</div>
			</section>

			{/* Services */}
			<section className="page-wrap mt-16" id="extinguisher-services">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Fire extinguisher services
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Support from equipment selection to ongoing readiness.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						The available scope may include supply, placement, installation,
						inspection and servicing. Confirm the specific extinguisher types
						and maintenance services offered by Baroda Enterprise before
						finalising a project.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{extinguisherServices.map((service) => {
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

			{/* Extinguisher types */}
			<section className="page-wrap mt-16" id="extinguisher-types">
				<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
					<div className="max-w-2xl">
						<Badge variant="outline" className="mb-3">
							Equipment options
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Common portable extinguisher types.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							These are common categories, not a statement that every type is
							stocked or supplied. Final selection must be based on the exact
							product approval, rating and site hazard.
						</p>
					</div>
					<Button asChild variant="outline" className="w-fit gap-2">
						<Link to="/contact-us">
							Ask about equipment <ArrowRight className="h-4 w-4" />
						</Link>
					</Button>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{extinguisherTypes.map((type) => {
						const Icon = type.icon;
						return (
							<Card
								key={type.title}
								className="h-full rounded-2xl border-(--line)"
							>
								<CardHeader>
									<div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-red-700 dark:text-red-300">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle className="text-lg">{type.title}</CardTitle>
									<CardDescription className="text-sm leading-6">
										{type.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="flex flex-wrap gap-2">
									{type.tags.map((tag) => (
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

			{/* Property types */}
			<section className="page-wrap mt-16" id="property-types">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Properties we can discuss
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Extinguisher planning across different environments.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Equipment type, capacity and placement should reflect the actual
						hazards and occupancy in each part of the property.
					</p>
				</div>

				<div className="mt-8 grid gap-4 lg:grid-cols-3">
					{propertyTypes.map((property) => {
						const Icon = property.icon;
						return (
							<Card
								key={property.title}
								className="h-full rounded-2xl border-(--line)"
							>
								<CardHeader>
									<div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-700 dark:text-red-300">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle>{property.title}</CardTitle>
									<CardDescription className="text-sm leading-6">
										{property.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
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
									<Button asChild variant="outline" size="sm" className="gap-2">
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
				<div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							Selection considerations
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Important details before choosing an extinguisher.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft)">
							A product's colour or general category is not enough to determine
							whether it is suitable. Check its approved marking, fire rating,
							operating limitations and maintenance requirements.
						</p>
						<div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
							<div className="flex items-start gap-3">
								<AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-700 dark:text-red-300" />
								<div>
									<p className="font-semibold text-(--ink)">
										Safety comes first
									</p>
									<p className="mt-1 text-sm leading-6 text-(--ink-soft)">
										Never attempt to fight a fire if it is spreading, producing
										heavy smoke, or putting people at risk. Raise the alarm,
										evacuate and call the fire service according to the site's
										emergency procedure.
									</p>
								</div>
							</div>
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
										<div className="mb-1 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-red-700 dark:text-red-300">
											<Icon className="h-5 w-5" />
										</div>
										<CardTitle className="text-base">{factor.title}</CardTitle>
										<CardDescription className="text-sm leading-6">
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
			<section className="page-wrap mt-16" id="installation-process">
				<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
					<div className="max-w-2xl">
						<Badge variant="outline" className="mb-3">
							How we approach a project
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							From site review to equipment handover.
						</h2>
					</div>
					<p className="max-w-md text-sm leading-6 text-(--ink-soft)">
						The exact activities, deliverables and service responsibilities are
						agreed for each project and should reflect the client's actual
						capabilities and authorisations.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{deliverySteps.map((step) => {
						const Icon = step.icon;
						return (
							<Card key={step.number} className="rounded-2xl border-(--line)">
								<CardHeader>
									<div className="flex items-center justify-between">
										<span className="text-sm font-bold tracking-widest text-red-700 dark:text-red-300">
											{step.number}
										</span>
										<div className="rounded-xl bg-red-500/10 p-2 text-red-700 dark:text-red-300">
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

			{/* Enquiry checklist */}
			<section className="page-wrap mt-16">
				<div className="grid gap-6 overflow-hidden rounded-3xl border border-(--line) bg-muted/30 p-6 sm:p-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:p-10">
					<div>
						<Badge variant="outline" className="mb-3">
							Prepare for a quotation
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							What should you share with us?
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft)">
							A few details help establish the right scope for an extinguisher
							enquiry. Existing drawings, equipment schedules or inspection
							observations can also be useful where available.
						</p>
						<Button asChild className="mt-6 gap-2">
							<Link to="/contact-us">
								Send an Enquiry <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>
					<div className="grid gap-3 sm:grid-cols-2">
						{[
							"Property type and address",
							"Floor area and floor count",
							"Materials, processes or key hazards",
							"Existing extinguisher types and quantities",
							"Floor plans or equipment locations",
							"Supply, installation or maintenance needs",
						].map((item) => (
							<div
								key={item}
								className="flex items-start gap-3 rounded-xl border border-(--line) bg-background p-4"
							>
								<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
								<span className="text-sm text-(--ink-soft)">{item}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Related solutions */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Related fire safety solutions
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Portable extinguishers are one part of a wider fire-safety plan.
					</h2>
				</div>
				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{relatedSolutions.map((solution) => (
						<Card
							key={solution.href}
							className="h-full rounded-2xl border-(--line)"
						>
							<CardHeader>
								<CardTitle className="text-base">{solution.title}</CardTitle>
								<CardDescription className="text-sm leading-6">
									{solution.description}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Button
									asChild
									variant="ghost"
									size="sm"
									className="-ml-2 gap-2"
								>
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
			<section className="page-wrap mt-16" id="faqs">
				<div className="mx-auto max-w-3xl">
					<div className="mb-8 text-center">
						<Badge variant="outline" className="mb-3">
							FAQs
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Fire extinguisher questions, answered.
						</h2>
						<p className="mt-3 text-sm leading-6 text-(--ink-soft)">
							General information only. Final equipment selection and servicing
							should follow the product instructions and applicable
							requirements.
						</p>
					</div>

					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem key={faq.question} value={`faq-${index + 1}`}>
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
				<div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#7f1d1d,#b91c1c_55%,#dc2626)] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
					<div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/15" />
					<div className="pointer-events-none absolute -right-4 -top-8 h-40 w-40 rounded-full border border-white/15" />
					<div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
						<div className="max-w-2xl">
							<p className="text-sm font-semibold uppercase tracking-wider text-white/75">
								Fire extinguisher solutions
							</p>
							<h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
								Let's review the fire risks at your property.
							</h2>
							<p className="mt-3 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
								Talk to Baroda Enterprise about extinguisher selection,
								placement, supply and the maintenance scope available for your
								residential, commercial or industrial site.
							</p>
						</div>
						<div className="flex shrink-0 flex-col gap-3 sm:flex-row">
							<Button asChild size="lg" variant="secondary" className="gap-2">
								<Link to="/contact-us">
									Request a Quote <ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
							>
								<a href="#property-types">Explore Applications</a>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
