import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	BadgeCheck,
	BellRing,
	Building2,
	CheckCircle2,
	ClipboardCheck,
	DoorOpen,
	FileCheck2,
	Flame,
	HeartPulse,
	Lightbulb,
	MapPinned,
	ShieldCheck,
	ShoppingBag,
	Siren,
	Store,
	Users,
	Waves,
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

export const Route = createFileRoute("/fire-safety/commercial")({
	component: CommercialFireSafetyPage,
});

const commercialServices = [
	{
		icon: BellRing,
		title: "Fire detection & alarm systems",
		description:
			"Plan detection, alarm panels and occupant notification around the building layout, occupancy profile, activities and identified fire risks.",
		points: [
			"Suitable smoke, heat and other detection options",
			"Fire alarm panels, manual call points and notification devices",
			"Alarm zoning and coordination across floors or tenant areas",
		],
	},
	{
		icon: Waves,
		title: "Fire hydrant & sprinkler systems",
		description:
			"Review water-based fire protection requirements for common areas, commercial floors, back-of-house spaces, storage and other applicable areas.",
		points: [
			"Hydrant, hose-reel and riser arrangements",
			"Sprinkler coverage and water supply considerations",
			"Pump, storage and distribution coordination",
		],
	},
	{
		icon: Flame,
		title: "Fire extinguishers & first response",
		description:
			"Consider portable extinguishers and first-response equipment suited to the hazards, occupancy, access routes and building operations.",
		points: [
			"Extinguisher type and location planning",
			"Clear access, signage and identification",
			"Inspection and service planning for covered equipment",
		],
	},
	{
		icon: ShieldCheck,
		title: "Passive fire protection",
		description:
			"Review measures that help limit fire and smoke spread between rooms, floors, service areas and different occupancy zones.",
		points: [
			"Fire-rated doors and compartmentation considerations",
			"Fire stopping at service and cable penetrations",
			"Coordination of protected routes and building interfaces",
		],
	},
	{
		icon: DoorOpen,
		title: "Emergency exits & life-safety systems",
		description:
			"Coordinate wayfinding and emergency provisions with building circulation, occupant needs and the site's evacuation arrangements.",
		points: [
			"Exit signage and emergency lighting considerations",
			"Escape-route visibility and access review",
			"Alarm communication and evacuation interface planning",
		],
	},
	{
		icon: Wrench,
		title: "Testing, inspection & maintenance",
		description:
			"Discuss planned inspection and maintenance for the fire protection systems included in the confirmed service scope.",
		points: [
			"Functional checks for agreed alarm and detection equipment",
			"Inspection planning for hydrant, pump and sprinkler systems",
			"Service records, observations and corrective-action tracking",
		],
	},
];

const propertyTypes = [
	{
		icon: Building2,
		title: "Offices & business parks",
		description:
			"Consider reception areas, meeting rooms, work floors, server rooms, utility spaces, cafeterias, basements and shared circulation when reviewing fire protection needs.",
		tags: ["Office floors", "Common areas", "Utility rooms"],
	},
	{
		icon: ShoppingBag,
		title: "Retail, malls & showrooms",
		description:
			"Review public occupancy, shop layouts, display materials, storage rooms, food-court areas, loading zones and movement through shared spaces.",
		tags: ["Retail units", "Public areas", "Stock rooms"],
	},
	{
		icon: HeartPulse,
		title: "Hotels, healthcare & education",
		description:
			"Buildings with sleeping occupants, patients, students or visitors may need particular attention to alarm communication, assisted evacuation, protected routes and operational continuity.",
		tags: ["Hotels & hospitality", "Healthcare", "Educational buildings"],
	},
];

