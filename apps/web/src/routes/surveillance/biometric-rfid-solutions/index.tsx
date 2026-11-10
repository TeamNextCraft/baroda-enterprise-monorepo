import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	BadgeCheck,
	Building2,
	CalendarClock,
	Camera,
	CheckCircle2,
	ClipboardCheck,
	CreditCard,
	Factory,
	FileCheck2,
	Fingerprint,
	Home,
	LockKeyhole,
	MapPinned,
	Monitor,
	Network,
	ScanFace,
	Settings2,
	ShieldCheck,
	Smartphone,
	UserCheck,
	Users,
	WalletCards,
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

export const Route = createFileRoute("/surveillance/biometric-rfid-solutions/")(
	{
		component: BiometricRfidSolutionsPage,
	},
);

const solutionServices = [
	{
		icon: Fingerprint,
		title: "Fingerprint recognition",
		description:
			"Use fingerprint readers at selected access points to verify enrolled users, subject to the reader's capabilities and the site's operating conditions.",
		points: [
			"Reader selection and placement",
			"User enrolment and access-level setup",
			"Testing for expected site conditions",
		],
	},
	{
		icon: ScanFace,
		title: "Facial recognition terminals",
		description:
			"Consider face-based verification for suitable locations where the selected terminal supports the required function and its use is appropriate.",
		points: [
			"Terminal and environment assessment",
			"Enrolment and permission configuration",
			"Privacy and data-handling considerations",
		],
	},
	{
		icon: CreditCard,
		title: "RFID cards & key fobs",
		description:
			"Provide staff, residents or authorised visitors with assigned cards or fobs for convenient entry at compatible RFID readers.",
		points: [
			"Reader and card-format compatibility checks",
			"Credential assignment and replacement",
			"Lost-card suspension and access revocation",
		],
	},
	{
		icon: ShieldCheck,
		title: "Multi-factor access options",
		description:
			"For selected doors, combine supported credential types—such as a card and PIN or a card and biometric check—where the platform allows it.",
		points: [
			"Credential combinations by access zone",
			"Higher-assurance access for selected areas",
			"Usability and fallback planning",
		],
	},
	{
		icon: CalendarClock,
		title: "Attendance & workforce integration",
		description:
			"Where required and supported, connect compatible biometric or RFID terminals with attendance workflows and workforce administration tools.",
		points: [
			"Device and software compatibility review",
			"Shift and attendance workflow discussion",
			"Data access and retention considerations",
		],
	},
	{
		icon: Wrench,
		title: "Configuration & ongoing support",
		description:
			"Set up users, credentials, reader settings and access permissions, with support options based on the agreed installation and maintenance scope.",
		points: [
			"Device configuration and functional checks",
			"Credential and access-rule troubleshooting",
			"Maintenance options for installed equipment",
		],
	},
];

const credentialTypes = [
	{
		icon: Fingerprint,
		title: "Fingerprint credentials",
		description:
			"A biometric option that compares a presented fingerprint with an enrolled template. Suitability depends on reader performance, user needs, hygiene, site conditions and privacy requirements.",
		tags: ["Biometric", "Enrolment required", "Reader-dependent"],
	},
	{
		icon: ScanFace,
		title: "Facial credentials",
		description:
			"A contactless biometric option on compatible terminals. Lighting, camera placement, user experience and the platform's matching method should be evaluated before selection.",
		tags: ["Biometric", "Contactless option", "Privacy review"],
	},
	{
		icon: WalletCards,
		title: "RFID cards & fobs",
		description:
			"A familiar credential for employees, residents and authorised visitors. The card or fob technology must match the reader and controller configuration.",
		tags: ["RFID / proximity", "Easy to assign", "Replaceable credential"],
	},
	{
		icon: Smartphone,
		title: "PIN & mobile credentials",
		description:
			"Some platforms support keypad codes or smartphone-based credentials. Availability depends on the selected reader, software, connectivity and licensing.",
		tags: ["PIN / keypad", "Mobile option", "System-dependent"],
	},
];

const systemComponents = [
	{
		icon: Fingerprint,
		title: "Biometric readers",
		description:
			"Fingerprint or face terminals capture the required input and perform or support identity matching according to the device's design and configuration.",
	},
	{
		icon: CreditCard,
		title: "RFID readers & credentials",
		description:
			"RFID readers communicate with compatible cards or fobs. Credential type, frequency, format and security features should be checked as part of selection.",
	},
	{
		icon: Network,
		title: "Controllers & connectivity",
		description:
			"Controllers apply configured permissions and coordinate connected readers, door hardware and management software over the supported connection method.",
	},
	{
		icon: Monitor,
		title: "Management software",
		description:
			"Compatible software can support user enrolment, credential administration, access schedules, event records and selected attendance workflows.",
	},
];

