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
	DoorClosed,
	Factory,
	Fingerprint,
	Home,
	KeyRound,
	LockKeyhole,
	MapPinned,
	Monitor,
	Network,
	ScanFace,
	Settings2,
	ShieldCheck,
	Smartphone,
	Users,
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

export const Route = createFileRoute("/surveillance/access-control-systems/")({
	component: AccessControlSystemsPage,
});

const accessControlServices = [
	{
		icon: DoorClosed,
		title: "Door access control",
		description:
			"Control entry to selected doors and restricted areas using an access method and permission structure suited to the site.",
		points: [
			"Single-door and multi-door arrangements",
			"Entry permissions by person or role",
			"Access schedules where supported",
		],
	},
	{
		icon: CreditCard,
		title: "Card & RFID access",
		description:
			"Use compatible proximity cards, key fobs or credential cards to provide convenient entry for authorised staff and residents.",
		points: [
			"Credential enrolment and assignment",
			"Lost-card deactivation procedures",
			"Reader and credential compatibility checks",
		],
	},
	{
		icon: Fingerprint,
		title: "Biometric access systems",
		description:
			"Where appropriate, biometric readers can verify a person's identity using supported fingerprint or facial-recognition methods.",
		points: [
			"Fingerprint and face-reader options",
			"Enrolment and permission configuration",
			"Privacy, consent and data-handling review",
		],
	},
	{
		icon: KeyRound,
		title: "PIN & keypad entry",
		description:
			"Configure keypad-based access for locations where a PIN is an appropriate credential or an additional verification step.",
		points: [
			"Individual or shared-code options, as appropriate",
			"Code assignment and change procedures",
			"Combination with other supported credentials",
		],
	},
	{
		icon: Users,
		title: "Visitor & staff access management",
		description:
			"Structure access for employees, contractors, residents and visitors, with permissions that reflect their role and period of access.",
		points: [
			"Temporary and time-bound access options",
			"Staff and visitor credential workflows",
			"Access review and revocation processes",
		],
	},
	{
		icon: Wrench,
		title: "System maintenance & support",
		description:
			"Review the operation of readers, controllers, locks and management software, and investigate faults affecting authorised entry.",
		points: [
			"Reader, lock and controller checks",
			"Credential and access-rule troubleshooting",
			"Maintenance options based on agreed scope",
		],
	},
];

const credentialMethods = [
	{
		icon: CreditCard,
		title: "Access cards & key fobs",
		description:
			"A practical choice for many workplaces and residential properties. Cards or fobs can be assigned to individuals and deactivated when no longer required.",
		tags: ["RFID / proximity", "Staff credentials", "Resident access"],
	},
	{
		icon: Fingerprint,
		title: "Fingerprint recognition",
		description:
			"Fingerprint readers can provide identity-based access at selected doors. Suitability depends on the environment, user needs and data-protection considerations.",
		tags: ["Biometric", "Restricted areas", "Enrolment required"],
	},
	{
		icon: ScanFace,
		title: "Facial recognition",
		description:
			"Face-based readers may be considered for sites where the selected system supports the feature and its use is appropriate under applicable requirements.",
		tags: ["Biometric", "Contactless option", "Privacy review"],
	},
	{
		icon: Smartphone,
		title: "Mobile credentials & PINs",
		description:
			"Some systems support smartphone credentials or keypad codes. Availability depends on the reader, controller, software and configured access policy.",
		tags: ["Mobile access", "Keypad", "System-dependent"],
	},
];

const systemComponents = [
	{
		icon: CreditCard,
		title: "Readers & credentials",
		description:
			"Readers identify the presented card, fob, PIN or supported biometric credential. The credential format must be compatible with the selected system.",
	},
	{
		icon: Network,
		title: "Access controllers",
		description:
			"Controllers evaluate access requests against configured permissions and coordinate the connected door hardware and system events.",
	},
	{
		icon: LockKeyhole,
		title: "Electronic door hardware",
		description:
			"Electric strikes, magnetic locks and compatible door hardware secure the opening. Selection must account for door type and safe egress requirements.",
	},
	{
		icon: Monitor,
		title: "Management software",
		description:
			"Where included, management software supports credential administration, access schedules, permission changes and event records.",
	},
];

