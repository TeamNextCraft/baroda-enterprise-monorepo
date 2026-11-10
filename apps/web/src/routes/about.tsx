import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	ArrowUpRight,
	Building2,
	Camera,
	CheckCircle2,
	Flame,
	HardDrive,
	Network,
	Printer,
	Server,
	ShieldCheck,
	Wrench,
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
import { COMPANY_NAME } from "#/lib/constants";

export const Route = createFileRoute("/about")({ component: AboutPage });

const businessAreas = [
	{
		eyebrow: "Technology & IT",
		title: "Technology that supports everyday business.",
		description:
			"From workplace equipment and software licensing to networking, infrastructure, backup and enterprise security, explore technology solutions around your organisation's needs.",
		image:
			"https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85",
		imageAlt: "Professionals collaborating around business technology",
		icon: Server,
		theme: "sky",
		links: [
			{ label: "Products", href: "/products/printing-and-imaging/" },
			{ label: "IT Services", href: "/services/it-infrastructure/" },
			{ label: "Surveillance", href: "/surveillance/cctv-solutions/" },
		],
	},
	{
		eyebrow: "Fire Safety",
		title: "Building protection planned around the site.",
		description:
			"Fire safety solutions for residential, commercial and industrial properties, including detection and alarm systems, suppression, hydrants, sprinklers and fire extinguishers.",
		image:
			"https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85",
		imageAlt: "Technical professional working in an industrial environment",
		icon: Flame,
		theme: "orange",
		links: [
			{ label: "Residential", href: "/fire-safety/residential" },
			{ label: "Industrial", href: "/fire-safety/industrial" },
			{ label: "Fire Systems", href: "/fire-safety/fire-detection" },
		],
	},
];

const capabilities = [
	{
		icon: Printer,
		title: "Products & workplace technology",
		description:
			"Printing and imaging, hardware components, software licensing and system integration options for business environments.",
		href: "/products/printing-and-imaging/",
		linkLabel: "Explore products",
	},
	{
		icon: Network,
		title: "IT services & infrastructure",
		description:
			"Core networking, IT infrastructure, backup solutions, enterprise security and annual maintenance contract options.",
		href: "/services/core-networking/",
		linkLabel: "Explore IT services",
	},
	{
		icon: Camera,
		title: "Surveillance & access systems",
		description:
			"CCTV, access control, biometric and RFID solutions, and network-connected surveillance systems.",
		href: "/surveillance/cctv-solutions/",
		linkLabel: "Explore surveillance",
	},
	{
		icon: ShieldCheck,
		title: "Fire safety systems",
		description:
			"Fire detection, suppression, hydrant and sprinkler systems, extinguishers and maintenance enquiries.",
		href: "/fire-safety/fire-detection",
		linkLabel: "Explore fire safety",
	},
];

const principles = [
	{
		number: "01",
		title: "Understand the requirement",
		description:
			"We begin with the customer's goals, the site or workplace context, existing systems and the practical problem to solve.",
	},
	{
		number: "02",
		title: "Define a suitable scope",
		description:
			"We discuss relevant options, compatibility, project constraints and the work needed before moving towards implementation.",
	},
	{
		number: "03",
		title: "Coordinate implementation",
		description:
			"The agreed products, systems or installation work are coordinated around the requirements and scope of the project.",
	},
	{
		number: "04",
		title: "Review and support",
		description:
			"After implementation, handover and any ongoing support or maintenance requirements can be discussed with the team.",
	},
];

const sectors = [
	{
		icon: Building2,
		title: "Residential properties",
		description:
			"Apartments, housing societies, villas and residential developments with technology or fire safety requirements.",
	},
	{
		icon: HardDrive,
		title: "Commercial workplaces",
		description:
			"Offices, retail spaces, hotels, institutions and other business environments.",
	},
	{
		icon: Wrench,
		title: "Industrial facilities",
		description:
			"Factories, warehouses, workshops and operational sites with infrastructure and fire protection needs.",
	},
];

function SectionIntro({
	eyebrow,
	title,
	description,
	align = "left",
}: {
	eyebrow: string;
	title: string;
	description: string;
	align?: "left" | "center";
}) {
	return (
		<div
			className={
				align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
			}
		>
			<p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
				{eyebrow}
			</p>
			<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
				{title}
			</h2>
			<p className="mt-4 text-base leading-7 text-(--ink-soft)">
				{description}
			</p>
		</div>
	);
}

