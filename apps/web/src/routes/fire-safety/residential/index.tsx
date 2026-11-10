import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	BadgeCheck,
	BellRing,
	Building2,
	CheckCircle2,
	ClipboardCheck,
	DoorOpen,
	Droplets,
	Flame,
	Home,
	Lightbulb,
	MapPinned,
	ShieldCheck,
	Siren,
	Users,
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

export const Route = createFileRoute("/fire-safety/residential/")({
	component: ResidentialFireSafetyPage,
});

const residentialServices = [
	{
		icon: BellRing,
		title: "Fire detection & alarm systems",
		description:
			"Plan fire detection and occupant alerting around the building layout, occupancy, common areas and selected residential spaces.",
		points: [
			"Smoke and heat detector planning",
			"Fire alarm panels, sounders and manual call points",
			"Zone and device-location coordination",
		],
	},
	{
		icon: Flame,
		title: "Fire extinguishers",
		description:
			"Identify suitable extinguisher types and locations for common areas, service rooms and other agreed locations, based on the site risk and applicable requirements.",
		points: [
			"Extinguisher type and placement discussion",
			"Mounting and access considerations",
			"Inspection and servicing scope where offered",
		],
	},
	{
		icon: Droplets,
		title: "Hydrant & sprinkler systems",
		description:
			"Review water-based fire protection requirements for buildings where hydrant, hose-reel, riser or automatic sprinkler systems are applicable.",
		points: [
			"Hydrant and hose-reel network planning",
			"Sprinkler coverage coordination",
			"Pump, water-storage and supply considerations",
		],
	},
	{
		icon: DoorOpen,
		title: "Passive fire protection",
		description:
			"Help address fire and smoke separation as part of a building's broader protection plan, subject to the existing construction and project scope.",
		points: [
			"Fire-rated door and opening considerations",
			"Fire stopping around service penetrations",
			"Compartmentation and smoke-separation review",
		],
	},
	{
		icon: Lightbulb,
		title: "Emergency lighting & exit guidance",
		description:
			"Plan visible escape-route guidance and emergency illumination for agreed circulation and common areas, coordinated with the building layout.",
		points: [
			"Exit sign and directional sign locations",
			"Emergency lighting for escape routes",
			"Visibility and backup-power considerations",
		],
	},
	{
		icon: Wrench,
		title: "Testing & maintenance support",
		description:
			"Discuss inspection, functional testing and maintenance arrangements for installed fire protection equipment, according to the agreed service scope.",
		points: [
			"Device and alarm function checks",
			"Inspection planning for selected equipment",
			"Maintenance records and follow-up actions",
		],
	},
];

const propertyTypes = [
	{
		icon: Building2,
		title: "Apartment buildings & residential towers",
		description:
			"Coordinate protection across entrances, corridors, staircases, basements, parking levels, service rooms and other shared spaces. The design should consider the building's height, layout and occupancy.",
		tags: ["Multi-storey buildings", "Basements & parking", "Shared areas"],
	},
	{
		icon: Users,
		title: "Housing societies & gated communities",
		description:
			"Plan common-area systems for residential communities, including access points, internal roads, clubhouses, utility spaces and shared amenities where required.",
		tags: ["Common facilities", "Society infrastructure", "Multiple blocks"],
	},
	{
		icon: Home,
		title: "Independent homes & villas",
		description:
			"Review practical fire detection, alarm, extinguisher and escape considerations for individual homes, based on their size, layout, occupancy and specific risks.",
		tags: ["Independent homes", "Villas", "Private residences"],
	},
];