const systemElements = [
	{
		icon: Siren,
		title: "Detection, alarm & notification",
		description:
			"Detection devices, alarm panels, manual call points and notification equipment should be selected for the building environment and occupant profile. Device placement and alarm zoning should follow the applicable design requirements.",
		tags: ["Detection devices", "Alarm panels", "Occupant notification"],
	},
	{
		icon: Waves,
		title: "Hydrant, sprinkler & water supply",
		description:
			"Water-based systems depend on an appropriately assessed water supply, storage, pumping, pipework, pressure and distribution arrangement coordinated with the building design.",
		tags: ["Hydrant network", "Sprinkler coverage", "Pump arrangements"],
	},
	{
		icon: ShieldCheck,
		title: "Compartmentation & fire stopping",
		description:
			"Fire-rated separations, protected openings and properly treated service penetrations can form part of a building's strategy for limiting fire and smoke spread.",
		tags: ["Fire doors", "Fire stopping", "Protected routes"],
	},
	{
		icon: Lightbulb,
		title: "Emergency lighting & wayfinding",
		description:
			"Emergency lighting and exit information should be considered alongside escape routes, staircases, changes in level, shared areas and the needs of building occupants.",
		tags: ["Exit signage", "Emergency lighting", "Escape routes"],
	},
];

const planningFactors = [
	{
		icon: Users,
		title: "Occupancy & building use",
		description:
			"Understand the number and type of occupants, visitor patterns, operating hours, tenant mix, sleeping or assisted occupants and any periods of peak use.",
	},
	{
		icon: Building2,
		title: "Layout, floors & shared spaces",
		description:
			"Review floor plans, building height, basements, atriums, staircases, corridors, service areas, tenant demarcations and access for emergency response.",
	},
	{
		icon: Store,
		title: "Activities, contents & fire load",
		description:
			"Consider the activities carried out in each area, furnishings, stock, packaging, kitchens, electrical equipment and any special hazards that may affect system selection.",
	},
	{
		icon: Waves,
		title: "Water supply & system interfaces",
		description:
			"Where water-based protection is considered, assess supply, storage, pumps, pressure, pipe routes, maintenance access and interfaces with the existing building services.",
	},
	{
		icon: DoorOpen,
		title: "Evacuation & accessibility",
		description:
			"Consider exit capacity, travel paths, refuge or assisted-evacuation needs, public communication, security arrangements and how occupants will respond to an alarm.",
	},
	{
		icon: FileCheck2,
		title: "Applicable requirements & records",
		description:
			"Confirm the applicable rules, design responsibilities, approvals, drawings, inspection records and handover documentation with qualified professionals and the relevant authority.",
	},
];

const deliverySteps = [
	{
		number: "01",
		icon: ClipboardCheck,
		title: "Understand the property",
		description:
			"Discuss the building use, location, floor area, occupancy, available plans, existing fire systems, operating hours and the owner's or facility team's priorities.",
	},
	{
		number: "02",
		icon: MapPinned,
		title: "Review risks & define scope",
		description:
			"Review available site information and identify the systems that may be appropriate. Confirm design inputs, interfaces, specialist responsibilities and approval requirements before finalising the scope.",
	},
	{
		number: "03",
		icon: Wrench,
		title: "Coordinate installation",
		description:
			"Plan equipment supply, installation and integration around the agreed scope, building operations, site access, manufacturer instructions and applicable requirements.",
	},
	{
		number: "04",
		icon: BadgeCheck,
		title: "Test, document & hand over",
		description:
			"Complete the agreed checks, explain system operation to designated personnel and provide the relevant handover information and maintenance recommendations.",
	},
];

const relatedSolutions = [
	{
		title: "Residential Fire Safety",
		description:
			"Fire protection considerations for apartments, housing societies, villas and residential towers.",
		href: "/fire-safety/residential",
	},
	{
		title: "Industrial Fire Safety",
		description:
			"Fire protection planning for factories, warehouses and industrial premises.",
		href: "/fire-safety/industrial",
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
			"Discuss testing and maintenance arrangements for installed fire protection systems.",
		href: "/fire-safety/maintenance",
	},
] as const;