const environments = [
	{
		icon: Building2,
		title: "Corporate offices",
		description:
			"Manage employee access to office entrances, work areas, server rooms and other restricted spaces, with credential permissions aligned to job roles.",
		tags: ["Office entrances", "Staff access", "Restricted rooms"],
	},
	{
		icon: Factory,
		title: "Industrial facilities",
		description:
			"Organise access for employees and contractors across administration blocks, stores and controlled plant areas while considering shift and site-safety procedures.",
		tags: ["Factories", "Warehouses", "Shift operations"],
	},
	{
		icon: Home,
		title: "Residential & commercial properties",
		description:
			"Provide managed entry for residents, staff and authorised visitors at apartments, housing societies, institutions and other commercial buildings.",
		tags: ["Housing societies", "Institutions", "Commercial buildings"],
	},
];

const planningFactors = [
	{
		icon: Users,
		title: "Users & enrolment",
		description:
			"Estimate the number of people who need credentials, define who can enrol or approve users, and decide how credentials are updated or revoked when someone leaves.",
	},
	{
		icon: Fingerprint,
		title: "Biometric suitability & privacy",
		description:
			"Assess whether biometric use is necessary and appropriate. Confirm consent and notice processes, template storage, access restrictions, retention and alternatives for users who cannot or do not wish to enrol.",
	},
	{
		icon: CreditCard,
		title: "RFID technology & compatibility",
		description:
			"Check the reader and credential technology, card format, security features and compatibility with existing controllers before procuring cards or fobs in quantity.",
	},
	{
		icon: ShieldCheck,
		title: "Access policy & safe operation",
		description:
			"Define access groups and schedules, and ensure that door hardware and credential rules do not obstruct required emergency exits or safe egress procedures.",
	},
	{
		icon: Network,
		title: "Integration & connectivity",
		description:
			"Review power, network connectivity and compatibility with access-control panels, attendance software, CCTV or other systems that may need to exchange information.",
	},
	{
		icon: FileCheck2,
		title: "Records & administration",
		description:
			"Decide which access and attendance records are needed, who can view or export them, how long they are retained and how administrative actions are reviewed.",
	},
];

const deliverySteps = [
	{
		number: "01",
		icon: ClipboardCheck,
		title: "Understand the requirement",
		description:
			"Discuss the property, number of users, entry points, attendance needs, preferred credential types, existing equipment and privacy considerations.",
	},
	{
		number: "02",
		icon: MapPinned,
		title: "Select the right approach",
		description:
			"Compare biometric, RFID and supported combined options. Confirm device compatibility, access permissions, connectivity, door hardware and management workflows.",
	},
	{
		number: "03",
		icon: Settings2,
		title: "Install & configure",
		description:
			"Install the agreed readers and associated equipment, configure the platform, enrol authorised users and set up credentials, access groups and supported integrations.",
	},
	{
		number: "04",
		icon: BadgeCheck,
		title: "Test & hand over",
		description:
			"Test successful and rejected credentials, permissions, event records and agreed integrations. Explain enrolment, credential replacement and day-to-day administration.",
	},
];

const relatedServices = [
	{
		icon: LockKeyhole,
		title: "Access Control Systems",
		description:
			"Explore the wider access-control setup, including controlled doors, permissions, controllers and electronic locking hardware.",
		href: "/surveillance/access-control-systems/",
	},
	{
		icon: Camera,
		title: "CCTV Solutions",
		description:
			"Consider surveillance coverage for entrances and other locations where compatible camera systems may support site operations.",
		href: "/surveillance/cctv-solutions/",
	},
	{
		icon: Network,
		title: "Core Networking",
		description:
			"Plan connectivity for IP-based readers, terminals, controllers and central management systems where required.",
		href: "/services/core-networking/",
	},
	{
		icon: Wrench,
		title: "Annual Maintenance Contract",
		description:
			"Discuss ongoing maintenance arrangements for installed access and surveillance equipment within an agreed service scope.",
		href: "/services/amc/",
	},
] as const;

