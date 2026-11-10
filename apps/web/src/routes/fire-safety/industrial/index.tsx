import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	BadgeCheck,
	BellRing,
	Boxes,
	CheckCircle2,
	ClipboardCheck,
	Factory,
	Flame,
	Gauge,
	HardHat,
	MapPinned,
	ShieldCheck,
	Siren,
	Warehouse,
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

export const Route = createFileRoute("/fire-safety/industrial/")({
	component: IndustrialFireSafetyPage,
});

const industrialServices = [
	{
		icon: BellRing,
		title: "Fire detection & alarm systems",
		description:
			"Plan detection and alarm arrangements around the facility layout, operating conditions, occupancy and the hazards identified for each area.",
		points: [
			"Smoke, heat and other suitable detection options",
			"Fire alarm panels, manual call points and notification devices",
			"Zoning and device coordination for production and support areas",
		],
	},
	{
		icon: Waves,
		title: "Fire hydrant & water-based systems",
		description:
			"Review hydrant, hose-reel, riser and water-based protection needs for industrial premises, with attention to site access and water supply arrangements.",
		points: [
			"Hydrant networks and hose-reel arrangements",
			"Fire pump, water storage and distribution considerations",
			"Access, coverage and interface with site infrastructure",
		],
	},
	{
		icon: Gauge,
		title: "Automatic sprinkler systems",
		description:
			"Consider sprinkler protection for suitable production, storage and building areas, based on the commodities, process risks, building configuration and design requirements.",
		points: [
			"Hazard and storage arrangement review",
			"Sprinkler coverage and piping coordination",
			"Water demand and system interface considerations",
		],
	},
	{
		icon: Flame,
		title: "Special-hazard fire suppression",
		description:
			"For selected equipment or process risks, assess whether a dedicated suppression approach may be appropriate. The agent and system design must follow a competent hazard assessment.",
		points: [
			"Electrical, control-room and equipment enclosures",
			"Potential clean-agent, CO₂ or other specialist approaches",
			"Detection, release controls and occupant safety interfaces",
		],
	},
	{
		icon: ShieldCheck,
		title: "Portable extinguishers & passive protection",
		description:
			"Plan portable fire-fighting equipment and passive measures around the site's identified hazards, access routes, building separations and operating activities.",
		points: [
			"Extinguisher selection and location planning",
			"Fire doors, fire stopping and compartmentation considerations",
			"Signage, access and inspection arrangements",
		],
	},
	{
		icon: Wrench,
		title: "Testing, inspection & maintenance",
		description:
			"Discuss planned checks and maintenance for the systems within the confirmed service scope, helping the facility team track condition, observations and follow-up work.",
		points: [
			"Functional checks for agreed detection and alarm equipment",
			"Inspection planning for hydrant, pump and suppression systems",
			"Service records, defects and recommended corrective actions",
		],
	},
];

const facilityTypes = [
	{
		icon: Factory,
		title: "Manufacturing & production facilities",
		description:
			"Consider process areas, machinery, electrical rooms, utilities, raw materials, finished goods and the movement of people and materials when defining a facility-wide fire protection scope.",
		tags: ["Production floors", "Utilities & plant rooms", "Electrical areas"],
	},
	{
		icon: Warehouse,
		title: "Warehouses & logistics facilities",
		description:
			"Review storage height and arrangement, commodity types, loading bays, racking, dispatch areas and vehicle movement. These site conditions can affect detection and suppression planning.",
		tags: ["Storage & racking", "Loading bays", "Dispatch areas"],
	},
	{
		icon: Boxes,
		title: "Process, engineering & specialist industries",
		description:
			"Facilities with specialist processes or materials may need a more detailed hazard review and input from appropriately qualified fire protection and process-safety professionals.",
		tags: ["Process areas", "Workshops", "Specialist hazards"],
	},
];

