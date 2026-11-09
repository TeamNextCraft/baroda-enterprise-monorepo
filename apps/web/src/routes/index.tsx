import { createFileRoute } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
	ArrowRight,
	Bell,
	Building2,
	CheckCircle2,
	ClipboardCheck,
	Cloud,
	Database,
	Factory,
	Flame,
	Headphones,
	House,
	Mail,
	MapPin,
	Network,
	Phone,
	Server,
	ShieldCheck,
	Users,
	Workflow,
	Wrench,
	Zap,
} from "lucide-react";

import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import { Textarea } from "#/components/ui/textarea";
import {
	COMPANY_ADDRESS,
	COMPANY_EMAIL,
	COMPANY_NAME,
	COMPANY_PHONE,
} from "#/lib/constants";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/")({ component: Home });

type Service = {
	title: string;
	description: string;
	icon: LucideIcon;
};

// Keep the existing IT services as the company's core offering.
const itServices: Service[] = [
	{
		title: "Managed IT Services",
		description:
			"IT support, system monitoring and maintenance to help keep day-to-day business operations running.",
		icon: Headphones,
	},
	{
		title: "Network & Security",
		description:
			"Business networks, connectivity and security solutions for teams and multiple locations.",
		icon: Network,
	},
	{
		title: "Cloud Solutions",
		description:
			"Cloud planning, migration and management to support a flexible and dependable infrastructure.",
		icon: Cloud,
	},
];

// Confirm the exact scope with the client before publishing these services.
const fireSafetyServices: Service[] = [
	{
		title: "Fire Detection & Alarm Systems",
		description:
			"Detection and alarm solutions designed to alert occupants to potential fire incidents.",
		icon: Bell,
	},
	{
		title: "Fire Hydrant & Hose Reel Systems",
		description:
			"Firefighting water-distribution systems for suitable residential, commercial and industrial sites.",
		icon: Wrench,
	},
	{
		title: "Automatic Sprinkler Systems",
		description:
			"Sprinkler system planning and installation based on the building and its fire-protection needs.",
		icon: Zap,
	},
	{
		title: "Fire Extinguishers",
		description:
			"Supply and placement support for appropriate portable fire extinguishers.",
		icon: Flame,
	},
	{
		title: "Fire Suppression Solutions",
		description:
			"Suppression options for selected spaces and higher-risk equipment or processes.",
		icon: ShieldCheck,
	},
	{
		title: "Inspection & Maintenance",
		description:
			"System checks and planned maintenance services, subject to the company's confirmed capabilities.",
		icon: ClipboardCheck,
	},
];

const sectors = [
	{
		title: "Residential Buildings",
		description:
			"Fire safety solutions for apartments, housing societies, residential towers and other living spaces.",
		icon: House,
	},
	{
		title: "Industrial Facilities",
		description:
			"Fire protection solutions for factories, warehouses, workshops and industrial premises.",
		icon: Factory,
	},
	{
		title: "Commercial Properties",
		description:
			"Solutions for offices, retail spaces, hotels, institutions and other commercial buildings.",
		icon: Building2,
	},
];

const processSteps = [
	{
		number: "01",
		title: "Understand the site",
		description:
			"Discuss the building, business requirements, existing infrastructure and project scope.",
	},
	{
		number: "02",
		title: "Recommend a solution",
		description:
			"Identify suitable IT or fire safety solutions based on the requirement and site conditions.",
	},
	{
		number: "03",
		title: "Install & implement",
		description:
			"Coordinate the agreed implementation, installation and configuration work.",
	},
	{
		number: "04",
		title: "Test & support",
		description:
			"Review the completed work and discuss the support or maintenance required after handover.",
	},
];

function SectionHeading({
	eyebrow,
	title,
	description,
}: {
	eyebrow: string;
	title: string;
	description?: string;
}) {
	return (
		<div className="max-w-3xl">
			<p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
				{eyebrow}
			</p>
			<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
				{title}
			</h2>
			{description ? (
				<p className="mt-4 text-base leading-7 text-muted-foreground">
					{description}
				</p>
			) : null}
		</div>
	);
}

function ServiceCard({ service }: { service: Service }) {
	const Icon = service.icon;

	return (
		<Card className="h-full border-border/70 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
			<CardHeader>
				<div className="mb-2 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
					<Icon className="size-6" aria-hidden="true" />
				</div>
				<CardTitle className="text-lg">{service.title}</CardTitle>
				<CardDescription className="text-sm leading-6">
					{service.description}
				</CardDescription>
			</CardHeader>
		</Card>
	);
}

