import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	Building2,
	CalendarCheck,
	Camera,
	CheckCircle2,
	ChevronRight,
	ClipboardCheck,
	Factory,
	FileText,
	Headphones,
	Laptop,
	Monitor,
	Network,
	Printer,
	RefreshCw,
	Server,
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

export const Route = createFileRoute("/services/amc/")({
	component: AmcPage,
});

const maintenanceAreas = [
	{
		icon: Laptop,
		title: "Desktops, laptops & workstations",
		description:
			"Keep business computers in service with planned checks, issue diagnosis and support for supported devices.",
		points: [
			"Hardware health and condition checks",
			"Operating system and device troubleshooting",
			"Coordination for repair or replacement requirements",
		],
	},
	{
		icon: Server,
		title: "Servers & storage",
		description:
			"Maintain the hardware that supports business applications, shared data and essential infrastructure.",
		points: [
			"Server and storage health checks",
			"Hardware fault identification",
			"Maintenance planning and escalation support",
		],
	},
	{
		icon: Network,
		title: "Network infrastructure",
		description:
			"Support the network equipment that connects users, devices and business locations.",
		points: [
			"Router and switch health checks",
			"Connectivity and network issue diagnosis",
			"Review of access points and network hardware",
		],
	},
	{
		icon: Printer,
		title: "Printing & imaging equipment",
		description:
			"Help maintain office printers, multifunction devices, scanners and related imaging equipment.",
		points: [
			"Device inspection and fault diagnosis",
			"Print and scan function checks",
			"Consumable and spare-part requirements review",
		],
	},
	{
		icon: Camera,
		title: "Surveillance & security systems",
		description:
			"Discuss maintenance coverage for supported CCTV and related security-system equipment.",
		points: [
			"Camera and recorder condition checks",
			"Recording and connectivity checks",
			"Fault reporting and service coordination",
		],
	},
	{
		icon: Monitor,
		title: "Workplace peripherals",
		description:
			"Include the supporting devices employees rely on throughout the working day.",
		points: [
			"Monitors, docking stations and peripherals",
			"UPS and power accessory checks",
			"Device inventory and replacement planning",
		],
	},
];

const serviceActivities = [
	{
		icon: CalendarCheck,
		title: "Preventive maintenance",
		description:
			"Planned visits and checks at agreed intervals to review equipment condition and identify potential issues early.",
	},
	{
		icon: Wrench,
		title: "Corrective maintenance",
		description:
			"Troubleshooting and repair coordination when covered equipment develops a fault, subject to the agreed contract scope.",
	},
	{
		icon: Headphones,
		title: "Technical support",
		description:
			"A defined channel for reporting issues, sharing diagnostic information and coordinating service requests.",
	},
	{
		icon: ClipboardCheck,
		title: "Asset & service reporting",
		description:
			"Maintain visibility of covered assets, service visits, reported faults and recommendations for follow-up.",
	},
];

const contractOptions = [
	{
		title: "On-site maintenance",
		description:
			"For organisations that need scheduled visits and on-location support for the equipment listed in the contract.",
		details: [
			"Agreed preventive maintenance schedule",
			"On-site fault assessment for covered assets",
			"Service records and follow-up recommendations",
		],
	},
	{
		title: "Remote & on-site support",
		description:
			"A combination of remote troubleshooting and on-site assistance when an issue requires physical intervention.",
		details: [
			"Remote support for suitable issues",
			"On-site visits as defined in the agreement",
			"Escalation based on issue type and priority",
		],
	},
	{
		title: "Multi-location coverage",
		description:
			"A coordinated maintenance arrangement for businesses operating across branches, offices or multiple facilities.",
		details: [
			"Covered-asset list for each location",
			"Centralised service coordination",
			"Location-wise maintenance planning",
		],
	},
];

const processSteps = [
	{
		number: "01",
		title: "Understand your environment",
		description:
			"Review the type and quantity of equipment, locations, business priorities and current support challenges.",
	},
	{
		number: "02",
		title: "Define the coverage",
		description:
			"Identify covered assets, visit frequency, support channels, service hours, response targets and exclusions.",
	},
	{
		number: "03",
		title: "Agree on the maintenance plan",
		description:
			"Receive a proposal outlining the maintenance activities, contract period, commercial terms and responsibilities.",
	},
	{
		number: "04",
		title: "Schedule and manage service",
		description:
			"After approval, establish the asset register and maintenance schedule, then manage requests against the agreed scope.",
	},
];