const systemElements = [
	{
		icon: Siren,
		title: "Detection & alarm devices",
		description:
			"Smoke or heat detectors, manual call points, alarm sounders and control equipment can form part of a coordinated system. Device selection and placement depend on the premises and design requirements.",
		tags: [
			"Smoke / heat detection",
			"Manual call points",
			"Alarm notification",
		],
	},
	{
		icon: Flame,
		title: "Portable fire extinguishers",
		description:
			"Extinguisher selection should reflect the potential fire classes and hazards in each location. Access, signage, mounting height and serviceability also need consideration.",
		tags: [
			"Suitable extinguisher type",
			"Accessible placement",
			"Service planning",
		],
	},
	{
		icon: Droplets,
		title: "Water-based protection",
		description:
			"Where required, hydrants, hose reels, risers and sprinklers depend on hydraulic design, available water supply, pumps, storage and coordination with the building infrastructure.",
		tags: ["Hydrant network", "Sprinkler coverage", "Water supply"],
	},
	{
		icon: DoorOpen,
		title: "Escape & compartmentation elements",
		description:
			"Fire-rated doors, fire stopping, exit signs and emergency lighting can support safe evacuation and limit the movement of fire or smoke when correctly specified and maintained.",
		tags: ["Fire doors", "Exit signage", "Emergency lighting"],
	},
];

const planningFactors = [
	{
		icon: Building2,
		title: "Building layout & occupancy",
		description:
			"Review building height, floor plans, occupancy patterns, common areas, basements, parking and service spaces. These details influence system selection and device locations.",
	},
	{
		icon: BellRing,
		title: "Detection, alarm & notification",
		description:
			"Consider the type of detection, alarm zoning, occupant notification and how residents or building staff will respond when an alarm is activated.",
	},
	{
		icon: DoorOpen,
		title: "Escape routes & access",
		description:
			"Review staircases, corridors, exit routes, doors, signage and emergency lighting. Keep escape routes usable and avoid placing equipment where it obstructs movement.",
	},
	{
		icon: Droplets,
		title: "Water supply & fire-fighting systems",
		description:
			"Where hydrant or sprinkler systems are required, assess water storage, pump arrangements, pipe routes, pressure, access and the interface with existing services.",
	},
	{
		icon: Zap,
		title: "Electrical & service areas",
		description:
			"Pay particular attention to electrical rooms, generator areas, lift machine rooms, utility spaces and other locations with specific ignition or equipment risks.",
	},
	{
		icon: ShieldCheck,
		title: "Applicable requirements & maintenance",
		description:
			"Confirm the applicable local requirements and approvals with the relevant qualified professionals and authorities. Define who will inspect, test and maintain each installed system.",
	},
];

const deliverySteps = [
	{
		number: "01",
		icon: ClipboardCheck,
		title: "Understand the property",
		description:
			"Discuss the building type, location, floor count, occupancy, available drawings, existing fire protection equipment and the concerns raised by the owner or society management.",
	},
	{
		number: "02",
		icon: MapPinned,
		title: "Review requirements & scope",
		description:
			"Review the site information and identify which systems may be required. Confirm design responsibilities, equipment scope, interfaces and any specialist approvals before proceeding.",
	},
	{
		number: "03",
		icon: Wrench,
		title: "Install the agreed systems",
		description:
			"Coordinate equipment supply, installation and configuration according to the approved project scope, manufacturer instructions and applicable requirements.",
	},
	{
		number: "04",
		icon: BadgeCheck,
		title: "Test & hand over",
		description:
			"Carry out the agreed checks, explain system operation to the designated representative and provide relevant handover information and maintenance recommendations.",
	},
];

const relatedSolutions = [
	{
		title: "Industrial Fire Safety",
		description:
			"Fire protection planning for factories, warehouses and industrial premises.",
		href: "/fire-safety/industrial",
	},
	{
		title: "Commercial Fire Safety",
		description:
			"Fire safety solutions for offices, retail spaces, hospitals and other commercial properties.",
		href: "/fire-safety/commercial",
	},
	{
		title: "Fire Detection & Alarm",
		description:
			"Explore detection, alarm notification and system configuration considerations.",
		href: "/fire-safety/fire-detection",
	},
	{
		title: "Maintenance & Inspection",
		description:
			"Discuss inspection and maintenance arrangements for installed fire protection systems.",
		href: "/fire-safety/maintenance",
	},
] as const;