const faqs = [
	{
		question: "What does a commercial fire safety system include?",
		answer:
			"The scope depends on the building, its use, occupancy, layout and applicable requirements. A project may include detection and alarms, hydrants, sprinklers, portable extinguishers, passive fire protection, emergency lighting and exit signage. Not every system is suitable or required in every property.",
	},
	{
		question: "Can you support offices, malls, hotels and hospitals?",
		answer:
			"These are different building types with different occupancy patterns and operational needs. The property type, available information and confirmed service capabilities should be reviewed before deciding whether and how a project can be supported.",
	},
	{
		question: "Can fire safety systems be installed in an occupied building?",
		answer:
			"Work in an occupied property may be possible with careful phasing and controls. The plan should address tenant and visitor access, work hours, permits, isolation of existing systems, noise, dust, temporary precautions and communication with the facility team.",
	},
	{
		question: "Can an existing alarm, hydrant or sprinkler system be upgraded?",
		answer:
			"An upgrade may be possible after reviewing the installed equipment, system condition, drawings, test records, compatibility and current project requirements. The review may identify components that can be retained as well as items requiring repair, replacement or redesign.",
	},
	{
		question:
			"Do commercial buildings need emergency lighting and exit signage?",
		answer:
			"Emergency lighting and exit information may form part of the life-safety provisions required for a building. The exact scope, locations and specifications should be determined from the building's use, layout and applicable requirements by suitably qualified professionals.",
	},
	{
		question: "Can maintenance be included after installation?",
		answer:
			"Maintenance can be discussed as a separate or combined scope, depending on the company's confirmed capabilities. Any agreement should specify the systems covered, inspection frequency, service records, exclusions, response arrangements and responsibilities.",
	},
	{
		question:
			"Will installing fire safety equipment automatically provide a Fire Safety Certificate or NOC?",
		answer:
			"No. Equipment installation alone does not guarantee a Fire Safety Certificate, NOC or regulatory approval. Approval depends on applicable requirements, documentation, inspections and the decision of the relevant authority. Any approval-related assistance must be clearly defined and performed by appropriately authorised professionals.",
	},
	{
		question:
			"What information is needed for a commercial fire safety quotation?",
		answer:
			"Share the property address, building use, approximate area, number of floors, occupancy, floor plans, existing fire systems and requested services. Details about basements, parking, kitchens, storage, operating hours and previous inspection records can also support an initial review.",
	},
];