const environments = [
	{
		icon: Home,
		title: "Residential buildings",
		description:
			"Manage entry to building entrances, amenity areas, parking access points and selected restricted spaces in apartments and housing societies.",
		tags: ["Apartments", "Housing societies", "Residential towers"],
	},
	{
		icon: Factory,
		title: "Industrial facilities",
		description:
			"Structure access to offices, stores, plant areas, server rooms and other controlled zones while considering shift patterns and site safety procedures.",
		tags: ["Factories", "Warehouses", "Production sites"],
	},
	{
		icon: Building2,
		title: "Commercial properties",
		description:
			"Manage staff, contractor and visitor access across offices, retail premises, clinics, hotels and other commercial environments.",
		tags: ["Offices", "Retail", "Commercial buildings"],
	},
];

const planningFactors = [
	{
		icon: MapPinned,
		title: "Doors & access zones",
		description:
			"List the entrances and internal doors that require control. Classify public, staff-only and restricted areas, and identify the people who need access to each zone.",
	},
	{
		icon: Users,
		title: "People, roles & credentials",
		description:
			"Define how employees, residents, contractors and visitors receive credentials, who approves access and how credentials are changed or revoked when circumstances change.",
	},
	{
		icon: ShieldCheck,
		title: "Safe exit & emergency operation",
		description:
			"Door hardware and access rules must not obstruct required escape routes. Emergency release, fire-alarm interfaces and fail-safe or fail-secure behaviour need to be assessed for each opening.",
	},
	{
		icon: Network,
		title: "Connectivity & integration",
		description:
			"Consider controller connectivity, power backup, network segmentation and any required integration with CCTV, visitor management, attendance or building systems.",
	},
	{
		icon: LockKeyhole,
		title: "Privacy & information security",
		description:
			"Limit administrative privileges, protect event records and consider consent, retention and applicable privacy requirements when using biometric or personal information.",
	},
	{
		icon: CalendarClock,
		title: "Schedules & audit records",
		description:
			"Decide whether access should vary by day, shift or time window, and identify what event history is needed for operational review and accountability.",
	},
];

const deliverySteps = [
	{
		number: "01",
		icon: ClipboardCheck,
		title: "Assess the site",
		description:
			"Discuss the property, door types, user groups, restricted areas, existing locks, power and network availability, emergency procedures and desired integrations.",
	},
	{
		number: "02",
		icon: MapPinned,
		title: "Design the access plan",
		description:
			"Define controlled doors, credential methods, permission groups, door hardware, controller locations and the way the system should operate during normal and emergency conditions.",
	},
	{
		number: "03",
		icon: Settings2,
		title: "Install & configure",
		description:
			"Install the agreed readers, controllers and door hardware, then configure users, credentials, access levels, schedules and supported integrations.",
	},
	{
		number: "04",
		icon: BadgeCheck,
		title: "Test & hand over",
		description:
			"Verify authorised and denied entry, door release, emergency operation and agreed event records. Explain credential administration and hand over relevant system information.",
	},
];

const relatedServices = [
	{
		icon: Camera,
		title: "CCTV Solutions",
		description:
			"Consider coordinated surveillance coverage for entrances, reception areas and other locations covered by the access-control plan.",
		href: "/surveillance/cctv-solutions/",
	},
	{
		icon: Network,
		title: "Core Networking",
		description:
			"Plan network connectivity for IP-based readers, controllers and central management systems where required.",
		href: "/services/core-networking/",
	},
	{
		icon: ShieldCheck,
		title: "Enterprise Security",
		description:
			"Review network access, administrative accounts and security considerations for connected access-control equipment.",
		href: "/services/enterprise-security/",
	},
	{
		icon: Wrench,
		title: "Annual Maintenance Contract",
		description:
			"Discuss ongoing maintenance arrangements for access-control equipment and other technology assets included in the agreed scope.",
		href: "/services/amc/",
	},
] as const;