const faqs = [
	{
		question: "What does a residential fire safety system include?",
		answer:
			"The required systems depend on the building type, height, layout, occupancy and applicable requirements. A project may involve fire detection and alarms, extinguishers, hydrants, sprinklers, emergency lighting, exit signage and passive fire protection. Not every property needs every system.",
	},
	{
		question:
			"Can you provide fire safety solutions for an entire housing society?",
		answer:
			"A society-wide project can be assessed across its buildings and shared infrastructure. The scope may include common areas, basements, parking, utility rooms, entrances and other agreed locations. The final design depends on site conditions and applicable requirements.",
	},
	{
		question: "Do independent homes need smoke detectors and extinguishers?",
		answer:
			"Detection and portable fire protection can be useful in homes, but device type, number and placement should be selected for the property's layout and potential hazards. Requirements may also vary by local rules and building conditions.",
	},
	{
		question: "Can an existing fire alarm or hydrant system be upgraded?",
		answer:
			"Possibly. The installed equipment, condition, documentation, compatibility and current building requirements need to be reviewed first. Some components may be reusable, while others may need repair, replacement or redesign.",
	},
	{
		question: "Are sprinklers and hydrant systems required in every residence?",
		answer:
			"No single answer applies to every property. Applicability depends on factors such as building use, height, area, configuration and the relevant regulations or approval conditions. Confirm the requirements with the competent authority and appropriately qualified fire safety professionals.",
	},
	{
		question: "Can you help with fire safety maintenance?",
		answer:
			"Maintenance and inspection can be discussed for systems within the company's confirmed service capability. The proposed schedule, checks, records and exclusions should be defined in the service agreement and aligned with manufacturer instructions and applicable requirements.",
	},
	{
		question:
			"Will installation automatically provide a Fire Safety Certificate or NOC?",
		answer:
			"No. Installing equipment does not by itself guarantee a Fire Safety Certificate, NOC or approval. Certification depends on the applicable process, documentation, inspection and decision of the relevant authority. Any approval-related assistance must be clearly defined and handled by appropriately authorised professionals.",
	},
	{
		question:
			"What information is needed for a residential fire safety quotation?",
		answer:
			"Share the property address, building type, number of floors or units, approximate area, available floor plans, existing fire protection systems, known issues and the requested scope. Photographs and previous inspection or approval documents can also help with an initial review.",
	},
];