const systemElements = [
	{
		icon: Siren,
		title: "Detection, alarm & notification",
		description:
			"Detection devices, alarm panels, manual call points and notification equipment should be selected for the environment. Dust, heat, vapour, airflow and process conditions may affect device suitability and placement.",
		tags: ["Suitable detection", "Alarm zoning", "Occupant notification"],
	},
	{
		icon: Waves,
		title: "Hydrant, pumps & water supply",
		description:
			"Hydrant and sprinkler systems depend on a properly assessed water supply, storage, pumping, pipework, pressure and distribution arrangement, coordinated with the facility layout.",
		tags: ["Hydrant network", "Pump arrangements", "Water storage"],
	},
	{
		icon: Flame,
		title: "Suppression & extinguishing equipment",
		description:
			"Portable extinguishers and fixed suppression systems need to match the potential fire hazards and operating environment. Specialist systems require suitable design, safety controls and maintenance.",
		tags: ["Portable extinguishers", "Fixed suppression", "Hazard suitability"],
	},
	{
		icon: ShieldCheck,
		title: "Passive protection & safe access",
		description:
			"Fire-rated separation, fire stopping, protected routes, access for emergency response and clear equipment locations can support the wider protection strategy for a facility.",
		tags: ["Fire separation", "Service penetrations", "Access & signage"],
	},
];

const planningFactors = [
	{
		icon: Factory,
		title: "Process hazards & materials",
		description:
			"Understand production activities, raw materials, finished goods, flammable or combustible materials, process temperatures and any specialist hazards before selecting systems.",
	},
	{
		icon: Warehouse,
		title: "Building layout & storage",
		description:
			"Review floor plans, building height, storage configuration, rack layouts, mezzanines, loading bays, utility areas and separation between different operations.",
	},
	{
		icon: Zap,
		title: "Electrical & critical equipment",
		description:
			"Identify electrical rooms, control panels, server or control rooms, transformers, generators and other critical equipment that may need specific detection or suppression considerations.",
	},
	{
		icon: Waves,
		title: "Water supply & fire-fighting access",
		description:
			"Where water-based systems are considered, assess available supply, storage, pumps, pressure, pipe routes, maintenance access and the locations from which emergency response may be needed.",
	},
	{
		icon: HardHat,
		title: "People, shifts & emergency response",
		description:
			"Consider staffing levels, contractors, shift patterns, visitor movement, evacuation routes, muster arrangements, training needs and how alarms will be communicated.",
	},
	{
		icon: ShieldCheck,
		title: "Applicable requirements & operations",
		description:
			"Confirm applicable rules, approvals and design responsibilities with the relevant authority and qualified professionals. Plan installation and maintenance around safe facility operations.",
	},
];

const deliverySteps = [
	{
		number: "01",
		icon: ClipboardCheck,
		title: "Understand the facility",
		description:
			"Discuss the facility location, industry, processes, floor area, building plans, operating shifts, existing fire systems and the key concerns identified by the owner or EHS team.",
	},
	{
		number: "02",
		icon: MapPinned,
		title: "Assess hazards & define scope",
		description:
			"Review available site information and identify the systems that may be appropriate. Confirm design inputs, specialist responsibilities, interfaces and approval requirements before work is scoped.",
	},
	{
		number: "03",
		icon: Wrench,
		title: "Coordinate installation",
		description:
			"Plan equipment supply, installation, integration and configuration around the agreed project scope, site safety procedures, manufacturer instructions and applicable requirements.",
	},
	{
		number: "04",
		icon: BadgeCheck,
		title: "Test, document & hand over",
		description:
			"Complete the agreed inspections and functional checks, explain system operation to designated personnel and provide the relevant handover details and maintenance recommendations.",
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
		title: "Commercial Fire Safety",
		description:
			"Fire safety planning for offices, retail premises, hospitals and other commercial buildings.",
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
			"Discuss testing and maintenance arrangements for installed fire protection systems.",
		href: "/fire-safety/maintenance",
	},
] as const;