function Home() {
	return (
		<main id="top">
			{/* Hero */}
			<section className="page-wrap pt-6 sm:pt-10">
				<div className="relative isolate overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-white shadow-xl sm:px-10 sm:py-16 lg:px-14">
					<div className="absolute -right-24 -top-24 -z-10 size-80 rounded-full bg-primary/20 blur-3xl" />
					<div className="absolute -bottom-32 left-1/3 -z-10 size-80 rounded-full bg-orange-500/10 blur-3xl" />

					<div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
						<div>
							<h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
								Technology for business.
								<span className="block text-orange-300">
									Safety for every space.
								</span>
							</h1>
							<p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
								{COMPANY_NAME} supports businesses with IT services and is
								expanding into fire safety system installation for residential,
								commercial and industrial buildings.
							</p>
							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button size="lg" asChild>
									<a href="#fire-safety">
										Explore fire safety solutions
										<ArrowRight className="ml-2 size-4" />
									</a>
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
									asChild
								>
									<a href="#it-services">Explore IT services</a>
								</Button>
							</div>
							<div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-slate-300">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="size-4 text-orange-300" />
									Business IT solutions
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="size-4 text-orange-300" />
									Building fire protection
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="size-4 text-orange-300" />
									Installation-focused support
								</span>
							</div>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							<div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:mt-10">
								<img
									src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85"
									alt="Business team working with technology"
									className="h-52 w-full object-cover sm:h-60"
								/>
								<div className="p-4">
									<p className="text-xs font-semibold uppercase tracking-wider text-sky-300">
										Core business
									</p>
									<p className="mt-1 font-semibold text-white">
										IT & infrastructure
									</p>
									<p className="mt-1 text-sm text-slate-300">
										Networks, cloud, automation and managed support.
									</p>
								</div>
							</div>
							<div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
								<img
									src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85"
									alt="Technical professional working in an industrial environment"
									className="h-52 w-full object-cover sm:h-60"
								/>
								<div className="p-4">
									<p className="text-xs font-semibold uppercase tracking-wider text-orange-300">
										New service line
									</p>
									<p className="mt-1 font-semibold text-white">
										Fire safety systems
									</p>
									<p className="mt-1 text-sm text-slate-300">
										Fire detection, suppression and protection installations.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Two business areas */}
			<section className="page-wrap mt-16 sm:mt-20">
				<SectionHeading
					eyebrow="What we do"
					title="Two areas of expertise. One dependable point of contact."
					description="Baroda Enterprise continues to serve business technology needs while introducing fire safety installation services for buildings and facilities. Choose the area that matches your requirement."
				/>
				<div className="mt-8 grid gap-5 lg:grid-cols-2">
					<Card id="it-services" className="overflow-hidden border-border/70">
						<div className="h-1.5 bg-sky-600" />
						<CardHeader className="pb-3">
							<Badge variant="secondary" className="w-fit">
								Existing business
							</Badge>
							<div className="flex items-center gap-3">
								<div className="flex size-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-700 dark:text-sky-300">
									<Server className="size-6" />
								</div>
								<CardTitle className="text-2xl">
									IT & technology services
								</CardTitle>
							</div>
							<CardDescription className="text-sm leading-6">
								Practical technology services that help businesses manage
								infrastructure, connectivity and everyday operations.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid gap-3 sm:grid-cols-2">
								{itServices.map((service) => {
									const Icon = service.icon;
									return (
										<div
											key={service.title}
											className="flex gap-3 rounded-xl bg-muted/60 p-3"
										>
											<Icon className="mt-0.5 size-5 shrink-0 text-primary" />
											<span className="text-sm font-medium">
												{service.title}
											</span>
										</div>
									);
								})}
							</div>
							<Button className="mt-6" variant="outline" asChild>
								<a href="#contact">
									Discuss an IT requirement{" "}
									<ArrowRight className="ml-2 size-4" />
								</a>
							</Button>
						</CardContent>
					</Card>

					<Card
						id="fire-safety"
						className="overflow-hidden border-orange-500/30"
					>
						<div className="h-1.5 bg-orange-500" />
						<CardHeader className="pb-3">
							<Badge className="w-fit bg-orange-500 text-white hover:bg-orange-500">
								New service line
							</Badge>
							<div className="flex items-center gap-3">
								<div className="flex size-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
									<Flame className="size-6" />
								</div>
								<CardTitle className="text-2xl">
									Fire safety solutions
								</CardTitle>
							</div>
							<CardDescription className="text-sm leading-6">
								Fire protection installation solutions for residential,
								commercial and industrial buildings, based on site requirements.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid gap-3 sm:grid-cols-2">
								{[
									"Fire detection & alarm systems",
									"Fire hydrant & hose reel systems",
									"Automatic sprinkler systems",
									"Fire extinguishers",
									"Fire suppression solutions",
									"Inspection & maintenance",
								].map((item) => (
									<div
										key={item}
										className="flex gap-3 rounded-xl bg-muted/60 p-3"
									>
										<ShieldCheck className="mt-0.5 size-5 shrink-0 text-orange-600 dark:text-orange-400" />
										<span className="text-sm font-medium">{item}</span>
									</div>
								))}
							</div>
							<Button
								className="mt-6 bg-orange-600 text-white hover:bg-orange-700"
								asChild
							>
								<a href="#contact">
									Request a fire safety consultation
									<ArrowRight className="ml-2 size-4" />
								</a>
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* IT services */}
			<section className="page-wrap mt-16 sm:mt-20">
				<SectionHeading
					eyebrow="Technology services"
					title="IT support that works around your business."
					description="Continue to present the company's existing IT offering clearly, so current customers can still find the services they already know Baroda Enterprise for."
				/>
				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{itServices.map((service) => (
						<ServiceCard key={service.title} service={service} />
					))}
				</div>
			</section>

			{/* Fire safety services */}
			{/*
			<section className="mt-16 bg-muted/50 py-16 sm:mt-20 sm:py-20">
				<div className="page-wrap">
					<div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
						<SectionHeading
							eyebrow="Fire safety installation"
							title="Plan for fire protection before an emergency happens."
							description="Explore fire safety system categories for new installations and suitable upgrades. The final system should be selected after reviewing the building, its occupancy and applicable requirements."
						/>
						<Button asChild className="w-fit">
							<a href="#contact">
								Talk to our team <ArrowRight className="ml-2 size-4" />
							</a>
						</Button>
					</div>
					<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{fireSafetyServices.map((service) => (
							<ServiceCard key={service.title} service={service} />
						))}
					</div>
				</div>
			</section>
        */}

			{/* Sectors */}
			<section className="page-wrap mt-16 sm:mt-20">
				<SectionHeading
					eyebrow="Who we serve"
					title="Fire safety for different types of buildings."
					description="Different buildings have different occupancy patterns, risks and protection requirements. We begin by understanding the site and the purpose of the facility."
				/>
				<div className="mt-8 grid gap-4 md:grid-cols-3">
					{sectors.map((sector) => {
						const Icon = sector.icon;
						return (
							<Card key={sector.title} className="h-full border-border/70">
								<CardHeader>
									<div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
										<Icon className="size-6" />
									</div>
									<CardTitle className="text-xl">{sector.title}</CardTitle>
									<CardDescription className="leading-6">
										{sector.description}
									</CardDescription>
								</CardHeader>
							</Card>
						);
					})}
				</div>
			</section>

			{/* Process */}
			<section className="page-wrap mt-16 sm:mt-20">
				<div className="rounded-3xl border bg-card px-6 py-10 sm:px-10 sm:py-12">
					<SectionHeading
						eyebrow="How we work"
						title="A clear process from first discussion to handover."
						description="Whether the requirement is related to technology or fire safety, a structured process helps define the work before implementation begins."
					/>
					<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{processSteps.map((step, index) => (
							<div key={step.number} className="relative">
								<p className="text-sm font-bold tracking-widest text-primary">
									{step.number}
								</p>
								<h3 className="mt-3 font-semibold text-foreground">
									{step.title}
								</h3>
								<p className="mt-2 text-sm leading-6 text-muted-foreground">
									{step.description}
								</p>
								{index < processSteps.length - 1 ? (
									<ArrowRight className="absolute right-2 top-1 hidden size-4 text-muted-foreground lg:block" />
								) : null}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="page-wrap mt-16 sm:mt-20">
				<div className="overflow-hidden rounded-3xl bg-primary px-6 py-10 text-primary-foreground sm:px-10 sm:py-12">
					<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
						<div className="max-w-2xl">
							<p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/75">
								Start a conversation
							</p>
							<h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
								Have a project or a safety requirement?
							</h2>
							<p className="mt-3 leading-7 text-primary-foreground/80">
								Tell us what you need. Our team can discuss the next steps for
								your IT infrastructure or building fire safety project.
							</p>
						</div>
						<Button size="lg" variant="secondary" asChild>
							<a href="#contact">
								Contact Baroda Enterprise <ArrowRight className="ml-2 size-4" />
							</a>
						</Button>
					</div>
				</div>
			</section>

			{/* Contact */}
			<section className="page-wrap mt-16 sm:mt-20" id="contact">
				<div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
					<div>
						<SectionHeading
							eyebrow="Get in touch"
							title="Let's discuss what your site or business needs."
							description="Share a few details and let us know whether your enquiry is about IT services or fire safety installation."
						/>
						<Card className="mt-8">
							<CardContent className="p-6 sm:p-8">
								{/* Connect this form to the project's enquiry server function/API before launch. */}
								<form className="grid gap-5">
									<div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
										<div className="grid gap-2">
											<Label htmlFor="name">Full name</Label>
											<Input
												id="name"
												name="name"
												placeholder="Your name"
												required
											/>
										</div>
										<div className="grid gap-2">
											<Label htmlFor="phone">Phone number</Label>
											<Input
												id="phone"
												name="phone"
												type="tel"
												placeholder="Your phone number"
												required
											/>
										</div>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="email">Email address</Label>
										<Input
											id="email"
											name="email"
											type="email"
											placeholder="you@company.com"
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="enquiry-type">
											What is your enquiry about?
										</Label>
										<Select defaultValue="it-services">
											<SelectTrigger className="w-full max-w-48">
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectLabel>Select an enquiry type</SelectLabel>
													{[
														{ label: "IT Services", value: "it-services" },
														{
															label: "Fire Safety Installation",
															value: "fire-safety",
														},
													].map((item) => (
														<SelectItem key={item.value} value={item.value}>
															{item.label}
														</SelectItem>
													))}
												</SelectGroup>
											</SelectContent>
										</Select>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="message">
											Tell us about your requirement
										</Label>
										<Textarea
											id="message"
											name="message"
											placeholder="Building type, location, service required or project details..."
											rows={4}
										/>
									</div>
									<Button type="button" className="w-full">
										Send enquiry <ArrowRight className="ml-2 size-4" />
									</Button>
									<p className="text-xs text-muted-foreground">
										The form UI needs to be connected to an enquiry handler
										before it can submit messages.
									</p>
								</form>
							</CardContent>
						</Card>
					</div>

					<div className="flex flex-col gap-5">
						<Card>
							<CardHeader>
								<CardTitle>Contact information</CardTitle>
								<CardDescription>
									Reach out to discuss a project or arrange an initial
									conversation.
								</CardDescription>
							</CardHeader>
							<CardContent className="grid gap-5">
								<div className="flex gap-3">
									<MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
									<div>
										<p className="text-sm font-semibold">Office address</p>
										<p className="mt-1 text-sm leading-6 text-muted-foreground">
											{COMPANY_ADDRESS}
										</p>
									</div>
								</div>
								<div className="flex gap-3">
									<Phone className="mt-0.5 size-5 shrink-0 text-primary" />
									<div>
										<p className="text-sm font-semibold">Phone</p>
										<a
											className="mt-1 block text-sm text-muted-foreground hover:text-primary"
											href={`tel:${COMPANY_PHONE.replace(/[^\d+]/g, "")}`}
										>
											{COMPANY_PHONE}
										</a>
									</div>
								</div>
								<div className="flex gap-3">
									<Mail className="mt-0.5 size-5 shrink-0 text-primary" />
									<div>
										<p className="text-sm font-semibold">Email</p>
										<p className="mt-1 text-sm text-muted-foreground">
											{COMPANY_EMAIL}
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<div className="overflow-hidden rounded-xl border bg-muted">
							<iframe
								title={`${COMPANY_NAME} location`}
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14764.648709207513!2d73.1816492!3d22.3097055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcfb7702bf9e9%3A0xe056df05223dddab!2sBARODA%20ENTERPRISE!5e0!3m2!1sen!2sin!4v1773471231945!5m2!1sen!2sin"
								width="100%"
								height="280"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

// import { createFileRoute, Link } from "@tanstack/react-router";
// import { Button } from "#/components/ui/button";
// import { COMPANY_ADDRESS, COMPANY_NAME, COMPANY_PHONE } from "#/lib/constants";
//
// export const Route = createFileRoute("/")({ component: Home });
//
// const services = [
// 	{
// 		title: "Managed IT Services",
// 		desc: "24/7 monitoring, patching, and rapid response to keep teams online.",
// 	},
// 	{
// 		title: "Network & Security",
// 		desc: "Firewalls, zero-trust policies, and secure connectivity across sites.",
// 	},
// 	{
// 		title: "Automation & DevOps",
// 		desc: "CI/CD pipelines, infrastructure as code, and workflow optimization.",
// 	},
// 	{
// 		title: "Cloud Migration",
// 		desc: "Move workloads to AWS, Azure, or GCP with zero downtime planning.",
// 	},
// 	{
// 		title: "Workplace Solutions",
// 		desc: "Unified collaboration tools, device management, and onboarding.",
// 	},
// 	{
// 		title: "Data & Analytics",
// 		desc: "Dashboards, reporting, and actionable insights for decision makers.",
// 	},
// ];
//
// const process = [
// 	"Discovery & strategy workshops",
// 	"Infrastructure audit & roadmap",
// 	"Solution architecture design",
// 	"Deployment & migration",
// 	"Ongoing monitoring & support",
// 	"Continuous optimization",
// ];
//
// const testimonials = [
// 	{
// 		name: "Nina S.",
// 		role: "IT Director, Horizon Health",
// 		quote:
// 			"Baroda Enterprise modernized our infrastructure and reduced downtime by 40% in three months.",
// 	},
// 	{
// 		name: "Arjun P.",
// 		role: "COO, Meridian Logistics",
// 		quote:
// 			"Their automation team delivered a seamless rollout and a faster fulfillment workflow.",
// 	},
// 	{
// 		name: "Lauren K.",
// 		role: "Operations Lead, NextWave Media",
// 		quote:
// 			"Reliable, proactive, and highly responsive. Our team finally sleeps at night.",
// 	},
// ];
//
// const clients = [
// 	"G-Drive",
// 	"Northwell",
// 	"Bluebird",
// 	"Civic Labs",
// 	"Vertex",
// 	"GlobalTek",
// ];
//
// function Home() {
// 	return (
// 		<main className="pb-16">
// 			<section className="page-wrap pt-10">
// 				<div className="grid gap-10 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-14">
// 					<div className="relative z-10">
// 						<p className="mb-3 leading-0.5 uppercase text-sm text-primary font-semibold">
// 							Welcome to Baroda Enterprise
// 						</p>
// 						<h1 className="mb-4 text-4xl leading-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
// 							Managed IT and automation for teams that cannot slow down.
// 						</h1>
// 						<p className="mb-6 max-w-xl text-base text-[var(--ink-soft)] sm:text-lg">
// 							We design resilient infrastructure, monitor your stack around the
// 							clock, and automate repetitive work so your business stays secure
// 							and productive.
// 						</p>
// 						<div className="flex flex-wrap gap-3">
// 							<Button variant={"default"} asChild>
// 								<Link to="/">Get Started</Link>
// 							</Button>
//
// 							<Button variant={"outline"} asChild>
// 								<Link to="/">Explore Services</Link>
// 							</Button>
// 						</div>
// 						<div className="mt-8 grid gap-3 sm:grid-cols-3">
// 							{[
// 								["9+ Years", "Automation expertise"],
// 								["200+ Clients", "Across industries"],
// 								["24/7 Support", "Always-on care"],
// 							].map(([title, desc]) => (
// 								<div
// 									key={title}
// 									className="px-4 py-3 border border-foreground/10"
// 								>
// 									<p className="m-0 text-sm font-semibold text-[var(--ink)]">
// 										{title}
// 									</p>
// 									<p className="m-0 text-xs text-[var(--ink-soft)]">{desc}</p>
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 					<div className="relative h-fit p-6">
// 						<img
// 							src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80"
// 							alt="Network operations dashboard"
// 							className="h-56 w-full rounded-2xl object-cover shadow-[0_16px_30px_rgba(12,35,62,0.18)] sm:h-64"
// 						/>
// 						<div className="mt-6 grid gap-4 sm:grid-cols-2">
// 							<div className=" px-4 py-4">
// 								<p className="m-0 text-xs font-semibold text-[var(--accent)]">
// 									LIVE STATUS
// 								</p>
// 								<p className="m-0 mt-1 text-sm font-semibold text-[var(--ink)]">
// 									312 systems monitored
// 								</p>
// 								<p className="m-0 text-xs text-[var(--ink-soft)]">
// 									99.98% uptime this month
// 								</p>
// 							</div>
// 							<div className="px-4 py-4">
// 								<p className="m-0 text-xs font-semibold text-[var(--accent)]">
// 									SECURITY
// 								</p>
// 								<p className="m-0 mt-1 text-sm font-semibold text-[var(--ink)]">
// 									Zero critical alerts
// 								</p>
// 								<p className="m-0 text-xs text-[var(--ink-soft)]">
// 									Automated threat response enabled
// 								</p>
// 							</div>
// 						</div>
// 						<div className="absolute right-6 top-6 card-shell px-3 py-2 text-xs font-semibold text-[var(--ink)] shadow-[0_16px_30px_rgba(12,35,62,0.2)]">
// 							Trusted by fast-growth teams
// 						</div>
// 					</div>
// 				</div>
// 			</section>
//
// 			<section
// 				className="page-wrap mt-16 grid gap-10 lg:grid-cols-[1fr_1fr]"
// 				id="solutions"
// 			>
// 				<div>
// 					<p className="mb-2">About Baroda Enterprise</p>
// 					<h2 className="mb-4 text-3xl text-[var(--ink)] sm:text-4xl">
// 						A modern partner for infrastructure, automation, and managed
// 						services.
// 					</h2>
// 					<p className="text-[var(--ink-soft)]">
// 						We combine deep technical expertise with a service-first mindset.
// 						From initial planning to 24/7 operations, our teams stay embedded in
// 						your business goals.
// 					</p>
// 					<div className="mt-6 grid gap-4 sm:grid-cols-2">
// 						{[
// 							"Dedicated technical account managers",
// 							"Security-first operating model",
// 							"Transparent reporting and SLAs",
// 							"Certified cloud professionals",
// 						].map((item) => (
// 							<div key={item} className="px-4 py-3 text-sm">
// 								{item}
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 				<div className="overflow-hidden">
// 					<img
// 						src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
// 						alt="Team collaborating"
// 						className="h-full w-full object-cover"
// 					/>
// 				</div>
// 			</section>
//
// 			<section className="page-wrap mt-16" id="process">
// 				<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
// 					<div>
// 						<p className="mb-2">Who We Are & How We Work</p>
// 						<h2 className="text-3xl text-[var(--ink)] sm:text-4xl">
// 							A proven process built for dependable delivery.
// 						</h2>
// 					</div>
// 					<p className="max-w-md text-sm text-[var(--ink-soft)]">
// 						Clear communication and measurable outcomes at every phase of the
// 						engagement.
// 					</p>
// 				</div>
// 				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
// 					{process.map((item) => (
// 						<div key={item} className="card-shell p-5">
// 							<div className="mb-3 h-10 w-10 rounded-full bg-[var(--accent-light)] text-center text-lg font-bold text-[var(--accent-strong)]">
// 								✓
// 							</div>
// 							<p className="m-0 text-sm font-semibold text-[var(--ink)]">
// 								{item}
// 							</p>
// 						</div>
// 					))}
// 				</div>
// 			</section>
//
// 			<section className="page-wrap mt-16" id="services">
// 				<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
// 					<div>
// 						<p className="mb-2">Service We Offer</p>
// 						<h2 className="text-3xl text-[var(--ink)] sm:text-4xl">
// 							End-to-end IT services that scale with your business.
// 						</h2>
// 					</div>
// 					<p className="max-w-md text-sm text-[var(--ink-soft)]">
// 						Choose a full managed plan or focused support for your highest
// 						priority initiatives.
// 					</p>
// 				</div>
// 				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
// 					{services.map((service) => (
// 						<article key={service.title} className="card-shell p-5">
// 							<div className="mb-3 h-10 w-10 rounded-xl bg-[var(--accent-light)] text-center text-lg font-semibold text-[var(--accent-strong)]">
// 								★
// 							</div>
// 							<h3 className="m-0 text-base font-semibold text-[var(--ink)]">
// 								{service.title}
// 							</h3>
// 							<p className="mt-2 text-sm text-[var(--ink-soft)]">
// 								{service.desc}
// 							</p>
// 						</article>
// 					))}
// 				</div>
// 			</section>
//
// 			<section className="page-wrap mt-16">
// 				<div className="grid gap-6 px-6 py-8 text-center sm:grid-cols-2 lg:grid-cols-4">
// 					{[
// 						["125+", "Automation workflows shipped"],
// 						["200+", "Active managed clients"],
// 						["10+", "Certified cloud engineers"],
// 						["15 min", "Average response time"],
// 					].map(([value, label]) => (
// 						<div key={value}>
// 							<p className="m-0 text-3xl font-semibold">{value}</p>
// 							<p className="m-0 text-sm text-[#cbd7e9]">{label}</p>
// 						</div>
// 					))}
// 				</div>
// 			</section>
//
// 			<section className="page-wrap mt-16" id="testimonials">
// 				<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
// 					<div>
// 						<p className="mb-2">What Our Clients Say</p>
// 						<h2 className="section-title text-3xl text-[var(--ink)] sm:text-4xl">
// 							Trusted by teams that demand reliability.
// 						</h2>
// 					</div>
// 					<p className="max-w-md text-sm text-[var(--ink-soft)]">
// 						Long-term partnerships built on transparency, speed, and measurable
// 						outcomes.
// 					</p>
// 				</div>
// 				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
// 					{testimonials.map((testimonial) => (
// 						<article key={testimonial.name} className="card-shell p-5">
// 							<p className="m-0 text-sm text-[var(--ink-soft)]">
// 								“{testimonial.quote}”
// 							</p>
// 							<p className="mt-4 text-sm font-semibold text-[var(--ink)]">
// 								{testimonial.name}
// 							</p>
// 							<p className="m-0 text-xs text-[var(--ink-soft)]">
// 								{testimonial.role}
// 							</p>
// 						</article>
// 					))}
// 				</div>
// 			</section>
//
// 			<section className="page-wrap mt-16">
// 				<div className="px-6 py-8">
// 					<p className="mb-4">Trusted Clients</p>
// 					<div className="grid gap-3 text-center sm:grid-cols-3 lg:grid-cols-6">
// 						{clients.map((client) => (
// 							<div key={client} className="logo-tile">
// 								{client}
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			</section>
//
// 			<section className="page-wrap mt-16" id="contact">
// 				<div className="grid gap-6 px-6 py-8 lg:grid-cols-[1.1fr_0.9fr]">
// 					<div>
// 						<p className="mb-2">Get In Touch</p>
// 						<h2 className="mb-4 text-3xl text-[var(--ink)]">
// 							Let us map your next infrastructure upgrade.
// 						</h2>
// 						<form className="grid gap-4">
// 							<input placeholder="Full name" />
// 							<input placeholder="Work email" />
// 							<input placeholder="Company" />
// 							<textarea
// 								className=" min-h-[120px]"
// 								placeholder="Tell us about your goals"
// 							/>
// 							<button className="button-primary w-full" type="button">
// 								Send Request
// 							</button>
// 						</form>
// 					</div>
// 					<div className=" relative h-fit overflow-hidden p-5">
// 						<div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(31,111,235,0.12),transparent)]" />
// 						<div className="relative z-10">
// 							<p className="m-0 text-sm font-semibold text-[var(--ink)]">
// 								Headquarters
// 							</p>
// 							<p className="m-0 text-sm text-[var(--ink-soft)]">
// 								{COMPANY_ADDRESS}
// 							</p>
// 							<div className="mt-6 h-48 rounded-2xl border border-dashed border-[var(--line)] bg-white/70">
// 								<iframe
// 									title="Baroda Enterprise Location"
// 									src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14764.648709207513!2d73.1816492!3d22.3097055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcfb7702bf9e9%3A0xe056df05223dddab!2sBARODA%20ENTERPRISE!5e0!3m2!1sen!2sin!4v1773471231945!5m2!1sen!2sin"
// 									width="100%"
// 									height="200"
// 									style={{ border: 0 }}
// 									allowFullScreen
// 									loading="lazy"
// 									referrerPolicy="no-referrer-when-downgrade"
// 								/>
// 							</div>
// 							<div className="mt-6 grid gap-2 text-sm text-[var(--ink-soft)]">
// 								<p className="m-0">{COMPANY_NAME}</p>
// 								<p className="m-0">{COMPANY_PHONE}</p>
// 								<p className="m-0">Mon-Fri, 9:00am - 6:00pm</p>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 		</main>
// 	);
// }