const faqs = [
	{
		question: "What does an Annual Maintenance Contract cover?",
		answer:
			"Coverage depends on the equipment and contract selected. An AMC may include scheduled preventive checks, fault diagnosis, technical support and agreed corrective maintenance. The proposal should clearly list covered assets, activities, service hours, response targets and exclusions.",
	},
	{
		question: "Which equipment can be included in an AMC?",
		answer:
			"Depending on the support capability and agreed scope, organisations can discuss desktops, laptops, workstations, servers, storage, network devices, printers, scanners, peripherals, UPS equipment and supported surveillance systems.",
	},
	{
		question: "Are spare parts and consumables included?",
		answer:
			"Not automatically. Spare parts, replacement components, printer consumables, batteries and other consumables should be listed as included or excluded in the quotation. Any costs outside the agreed coverage should be explained before work is authorised.",
	},
	{
		question: "Do you provide on-site and remote support?",
		answer:
			"Both options can be discussed. The final arrangement depends on the equipment, locations and support requirements. The contract should state which issues can be handled remotely and when an on-site visit is included or chargeable.",
	},
	{
		question: "Can an AMC cover multiple offices or locations?",
		answer:
			"Multi-location coverage can be discussed. Share each site address, the asset count at each location and any site-access requirements so the coverage and service schedule can be scoped accurately.",
	},
	{
		question: "How are response times and service hours decided?",
		answer:
			"Service hours, priority levels, acknowledgement targets and response or resolution targets should be agreed during quotation. They may vary by location, equipment type and contract level, so they should not be assumed until documented in the agreement.",
	},
	{
		question: "How can I request an AMC quotation?",
		answer:
			"Share your organisation name, locations, equipment types, approximate asset count, current support concerns and preferred contract period. The team can review the requirement and confirm whether a site assessment or additional inventory is needed.",
	},
];