const faqs = [
	{
		question: "What is the difference between biometric and RFID access?",
		answer:
			"Biometric systems verify a person using a characteristic such as a fingerprint or face. RFID systems verify a compatible card or fob presented to a reader. The right option depends on security needs, user experience, operating conditions, administration and privacy considerations.",
	},
	{
		question: "Can biometric and RFID readers be used together?",
		answer:
			"Some access-control platforms support multiple credential types or combined verification, such as a card plus a fingerprint or PIN. Compatibility depends on the readers, controllers, software and required configuration.",
	},
	{
		question: "Can RFID cards be deactivated if they are lost?",
		answer:
			"Many managed systems allow an administrator to suspend or remove a credential so it can no longer grant access. The exact process depends on the selected platform and how the system is configured.",
	},
	{
		question: "Can these systems also record employee attendance?",
		answer:
			"Some biometric and RFID terminals support attendance workflows or integration with compatible software. Attendance reporting, shift rules, exports and payroll connectivity should be confirmed for the selected device and application.",
	},
	{
		question: "Where is biometric information stored?",
		answer:
			"Storage varies by product and system architecture. Information may be stored on a reader, controller or central platform, depending on the implementation. Before deployment, confirm what data is collected, where it is stored, who can access it, how it is protected and when it is deleted.",
	},
	{
		question: "Are biometric readers suitable for every environment?",
		answer:
			"Not always. Dust, moisture, lighting, temperature, user conditions and operational demands can affect device suitability. A site assessment should compare suitable reader options and provide an alternative credential method where appropriate.",
	},
	{
		question: "Can an existing access-control system be upgraded?",
		answer:
			"An upgrade may be possible if the existing controllers, software, wiring and door hardware are compatible. The current installation should be assessed before selecting replacement or additional readers and credentials.",
	},
	{
		question: "Can these systems integrate with CCTV?",
		answer:
			"Some platforms support integration between access events and compatible CCTV systems. Confirm the supported products, licences and required workflow during planning; integration is not available across every combination of devices.",
	},
	{
		question: "What information is needed for a quotation?",
		answer:
			"Share the site location, property type, number of users and doors, preferred credential method, attendance requirements, existing equipment and any integrations needed. A site visit may be required to confirm device placement and installation scope.",
	},
];