function CommercialFireSafetyPage() {
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
								Fire Safety / Commercial Solutions
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								Commercial fire safety planned around your building, business
								and people.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Explore fire detection, alarm, hydrant, sprinkler and
								life-safety options for offices, retail spaces, hotels and other
								commercial properties. Baroda Enterprise can discuss your
								building, review existing arrangements and help define an
								installation scope around your operational requirements.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Request a Site Assessment <ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#commercial-fire-safety-services">
										Explore Solutions
									</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Offices & business parks
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Retail & hospitality
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Occupant-focused planning
								</span>
							</div>
						</div>

						<div className="relative">
							<div className="overflow-hidden rounded-2xl border border-(--line) bg-background shadow-xl">
								<img
									src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85"
									alt="Modern commercial office interior"
									className="h-64 w-full object-cover sm:h-80 lg:h-[390px]"
								/>
								<div className="grid gap-4 p-5 sm:grid-cols-2">
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<Siren className="h-4 w-4 text-red-600" />
											Early detection
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Consider alarm and notification arrangements suited to the
											building and its occupants.
										</p>
									</div>
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<ShieldCheck className="h-4 w-4 text-red-600" />
											Coordinated protection
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Align fire protection equipment with building services,
											operations and maintenance planning.
										</p>
									</div>
								</div>
							</div>
							<div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-(--line) bg-background p-4 shadow-lg sm:flex">
								<div className="rounded-lg bg-red-500/10 p-2 text-red-700 dark:text-red-300">
									<Building2 className="h-5 w-5" />
								</div>
								<div>
									<p className="text-sm font-semibold text-(--ink)">
										Designed for commercial settings
									</p>
									<p className="text-xs text-(--ink-soft)">
										Offices, retail, hospitality and public spaces
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
						Fire protection for workplaces, public areas and shared facilities.
					</h2>
				</div>
				<div className="space-y-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
					<p>
						Commercial buildings can bring together offices, shops, restaurants,
						meeting spaces, storage, plant rooms and public areas under one
						roof. Occupancy levels and activities may vary throughout the day,
						so fire safety planning should consider how the building is used and
						how people move through it.
					</p>
					<p>
						A practical starting point is to understand the property, its
						existing protection systems and the needs of its occupants and
						facility team. The final scope should follow a competent risk and
						design review, applicable requirements, manufacturer guidance and
						the building's operating procedures.
					</p>
				</div>
			</section>

			{/* Services */}
			<section className="page-wrap mt-16" id="commercial-fire-safety-services">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Commercial fire safety services
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Explore fire protection systems for commercial properties.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Systems should be selected for the actual building use, occupancy,
						layout and identified hazards. Not every solution applies to every
						property; available services and project scope should be confirmed
						after reviewing the site.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{commercialServices.map((service) => {
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
						Commercial properties
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Different buildings need different fire safety considerations.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						The building's purpose, occupant profile, activities and shared
						facilities help determine which areas need review and which systems
						may be suitable.
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
							System elements
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Coordinate the systems that contribute to building safety.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							Fire protection is a coordinated arrangement, not simply a list of
							products. Detection, suppression, compartmentation and evacuation
							provisions should be considered together with building services
							and the applicable design requirements.
						</p>
						<Button asChild variant="outline" className="mt-6 gap-2">
							<Link to="/contact-us">
								Discuss your building <ArrowRight className="h-4 w-4" />
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
										<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-700 dark:text-red-300">
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
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Before installation
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						What should be considered during commercial fire safety planning?
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						A site review helps identify the information needed to define an
						appropriate scope and coordinate work with the building team.
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

			{/* Delivery process */}
			<section className="page-wrap mt-16">
				<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
					<div className="max-w-2xl">
						<Badge variant="outline" className="mb-3">
							Our approach
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							A clear process from initial discussion to system handover.
						</h2>
					</div>
					<p className="max-w-md text-sm leading-6 text-(--ink-soft)">
						The exact sequence and deliverables depend on the agreed project
						scope, building conditions and the responsibilities of the parties
						involved.
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
										<div className="rounded-xl bg-red-500/10 p-2 text-red-700 dark:text-red-300">
											<Icon className="h-5 w-5" />
										</div>
									</div>
									<CardTitle className="pt-3 text-lg">{step.title}</CardTitle>
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
						Explore more
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Related fire safety solutions.
					</h2>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{relatedSolutions.map((solution) => (
						<Card key={solution.href} className="rounded-2xl border-(--line)">
							<CardHeader>
								<CardTitle className="text-base">{solution.title}</CardTitle>
								<CardDescription className="leading-6">
									{solution.description}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Button
									asChild
									variant="ghost"
									className="h-auto px-0 text-red-700 hover:text-red-800 dark:text-red-300"
								>
									<Link to={solution.href}>
										Learn more <ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
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
							FAQs
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Commercial fire safety questions.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft)">
							Have a question about your property or an existing system? Share
							the building details with our team to discuss the next steps.
						</p>
						<Button asChild className="mt-6 gap-2">
							<Link to="/contact-us">
								Contact our team <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
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

			{/* Final CTA */}
			<section className="page-wrap mt-16">
				<div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-[linear-gradient(120deg,rgba(220,38,38,0.12),transparent_70%),var(--header-bg)] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
					<div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border border-red-500/15" />
					<div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
						<div className="max-w-2xl">
							<Badge
								variant="outline"
								className="mb-4 border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300"
							>
								Plan your next step
							</Badge>
							<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
								Discuss fire safety requirements for your commercial property.
							</h2>
							<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
								Tell us about the building, its use and your current fire
								protection arrangements. We can discuss the information needed
								to define a suitable project scope.
							</p>
						</div>
						<div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
							<Button asChild size="lg" className="gap-2">
								<Link to="/contact-us">
									Request a Consultation <ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button asChild size="lg" variant="outline">
								<Link to="/fire-safety/industrial">
									Explore Industrial Solutions
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