function AmcPage() {
	return (
		<main className="pb-20">
			{/* Hero */}
			<section className="page-wrap pt-8 sm:pt-12">
				<div className="relative isolate overflow-hidden rounded-3xl border border-(--line) bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.16),transparent_42%),linear-gradient(135deg,var(--header-bg),var(--background))] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
					<div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-72 w-72 rounded-full border border-orange-500/15" />
					<div className="pointer-events-none absolute -right-5 -top-9 -z-10 h-52 w-52 rounded-full border border-orange-500/15" />

					<div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
						<div>
							<Badge
								variant="outline"
								className="mb-5 gap-2 border-orange-500/30 bg-orange-500/10 px-3 py-1 text-orange-700 dark:text-orange-300"
							>
								<RefreshCw className="h-3.5 w-3.5" />
								Services / Annual Maintenance Contract
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								Reliable maintenance support for your business technology.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Keep your IT environment supported with a maintenance plan built
								around your equipment, locations and operational needs. Baroda
								Enterprise can help scope preventive checks, technical support
								and corrective maintenance for the assets included in your
								agreement.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Request an AMC Quote <ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#maintenance-coverage">Explore Coverage</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-orange-600" />
									Planned maintenance
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-orange-600" />
									Defined service scope
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-orange-600" />
									Support for covered assets
								</span>
							</div>
						</div>

						<div className="relative">
							<div className="overflow-hidden rounded-2xl border border-(--line) bg-background shadow-xl">
								<img
									src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1100&q=85"
									alt="Technician inspecting business equipment"
									className="h-64 w-full object-cover sm:h-80 lg:h-[390px]"
								/>
								<div className="grid gap-4 p-5 sm:grid-cols-2">
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<CalendarCheck className="h-4 w-4 text-orange-600" />
											Planned visits
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Maintenance intervals agreed to suit your equipment and
											operating environment.
										</p>
									</div>
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<ClipboardCheck className="h-4 w-4 text-orange-600" />
											Service records
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Clear records of covered assets, reported issues and
											maintenance activities.
										</p>
									</div>
								</div>
							</div>
							<div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-(--line) bg-background p-4 shadow-lg sm:flex">
								<div className="rounded-lg bg-orange-500/10 p-2 text-orange-600">
									<ShieldCheck className="h-5 w-5" />
								</div>
								<div>
									<p className="text-sm font-semibold text-(--ink)">
										Maintenance with clarity
									</p>
									<p className="text-xs text-(--ink-soft)">
										Scope agreed before service begins
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Intro */}
			<section className="page-wrap mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
				<div>
					<Badge variant="secondary" className="mb-3">
						Why consider an AMC?
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Move from unplanned fixes to planned maintenance.
					</h2>
				</div>
				<div className="space-y-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
					<p>
						When business equipment needs attention, delays and unclear support
						arrangements can disrupt everyday work. An Annual Maintenance
						Contract creates an agreed process for maintaining selected assets
						and handling service requests.
					</p>
					<p>
						The right coverage starts with an accurate asset list and a clear
						understanding of what is included. That is why each AMC proposal
						should define the equipment, maintenance frequency, support method,
						service targets and any exclusions.
					</p>
				</div>
			</section>

			{/* Coverage cards */}
			<section className="page-wrap mt-16" id="maintenance-coverage">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Equipment coverage
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Maintenance for the technology your team depends on.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Select the assets you need support for. Final coverage is confirmed
						after reviewing the equipment, condition, location and service
						requirements.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{maintenanceAreas.map((area) => {
						const Icon = area.icon;
						return (
							<Card
								key={area.title}
								className="h-full rounded-2xl border-(--line)"
							>
								<CardHeader>
									<div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-700 dark:text-orange-300">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle className="text-lg">{area.title}</CardTitle>
									<CardDescription className="text-sm leading-6">
										{area.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ul className="space-y-2">
										{area.points.map((point) => (
											<li
												key={point}
												className="flex items-start gap-2 text-sm text-(--ink-soft)"
											>
												<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
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

			{/* Included activities */}
			<section className="page-wrap mt-16">
				<div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							Service activities
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							A maintenance plan with clearly defined activities.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							An AMC can combine different support activities depending on your
							assets and operational requirements. The final proposal will
							specify exactly what is included.
						</p>
						<Button asChild variant="outline" className="mt-6 gap-2">
							<Link to="/contact-us">
								Discuss your requirements <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						{serviceActivities.map((activity) => {
							const Icon = activity.icon;
							return (
								<Card
									key={activity.title}
									className="rounded-2xl border-(--line)"
								>
									<CardHeader>
										<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
											<Icon className="h-5 w-5" />
										</div>
										<CardTitle className="text-base">
											{activity.title}
										</CardTitle>
										<CardDescription className="leading-6">
											{activity.description}
										</CardDescription>
									</CardHeader>
								</Card>
							);
						})}
					</div>
				</div>
			</section>

			{/* Contract options */}
			<section className="page-wrap mt-16">
				<div className="text-center">
					<Badge variant="outline" className="mb-3">
						Flexible coverage options
					</Badge>
					<h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Choose a support arrangement that fits your operations.
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-(--ink-soft) sm:text-base">
						These are common ways to structure maintenance coverage, not fixed
						packages. Equipment, locations, service levels and commercial terms
						are confirmed in the quotation.
					</p>
				</div>

				<div className="mt-8 grid gap-4 lg:grid-cols-3">
					{contractOptions.map((option, index) => (
						<Card
							key={option.title}
							className={`rounded-2xl ${index === 1 ? "border-orange-500/50 shadow-md" : "border-(--line)"}`}
						>
							<CardHeader>
								{index === 1 && (
									<Badge className="mb-2 w-fit bg-orange-600 text-white hover:bg-orange-600">
										Flexible arrangement
									</Badge>
								)}
								<CardTitle className="text-xl">{option.title}</CardTitle>
								<CardDescription className="leading-6">
									{option.description}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3">
									{option.details.map((detail) => (
										<li
											key={detail}
											className="flex items-start gap-2 text-sm text-(--ink-soft)"
										>
											<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
											{detail}
										</li>
									))}
								</ul>
								<Button asChild variant="outline" className="mt-6 w-full gap-2">
									<Link to="/contact-us">
										Enquire about this option{" "}
										<ChevronRight className="h-4 w-4" />
									</Link>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* Process */}
			<section className="page-wrap mt-16">
				<div className="rounded-3xl border border-(--line) bg-muted/30 px-6 py-10 sm:px-10 sm:py-12">
					<div className="max-w-2xl">
						<Badge variant="outline" className="mb-3">
							How it works
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							From equipment assessment to ongoing support.
						</h2>
					</div>

					<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{processSteps.map((step) => (
							<div key={step.number} className="relative">
								<p className="text-sm font-bold tracking-widest text-orange-600">
									{step.number}
								</p>
								<h3 className="mt-3 text-base font-semibold text-(--ink)">
									{step.title}
								</h3>
								<p className="mt-2 text-sm leading-6 text-(--ink-soft)">
									{step.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contract clarity */}
			<section className="page-wrap mt-16 grid gap-8 lg:grid-cols-[1fr_1fr]">
				<div>
					<Badge variant="outline" className="mb-3">
						Before you sign
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Know exactly what your AMC includes.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Maintenance contracts can differ significantly. A clear scope helps
						both parties understand responsibilities and avoid unexpected
						service costs.
					</p>
				</div>

				<Card className="rounded-2xl border-(--line)">
					<CardContent className="pt-6">
						<ul className="space-y-4">
							{[
								"Covered equipment, serial numbers and locations",
								"Preventive visit frequency and maintenance checklist",
								"Support hours, contact method and priority levels",
								"Response targets and on-site visit conditions",
								"Spare parts, consumables and labour inclusions",
								"Exclusions, contract duration and renewal terms",
							].map((item) => (
								<li
									key={item}
									className="flex items-start gap-3 text-sm text-(--ink-soft)"
								>
									<FileText className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</CardContent>
				</Card>
			</section>

			{/* Customer environments */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Who can enquire?
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Maintenance planning across business environments.
					</h2>
				</div>
				<div className="mt-8 grid gap-4 md:grid-cols-3">
					{[
						{
							icon: Building2,
							title: "Offices & businesses",
							description:
								"Support planning for employee computers, printers, networks and shared office equipment.",
						},
						{
							icon: Factory,
							title: "Industrial organisations",
							description:
								"Maintenance discussions for office IT, network infrastructure and other agreed business technology assets.",
						},
						{
							icon: Network,
							title: "Multi-site organisations",
							description:
								"Coordinate equipment coverage and service planning across branches, offices and facilities.",
						},
					].map((environment) => {
						const Icon = environment.icon;
						return (
							<Card
								key={environment.title}
								className="rounded-2xl border-(--line)"
							>
								<CardHeader>
									<div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-700 dark:text-orange-300">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle className="text-lg">{environment.title}</CardTitle>
									<CardDescription className="leading-6">
										{environment.description}
									</CardDescription>
								</CardHeader>
							</Card>
						);
					})}
				</div>
			</section>

			{/* FAQ */}
			<section className="page-wrap mt-16" id="faqs">
				<div className="mx-auto max-w-3xl">
					<div className="text-center">
						<Badge variant="outline" className="mb-3">
							FAQs
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Frequently asked questions.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft)">
							Find out what to consider when planning an Annual Maintenance
							Contract for your business equipment.
						</p>
					</div>

					<Accordion type="single" collapsible className="mt-8 w-full">
						{faqs.map((faq, index) => (
							<AccordionItem key={faq.question} value={`item-${index}`}>
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
				<div className="relative isolate overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#172b3e,#263f55)] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
					<div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full border border-white/10" />
					<div className="pointer-events-none absolute -right-5 -top-9 -z-10 h-44 w-44 rounded-full border border-white/10" />

					<div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
						<div className="max-w-2xl">
							<Badge className="mb-4 border border-white/20 bg-white/10 text-white hover:bg-white/10">
								Plan your maintenance coverage
							</Badge>
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
								Let&apos;s build an AMC around your business needs.
							</h2>
							<p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base">
								Tell us about your equipment, locations and support priorities.
								Our team can review the requirement and discuss a suitable
								maintenance scope.
							</p>
						</div>
						<div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
							<Button
								asChild
								size="lg"
								className="gap-2 bg-orange-600 text-white hover:bg-orange-700"
							>
								<Link to="/contact-us">
									Request an AMC Quote <ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
							>
								<a href="#faqs">View FAQs</a>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