const faqs = [
	{
		question: "What is an access control system?",
		answer:
			"An access control system manages who can enter selected doors or areas and under what conditions. Depending on the design, it can use cards, key fobs, PINs, biometric readers or supported mobile credentials, along with controllers and electronic door hardware.",
	},
	{
		question: "Can access control be installed in an existing building?",
		answer:
			"Often, yes. The existing doors, frames, locks, power, cabling and network should be assessed first. Some openings may need hardware changes or additional wiring before an access-control solution can be installed safely and reliably.",
	},
	{
		question: "What is the difference between card-based and biometric access?",
		answer:
			"Card-based systems authenticate a credential such as a proximity card or fob. Biometric systems use a physical or behavioural characteristic, such as a fingerprint or face, subject to the reader's capability. The choice should consider convenience, security requirements, privacy, operating conditions and user acceptance.",
	},
	{
		question: "Can different employees have different access permissions?",
		answer:
			"Yes, where the selected system supports permission groups. Access can commonly be organised by role, department, door or schedule, allowing administrators to provide only the access required for each person's responsibilities.",
	},
	{
		question: "Can the system keep a record of entries?",
		answer:
			"Many access-control platforms can record events such as granted or denied access, credential use and selected door events. Available records, storage and reporting depend on the controller and management software. Access to these records should be restricted appropriately.",
	},
	{
		question: "Can access control work with CCTV?",
		answer:
			"Some platforms support integration between access events and compatible CCTV systems. Integration may help operators review relevant footage alongside a door event, but compatibility, licensing and the required workflow should be confirmed during planning.",
	},
	{
		question: "What happens during a power or network failure?",
		answer:
			"The behaviour depends on the lock type, controller, power backup and system configuration. Each door should be assessed for its required emergency egress behaviour and applicable fire and life-safety requirements. Backup power and offline operation should be specified where needed.",
	},
	{
		question: "Are biometric systems suitable for every workplace?",
		answer:
			"Not necessarily. Suitability depends on the environment, user needs, operational requirements and applicable privacy and data-protection rules. A card, PIN or alternative credential may be more appropriate for some locations.",
	},
	{
		question: "What information is needed for an access-control quotation?",
		answer:
			"Share the property type and location, number of doors, door types, approximate number of users, preferred credential method, existing CCTV or network equipment, operating schedules and any emergency or integration requirements. A site assessment may be needed to finalise the design.",
	},
];

