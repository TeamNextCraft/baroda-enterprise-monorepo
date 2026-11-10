import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	ArrowUpRight,
	BadgeCheck,
	Building2,
	CheckCircle2,
	ClipboardCheck,
	Cloud,
	Eye,
	Factory,
	Fingerprint,
	Laptop,
	LockKeyhole,
	Mail,
	Network,
	Router,
	ScanSearch,
	Server,
	Shield,
	ShieldAlert,
	ShieldCheck,
	Store,
	UserRoundCheck,
	Workflow,
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

export const Route = createFileRoute("/services/enterprise-security/")({
	component: EnterpriseSecurityPage,
});

const securityServices = [
	{
		icon: Router,
		title: "Firewall & perimeter security",
		description:
			"Review and configure network-edge protection to help manage traffic entering and leaving the organisation's environment.",
		points: [
			"Firewall selection and configuration scope",
			"Inbound and outbound traffic policies",
			"Remote-access and site-connectivity considerations",
		],
	},
	{
		icon: Laptop,
		title: "Endpoint protection",
		description:
			"Plan security controls for the computers and devices employees use to access business applications and information.",
		points: [
			"Desktop and laptop protection requirements",
			"Endpoint policy and update considerations",
			"Device inventory and configuration review",
		],
	},
	{
		icon: Fingerprint,
		title: "Identity & access management",
		description:
			"Help organise how users and administrators authenticate and access business systems, applications and shared resources.",
		points: [
			"User and administrator access review",
			"Role-based access and least-privilege planning",
			"Multi-factor authentication options",
		],
	},
	{
		icon: Mail,
		title: "Email & web protection",
		description:
			"Review controls that can reduce exposure to suspicious messages, unsafe links, malicious attachments and inappropriate web access.",
		points: [
			"Email security configuration considerations",
			"Web filtering and acceptable-use policies",
			"Phishing-risk reduction measures",
		],
	},
	{
		icon: Network,
		title: "Network security & segmentation",
		description:
			"Structure network access so systems, teams, locations and connected devices communicate only as required for business operations.",
		points: [
			"Network segmentation and VLAN planning",
			"Secure wireless and guest network separation",
			"Access rules for servers and shared resources",
		],
	},
	{
		icon: ScanSearch,
		title: "Security review & hardening",
		description:
			"Review selected systems and configurations to identify improvement areas and prioritise practical security changes.",
		points: [
			"Configuration and exposure review",
			"Patch and update process considerations",
			"Prioritised recommendations and action plan",
		],
	},
];

const securityLayers = [
	{
		icon: Shield,
		title: "Perimeter",
		description:
			"Manage the connections between the organisation's network, the internet and external locations through appropriately configured edge controls.",
		tags: ["Firewalls", "Remote access", "Traffic policies"],
	},
	{
		icon: Network,
		title: "Network",
		description:
			"Separate network areas and control communication between users, servers, guest devices and operational systems according to business needs.",
		tags: ["Segmentation", "Secure Wi-Fi", "Access rules"],
	},
	{
		icon: Laptop,
		title: "Devices & users",
		description:
			"Consider the security of endpoints and user accounts, including device configuration, authentication and appropriate access permissions.",
		tags: ["Endpoint controls", "MFA options", "User access"],
	},
	{
		icon: LockKeyhole,
		title: "Information & recovery",
		description:
			"Support the protection of important information with access controls and a wider plan for backup, recovery and operational continuity.",
		tags: ["Data access", "Backup planning", "Recovery readiness"],
	},
];

const environments = [
	{
		icon: Building2,
		title: "Corporate offices",
		description:
			"Consider protection for employee devices, business applications, email, wireless networks, shared files and remote access.",
		tags: ["User devices", "Office networks", "Business data"],
	},
	{
		icon: Factory,
		title: "Industrial facilities",
		description:
			"Review security boundaries between office IT, site networks and connected operational systems, taking account of production requirements.",
		tags: ["Site connectivity", "Network separation", "Access controls"],
	},
	{
		icon: Store,
		title: "Retail & multi-location businesses",
		description:
			"Plan consistent security controls for branches, point-of-sale environments, central systems and users working across locations.",
		tags: ["Branch networks", "Central access", "Remote locations"],
	},
];