function BiometricRfidSolutionsPage() {
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
								<Fingerprint className="h-3.5 w-3.5" />
								Surveillance / Biometric & RFID Solutions
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								Biometric and RFID solutions for smarter, controlled access.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Manage entry and user credentials with fingerprint readers,
								facial-recognition terminals and RFID cards or key fobs. Baroda
								Enterprise can help assess your site and plan a suitable setup
								for offices, residential properties and industrial facilities.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Discuss Your Requirements <ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#biometric-rfid-services">Explore Solutions</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Biometric & RFID options
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Credential management
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Access & attendance workflows
								</span>
							</div>
						</div>

						<div className="relative">
							<div className="overflow-hidden rounded-2xl border border-(--line) bg-background shadow-xl">
								<img
									src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1100&q=85"
									alt="Access verification using a secure digital credential"
									className="h-64 w-full object-cover sm:h-80 lg:h-[390px]"
								/>
								<div className="grid gap-4 p-5 sm:grid-cols-2">
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<Fingerprint className="h-4 w-4 text-red-600" />
											Identity-based options
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Consider fingerprint or face readers where biometric use
											is appropriate for the site and its users.
										</p>
									</div>
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<CreditCard className="h-4 w-4 text-red-600" />
											Flexible credentials
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Assign compatible RFID cards or fobs and manage them as
											users and access requirements change.
										</p>
									</div>
								</div>
							</div>
							<div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-(--line) bg-background p-4 shadow-lg sm:flex">
								<div className="rounded-lg bg-red-500/10 p-2 text-red-700 dark:text-red-300">
									<UserCheck className="h-5 w-5" />
								</div>
								<div>
									<p className="text-sm font-semibold text-(--ink)">
										Credentials for your workflow
									</p>
									<p className="text-xs text-(--ink-soft)">
										Biometric, RFID or supported combinations
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
						Select the right credential approach
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Make access convenient to use and straightforward to administer.
					</h2>
				</div>
				<div className="space-y-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
					<p>
						Biometric and RFID technologies offer different ways to identify
						users at an entry point. Fingerprint and face readers use biometric
						information, while RFID systems use compatible cards or key fobs.
						Some platforms can support more than one method.
					</p>
					<p>
						The best choice depends on the number of users, access points,
						operating environment, attendance requirements, administration
						process and privacy considerations. Baroda Enterprise can discuss
						these factors and help define a suitable equipment and installation
						scope.
					</p>
				</div>
			</section>

			{/* Services */}
			<section className="page-wrap mt-16" id="biometric-rfid-services">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Biometric & RFID services
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Credential solutions for people, doors and daily operations.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Plan the readers, credentials and supporting software as one
						coordinated solution. The exact scope depends on device
						compatibility and the requirements confirmed during assessment.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{solutionServices.map((service) => {
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

			{/* Credential methods */}
			<section className="page-wrap mt-16">
				<div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							Credential methods
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Compare the ways users can verify their identity.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							Credential choice should balance convenience, access policy,
							operating conditions and the needs of the people using the system.
							A non-biometric alternative may be appropriate for some users or
							locations.
						</p>
						<Button asChild variant="outline" className="mt-6 gap-2">
							<Link to="/contact-us">
								Compare credential options <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						{credentialTypes.map((method) => {
							const Icon = method.icon;
							return (
								<Card
									key={method.title}
									className="rounded-2xl border-(--line)"
								>
									<CardHeader>
										<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-(--ink)">
											<Icon className="h-5 w-5" />
										</div>
										<CardTitle className="text-base">{method.title}</CardTitle>
										<CardDescription className="leading-6">
											{method.description}
										</CardDescription>
									</CardHeader>
									<CardContent className="flex flex-wrap gap-2">
										{method.tags.map((tag) => (
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

			{/* Components */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						System components
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						The devices and tools behind a credential system.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Readers, controllers, credentials and management software need to be
						compatible and configured to work together.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{systemComponents.map((component) => {
						const Icon = component.icon;
						return (
							<Card
								key={component.title}
								className="rounded-2xl border-(--line)"
							>
								<CardHeader>
									<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-700 dark:text-red-300">
										<Icon className="h-5 w-5" />
									</div>
									<CardTitle className="text-base">{component.title}</CardTitle>
									<CardDescription className="leading-6">
										{component.description}
									</CardDescription>
								</CardHeader>
							</Card>
						);
					})}
				</div>
			</section>

			{/* Environments */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Where these solutions can be used
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Credential management for different work environments.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						The number of users, entry points and operating procedures will
						shape the final design for each property.
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
								<CardContent className="flex flex-wrap gap-2">
									{environment.tags.map((tag) => (
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

			{/* Planning factors */}
			<section className="page-wrap mt-16">
				<div className="grid gap-8 rounded-3xl border border-(--line) bg-muted/30 p-6 sm:p-9 lg:grid-cols-[0.75fr_1.25fr] lg:p-12">
					<div>
						<Badge variant="outline" className="mb-3">
							Before selecting a system
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Plan for more than just the reader.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							A reliable implementation needs clear user administration,
							compatible equipment, safe door operation and responsible handling
							of personal information.
						</p>
						<Button asChild className="mt-6 gap-2">
							<Link to="/contact-us">
								Plan your installation <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						{planningFactors.map((factor) => {
							const Icon = factor.icon;
							return (
								<div
									key={factor.title}
									className="rounded-2xl border border-(--line) bg-background p-5"
								>
									<div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10 text-red-700 dark:text-red-300">
										<Icon className="h-4 w-4" />
									</div>
									<h3 className="font-semibold text-(--ink)">{factor.title}</h3>
									<p className="mt-2 text-sm leading-6 text-(--ink-soft)">
										{factor.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Delivery process */}
			<section className="page-wrap mt-16">
				<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<Badge variant="outline" className="mb-3">
							Our process
						</Badge>
						<h2 className="max-w-2xl text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							From requirement assessment to system handover.
						</h2>
					</div>
					<p className="max-w-md text-sm leading-6 text-(--ink-soft)">
						A structured process helps confirm the equipment, credential
						workflows and responsibilities before the system goes live.
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
										<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-700 dark:text-red-300">
											<Icon className="h-5 w-5" />
										</div>
									</div>
									<CardTitle className="mt-3 text-base">{step.title}</CardTitle>
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
						Related solutions
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Build a more connected site-security setup.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Biometric and RFID equipment may form part of a wider access,
						surveillance and network environment. Explore related services when
						planning the full requirement.
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
									<Button asChild variant="link" className="h-auto p-0">
										<Link to={service.href}>
											Learn more <ArrowRight className="ml-1 h-4 w-4" />
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
				<div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							Frequently asked questions
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Biometric & RFID questions, answered.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft)">
							Need help choosing a credential method or planning an upgrade?
							Share your site requirements with our team.
						</p>
						<Button asChild className="mt-6 gap-2">
							<Link to="/contact-us">
								Ask a question <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem key={faq.question} value={`item-${index + 1}`}>
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
				<div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(120deg,rgba(153,27,27,0.96),rgba(185,28,28,0.88))] px-6 py-10 text-white sm:px-10 sm:py-14">
					<div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/15" />
					<div className="pointer-events-none absolute -right-4 -top-12 h-48 w-48 rounded-full border border-white/15" />
					<div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
						<div className="max-w-2xl">
							<Badge className="mb-4 border-white/20 bg-white/10 text-white hover:bg-white/10">
								Let's plan your system
							</Badge>
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
								Looking for biometric or RFID solutions for your property?
							</h2>
							<p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
								Tell us about your location, users, entry points and preferred
								credential method. We can discuss a suitable scope for your
								access and attendance requirements.
							</p>
						</div>
						<div className="flex shrink-0 flex-col gap-3 sm:flex-row">
							<Button asChild size="lg" variant="secondary" className="gap-2">
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
								<Link to="/surveillance/access-control-systems/">
									Access Control Systems
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