const faqs = [
	{
		question: "What does an industrial fire safety system include?",
		answer:
			"The scope depends on the facility, processes, materials, building layout, storage arrangements and applicable requirements. A project may include detection and alarms, hydrants, sprinklers, portable extinguishers, specialist suppression, passive protection and emergency arrangements. Not every system is suitable or required at every site.",
	},
	{
		question: "Can fire protection be planned while a factory is operational?",
		answer:
			"It may be possible, but the work plan must account for production schedules, permit-to-work procedures, contractor access, hot-work controls, shutdown windows and site-specific safety rules. The client and installation team should agree the work sequence and controls before work begins.",
	},
	{
		question:
			"Do warehouses need a different approach from manufacturing facilities?",
		answer:
			"Often, yes. Storage height, rack configuration, commodity type, packaging, aisle layout and loading operations can influence the risk assessment and system design. Manufacturing sites may have different process, machinery, utility or electrical hazards.",
	},
	{
		question: "Can an existing hydrant, sprinkler or alarm system be upgraded?",
		answer:
			"An upgrade may be possible after reviewing the installed equipment, system condition, drawings, test records, compatibility and current project requirements. The review may identify components that can be retained as well as items that need repair, replacement or redesign.",
	},
	{
		question:
			"Are special suppression systems required for electrical or process areas?",
		answer:
			"That depends on the hazard, equipment, occupancy, room characteristics and applicable design requirements. A competent hazard assessment is needed before selecting an agent or system. Any design must also address detection, release controls, warning, evacuation and personnel safety.",
	},
	{
		question: "Can installation and maintenance be included in one project?",
		answer:
			"Installation, testing, commissioning support and subsequent maintenance can be discussed as separate or combined scopes, depending on the company's confirmed capabilities. The agreement should clearly state the systems covered, inspection frequency, deliverables, exclusions and responsibilities.",
	},
	{
		question:
			"Will installing fire safety equipment automatically provide a Fire Safety Certificate or NOC?",
		answer:
			"No. Equipment installation alone does not guarantee a Fire Safety Certificate, NOC or regulatory approval. Approval depends on applicable requirements, documentation, inspections and the decision of the relevant authority. Any approval-related assistance must be clearly defined and performed by appropriately authorised professionals.",
	},
	{
		question:
			"What information is needed for an industrial fire safety quotation?",
		answer:
			"Share the facility address, industry and processes, approximate area, building and site layouts, storage details, operating shifts, existing fire systems, known hazards and requested services. Previous drawings, inspection records, equipment schedules and approval documents can also support an initial review.",
	},
];