const reviewFactors = [
	{
		icon: UserRoundCheck,
		title: "Who needs access?",
		description:
			"Identify employees, administrators, third parties and devices that need access to business systems. Permissions should match each user's responsibilities.",
	},
	{
		icon: Eye,
		title: "What needs visibility?",
		description:
			"Decide which network events, endpoint alerts and configuration changes need to be recorded or reviewed, and who is responsible for responding.",
	},
	{
		icon: Cloud,
		title: "Which systems are in scope?",
		description:
			"Include relevant office networks, remote users, cloud applications, servers, endpoints and connected devices when defining the security requirements.",
	},
	{
		icon: ShieldAlert,
		title: "How will risks be prioritised?",
		description:
			"Prioritise improvements based on business impact, exposure, technical dependencies and the effort required to implement and maintain each control.",
	},
];

const deliverySteps = [
	{
		number: "01",
		icon: ClipboardCheck,
		title: "Understand the environment",
		description:
			"Review the organisation's network, devices, users, applications, existing security controls and the operational requirements that must be maintained.",
	},
	{
		number: "02",
		icon: ScanSearch,
		title: "Identify priorities",
		description:
			"Discuss the key risks and improvement areas, confirm the systems in scope and agree which changes should be addressed first.",
	},
	{
		number: "03",
		icon: Workflow,
		title: "Plan & implement controls",
		description:
			"Prepare the proposed design, equipment or software requirements, configuration plan, implementation sequence and any required change window.",
	},
	{
		number: "04",
		icon: BadgeCheck,
		title: "Validate & hand over",
		description:
			"Check the agreed configurations, document relevant settings and responsibilities, and discuss ongoing maintenance or future improvements.",
	},
];

const relatedServices = [
	{
		icon: Network,
		title: "Core Networking",
		description:
			"Build and maintain the wired, wireless and routed network foundations that security controls depend on.",
		href: "/services/core-networking/",
	},
	{
		icon: Server,
		title: "IT Infrastructure",
		description:
			"Review servers, storage, endpoints and infrastructure components as part of a broader IT environment.",
		href: "/services/it-infrastructure/",
	},
	{
		icon: ShieldCheck,
		title: "Backup Solutions",
		description:
			"Plan separate copies of business data and define recovery procedures as part of operational resilience.",
		href: "/services/backup-solutions/",
	},
	{
		icon: ClipboardCheck,
		title: "Annual Maintenance Contract",
		description:
			"Discuss ongoing support and maintenance arrangements for covered IT equipment and systems.",
		href: "/services/amc/",
	},
];

const faqs = [
	{
		question: "What does enterprise security include?",
		answer:
			"Enterprise security can include network-edge protection, endpoint controls, identity and access management, email and web protection, network segmentation and security configuration reviews. The exact services and technologies depend on the organisation's environment and the agreed project scope.",
	},
	{
		question:
			"Can you review our existing firewall and network security setup?",
		answer:
			"An existing environment can be reviewed to understand its topology, firewall rules, remote-access arrangements, network segmentation and known operational issues. The review scope, access required and any testing activities should be agreed before work begins.",
	},
	{
		question: "Do we need to replace all our existing security equipment?",
		answer:
			"Not necessarily. The first step is to understand the equipment, software versions, support status, configuration and business requirements. Some environments may benefit from configuration improvements, while others may need upgrades or replacement where existing components cannot meet the requirements.",
	},
	{
		question: "Can you help secure users working remotely?",
		answer:
			"Remote-access requirements can be included in the assessment. Options may involve secure connectivity, stronger authentication, device requirements and access policies. The suitable approach depends on the applications being accessed, user locations and the organisation's existing infrastructure.",
	},
	{
		question: "Can office and industrial networks be protected separately?",
		answer:
			"Network segmentation can help separate office users, guest devices, servers and selected operational systems. The design must account for required communication paths, equipment dependencies, uptime needs and the potential impact of changes on industrial operations.",
	},
	{
		question:
			"Does installing security software guarantee that our business will not be attacked?",
		answer:
			"No single product or configuration can guarantee complete protection. Security is an ongoing process that combines appropriate technology, sound configuration, user practices, updates, monitoring and a response plan. Controls should be reviewed as the organisation and threat environment change.",
	},
	{
		question: "Do you provide 24/7 security monitoring or incident response?",
		answer:
			"Monitoring and incident-response arrangements depend on the services and support coverage the company offers. Confirm availability, operating hours, escalation procedures and response responsibilities with Baroda Enterprise before including these services in a proposal.",
	},
	{
		question: "What information should we provide for a quotation?",
		answer:
			"Share the number of locations and users, network diagram if available, firewall and endpoint details, server and cloud environments, remote-access requirements, known concerns and any relevant project deadlines. Do not send passwords or other secret credentials through the enquiry form.",
	},
];