function ResidentialFireSafetyPage() {
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
								Fire Safety / Residential Solutions
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								Residential fire safety planned around the people and places you
								protect.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Explore fire detection, alarm, extinguishing and building
								protection options for apartments, housing societies, villas and
								residential towers. Baroda Enterprise can discuss your property,
								review the existing arrangements and help define an appropriate
								installation scope.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Request a Site Discussion <ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#residential-fire-safety-services">
										Explore Solutions
									</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Homes & apartment buildings
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Detection & protection systems
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
									src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85"
									alt="Modern residential property"
									className="h-64 w-full object-cover sm:h-80 lg:h-[390px]"
								/>
								<div className="grid gap-4 p-5 sm:grid-cols-2">
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<BellRing className="h-4 w-4 text-red-600" />
											Early warning
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Consider suitable detection and alarm arrangements for the
											building's layout and occupancy.
										</p>
									</div>
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<ShieldCheck className="h-4 w-4 text-red-600" />
											Building protection
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Coordinate equipment, escape routes and maintenance
											considerations as one broader plan.
										</p>
									</div>
								</div>
							</div>
							<div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-(--line) bg-background p-4 shadow-lg sm:flex">
								<div className="rounded-lg bg-red-500/10 p-2 text-red-700 dark:text-red-300">
									<Home className="h-5 w-5" />
								</div>
								<div>
									<p className="text-sm font-semibold text-(--ink)">
										Designed for residential settings
									</p>
									<p className="text-xs text-(--ink-soft)">
										Individual homes, societies and towers
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
						A property-specific approach
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Fire protection for shared spaces, homes and residential
						communities.
					</h2>
				</div>
				<div className="space-y-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
					<p>
						Residential buildings have different fire safety needs depending on
						their height, design, occupancy, access routes and shared
						facilities. An apartment tower with basements and multiple blocks
						has different planning considerations from an independent villa.
					</p>
					<p>
						A useful starting point is to understand the property and its
						existing systems before selecting equipment. The final scope should
						be based on site conditions, applicable requirements, manufacturer
						guidance and input from appropriately qualified professionals where
						required.
					</p>
				</div>
			</section>

			{/* Services */}
			<section
				className="page-wrap mt-16"
				id="residential-fire-safety-services"
			>
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Residential fire safety services
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Explore the systems that can form part of a residential fire safety
						plan.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Select systems based on the property, risk profile and applicable
						requirements. Not every solution is suitable or required for every
						residential site; the actual service scope should be confirmed after
						reviewing the project.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{residentialServices.map((service) => {
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

			{/* Property types */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Residential properties
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Different homes need different fire protection considerations.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						The property type helps determine the areas to review, the systems
						to consider and the people who will operate or maintain them.
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
								<CardContent className="flex flex-wrap gap-2">
									{property.tags.map((tag) => (
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

			{/* System elements */}
			<section className="page-wrap mt-16">
				<div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							Core system elements
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Understand how the different protection elements work together.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							Detection, notification, fire-fighting equipment and escape
							provisions serve different purposes. Their selection and
							coordination should follow the property's design and applicable
							project requirements.
						</p>
						<Button asChild variant="outline" className="mt-6 gap-2">
							<Link to="/contact-us">
								Discuss your property <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						{systemElements.map((element) => {
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

			{/* Planning factors */}
			<section className="page-wrap mt-16">
				<div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							Before installation
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Start with the building, its occupants and the applicable
							requirements.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							A site review helps identify existing equipment, building
							constraints, areas that need attention and the information
							required to prepare a practical project scope.
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
							A clear process from property review to system handover.
						</h2>
					</div>
					<p className="max-w-md text-sm leading-6 text-(--ink-soft)">
						Project responsibilities, approvals, testing and documentation
						should be agreed before installation begins.
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
							What to share when requesting a residential fire safety quote.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							A few property details can help establish the initial scope. A
							site visit and review by the appropriate professionals may be
							needed before equipment and pricing are finalised.
						</p>
						<Button asChild className="mt-6 gap-2">
							<Link to="/contact-us">
								Send an Enquiry <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>
					<div className="grid gap-3 sm:grid-cols-2">
						{[
							"Property address and building type",
							"Number of floors and residential units",
							"Approximate built-up or common area",
							"Available floor plans or layout drawings",
							"Existing alarms, extinguishers or hydrants",
							"Basement, parking and service areas",
							"Previous inspection or approval documents",
							"Specific concerns and requested services",
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
						Other fire safety services.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Explore related service areas or contact the team to discuss which
						solutions apply to your property.
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
								<a
									href={solution.href}
									className="inline-flex items-center gap-2 text-sm font-semibold text-red-700 transition-colors hover:text-red-800 dark:text-red-300 dark:hover:text-red-200"
								>
									Explore service <ArrowRight className="h-4 w-4" />
								</a>
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
							Residential fire safety FAQs.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft)">
							Have a property-specific question? Share the details with our team
							so the appropriate requirements can be discussed.
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
								Residential Fire Safety
							</Badge>
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
								Discuss the fire safety needs of your property.
							</h2>
							<p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
								Tell us about your home, apartment building or housing society.
								We can discuss the site information, the systems you are
								considering and the next steps for defining a project scope.
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