function IndustrialFireSafetyPage() {
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
								Fire Safety / Industrial Solutions
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								Industrial fire safety planned around your facility, processes
								and people.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Explore fire detection, hydrant, sprinkler and suppression
								options for factories, warehouses and industrial premises.
								Baroda Enterprise can discuss your facility, review existing
								arrangements and help define an installation scope around your
								operational requirements.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Request a Site Assessment <ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#industrial-fire-safety-services">
										Explore Solutions
									</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Factories & production sites
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Warehouses & logistics
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Process-aware project planning
								</span>
							</div>
						</div>

						<div className="relative">
							<div className="overflow-hidden rounded-2xl border border-(--line) bg-background shadow-xl">
								<img
									src="https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1100&q=85"
									alt="Industrial manufacturing facility"
									className="h-64 w-full object-cover sm:h-80 lg:h-[390px]"
								/>
								<div className="grid gap-4 p-5 sm:grid-cols-2">
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<Siren className="h-4 w-4 text-red-600" />
											Early detection
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Consider detection and alarm arrangements suited to the
											operating environment and identified hazards.
										</p>
									</div>
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<ShieldCheck className="h-4 w-4 text-red-600" />
											Coordinated protection
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Align fire protection equipment with facility layout, site
											operations and maintenance planning.
										</p>
									</div>
								</div>
							</div>
							<div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-(--line) bg-background p-4 shadow-lg sm:flex">
								<div className="rounded-lg bg-red-500/10 p-2 text-red-700 dark:text-red-300">
									<Factory className="h-5 w-5" />
								</div>
								<div>
									<p className="text-sm font-semibold text-(--ink)">
										Designed for industrial settings
									</p>
									<p className="text-xs text-(--ink-soft)">
										Production, storage and process facilities
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
						A facility-specific approach
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Fire protection for production floors, storage areas and critical
						operations.
					</h2>
				</div>
				<div className="space-y-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
					<p>
						Industrial premises can contain different hazards across production,
						storage, utilities, electrical rooms, workshops and dispatch areas.
						A solution suitable for one part of a site may not be appropriate
						for another. Materials, processes, building configuration and the
						people working at the facility all influence the project scope.
					</p>
					<p>
						A practical starting point is to understand the facility and its
						existing protection systems before selecting equipment. The final
						scope should follow a competent risk and design review, applicable
						requirements, manufacturer guidance and the site's own safety
						procedures.
					</p>
				</div>
			</section>

			{/* Services */}
			<section className="page-wrap mt-16" id="industrial-fire-safety-services">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Industrial fire safety services
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Explore fire protection systems for industrial environments.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Systems must be selected for the actual hazards, operating
						conditions and site requirements. Not every solution applies to
						every facility; the available services and project scope should be
						confirmed after reviewing the site.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{industrialServices.map((service) => {
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

			{/* Facility types */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Industrial facilities
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Different operations need different fire protection considerations.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Facility type, materials, processes and day-to-day operations help
						determine which areas need review and which systems may be suitable.
					</p>
				</div>

				<div className="mt-8 grid gap-4 lg:grid-cols-3">
					{facilityTypes.map((facility) => {
						const Icon = facility.icon;
						return (
							<Card
								key={facility.title}
								className="rounded-2xl border-(--line)"
							>
								<CardHeader>
									<div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-700 dark:text-red-300">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle className="text-lg">{facility.title}</CardTitle>
									<CardDescription className="leading-6">
										{facility.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="flex flex-wrap gap-2">
									{facility.tags.map((tag) => (
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
							Coordinate detection, fire-fighting systems and facility
							operations.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							Detection, alarm notification, water-based protection, fixed
							suppression and passive measures serve different purposes. Their
							selection and coordination should follow the facility's hazards,
							design requirements and operating procedures.
						</p>
						<Button asChild variant="outline" className="mt-6 gap-2">
							<Link to="/contact-us">
								Discuss your facility <ArrowRight className="h-4 w-4" />
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
							Start with the facility's hazards, layout and operating
							conditions.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							A site review helps identify existing equipment, process and
							storage risks, operational constraints and the information needed
							to prepare a practical project scope.
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
							A structured process from facility review to system handover.
						</h2>
					</div>
					<p className="max-w-md text-sm leading-6 text-(--ink-soft)">
						Site safety procedures, design responsibilities, approvals, testing
						and documentation should be agreed before installation starts.
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
							What to share when requesting an industrial fire safety quote.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							Facility and process details help establish the initial scope. A
							site visit and review by appropriately qualified professionals may
							be needed before system selection and pricing are finalised.
						</p>
						<Button asChild className="mt-6 gap-2">
							<Link to="/contact-us">
								Send an Enquiry <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>
					<div className="grid gap-3 sm:grid-cols-2">
						{[
							"Facility address, industry and process type",
							"Approximate built-up area and building heights",
							"Site plan, floor plans and available drawings",
							"Storage type, rack layout and material details",
							"Existing alarms, hydrants, sprinklers and pumps",
							"Electrical rooms, utilities and specialist process areas",
							"Operating shifts, contractor access and site procedures",
							"Previous inspection, test or approval documents",
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
						Related fire safety services.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Explore related service areas or contact the team to discuss which
						solutions may apply to your facility.
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
							Industrial fire safety FAQs.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft)">
							Have a facility-specific question? Share the details with the team
							so the appropriate project requirements can be discussed.
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
								Industrial Fire Safety
							</Badge>
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
								Discuss the fire safety needs of your facility.
							</h2>
							<p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
								Tell us about your facility, operations and existing fire
								protection arrangements. We can discuss the site information,
								the systems you are considering and the next steps for defining
								a project scope.
							</p>
						</div>
						<div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
							<Button asChild size="lg" variant="secondary" className="gap-2">
								<Link to="/contact-us">
									Request a Site Discussion <ArrowRight className="h-4 w-4" />
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