function EnterpriseSecurityPage() {
	return (
		<main className="pb-20">
			{/* Hero */}
			<section className="page-wrap pt-8 sm:pt-12">
				<div className="relative isolate overflow-hidden rounded-3xl border border-(--line) bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.16),transparent_42%),linear-gradient(135deg,var(--header-bg),var(--background))] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
					<div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-72 w-72 rounded-full border border-blue-500/15" />
					<div className="pointer-events-none absolute -right-5 -top-9 -z-10 h-52 w-52 rounded-full border border-blue-500/15" />

					<div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
						<div>
							<Badge
								variant="outline"
								className="mb-5 gap-2 border-blue-500/30 bg-blue-500/10 px-3 py-1 text-blue-700 dark:text-blue-300"
							>
								<ShieldCheck className="h-3.5 w-3.5" />
								Services / Enterprise Security
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								Strengthen the security of your business technology.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Protect business networks, devices and access to important
								systems with security solutions planned around your IT
								environment. Baroda Enterprise can help assess requirements,
								review suitable controls and coordinate implementation for your
								organisation.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Discuss Your Security Requirements{" "}
										<ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#security-services">Explore Services</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-blue-600" />
									Network & endpoint controls
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-blue-600" />
									Identity & access planning
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-blue-600" />
									Practical security improvements
								</span>
							</div>
						</div>

						<div className="relative">
							<div className="overflow-hidden rounded-2xl border border-(--line) bg-background shadow-xl">
								<img
									src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1100&q=85"
									alt="Digital cybersecurity concept representing enterprise technology protection"
									className="h-64 w-full object-cover sm:h-80 lg:h-[390px]"
								/>
								<div className="grid gap-4 p-5 sm:grid-cols-2">
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<LockKeyhole className="h-4 w-4 text-blue-600" />
											Controlled access
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Align user permissions and authentication with the systems
											and information each role needs.
										</p>
									</div>
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<Network className="h-4 w-4 text-blue-600" />
											Connected protection
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Consider security across networks, devices, applications
											and business locations.
										</p>
									</div>
								</div>
							</div>
							<div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-(--line) bg-background p-4 shadow-lg sm:flex">
								<div className="rounded-lg bg-blue-500/10 p-2 text-blue-700 dark:text-blue-300">
									<BadgeCheck className="h-5 w-5" />
								</div>
								<div>
									<p className="text-sm font-semibold text-(--ink)">
										Security by design
									</p>
									<p className="text-xs text-(--ink-soft)">
										Controls matched to your environment
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
						A layered approach
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Security works best when the parts of your IT environment work
						together.
					</h2>
				</div>
				<div className="space-y-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
					<p>
						Business technology is spread across office networks, employee
						devices, cloud applications, servers, remote connections and
						sometimes industrial sites. A weakness in one area can affect
						systems and information elsewhere, so security decisions should
						consider how the environment is connected.
					</p>
					<p>
						An enterprise security project should establish what is in scope,
						understand current controls and operational constraints, and agree
						the changes that offer practical value. The resulting design may
						combine network protection, endpoint security, identity controls and
						supporting processes according to the organisation's needs.
					</p>
				</div>
			</section>

			{/* Services */}
			<section className="page-wrap mt-16" id="security-services">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Enterprise security services
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Security solutions for the systems your business relies on.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Start with the areas that matter most to your organisation. The
						final recommendations depend on your current infrastructure,
						security requirements, supported technologies and agreed project
						scope.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{securityServices.map((service) => {
						const Icon = service.icon;
						return (
							<Card
								key={service.title}
								className="h-full rounded-2xl border-(--line)"
							>
								<CardHeader>
									<div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700 dark:text-blue-300">
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
												<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
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

			{/* Security layers */}
			<section className="page-wrap mt-16">
				<div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							Security layers
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Consider protection across the complete environment.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							A layered design helps avoid relying on a single product or
							control. Each layer should have a clear purpose and fit the way
							your people, devices and systems need to operate.
						</p>
						<Button asChild variant="outline" className="mt-6 gap-2">
							<Link to="/contact-us">
								Review your security needs <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						{securityLayers.map((layer) => {
							const Icon = layer.icon;
							return (
								<Card key={layer.title} className="rounded-2xl border-(--line)">
									<CardHeader>
										<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
											<Icon className="h-5 w-5" />
										</div>
										<CardTitle className="text-base">{layer.title}</CardTitle>
										<CardDescription className="leading-6">
											{layer.description}
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="flex flex-wrap gap-2">
											{layer.tags.map((tag) => (
												<Badge
													key={tag}
													variant="secondary"
													className="font-normal"
												>
													{tag}
												</Badge>
											))}
										</div>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>
			</section>

			{/* Planning considerations */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Security planning
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Build a security plan around real business priorities.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						The right controls depend on the people, information, applications
						and operational systems that need protection.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{reviewFactors.map((item) => {
						const Icon = item.icon;
						return (
							<Card key={item.title} className="rounded-2xl border-(--line)">
								<CardHeader>
									<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle className="text-base">{item.title}</CardTitle>
									<CardDescription className="leading-6">
										{item.description}
									</CardDescription>
								</CardHeader>
							</Card>
						);
					})}
				</div>

				<Card className="mt-5 rounded-2xl border-blue-500/25 bg-blue-500/5">
					<CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-start">
						<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700 dark:text-blue-300">
							<ShieldCheck className="h-5 w-5" />
						</div>
						<div>
							<h3 className="font-semibold text-(--ink)">
								Security is an ongoing responsibility.
							</h3>
							<p className="mt-1 text-sm leading-6 text-(--ink-soft)">
								Technology alone cannot remove every risk. Keep configurations,
								access permissions, software updates, user practices and
								recovery arrangements under review as the business changes.
							</p>
						</div>
					</CardContent>
				</Card>
			</section>

			{/* Environments */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Industries & environments
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Security considerations for different working environments.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Every organisation has different users, systems and operating
						requirements. Security controls should be designed with those
						differences in mind.
					</p>
				</div>

				<div className="mt-8 grid gap-4 lg:grid-cols-3">
					{environments.map((environment) => {
						const Icon = environment.icon;
						return (
							<Card
								key={environment.title}
								className="rounded-2xl border-(--line)"
							>
								<CardHeader>
									<div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-(--ink)">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle>{environment.title}</CardTitle>
									<CardDescription className="leading-6">
										{environment.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										{environment.tags.map((tag) => (
											<Badge
												key={tag}
												variant="secondary"
												className="font-normal"
											>
												{tag}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						);
					})}
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
							A considered process from review to implementation.
						</h2>
					</div>
					<p className="max-w-md text-sm leading-6 text-(--ink-soft)">
						Scope, change windows, testing and handover should be agreed before
						security changes are made to business-critical systems.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{deliverySteps.map((step) => {
						const Icon = step.icon;
						return (
							<Card key={step.number} className="rounded-2xl border-(--line)">
								<CardHeader>
									<div className="flex items-center justify-between">
										<span className="text-sm font-bold tracking-widest text-blue-600">
											{step.number}
										</span>
										<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700 dark:text-blue-300">
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

			{/* Related services */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Connected IT services
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Enterprise security is part of a wider IT foundation.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Security planning often connects with networking, infrastructure,
						data protection and ongoing maintenance. Explore related services
						that may form part of your project.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{relatedServices.map((service) => {
						const Icon = service.icon;
						return (
							<Card key={service.title} className="rounded-2xl border-(--line)">
								<CardHeader>
									<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle className="text-base">{service.title}</CardTitle>
									<CardDescription className="leading-6">
										{service.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Button asChild variant="link" className="h-auto gap-2 px-0">
										<Link to={service.href as never}>
											Explore service <ArrowUpRight className="h-4 w-4" />
										</Link>
									</Button>
								</CardContent>
							</Card>
						);
					})}
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
							Enterprise security questions, answered.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft)">
							Have a security requirement that is not covered here? Contact our
							team to discuss your existing environment and project needs.
						</p>
						<Button asChild variant="outline" className="mt-6 gap-2">
							<Link to="/contact-us">
								Ask a question <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem key={faq.question} value={`item-${index + 1}`}>
								<AccordionTrigger className="text-left text-sm font-semibold">
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
				<div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-[linear-gradient(120deg,rgba(37,99,235,0.12),transparent_70%),var(--header-bg)] px-6 py-10 sm:px-10 sm:py-12">
					<div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-blue-500/15" />
					<div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
						<div className="max-w-2xl">
							<Badge
								variant="outline"
								className="mb-3 gap-2 border-blue-500/30"
							>
								<ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
								Plan your next security improvement
							</Badge>
							<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
								Let's discuss how to strengthen your IT environment.
							</h2>
							<p className="mt-3 text-sm leading-7 text-(--ink-soft) sm:text-base">
								Tell us about your network, devices and security priorities. Our
								team can discuss the requirements and help define a suitable
								next step.
							</p>
						</div>
						<div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
							<Button asChild size="lg" className="gap-2">
								<Link to="/contact-us">
									Request a Consultation <ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button asChild size="lg" variant="outline">
								<Link to="/services/core-networking/">
									Explore Core Networking
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
