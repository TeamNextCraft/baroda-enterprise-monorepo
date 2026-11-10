import { createFileRoute, Link } from "@tanstack/react-router";
import {
	Archive,
	ArrowRight,
	ArrowUpRight,
	BadgeCheck,
	Building2 as Building2Icon,
	CalendarClock,
	CheckCircle2,
	ClipboardCheck as ClipboardIcon,
	Cloud,
	CloudUpload,
	Database,
	Factory as FactoryIcon,
	FileCheck,
	FileClock,
	HardDrive,
	Laptop,
	LockKeyhole,
	Network,
	RefreshCw,
	RotateCcw,
	Server,
	ShieldCheck,
	ShieldEllipsis,
	Store as StoreIcon,
	TimerReset,
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

export const Route = createFileRoute("/services/backup-solutions/")({
	component: BackupSolutionsPage,
});

const backupServices = [
	{
		icon: ClipboardIcon,
		title: "Backup assessment & planning",
		description:
			"Identify important business information, applications and systems, then define a backup approach around business priorities and recovery needs.",
		points: [
			"Data and workload inventory",
			"Backup scope and frequency planning",
			"Retention and recovery requirement review",
		],
	},
	{
		icon: Server,
		title: "Server & application backup",
		description:
			"Plan protection for server environments and business applications, taking account of application dependencies and the data they use.",
		points: [
			"Physical and virtual server backup considerations",
			"Application and database protection planning",
			"Backup job and schedule configuration scope",
		],
	},
	{
		icon: Laptop,
		title: "Endpoint & file backup",
		description:
			"Consider protection for employee computers, shared folders and important working files across the organisation.",
		points: [
			"Desktop and laptop data requirements",
			"Shared folder and file server protection",
			"User and department data scope",
		],
	},
	{
		icon: Cloud,
		title: "Cloud & off-site backup options",
		description:
			"Review suitable off-site or cloud storage options as part of a broader backup design, based on data volume, access and cost considerations.",
		points: [
			"Local, off-site and cloud options review",
			"Storage location and access considerations",
			"Connectivity and data transfer planning",
		],
	},
	{
		icon: ShieldEllipsis,
		title: "Backup security & retention",
		description:
			"Consider how backup copies should be protected, who can administer them and how long different categories of data need to be retained.",
		points: [
			"Access control and encryption considerations",
			"Retention policy and storage lifecycle review",
			"Immutable or isolated copy options assessment",
		],
	},
	{
		icon: RotateCcw,
		title: "Recovery testing & support",
		description:
			"Plan how recovery procedures can be checked and documented so the organisation understands the steps involved when data or systems need to be restored.",
		points: [
			"File and system restore checks",
			"Recovery procedure documentation",
			"Backup monitoring and issue review options",
		],
	},
];

const backupEnvironments = [
	{
		icon: Building2Icon,
		title: "Corporate offices",
		description:
			"Consider protection for employee files, shared documents, business applications, email data and central office systems.",
		tags: ["User files", "Shared data", "Business applications"],
	},
	{
		icon: FactoryIcon,
		title: "Industrial facilities",
		description:
			"Review backup needs for administrative systems, production-support applications and site data, accounting for operational constraints.",
		tags: ["Site systems", "Operational data", "Server workloads"],
	},
	{
		icon: StoreIcon,
		title: "Retail & multi-location businesses",
		description:
			"Plan around data created across branches and locations, including centralised systems and the connectivity available at each site.",
		tags: ["Branch data", "Central systems", "Multiple locations"],
	},
];

const planningFactors = [
	{
		icon: Database,
		title: "What needs protection?",
		description:
			"Identify critical files, databases, applications, servers, endpoints and configurations. Not every workload has the same business value or recovery priority.",
	},
	{
		icon: CalendarClock,
		title: "Backup frequency & retention",
		description:
			"Set schedules and retention periods according to how quickly information changes, internal policy, available storage and any applicable obligations.",
	},
	{
		icon: TimerReset,
		title: "Recovery objectives",
		description:
			"Discuss the acceptable amount of data loss and the time needed to restore operations. Recovery objectives should be agreed for each important workload.",
	},
	{
		icon: LockKeyhole,
		title: "Security & separation",
		description:
			"Review administrative permissions, encryption, monitoring and options for keeping backup copies isolated from the systems they protect.",
	},
];

const deliverySteps = [
	{
		number: "01",
		icon: FileClock,
		title: "Review data & systems",
		description:
			"Understand the organisation's applications, servers, endpoints, data locations, current backup arrangements and the impact of data loss.",
	},
	{
		number: "02",
		icon: Workflow,
		title: "Define the backup plan",
		description:
			"Agree the protection scope, backup frequency, retention, storage approach, access controls and recovery priorities for the proposed solution.",
	},
	{
		number: "03",
		icon: CloudUpload,
		title: "Configure & validate backups",
		description:
			"Implement the agreed backup components and schedules, then review job results and resolve configuration issues within the project scope.",
	},
	{
		number: "04",
		icon: FileCheck,
		title: "Test & document recovery",
		description:
			"Carry out agreed restore checks, document the recovery steps and clarify monitoring, maintenance and ownership responsibilities.",
	},
];

const faqs = [
	{
		question: "What are backup solutions?",
		answer:
			"Backup solutions create and maintain separate copies of selected data or systems so that information can be restored after accidental deletion, hardware failure, corruption, cyber incidents or other disruptions. The right approach depends on what must be protected and how quickly it may need to be recovered.",
	},
	{
		question: "What is the difference between backup and synchronisation?",
		answer:
			"Synchronisation keeps copies of files aligned between locations or devices. It may also synchronise unwanted changes or deletions. A backup is a separately managed recovery copy with defined retention and restore options. Synchronisation can be useful, but it should not automatically be treated as a complete backup strategy.",
	},
	{
		question: "Can you back up servers, computers and business files?",
		answer:
			"These can be included in a backup assessment. The exact scope depends on the operating systems, applications, data locations, current infrastructure, available backup tools and the customer's requirements.",
	},
	{
		question: "Should we keep backups off-site or in the cloud?",
		answer:
			"An off-site or cloud copy can provide protection against incidents that affect the primary location. The suitable design depends on data sensitivity, connectivity, storage costs, recovery needs, provider capabilities and any restrictions on where data may be stored. Some organisations also require local copies for faster recovery.",
	},
	{
		question: "How often should our data be backed up?",
		answer:
			"There is no single schedule that suits every organisation. Frequency should reflect how often data changes and how much recent work the business could afford to recreate. Critical systems may need more frequent protection than less frequently updated information.",
	},
	{
		question: "What do RPO and RTO mean?",
		answer:
			"Recovery Point Objective (RPO) describes the maximum period of data changes an organisation is prepared to lose. Recovery Time Objective (RTO) describes the target time for restoring a service or system after disruption. Both should be defined according to business impact and validated against the proposed solution.",
	},
	{
		question: "Are backups enough to protect against ransomware?",
		answer:
			"Backups are an important part of recovery planning, but they are not a complete security programme. Backup copies should be protected with appropriate access controls and, where suitable, isolation or immutability. Organisations should also maintain preventive security controls, monitoring, patching and an incident response process.",
	},
	{
		question: "Do you test whether backups can actually be restored?",
		answer:
			"Restore testing should be included in the agreed scope. A successful backup job does not by itself prove that the required files or systems can be restored within the organisation's recovery objectives. Testing frequency and depth should be documented with the customer.",
	},
	{
		question: "Can you review or improve our existing backup setup?",
		answer:
			"An existing arrangement can be reviewed for coverage, schedules, retention, storage locations, access controls, job failures, reporting and restore testing. Recommendations depend on the current tools, infrastructure and business requirements.",
	},
	{
		question: "What information should we provide for a quotation?",
		answer:
			"Share the number and type of servers and computers, approximate data volume, applications in use, current backup tools, number of locations, connectivity constraints, retention expectations and any recovery requirements. An inventory or assessment can help establish a more accurate scope.",
	},
];

function BackupSolutionsPage() {
	return (
		<main className="pb-20">
			{/* Hero */}
			<section className="page-wrap pt-8 sm:pt-12">
				<div className="relative isolate overflow-hidden rounded-3xl border border-(--line) bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.16),transparent_42%),linear-gradient(135deg,var(--header-bg),var(--background))] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
					<div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-72 w-72 rounded-full border border-emerald-500/15" />
					<div className="pointer-events-none absolute -right-5 -top-9 -z-10 h-52 w-52 rounded-full border border-emerald-500/15" />

					<div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
						<div>
							<Badge
								variant="outline"
								className="mb-5 gap-2 border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-700 dark:text-emerald-300"
							>
								<ShieldCheck className="h-3.5 w-3.5" />
								Services / Backup Solutions
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								Keep your business data prepared for the unexpected.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Protect important business information with a backup approach
								planned around your systems, data and recovery priorities.
								Baroda Enterprise can help assess backup requirements, review
								suitable storage options and plan practical recovery procedures.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Discuss Your Backup Requirements{" "}
										<ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#backup-services">Explore Services</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-emerald-600" />
									Data & server protection
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-emerald-600" />
									Local & off-site options
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-emerald-600" />
									Recovery planning
								</span>
							</div>
						</div>

						<div className="relative">
							<div className="overflow-hidden rounded-2xl border border-(--line) bg-background shadow-xl">
								<img
									src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1100&q=85"
									alt="Data centre server racks representing business data backup infrastructure"
									className="h-64 w-full object-cover sm:h-80 lg:h-[390px]"
								/>
								<div className="grid gap-4 p-5 sm:grid-cols-2">
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<Database className="h-4 w-4 text-emerald-600" />
											Protected information
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Identify the business files, applications and systems that
											need a defined backup and retention approach.
										</p>
									</div>
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<RefreshCw className="h-4 w-4 text-emerald-600" />
											Recovery readiness
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Plan and validate restore procedures so recovery steps are
											understood before an incident occurs.
										</p>
									</div>
								</div>
							</div>
							<div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-(--line) bg-background p-4 shadow-lg sm:flex">
								<div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-700 dark:text-emerald-300">
									<BadgeCheck className="h-5 w-5" />
								</div>
								<div>
									<p className="text-sm font-semibold text-(--ink)">
										Plan for restoration
									</p>
									<p className="text-xs text-(--ink-soft)">
										Backup scope and recovery steps
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
						More than making a copy
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						A useful backup plan starts with knowing what your business cannot
						afford to lose.
					</h2>
				</div>
				<div className="space-y-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
					<p>
						Business data can be affected by accidental deletion, equipment
						failure, software issues, human error, cyber incidents and events
						that disrupt a workplace. Having a separate copy of important
						information can support recovery, but only when the right data is
						included and the copies can be accessed when needed.
					</p>
					<p>
						A backup project should define the systems and information in scope,
						how frequently copies are created, how long they are retained, where
						they are stored and who is responsible for monitoring them. Recovery
						procedures should also be tested and documented as part of the
						agreed service scope.
					</p>
				</div>
			</section>

			{/* Services */}
			<section className="page-wrap mt-16" id="backup-services">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Backup services
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Backup and recovery services for your IT environment.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Whether you are establishing backups for a new environment or
						reviewing an existing arrangement, discuss the data, systems and
						recovery requirements with our team. The final solution depends on
						your infrastructure, preferred platforms and agreed project scope.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{backupServices.map((service) => {
						const Icon = service.icon;
						return (
							<Card
								key={service.title}
								className="h-full rounded-2xl border-(--line)"
							>
								<CardHeader>
									<div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
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
												<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
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

			{/* Backup approach */}
			<section className="page-wrap mt-16">
				<div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							Backup approach
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Choose storage and protection options that fit your environment.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							Backup design is not one-size-fits-all. Organisations may combine
							local copies for convenient restores with off-site copies for
							additional resilience. The right arrangement depends on data
							volume, network capacity, security requirements and recovery
							needs.
						</p>
						<Button asChild variant="outline" className="mt-6 gap-2">
							<Link to="/contact-us">
								Review your current setup <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						<Card className="rounded-2xl border-(--line)">
							<CardHeader>
								<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
									<HardDrive className="h-5 w-5" />
								</div>
								<CardTitle className="text-base">Local backup</CardTitle>
								<CardDescription className="leading-6">
									Store backup copies on suitable on-site storage for restore
									scenarios where local access and available capacity are
									useful.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex flex-wrap gap-2">
									{["Local storage", "Fast access", "Site dependency"].map(
										(tag) => (
											<Badge
												key={tag}
												variant="secondary"
												className="font-normal"
											>
												{tag}
											</Badge>
										),
									)}
								</div>
							</CardContent>
						</Card>

						<Card className="rounded-2xl border-(--line)">
							<CardHeader>
								<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
									<CloudUpload className="h-5 w-5" />
								</div>
								<CardTitle className="text-base">
									Off-site & cloud backup
								</CardTitle>
								<CardDescription className="leading-6">
									Consider a separate storage location to help protect backup
									copies if an incident affects the primary business site.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex flex-wrap gap-2">
									{[
										"Separate location",
										"Cloud options",
										"Connectivity needs",
									].map((tag) => (
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

						<Card className="rounded-2xl border-(--line)">
							<CardHeader>
								<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
									<Archive className="h-5 w-5" />
								</div>
								<CardTitle className="text-base">Retention & archive</CardTitle>
								<CardDescription className="leading-6">
									Define how long different backup copies should be kept and
									when older data can be moved or removed under an approved
									policy.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex flex-wrap gap-2">
									{[
										"Retention policy",
										"Storage lifecycle",
										"Data categories",
									].map((tag) => (
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

						<Card className="rounded-2xl border-(--line)">
							<CardHeader>
								<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
									<ShieldEllipsis className="h-5 w-5" />
								</div>
								<CardTitle className="text-base">
									Isolated backup copies
								</CardTitle>
								<CardDescription className="leading-6">
									Assess restricted access, offline or immutable storage options
									that can make backup copies harder to alter or delete.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex flex-wrap gap-2">
									{[
										"Restricted access",
										"Isolation options",
										"Security controls",
									].map((tag) => (
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

						<Card className="rounded-2xl border-dashed border-emerald-500/40 bg-emerald-500/5 p-5 sm:col-span-2">
							<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
								<div>
									<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
										<Network className="h-4 w-4 text-emerald-600" />A
										combination may be appropriate
									</div>
									<p className="mt-2 max-w-2xl text-sm leading-6 text-(--ink-soft)">
										A layered design can use more than one backup location or
										protection method. The proposed combination should be
										selected after reviewing recovery priorities, budget and
										technical constraints.
									</p>
								</div>
								<Button
									asChild
									variant="link"
									className="h-auto shrink-0 gap-2 px-0"
								>
									<Link to="/contact-us">
										Discuss the options <ArrowUpRight className="h-4 w-4" />
									</Link>
								</Button>
							</div>
						</Card>
					</div>
				</div>
			</section>

			{/* Planning considerations */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						What goes into the plan
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Make backup decisions around business recovery needs.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Backup frequency, retention and recovery targets should be based on
						the impact of losing access to particular data or systems.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{planningFactors.map((item) => {
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

				<Card className="mt-5 rounded-2xl border-emerald-500/25 bg-emerald-500/5">
					<CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-start">
						<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
							<ShieldCheck className="h-5 w-5" />
						</div>
						<div>
							<h3 className="font-semibold text-(--ink)">
								Backups should be recoverable, not just report as completed.
							</h3>
							<p className="mt-1 text-sm leading-6 text-(--ink-soft)">
								A completed backup job does not guarantee that every required
								file or application can be restored. Include restore checks,
								periodic review and clear ownership in the backup operating
								plan.
							</p>
						</div>
					</CardContent>
				</Card>
			</section>

			{/* Environments */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Business environments
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Backup planning for different business environments.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Data locations, applications and operational priorities vary by
						organisation. The backup scope should reflect how each business
						actually creates, stores and uses its information.
					</p>
				</div>

				<div className="mt-8 grid gap-4 md:grid-cols-3">
					{backupEnvironments.map((environment) => {
						const Icon = environment.icon;
						return (
							<Card
								key={environment.title}
								className="rounded-2xl border-(--line)"
							>
								<CardHeader>
									<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle className="text-base">
										{environment.title}
									</CardTitle>
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

			{/* Process */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Our approach
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						From backup assessment to recovery validation.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						A structured process helps make the protection scope, technical
						dependencies and ongoing responsibilities clear before the solution
						is put into operation.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{deliverySteps.map((step) => {
						const Icon = step.icon;
						return (
							<Card key={step.number} className="rounded-2xl border-(--line)">
								<CardHeader>
									<div className="flex items-center justify-between">
										<span className="text-sm font-bold tracking-widest text-emerald-700 dark:text-emerald-300">
											{step.number}
										</span>
										<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
											<Icon className="h-5 w-5" />
										</div>
									</div>
									<CardTitle className="pt-3 text-base">{step.title}</CardTitle>
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
				<div className="grid gap-5 rounded-3xl border border-(--line) bg-muted/30 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
					<div>
						<Badge variant="secondary" className="mb-3">
							Related service
						</Badge>
						<h2 className="text-2xl font-bold tracking-tight text-(--ink) sm:text-3xl">
							Include backup in a broader infrastructure plan.
						</h2>
						<p className="mt-3 max-w-2xl text-sm leading-7 text-(--ink-soft)">
							Backup requirements often depend on server, storage, network and
							support arrangements. Explore IT Infrastructure for the wider
							environment or discuss how ongoing maintenance responsibilities
							could be defined.
						</p>
					</div>
					<div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
						<Button asChild variant="outline" className="gap-2">
							<Link to="/services/it-infrastructure">
								IT Infrastructure <ArrowUpRight className="h-4 w-4" />
							</Link>
						</Button>
						<Button asChild variant="outline" className="gap-2">
							<Link to="/services/amc">
								Annual Maintenance (AMC) <ArrowUpRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* FAQs */}
			<section className="page-wrap mt-16">
				<div className="mx-auto max-w-3xl">
					<div className="text-center">
						<Badge variant="outline" className="mb-3">
							Frequently asked questions
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Backup solutions FAQs.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							Find answers to common questions about business data protection,
							backup planning and recovery readiness.
						</p>
					</div>

					<Accordion type="single" collapsible className="mt-8 w-full">
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

			{/* CTA */}
			<section className="page-wrap mt-16">
				<div className="relative isolate overflow-hidden rounded-3xl bg-[linear-gradient(120deg,rgba(5,150,105,0.96),rgba(6,95,70,0.98))] px-6 py-10 text-white sm:px-10 sm:py-14">
					<div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-72 w-72 rounded-full border border-white/15" />
					<div className="pointer-events-none absolute -bottom-32 right-28 -z-10 h-72 w-72 rounded-full border border-white/10" />

					<div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
						<div className="max-w-2xl">
							<Badge className="mb-4 border-white/20 bg-white/10 text-white hover:bg-white/10">
								Start a conversation
							</Badge>
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
								Make your data recovery plan part of the business plan.
							</h2>
							<p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
								Tell us about your systems, data and current backup
								arrangements. We can discuss the requirements and the options
								that may fit your environment.
							</p>
						</div>

						<div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
							<Button
								asChild
								size="lg"
								className="gap-2 bg-white text-emerald-800 hover:bg-white/90"
							>
								<Link to="/contact-us">
									Request a Consultation <ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
							>
								<Link to="/services/it-infrastructure">
									Explore IT Infrastructure
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