function AboutPage() {
	return (
		<main className="pb-20">
			{/* Hero */}
			<section className="page-wrap pt-8 sm:pt-12">
				<div className="relative isolate overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-white shadow-xl sm:px-10 sm:py-16 lg:px-14 lg:py-20">
					<div className="pointer-events-none absolute -right-24 -top-24 -z-10 size-96 rounded-full bg-sky-500/15 blur-3xl" />
					<div className="pointer-events-none absolute -bottom-32 left-1/3 -z-10 size-96 rounded-full bg-orange-500/15 blur-3xl" />

					<div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
						<div>
							<Badge className="mb-5 border border-white/15 bg-white/10 px-3 py-1 text-white hover:bg-white/10">
								About {COMPANY_NAME}
							</Badge>
							<h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
								Business technology and building safety, brought together.
							</h1>
							<p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
								{COMPANY_NAME} brings together IT products and services,
								surveillance solutions and fire safety systems for organisations
								and properties. We help customers explore practical options
								based on their requirements, environment and project scope.
							</p>
							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button size="lg" asChild>
									<Link to="/contact-us">
										Talk to our team <ArrowRight className="ml-2 size-4" />
									</Link>
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
									asChild
								>
									<a href="#our-business">Explore what we do</a>
								</Button>
							</div>
							<div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-slate-300">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="size-4 text-sky-300" />
									IT & technology solutions
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="size-4 text-sky-300" />
									Surveillance systems
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="size-4 text-orange-300" />
									Fire safety solutions
								</span>
							</div>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							<div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:mt-10">
								<img
									src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85"
									alt="Business professionals collaborating around technology"
									className="h-52 w-full object-cover sm:h-60"
								/>
								<div className="p-4">
									<p className="text-xs font-semibold uppercase tracking-wider text-sky-300">
										Technology
									</p>
									<p className="mt-1 font-semibold text-white">
										IT & infrastructure
									</p>
									<p className="mt-1 text-sm text-slate-300">
										Products, networking, infrastructure and support.
									</p>
								</div>
							</div>
							<div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
								<img
									src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85"
									alt="Technical professional at work in an industrial setting"
									className="h-52 w-full object-cover sm:h-60"
								/>
								<div className="p-4">
									<p className="text-xs font-semibold uppercase tracking-wider text-orange-300">
										Building safety
									</p>
									<p className="mt-1 font-semibold text-white">
										Fire safety systems
									</p>
									<p className="mt-1 text-sm text-slate-300">
										Fire detection, suppression and protection systems.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Introduction */}
			<section className="page-wrap mt-16 sm:mt-20" id="our-business">
				<div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
					<SectionIntro
						eyebrow="Who we are"
						title="A solutions partner for the places where business happens."
						description="Technology and safety needs are different from one organisation to another. The right starting point is understanding the people, property, systems and work involved."
					/>
					<div className="space-y-5 text-base leading-8 text-(--ink-soft)">
						<p>
							{COMPANY_NAME} serves customers looking for business technology,
							IT infrastructure and security-related systems. Its offering
							includes workplace products, networking, infrastructure services,
							backup, enterprise security and surveillance solutions.
						</p>
						<p>
							The business is also introducing fire safety installation
							solutions for residential, commercial and industrial buildings.
							This expands the areas customers can discuss with the team, from
							connected technology environments to building fire protection.
						</p>
						<p>
							Rather than assuming every site needs the same setup, the focus is
							on understanding the requirement and discussing an appropriate
							scope before products or implementation work are selected.
						</p>
					</div>
				</div>
			</section>

			{/* Business areas */}
			<section className="page-wrap mt-16 sm:mt-20">
				<SectionIntro
					eyebrow="Our business areas"
					title="Two connected areas of service."
					description="Explore the areas in which Baroda Enterprise works and find the service category that best matches your requirement."
				/>
				<div className="mt-8 grid gap-6 lg:grid-cols-2">
					{businessAreas.map((area) => {
						const Icon = area.icon;
						const isFire = area.theme === "orange";
						return (
							<Card
								key={area.eyebrow}
								className="group overflow-hidden border-border/70 transition-shadow hover:shadow-lg"
							>
								<div
									className={
										isFire ? "h-1.5 bg-orange-500" : "h-1.5 bg-sky-600"
									}
								/>
								<div className="grid h-full md:grid-cols-[0.85fr_1.15fr]">
									<div className="relative min-h-60 overflow-hidden md:min-h-full">
										<img
											src={area.image}
											alt={area.imageAlt}
											loading="lazy"
											className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
										<div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
											<span className="flex size-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur">
												<Icon className="size-5" />
											</span>
											<span className="text-sm font-semibold">
												{area.eyebrow}
											</span>
										</div>
									</div>
									<CardContent className="flex flex-col p-6 sm:p-7">
										<h3 className="text-2xl font-bold tracking-tight text-(--ink)">
											{area.title}
										</h3>
										<p className="mt-3 text-sm leading-7 text-(--ink-soft)">
											{area.description}
										</p>
										<div className="mt-6 flex flex-wrap gap-2">
											{area.links.map((link) => (
												<Button
													key={link.label}
													size="sm"
													variant="outline"
													asChild
												>
													<Link to={link.href as never}>
														{link.label}{" "}
														<ArrowUpRight className="ml-1 size-3.5" />
													</Link>
												</Button>
											))}
										</div>
									</CardContent>
								</div>
							</Card>
						);
					})}
				</div>
			</section>

			{/* Capabilities */}
			<section className="mt-16 bg-muted/40 py-16 sm:mt-20 sm:py-20">
				<div className="page-wrap">
					<SectionIntro
						eyebrow="What we offer"
						title="Solutions across technology, security and fire protection."
						description="Browse the main capability areas. The exact products, system options and project scope can be discussed with the team."
					/>
					<div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
						{capabilities.map((item) => {
							const Icon = item.icon;
							return (
								<Card
									key={item.title}
									className="flex h-full flex-col border-border/70 bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
								>
									<CardHeader>
										<div className="mb-2 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
											<Icon className="size-6" />
										</div>
										<CardTitle className="text-lg">{item.title}</CardTitle>
										<CardDescription className="leading-6">
											{item.description}
										</CardDescription>
									</CardHeader>
									<CardContent className="mt-auto pt-0">
										<Button
											variant="ghost"
											size="sm"
											className="px-0 text-primary hover:bg-transparent"
											asChild
										>
											<Link to={item.href as never}>
												{item.linkLabel} <ArrowRight className="ml-2 size-4" />
											</Link>
										</Button>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>
			</section>

			{/* Sectors */}
			<section className="page-wrap mt-16 sm:mt-20">
				<SectionIntro
					eyebrow="Who we work with"
					title="Different environments. Different requirements."
					description="The right solution depends on how a building or organisation operates. These are some of the environments covered by the company's product and service categories."
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
									<CardDescription className="leading-7">
										{sector.description}
									</CardDescription>
								</CardHeader>
							</Card>
						);
					})}
				</div>
			</section>

			{/* Approach */}
			<section className="page-wrap mt-16 sm:mt-20">
				<div className="rounded-3xl border border-(--line) bg-card px-6 py-10 sm:px-10 sm:py-12">
					<SectionIntro
						eyebrow="Our approach"
						title="A considered process from discussion to handover."
						description="A clear scope helps customers understand what is being proposed and what needs to happen next."
					/>
					<div className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
						{principles.map((step, index) => (
							<div key={step.number} className="relative">
								<p className="text-sm font-bold tracking-[0.2em] text-primary">
									{step.number}
								</p>
								<h3 className="mt-3 font-semibold text-(--ink)">
									{step.title}
								</h3>
								<p className="mt-2 text-sm leading-7 text-(--ink-soft)">
									{step.description}
								</p>
								{index < principles.length - 1 ? (
									<ArrowRight className="absolute right-1 top-1 hidden size-4 text-muted-foreground lg:block" />
								) : null}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Closing CTA */}
			<section className="page-wrap mt-16 sm:mt-20">
				<div className="relative isolate overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12">
					<div className="pointer-events-none absolute -right-20 -top-24 -z-10 size-72 rounded-full bg-orange-500/15 blur-3xl" />
					<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
						<div className="max-w-2xl">
							<Badge className="border border-white/15 bg-white/10 text-white hover:bg-white/10">
								Start a conversation
							</Badge>
							<h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
								Tell us what you need for your business or building.
							</h2>
							<p className="mt-3 leading-7 text-slate-300">
								Contact {COMPANY_NAME} to discuss an IT, surveillance or fire
								safety requirement and identify the appropriate next step.
							</p>
						</div>
						<div className="flex shrink-0 flex-col gap-3 sm:flex-row">
							<Button size="lg" asChild>
								<Link to="/contact-us">
									Contact Us <ArrowRight className="ml-2 size-4" />
								</Link>
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
								asChild
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