function AccessControlSystemsPage() {
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
								<LockKeyhole className="h-3.5 w-3.5" />
								Surveillance / Access Control Systems
							</Badge>

							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
								Access control systems designed around your people, doors and
								security needs.
							</h1>
							<p className="mt-6 max-w-xl text-base leading-8 text-(--ink-soft) sm:text-lg">
								Manage entry to important areas with a system planned around
								your property, user groups and operating procedures. Baroda
								Enterprise can help assess access points and consider suitable
								card, PIN, biometric and connected access-control options for
								residential, commercial and industrial environments.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg" className="gap-2">
									<Link to="/contact-us">
										Discuss Your Access Requirements{" "}
										<ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<a href="#access-control-services">Explore Solutions</a>
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-(--ink-soft)">
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Controlled entry points
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Multiple credential options
								</span>
								<span className="inline-flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-red-600" />
									Residential & industrial sites
								</span>
							</div>
						</div>

						<div className="relative">
							<div className="overflow-hidden rounded-2xl border border-(--line) bg-background shadow-xl">
								<img
									src="https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1100&q=85"
									alt="Electronic access control lock installed beside a door"
									className="h-64 w-full object-cover sm:h-80 lg:h-[390px]"
								/>
								<div className="grid gap-4 p-5 sm:grid-cols-2">
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<Users className="h-4 w-4 text-red-600" />
											Clear permissions
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Organise access by person, role, door and schedule where
											the selected platform supports it.
										</p>
									</div>
									<div className="rounded-xl bg-muted/60 p-4">
										<div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
											<ShieldCheck className="h-4 w-4 text-red-600" />
											Safe door operation
										</div>
										<p className="mt-2 text-xs leading-5 text-(--ink-soft)">
											Consider emergency release, power backup and egress
											requirements for every controlled opening.
										</p>
									</div>
								</div>
							</div>
							<div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-(--line) bg-background p-4 shadow-lg sm:flex">
								<div className="rounded-lg bg-red-500/10 p-2 text-red-700 dark:text-red-300">
									<BadgeCheck className="h-5 w-5" />
								</div>
								<div>
									<p className="text-sm font-semibold text-(--ink)">
										Site-specific access plan
									</p>
									<p className="text-xs text-(--ink-soft)">
										Permissions matched to your operations
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
						A considered entry-management setup
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Effective access control starts with understanding who needs access.
					</h2>
				</div>
				<div className="space-y-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
					<p>
						An access-control system is more than an electronic lock. The people
						who need entry, the doors being controlled, credential methods,
						permission schedules and emergency procedures all affect how the
						system should be designed.
					</p>
					<p>
						Baroda Enterprise can discuss the site's access requirements and
						help define a suitable scope for readers, controllers, door hardware
						and management tools. The final design should account for door
						construction, safe exit, power and network availability, privacy and
						compatibility with existing systems.
					</p>
				</div>
			</section>

			{/* Services */}
			<section className="page-wrap mt-16" id="access-control-services">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Access control services
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						The key parts of a controlled-entry solution.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						From entry credentials to door hardware and user permissions, each
						part should work together. The scope can be planned for a new
						installation or an assessment of an existing system.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{accessControlServices.map((service) => {
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
							Credential options
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Choose an access method that fits the people and the place.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							Different credentials offer different levels of convenience and
							administration. Selection should account for user volume, security
							needs, operating conditions, privacy and the supported features of
							the chosen system.
						</p>
						<Button asChild variant="outline" className="mt-6 gap-2">
							<Link to="/contact-us">
								Discuss credential options <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						{credentialMethods.map((method) => {
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

			{/* System components */}
			<section className="page-wrap mt-16">
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						How the system fits together
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						From credential presentation to a controlled door.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						A complete design considers the credential, decision-making
						controller, physical locking hardware and the tools used to manage
						users and review system events.
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
						Where access control can be used
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Entry management for different types of properties.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Each property has a different layout, user population and security
						requirement. Controlled doors and permissions should be planned
						around how the building is used.
					</p>
				</div>

				<div className="mt-8 grid gap-4 lg:grid-cols-3">
					{environments.map((environment) => {
						const Icon = environment.icon;
						return (
							<Card
								key={environment.title}
								className="h-full rounded-2xl border-(--line)"
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
				<div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<Badge variant="outline" className="mb-3">
							Before selecting a system
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Plan for security, usability and safe movement.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
							Access control affects how people move through a building. The
							design should balance appropriate restrictions with convenient
							day-to-day use and safe emergency exit.
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
							A clear process from site assessment to handover.
						</h2>
					</div>
					<p className="max-w-md text-sm leading-6 text-(--ink-soft)">
						Define how each door should work before selecting equipment, then
						test normal access and emergency operation as part of handover.
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
				<div className="max-w-2xl">
					<Badge variant="outline" className="mb-3">
						Related solutions
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						Build a more connected security environment.
					</h2>
					<p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
						Access control can be considered alongside surveillance, network
						infrastructure and ongoing technical support, depending on the
						requirements of the site.
					</p>
				</div>

				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{relatedServices.map((service) => {
						const Icon = service.icon;
						return (
							<Card
								key={service.title}
								className="h-full rounded-2xl border-(--line)"
							>
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
										<Link to={service.href} className="gap-2">
											Explore service <ArrowRight className="h-4 w-4" />
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
							Access control questions, answered.
						</h2>
						<p className="mt-4 text-sm leading-7 text-(--ink-soft)">
							Have a site-specific question? Share your requirements and the
							team can help identify what needs to be considered.
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
				<div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.18),transparent_45%),linear-gradient(135deg,var(--header-bg),var(--background))] px-6 py-10 sm:px-10 sm:py-14">
					<div className="relative z-10 max-w-3xl">
						<Badge
							variant="outline"
							className="mb-4 border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300"
						>
							Plan your access-control project
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Need better control over who can enter your building?
						</h2>
						<p className="mt-4 max-w-2xl text-sm leading-7 text-(--ink-soft) sm:text-base">
							Tell us about your property, the doors that need control and the
							people who use them. Baroda Enterprise can help you discuss the
							next steps for a suitable access-control solution.
						</p>
						<div className="mt-7 flex flex-col gap-3 sm:flex-row">
							<Button asChild size="lg" className="gap-2">
								<Link to="/contact-us">
									Request an Access Control Consultation{" "}
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button asChild size="lg" variant="outline">
								<Link to="/surveillance/cctv-solutions/">
									Explore CCTV Solutions
								</Link>
							</Button>
						</div>
					</div>
					<div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full border border-red-500/15" />
					<div className="pointer-events-none absolute -bottom-16 -right-8 h-56 w-56 rounded-full border border-red-500/15" />
				</div>
			</section>
		</main>
	);
}
