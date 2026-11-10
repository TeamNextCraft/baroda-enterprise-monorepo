import { createFileRoute, Link } from "@tanstack/react-router";
import {
	Activity,
	AlertTriangle,
	ArrowRight,
	BadgeCheck,
	BellRing,
	Building2,
	CalendarCheck,
	CheckCircle2,
	ClipboardCheck,
	Droplets,
	Factory,
	FileCheck2,
	Flame,
	Gauge,
	HardHat,
	Home,
	Lightbulb,
	ListChecks,
	MapPin,
	RefreshCw,
	ShieldCheck,
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

export const Route = createFileRoute("/fire-safety/maintenance")({
	component: FireSafetyMaintenancePage,
});

const maintenanceServices = [
	{
		icon: BellRing,
		title: "Fire detection & alarm systems",
		description:
			"Review the condition and operation of installed detection and alarm equipment, including control panels, initiating devices and notification appliances, within the agreed service scope.",
		points: [
			"Visual condition and accessibility checks",
			"Panel indications, fault history and device status review",
			"Planned functional testing by competent personnel",
		],
	},
	{
		icon: Droplets,
		title: "Hydrant, riser & sprinkler systems",
		description:
			"Coordinate inspection and maintenance activities for water-based fire protection systems, including accessible valves, pipework, outlets, sprinkler components and associated equipment.",
		points: [
			"Visible pipework, valves and leakage observations",
			"Hydrant, hose reel and sprinkler component checks",
			"System testing and corrective work as agreed",
		],
	},
	{
		icon: Gauge,
		title: "Fire pumps & water storage",
		description:
			"Review the condition and readiness of fire pump installations and related water supply equipment, following the system design, manufacturer's instructions and applicable procedures.",
		points: [
			"Pump-room condition and access review",
			"Status of pump controls and visible indicators",
			"Planned operational checks by qualified personnel",
		],
	},
	{
		icon: Flame,
		title: "Portable fire extinguishers",
		description:
			"Help maintain portable extinguishers in an identifiable, accessible and serviceable condition through agreed inspection, servicing coordination and record-keeping activities.",
		points: [
			"Condition, location and accessibility review",
			"Service status, seals and pressure indicators as applicable",
			"Refilling or servicing coordination where available",
		],
	},
	{
		icon: ShieldCheck,
		title: "Specialised suppression systems",
		description:
			"Arrange system-specific inspection and maintenance for selected fixed suppression installations where Baroda Enterprise has the appropriate capability or qualified service arrangement.",
		points: [
			"System status and component condition review",
			"Cylinder, agent, release and control checks as applicable",
			"Specialist servicing based on system requirements",
		],
	},
	{
		icon: Lightbulb,
		title: "Emergency lighting & life-safety equipment",
		description:
			"Review the visible condition and agreed operation of emergency lighting, exit signs and related life-safety equipment that support safe movement during an emergency.",
		points: [
			"Visibility, damage and access observations",
			"Functional checks within the agreed scope",
			"Defect reporting and corrective-action tracking",
		],
	},
];

const maintenanceActivities = [
	{
		icon: ListChecks,
		title: "Routine condition reviews",
		description:
			"Scheduled visual checks can help identify visible damage, obstruction, missing labels, inaccessible equipment or changes to the surrounding area. The responsible person and frequency should be defined for the site.",
		tags: ["Visual checks", "Access & condition", "Defect identification"],
	},
	{
		icon: Activity,
		title: "Planned functional testing",
		description:
			"Functional and operational tests should be carried out by competent personnel using the correct procedures, equipment and precautions for the system being tested.",
		tags: ["System-specific tests", "Competent personnel", "Test records"],
	},
	{
		icon: Wrench,
		title: "Preventive maintenance",
		description:
			"Planned maintenance addresses serviceable components, wear, settings and manufacturer-recommended tasks before issues affect system readiness.",
		tags: ["Planned servicing", "Manufacturer guidance", "Component condition"],
	},
	{
		icon: RefreshCw,
		title: "Corrective maintenance coordination",
		description:
			"When a defect is found, record its impact, agree the corrective scope and coordinate repair or specialist support. Affected systems should be managed under the site's impairment procedure until restored.",
		tags: ["Defect register", "Repair coordination", "Close-out evidence"],
	},
];

const propertyTypes = [
	{
		icon: Home,
		title: "Residential buildings",
		description:
			"Apartments, housing societies and residential towers may need planned attention to common-area alarms, extinguishers, hydrants, pumps, sprinklers and emergency lighting.",
		tags: ["Apartment towers", "Housing societies", "Common facilities"],
		href: "/fire-safety/residential",
	},
	{
		icon: Factory,
		title: "Industrial facilities",
		description:
			"Factories, workshops and warehouses need maintenance planned around operating conditions, process hazards, stored materials, equipment access and business continuity.",
		tags: ["Factories", "Warehouses", "Process facilities"],
		href: "/fire-safety/industrial",
	},
	{
		icon: Building2,
		title: "Commercial properties",
		description:
			"Offices, retail premises, hotels, healthcare and educational buildings benefit from coordinated maintenance records and minimal disruption to occupants and operations.",
		tags: ["Offices & retail", "Hotels", "Institutions"],
		href: "/fire-safety/commercial",
	},
] as const;

const planningFactors = [
	{
		icon: CalendarCheck,
		title: "Set a site-specific schedule",
		description:
			"Build the maintenance calendar around the installed systems, applicable requirements, manufacturer's instructions, site risk and the responsibilities of the building's designated persons.",
	},
	{
		icon: FileCheck2,
		title: "Keep service records",
		description:
			"Record the equipment or system inspected, date, observations, tests performed, defects identified, corrective work and the person or organisation responsible.",
	},
	{
		icon: AlertTriangle,
		title: "Manage system impairments",
		description:
			"A system taken out of service can leave people and property exposed. Follow the site's impairment procedure, notify responsible persons and arrange appropriate temporary precautions until restoration.",
	},
	{
		icon: HardHat,
		title: "Use competent service personnel",
		description:
			"Testing, adjustment, repair and specialist servicing should be performed by personnel with the relevant competence, tools and authorisation for the specific equipment.",
	},
	{
		icon: MapPin,
		title: "Plan around site operations",
		description:
			"Coordinate access, permits, shutdown windows, occupant notifications and any testing that could affect production, security, alarms or building operations.",
	},
	{
		icon: BadgeCheck,
		title: "Close out corrective actions",
		description:
			"Prioritise defects according to their safety impact, agree owners and target dates, and retain evidence when corrective work and system restoration are complete.",
	},
];

const deliverySteps = [
	{
		number: "01",
		icon: ClipboardCheck,
		title: "Review the installed systems",
		description:
			"Understand the property, equipment inventory, available drawings, previous service records, known defects and the maintenance scope requested by the customer.",
	},
	{
		number: "02",
		icon: CalendarCheck,
		title: "Agree the maintenance plan",
		description:
			"Define covered systems, activities, visit frequency, responsibilities, access requirements, reporting and exclusions in the proposed service scope.",
	},
	{
		number: "03",
		icon: Wrench,
		title: "Inspect, test & service",
		description:
			"Carry out the agreed work using suitable procedures and competent personnel. Record observations and communicate any system impairment or corrective requirement.",
	},
	{
		number: "04",
		icon: FileCheck2,
		title: "Report & follow up",
		description:
			"Share service findings, record defects and recommendations, coordinate agreed corrective work and update the maintenance history after completion.",
	},
];

const relatedSolutions = [
	{
		title: "Fire Detection & Alarm Systems",
		description:
			"Explore detection, alarm panels and notification systems that require planned inspection and maintenance.",
		href: "/fire-safety/fire-detection",
	},
	{
		title: "Fire Hydrant & Sprinkler Systems",
		description:
			"Review maintenance considerations for fire-water distribution, hydrants, pumps and sprinklers.",
		href: "/fire-safety/hydrant-sprinkler",
	},
	{
		title: "Fire Suppression Systems",
		description:
			"Learn about fixed suppression systems and their system-specific service requirements.",
		href: "/fire-safety/fire-suppression",
	},
	{
		title: "Fire Extinguishers",
		description:
			"Explore portable extinguisher supply, placement, inspection and servicing considerations.",
		href: "/fire-safety/fire-extinguishers",
	},
] as const;

const faqs = [
	{
		question: "What does a fire safety maintenance service cover?",
		answer:
			"The scope depends on the systems installed and the agreed contract. It may cover inspection, functional testing, preventive maintenance, defect reporting and corrective-work coordination for fire alarms, hydrants, sprinklers, pumps, extinguishers, suppression systems and selected life-safety equipment.",
	},
	{
		question: "How often should fire safety systems be inspected or serviced?",
		answer:
			"There is no single interval that applies to every system and building. The schedule should be determined from applicable requirements, the system design, manufacturer's instructions, site risk and the responsibilities of the building's designated persons. The agreed schedule should be documented.",
	},
	{
		question: "Can one maintenance contract cover all fire protection systems?",
		answer:
			"A coordinated contract may cover multiple systems, but different equipment can require different skills, procedures, tools and specialist service providers. The contract should clearly identify included systems, activities, exclusions and the personnel responsible for each task.",
	},
	{
		question: "Do you provide emergency repair services?",
		answer:
			"Emergency response availability, operating hours, geographic coverage and response commitments must be confirmed with Baroda Enterprise before they are included in a proposal. Do not assume an emergency or 24/7 response service is included in a routine maintenance contract.",
	},
	{
		question: "What happens if a fire protection system fails an inspection?",
		answer:
			"The defect should be recorded, its safety impact communicated to the responsible persons and corrective action agreed. If a system is impaired, the building should follow its established impairment procedure and maintain appropriate temporary precautions until the system is restored.",
	},
	{
		question: "Will we receive maintenance reports?",
		answer:
			"Reporting should be defined in the service scope. A useful report identifies the systems and equipment reviewed, activities completed, observations, defects, recommendations and outstanding corrective actions. Confirm the report format and delivery process before signing a contract.",
	},
	{
		question:
			"Can maintenance be carried out while the building is occupied or operating?",
		answer:
			"Some tasks can be scheduled around normal operations, while others may require controlled shutdowns, access restrictions, notifications or temporary impairment arrangements. The maintenance plan should be coordinated with the building or facility management team in advance.",
	},
	{
		question:
			"Does a maintenance contract guarantee a Fire Safety Certificate or NOC?",
		answer:
			"No. A maintenance contract or service report does not by itself guarantee a Fire Safety Certificate, NOC or regulatory approval. Those outcomes depend on the applicable requirements, the building's overall compliance and the decision of the relevant authority.",
	},
];

function FireSafetyMaintenancePage() {
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
								<Wrench className="h-3.5 w-3.5" />
								Fire Safety / Maintenance & Inspection
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								Keep your fire protection systems ready to perform.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Planned inspection and maintenance help identify defects,
								preserve system readiness and keep service records organised.
								Discuss a maintenance programme for the fire safety systems
								installed at your residential, commercial or industrial
								property.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Request a Maintenance Plan{" "}
										<ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#maintenance-services">
										Explore Maintenance Services
									</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Planned maintenance
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Defect reporting
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Service documentation
								</span>
							</div>
						</div>

						<div className="relative">
							<div className="overflow-hidden rounded-2xl border border-(--line) bg-background p-5 shadow-xl sm:p-7">
								<div className="flex items-center justify-between gap-3">
									<div>
										<p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700 dark:text-red-300">
											Fire system care
										</p>
										<h2 className="mt-2 text-2xl font-bold text-(--ink)">
											Inspect. Maintain. Document.
										</h2>
									</div>
									<div className="rounded-2xl bg-red-500/10 p-3 text-red-700 dark:text-red-300">
										<ShieldCheck className="h-8 w-8" />
									</div>
								</div>

								<div className="mt-7 space-y-3">
									{[
										{
											label: "Detection & alarm",
											note: "Panels, devices & notification",
											icon: BellRing,
										},
										{
											label: "Hydrant & sprinkler",
											note: "Valves, outlets & water systems",
											icon: Droplets,
										},
										{
											label: "Pumps & extinguishers",
											note: "Equipment condition & service status",
											icon: Gauge,
										},
										{
											label: "Emergency equipment",
											note: "Lighting, signs & life-safety items",
											icon: Lightbulb,
										},
									].map(({ label, note, icon: Icon }) => (
										<div
											key={label}
											className="flex items-center gap-3 rounded-xl border border-(--line) bg-muted/40 p-3"
										>
											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background text-red-700 dark:text-red-300">
												<Icon className="h-5 w-5" />
											</div>
											<div className="min-w-0 flex-1">
												<p className="text-sm font-semibold text-(--ink)">
													{label}
												</p>
												<p className="mt-0.5 text-xs leading-5 text-(--ink-soft)">
													{note}
												</p>
											</div>
											<CheckCircle2 className="h-4 w-4 shrink-0 text-red-600" />
										</div>
									))}
								</div>

								<div className="mt-4 flex items-start gap-3 rounded-xl bg-red-500/5 p-4">
									<CalendarCheck className="mt-0.5 h-5 w-5 shrink-0 text-red-700 dark:text-red-300" />
									<p className="text-xs leading-5 text-(--ink-soft)">
										Maintenance intervals and test procedures must follow the
										equipment, site conditions, applicable requirements and
										manufacturer's instructions.
									</p>
								</div>
							</div>
							<div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-(--line) bg-background p-4 shadow-lg sm:flex">
								<div className="rounded-lg bg-red-500/10 p-2 text-red-700 dark:text-red-300">
									<FileCheck2 className="h-5 w-5" />
								</div>
								<div>
									<p className="text-sm font-semibold text-(--ink)">
										Documented service history
									</p>
									<p className="text-xs text-(--ink-soft)">
										Findings, defects & follow-up
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
						Fire system maintenance
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Installation is only the beginning. Fire systems need ongoing care.
					</h2>
				</div>
				<div className="space-y-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
					<p>
						Fire alarms, hydrants, sprinklers, pumps, extinguishers and other
						life-safety equipment need appropriate inspection and maintenance to
						help keep them in serviceable condition. A missed defect,
						inaccessible component or unrecorded impairment can affect the
						readiness of the wider fire protection arrangement.
					</p>
					<p>
						Baroda Enterprise can discuss the installed systems, the property's
						operating needs and the maintenance scope required. The programme
						should define the activities, frequency, competent personnel,
						reporting, exclusions and corrective-work responsibilities for each
						system.
					</p>
				</div>
			</section>

			{/* Services */}
			<section className="page-wrap mt-16" id="maintenance-services">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Maintenance coverage
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Maintenance support across essential fire protection systems.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						The systems listed below represent common maintenance categories,
						not a guarantee that every service is available. Confirm the actual
						equipment coverage, specialist arrangements and deliverables with
						Baroda Enterprise before finalising a contract.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{maintenanceServices.map((service) => {
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

			{/* Maintenance activities */}
			<section className="page-wrap mt-16" id="maintenance-activities">
				<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
					<div className="max-w-2xl">
						<Badge variant="outline" className="mb-3">
							What maintenance involves
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							A structured approach to system readiness.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							Maintenance is more than a visit to the site. It should create a
							clear record of what was reviewed, what needs attention and who is
							responsible for the next action.
						</p>
					</div>
					<Button asChild variant="outline" className="w-fit gap-2">
						<Link to="/contact-us">
							Discuss a maintenance scope <ArrowRight className="h-4 w-4" />
						</Link>
					</Button>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{maintenanceActivities.map((activity) => {
						const Icon = activity.icon;
						return (
							<Card
								key={activity.title}
								className="h-full rounded-2xl border-(--line)"
							>
								<CardHeader>
									<div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-red-700 dark:text-red-300">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle className="text-base">{activity.title}</CardTitle>
									<CardDescription className="text-sm leading-6">
										{activity.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="flex flex-wrap gap-2">
									{activity.tags.map((tag) => (
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
						Maintenance planned around the way each building operates.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Equipment inventories, access arrangements, operating hours and fire
						risks differ by property. The maintenance plan should reflect those
						differences rather than applying a one-size-fits-all schedule.
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
							Maintenance planning
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							What makes a maintenance programme effective?
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft)">
							Each system has its own inspection and service requirements. The
							schedule and method should be based on the installed equipment,
							applicable standards, manufacturer's instructions and site risk.
						</p>
						<div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
							<div className="flex items-start gap-3">
								<AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-700 dark:text-red-300" />
								<div>
									<p className="font-semibold text-(--ink)">
										Do not leave an impairment unmanaged
									</p>
									<p className="mt-1 text-sm leading-6 text-(--ink-soft)">
										If a fire protection system is unavailable or operating
										abnormally, inform the responsible site team and follow the
										established impairment procedure. Arrange appropriate
										temporary precautions and qualified restoration work.
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
			<section className="page-wrap mt-16" id="maintenance-process">
				<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
					<div className="max-w-2xl">
						<Badge variant="outline" className="mb-3">
							How we approach a maintenance programme
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							From equipment review to service reporting.
						</h2>
					</div>
					<p className="max-w-md text-sm leading-6 text-(--ink-soft)">
						The exact tasks, frequencies, deliverables and service commitments
						should be documented in the agreed maintenance proposal.
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
							Prepare for a maintenance proposal
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							What information should you share?
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft)">
							An equipment list and previous service records help establish a
							realistic scope. Share the information available; the remaining
							details can be reviewed during the initial discussion or site
							visit.
						</p>
						<Button asChild className="mt-6 gap-2">
							<Link to="/contact-us">
								Request a Maintenance Proposal{" "}
								<ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>
					<div className="grid gap-3 sm:grid-cols-2">
						{[
							"Property type and site address",
							"Installed fire system inventory",
							"Available drawings and equipment manuals",
							"Previous inspection and service reports",
							"Known faults or outstanding observations",
							"Preferred visit windows and access requirements",
							"Required coverage and service locations",
							"Any existing contract or response commitments",
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
						Explore the systems that may be included in your maintenance plan.
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
							Fire safety maintenance questions, answered.
						</h2>
						<p className="mt-3 text-sm leading-6 text-(--ink-soft)">
							Maintenance scope and intervals depend on the installed equipment,
							applicable requirements, manufacturer instructions and site
							conditions.
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
								Fire safety maintenance
							</p>
							<h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
								Make planned maintenance part of your fire safety routine.
							</h2>
							<p className="mt-3 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
								Talk to Baroda Enterprise about your installed fire protection
								systems, required maintenance scope and the service arrangements
								available for your property.
							</p>
						</div>
						<div className="flex shrink-0 flex-col gap-3 sm:flex-row">
							<Button asChild size="lg" variant="secondary" className="gap-2">
								<Link to="/contact-us">
									Request a Maintenance Plan <ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
							>
								<a href="#maintenance-services">Explore Coverage</a>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
