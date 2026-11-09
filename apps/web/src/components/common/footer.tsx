import { Link } from "@tanstack/react-router";
import {
	ArrowUp,
	ArrowUpRight,
	Flame,
	Mail,
	MapPin,
	Phone,
	ShieldCheck,
} from "lucide-react";

import {
	COMPANY_ADDRESS,
	COMPANY_EMAIL,
	COMPANY_NAME,
	COMPANY_PHONE,
	productItems,
	serviceItems,
	surveillanceSystems,
} from "#/lib/constants";

const quickLinks = [
	{ label: "Home", href: "/" },
	{ label: "About us", href: "/about" },
	{ label: "Contact us", href: "/contact-us" },
];

const fireSafetyItems = [
	{ name: "Residential fire safety", href: "/fire-safety/residential" },
	{ name: "Industrial fire safety", href: "/fire-safety/industrial" },
	{ name: "Fire detection & alarm", href: "/fire-safety/fire-detection" },
	{ name: "Fire suppression systems", href: "/fire-safety/fire-suppression" },
	{ name: "Fire hydrant & sprinkler", href: "/fire-safety/hydrant-sprinkler" },
	{ name: "Fire extinguishers", href: "/fire-safety/fire-extinguishers" },
	{ name: "Maintenance & inspection", href: "/fire-safety/maintenance" },
];

const contactInfo = [
	{
		icon: Phone,
		label: "Call us",
		text: COMPANY_PHONE,
		href: `tel:${COMPANY_PHONE.replace(/[^\d+]/g, "")}`,
	},
	{
		icon: Mail,
		label: "Email us",
		text: COMPANY_EMAIL,
		href: `mailto:${COMPANY_EMAIL}`,
	},
	{
		icon: MapPin,
		label: "Visit us",
		text: COMPANY_ADDRESS,
		href: null,
	},
];

const focusRing =
	"focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-sm";

function FooterHeading({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<h3
			className={`mb-4 text-sm font-semibold tracking-tight text-(--ink) ${className}`}
		>
			{children}
		</h3>
	);
}

function FooterLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			to={href}
			className={`group inline-flex w-fit items-center text-sm text-(--ink-soft) transition-colors hover:text-(--ink) ${focusRing}`}
		>
			<span
				aria-hidden="true"
				className="mr-0 inline-block h-px w-0 bg-current opacity-60 transition-all duration-200 group-hover:mr-2 group-hover:w-3"
			/>
			{children}
		</Link>
	);
}

function FooterNav({
	label,
	children,
}: {
	label: string;
	children: React.ReactNode;
}) {
	return (
		<nav aria-label={label} className="flex flex-col gap-2.5">
			{children}
		</nav>
	);
}

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="mt-20 border-t border-(--line) bg-(--header-bg) text-(--ink-soft)">
			<div className="page-wrap px-4 pt-12 pb-6">
				{/* Subtle CTA strip */}
				<div className="mb-12 flex flex-col gap-3 border-b border-(--line) pb-6 text-sm sm:flex-row sm:items-center sm:justify-between">
					<p className="m-0 text-(--ink)">
						Planning an IT or fire safety project?
						<span className="text-(--ink-soft)"> We're happy to help.</span>
					</p>

					<div className="flex items-center gap-5">
						<a
							href={contactInfo[0].href ?? "#"}
							className={`text-(--ink-soft) transition-colors hover:text-(--ink) ${focusRing}`}
						>
							{COMPANY_PHONE}
						</a>
						<Link
							to="/contact-us"
							className={`inline-flex items-center gap-1 font-medium text-(--ink) underline underline-offset-4 decoration-(--line) transition-colors hover:decoration-current ${focusRing}`}
						>
							Get a quote
							<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
						</Link>
					</div>
				</div>

				{/* Main grid */}
				<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
					{/* Brand + contact */}
					<div className="sm:col-span-2 lg:col-span-4">
						<Link to="/" className={`inline-block ${focusRing}`}>
							<span className="text-lg font-extrabold tracking-tight text-(--ink)">
								Baroda Enterprise
							</span>
						</Link>

						<p className="mt-3 max-w-sm text-sm leading-relaxed">
							Reliable IT infrastructure, security and surveillance, and
							professional fire safety systems for homes and industrial
							buildings.
						</p>

						<ul className="mt-6 flex flex-col gap-3">
							{contactInfo.map(({ icon: Icon, label, text, href }) => {
								const body = (
									<>
										<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-(--line) bg-(--header-bg) text-(--ink) transition-colors group-hover:border-primary group-hover:text-primary">
											<Icon
												className="h-4 w-4 border-primary"
												aria-hidden="true"
											/>
										</span>
										<span className="flex flex-col">
											<span className="text-xs text-primary font-semibold">
												{label}
											</span>
											<span className="text-sm leading-snug text-(--ink)">
												{text}
											</span>
										</span>
									</>
								);

								return (
									<li key={label}>
										{href ? (
											<a
												href={href}
												className={`group flex items-start gap-3 ${focusRing}`}
											>
												{body}
											</a>
										) : (
											<div className="group flex items-start gap-3">{body}</div>
										)}
									</li>
								);
							})}
						</ul>
					</div>

					{/* Company + products */}
					<div className="lg:col-span-2">
						<FooterHeading>Company</FooterHeading>
						<FooterNav label="Company">
							{quickLinks.map((link) => (
								<FooterLink key={link.href} href={link.href}>
									{link.label}
								</FooterLink>
							))}
						</FooterNav>

						<FooterHeading className="mt-8">Products</FooterHeading>
						<FooterNav label="Products">
							{productItems.slice(0, 4).map((item) => (
								<FooterLink key={item.id} href={item.href}>
									{item.name}
								</FooterLink>
							))}
						</FooterNav>
					</div>

					{/* IT group */}
					<div className="lg:col-span-3">
						<div className="mb-4 flex items-center gap-2">
							<ShieldCheck
								className="h-4 w-4 text-primary"
								aria-hidden="true"
							/>
							<FooterHeading className="mb-0">IT & security</FooterHeading>
						</div>

						<FooterNav label="IT services">
							{serviceItems.map((item) => (
								<FooterLink key={item.id} href={item.href}>
									{item.name}
								</FooterLink>
							))}
						</FooterNav>

						<FooterHeading className="mt-8">Surveillance</FooterHeading>
						<FooterNav label="Surveillance systems">
							{surveillanceSystems.slice(0, 3).map((item) => (
								<FooterLink key={item.id} href={item.href}>
									{item.name}
								</FooterLink>
							))}
						</FooterNav>
					</div>

					{/* Fire safety group: red rule marks the second business line */}
					<div className="border-red-600/40 sm:col-span-2 sm:border-l sm:pl-8 lg:col-span-3">
						<div className="mb-4 flex items-center gap-2">
							<Flame className="h-4 w-4 text-red-600" aria-hidden="true" />
							<FooterHeading className="mb-0">Fire safety</FooterHeading>
						</div>

						<FooterNav label="Fire safety">
							{fireSafetyItems.map((item) => (
								<FooterLink key={item.href} href={item.href}>
									{item.name}
								</FooterLink>
							))}
						</FooterNav>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-(--line) pt-6 text-xs sm:flex-row">
					<p className="m-0 text-center sm:text-left">
						&copy; {year} {COMPANY_NAME}. All rights reserved.
					</p>

					<div className="flex items-center gap-5">
						<p className="m-0">
							Designed by{" "}
							<a
								href="https://github.com/TeamNextCraft"
								className={`font-semibold text-(--ink) underline underline-offset-2 transition-colors hover:text-primary ${focusRing}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								TeamNextCraft
							</a>
						</p>

						<button
							type="button"
							onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
							aria-label="Back to top"
							className={`flex h-9 w-9 items-center justify-center rounded-full border border-(--line) text-(--ink) transition-colors hover:border-primary hover:bg-primary hover:text-white ${focusRing}`}
						>
							<ArrowUp className="h-4 w-4" aria-hidden="true" />
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
}

// import { Link } from "@tanstack/react-router";
// import {
// 	ArrowUp,
// 	ArrowUpRight,
// 	Flame,
// 	Mail,
// 	MapPin,
// 	Phone,
// 	ShieldCheck,
// } from "lucide-react";
//
// import { Button } from "#/components/ui/button";
// import {
// 	COMPANY_ADDRESS,
// 	COMPANY_EMAIL,
// 	COMPANY_NAME,
// 	COMPANY_PHONE,
// 	productItems,
// 	serviceItems,
// 	surveillanceSystems,
// } from "#/lib/constants";
//
// const quickLinks = [
// 	{ label: "Home", href: "/" },
// 	{ label: "About us", href: "/about" },
// 	{ label: "Contact us", href: "/contact-us" },
// ];
//
// const fireSafetyItems = [
// 	{ name: "Residential fire safety", href: "/fire-safety/residential" },
// 	{ name: "Industrial fire safety", href: "/fire-safety/industrial" },
// 	{ name: "Fire detection & alarm", href: "/fire-safety/fire-detection" },
// 	{ name: "Fire suppression systems", href: "/fire-safety/fire-suppression" },
// 	{ name: "Fire hydrant & sprinkler", href: "/fire-safety/hydrant-sprinkler" },
// 	{ name: "Fire extinguishers", href: "/fire-safety/fire-extinguishers" },
// 	{ name: "Maintenance & inspection", href: "/fire-safety/maintenance" },
// ];
//
// const contactInfo = [
// 	{
// 		icon: Phone,
// 		label: "Call us",
// 		text: COMPANY_PHONE,
// 		href: `tel:${COMPANY_PHONE.replace(/[^\d+]/g, "")}`,
// 	},
// 	{
// 		icon: Mail,
// 		label: "Email us",
// 		text: COMPANY_EMAIL,
// 		href: `mailto:${COMPANY_EMAIL}`,
// 	},
// 	{
// 		icon: MapPin,
// 		label: "Visit us",
// 		text: COMPANY_ADDRESS,
// 		href: null,
// 	},
// ];
//
// const focusRing =
// 	"focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-sm";
//
// function FooterHeading({
// 	children,
// 	className = "",
// }: {
// 	children: React.ReactNode;
// 	className?: string;
// }) {
// 	return (
// 		<h3
// 			className={`mb-4 text-sm font-semibold tracking-tight text-(--ink) ${className}`}
// 		>
// 			{children}
// 		</h3>
// 	);
// }
//
// function FooterLink({
// 	href,
// 	children,
// }: {
// 	href: string;
// 	children: React.ReactNode;
// }) {
// 	return (
// 		<Link
// 			to={href}
// 			className={`group inline-flex w-fit items-center text-sm text-(--ink-soft) transition-colors hover:text-(--ink) ${focusRing}`}
// 		>
// 			<span
// 				aria-hidden="true"
// 				className="mr-0 inline-block h-px w-0 bg-current opacity-60 transition-all duration-200 group-hover:mr-2 group-hover:w-3"
// 			/>
// 			{children}
// 		</Link>
// 	);
// }
//
// function FooterNav({
// 	label,
// 	children,
// }: {
// 	label: string;
// 	children: React.ReactNode;
// }) {
// 	return (
// 		<nav aria-label={label} className="flex flex-col gap-2.5">
// 			{children}
// 		</nav>
// 	);
// }
//
// export default function Footer() {
// 	const year = new Date().getFullYear();
//
// 	return (
// 		<footer className="mt-24 bg-(--header-bg) text-(--ink-soft)">
// 			{/* CTA band */}
// 			<div className="page-wrap px-4">
// 				<div className="-translate-y-1/2 rounded-2xl border border-(--line) bg-(--header-bg) p-6 shadow-lg sm:p-8">
// 					<div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
// 						<div className="max-w-xl">
// 							<h2 className="text-xl font-bold tracking-tight text-(--ink) sm:text-2xl">
// 								Planning an IT or fire safety project?
// 							</h2>
// 							<p className="mt-2 text-sm leading-relaxed">
// 								Tell us about your building and we'll recommend the right
// 								systems, then handle installation and upkeep.
// 							</p>
// 						</div>
//
// 						<div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
// 							<Button asChild size="lg">
// 								<Link to="/contact-us">
// 									Get a quote
// 									<ArrowUpRight className="ml-1 h-4 w-4" />
// 								</Link>
// 							</Button>
// 							<Button asChild size="lg" variant="outline">
// 								<a href={contactInfo[0].href ?? "#"}>
// 									<Phone className="mr-2 h-4 w-4" />
// 									{COMPANY_PHONE}
// 								</a>
// 							</Button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
//
// 			<div className="page-wrap -mt-6 px-4 pb-6">
// 				{/* Main grid */}
// 				<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
// 					{/* Brand + contact */}
// 					<div className="sm:col-span-2 lg:col-span-4">
// 						<Link to="/" className={`inline-block ${focusRing}`}>
// 							<span className="text-lg font-extrabold tracking-tight text-(--ink)">
// 								Baroda Enterprise
// 							</span>
// 						</Link>
//
// 						<p className="mt-3 max-w-sm text-sm leading-relaxed">
// 							Reliable IT infrastructure, security and surveillance, and
// 							professional fire safety systems for homes and industrial
// 							buildings.
// 						</p>
//
// 						<ul className="mt-6 flex flex-col gap-3">
// 							{contactInfo.map(({ icon: Icon, label, text, href }) => {
// 								const body = (
// 									<>
// 										<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-(--line) bg-(--header-bg) text-(--ink) transition-colors group-hover:border-primary group-hover:text-primary">
// 											<Icon className="h-4 w-4" aria-hidden="true" />
// 										</span>
// 										<span className="flex flex-col">
// 											<span className="text-xs text-(--ink-soft)/80">
// 												{label}
// 											</span>
// 											<span className="text-sm leading-snug text-(--ink)">
// 												{text}
// 											</span>
// 										</span>
// 									</>
// 								);
//
// 								return (
// 									<li key={label}>
// 										{href ? (
// 											<a
// 												href={href}
// 												className={`group flex items-center gap-3 ${focusRing}`}
// 											>
// 												{body}
// 											</a>
// 										) : (
// 											<div className="group flex items-center gap-3">
// 												{body}
// 											</div>
// 										)}
// 									</li>
// 								);
// 							})}
// 						</ul>
// 					</div>
//
// 					{/* Company + products */}
// 					<div className="lg:col-span-2">
// 						<FooterHeading>Company</FooterHeading>
// 						<FooterNav label="Company">
// 							{quickLinks.map((link) => (
// 								<FooterLink key={link.href} href={link.href}>
// 									{link.label}
// 								</FooterLink>
// 							))}
// 						</FooterNav>
//
// 						<FooterHeading className="mt-8">Products</FooterHeading>
// 						<FooterNav label="Products">
// 							{productItems.slice(0, 4).map((item) => (
// 								<FooterLink key={item.id} href={item.href}>
// 									{item.name}
// 								</FooterLink>
// 							))}
// 						</FooterNav>
// 					</div>
//
// 					{/* IT group */}
// 					<div className="lg:col-span-3">
// 						<div className="mb-4 flex items-center gap-2">
// 							<ShieldCheck
// 								className="h-4 w-4 text-primary"
// 								aria-hidden="true"
// 							/>
// 							<FooterHeading className="mb-0">IT & security</FooterHeading>
// 						</div>
//
// 						<FooterNav label="IT services">
// 							{serviceItems.map((item) => (
// 								<FooterLink key={item.id} href={item.href}>
// 									{item.name}
// 								</FooterLink>
// 							))}
// 						</FooterNav>
//
// 						<FooterHeading className="mt-8">Surveillance</FooterHeading>
// 						<FooterNav label="Surveillance systems">
// 							{surveillanceSystems.slice(0, 3).map((item) => (
// 								<FooterLink key={item.id} href={item.href}>
// 									{item.name}
// 								</FooterLink>
// 							))}
// 						</FooterNav>
// 					</div>
//
// 					{/* Fire safety group: red rule marks the second business line */}
// 					<div className="border-red-600/40 sm:col-span-2 sm:border-l sm:pl-8 lg:col-span-3">
// 						<div className="mb-4 flex items-center gap-2">
// 							<Flame className="h-4 w-4 text-red-600" aria-hidden="true" />
// 							<FooterHeading className="mb-0">Fire safety</FooterHeading>
// 						</div>
//
// 						<FooterNav label="Fire safety">
// 							{fireSafetyItems.map((item) => (
// 								<FooterLink key={item.href} href={item.href}>
// 									{item.name}
// 								</FooterLink>
// 							))}
// 						</FooterNav>
// 					</div>
// 				</div>
//
// 				{/* Bottom bar */}
// 				<div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-(--line) pt-6 text-xs sm:flex-row">
// 					<p className="m-0 text-center sm:text-left">
// 						&copy; {year} {COMPANY_NAME}. All rights reserved.
// 					</p>
//
// 					<div className="flex items-center gap-5">
// 						<p className="m-0">
// 							Designed by{" "}
// 							<a
// 								href="https://github.com/TeamNextCraft"
// 								className={`font-semibold text-(--ink) underline underline-offset-2 transition-colors hover:text-primary ${focusRing}`}
// 								target="_blank"
// 								rel="noopener noreferrer"
// 							>
// 								TeamNextCraft
// 							</a>
// 						</p>
//
// 						<button
// 							type="button"
// 							onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
// 							aria-label="Back to top"
// 							className={`flex h-9 w-9 items-center justify-center rounded-full border border-(--line) text-(--ink) transition-colors hover:border-primary hover:bg-primary hover:text-white ${focusRing}`}
// 						>
// 							<ArrowUp className="h-4 w-4" aria-hidden="true" />
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }

// import { Link } from "@tanstack/react-router";
// import {
// 	ArrowUpRight,
// 	Flame,
// 	Mail,
// 	MapPin,
// 	Phone,
// 	ShieldCheck,
// } from "lucide-react";
//
// import { Button } from "#/components/ui/button";
// import {
// 	COMPANY_ADDRESS,
// 	COMPANY_EMAIL,
// 	COMPANY_NAME,
// 	COMPANY_PHONE,
// 	productItems,
// 	serviceItems,
// 	surveillanceSystems,
// } from "#/lib/constants";
//
// const quickLinks = [
// 	{ label: "Home", href: "/" },
// 	{ label: "About Us", href: "/about" },
// 	{ label: "Contact Us", href: "/contact-us" },
// ];
//
// const fireSafetyItems = [
// 	{
// 		name: "Residential Fire Safety",
// 		href: "/fire-safety/residential",
// 	},
// 	{
// 		name: "Industrial Fire Safety",
// 		href: "/fire-safety/industrial",
// 	},
// 	{
// 		name: "Fire Detection & Alarm",
// 		href: "/fire-safety/fire-detection",
// 	},
// 	{
// 		name: "Fire Suppression Systems",
// 		href: "/fire-safety/fire-suppression",
// 	},
// 	{
// 		name: "Fire Hydrant & Sprinkler",
// 		href: "/fire-safety/hydrant-sprinkler",
// 	},
// 	{
// 		name: "Fire Extinguishers",
// 		href: "/fire-safety/fire-extinguishers",
// 	},
// 	{
// 		name: "Maintenance & Inspection",
// 		href: "/fire-safety/maintenance",
// 	},
// ];
//
// const contactInfo = [
// 	{
// 		icon: Phone,
// 		text: COMPANY_PHONE,
// 		href: `tel:${COMPANY_PHONE.replace(/[^\d+]/g, "")}`,
// 	},
// 	{
// 		icon: Mail,
// 		text: COMPANY_EMAIL,
// 		href: `mailto:${COMPANY_EMAIL}`,
// 	},
// 	{
// 		icon: MapPin,
// 		text: COMPANY_ADDRESS,
// 		href: null,
// 	},
// ];
//
// function FooterHeading({
// 	children,
// 	className = "",
// }: {
// 	children: React.ReactNode;
// 	className?: string;
// }) {
// 	return (
// 		<p className={`mb-4 text-sm font-bold text-(--ink) ${className}`}>
// 			{children}
// 		</p>
// 	);
// }
//
// function FooterLink({
// 	href,
// 	children,
// }: {
// 	href: string;
// 	children: React.ReactNode;
// }) {
// 	return (
// 		<Link
// 			to={href}
// 			className="group flex items-center gap-1 text-sm transition-colors hover:text-(--ink)"
// 		>
// 			{children}
// 		</Link>
// 	);
// }
//
// export default function Footer() {
// 	const year = new Date().getFullYear();
//
// 	return (
// 		<footer className="mt-20 border-t border-(--line) bg-(--header-bg) px-4 pt-14 pb-6 text-(--ink-soft)">
// 			<div className="page-wrap">
// 				{/* Main Footer */}
// 				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.5fr_0.8fr_1.2fr_1.2fr_1.1fr]">
// 					{/* Brand Column */}
// 					<div>
// 						<Link to="/" className="inline-block">
// 							<p className="mb-3 text-base font-bold text-(--ink)">
// 								BARODA ENTERPRISE
// 							</p>
// 						</Link>
//
// 						<p className="max-w-xs text-sm leading-relaxed">
// 							Delivering reliable IT infrastructure, security and surveillance
// 							solutions, along with professional fire safety systems for
// 							residential and industrial buildings.
// 						</p>
//
// 						<div className="mt-6 space-y-3">
// 							<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-(--ink)">
// 								<ShieldCheck className="h-4 w-4 text-primary" />
// 								IT & Infrastructure Solutions
// 							</div>
//
// 							<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-(--ink)">
// 								<Flame className="h-4 w-4 text-red-600" />
// 								Fire Safety Solutions
// 							</div>
// 						</div>
// 					</div>
//
// 					{/* Quick Links & Products */}
// 					<div>
// 						<FooterHeading>Explore</FooterHeading>
//
// 						<nav className="flex flex-col gap-3">
// 							{quickLinks.map((link) => (
// 								<FooterLink key={link.href} href={link.href}>
// 									{link.label}
// 								</FooterLink>
// 							))}
// 						</nav>
//
// 						<FooterHeading className="mt-7">Our Products</FooterHeading>
//
// 						<nav className="flex flex-col gap-3">
// 							{productItems.slice(0, 4).map((item) => (
// 								<FooterLink key={item.id} href={item.href}>
// 									{item.name}
// 								</FooterLink>
// 							))}
// 						</nav>
// 					</div>
//
// 					{/* IT Services & Surveillance */}
// 					<div>
// 						<FooterHeading>IT Services</FooterHeading>
//
// 						<nav className="flex flex-col gap-3">
// 							{serviceItems.map((item) => (
// 								<FooterLink key={item.id} href={item.href}>
// 									{item.name}
// 								</FooterLink>
// 							))}
// 						</nav>
//
// 						<FooterHeading className="mt-7">Surveillance Systems</FooterHeading>
//
// 						<nav className="flex flex-col gap-3">
// 							{surveillanceSystems.slice(0, 3).map((item) => (
// 								<FooterLink key={item.id} href={item.href}>
// 									{item.name}
// 								</FooterLink>
// 							))}
// 						</nav>
// 					</div>
//
// 					{/* Fire Safety */}
// 					<div>
// 						<div className="mb-4 flex items-center gap-2">
// 							<Flame className="h-4 w-4 text-red-600" />
// 							<FooterHeading className="mb-0">Fire Safety</FooterHeading>
// 						</div>
//
// 						<p className="mb-4 text-xs leading-relaxed">
// 							Fire protection and installation solutions designed to help
// 							protect people, buildings and assets.
// 						</p>
//
// 						<nav className="flex flex-col gap-3">
// 							{fireSafetyItems.map((item) => (
// 								<FooterLink key={item.href} href={item.href}>
// 									{item.name}
// 								</FooterLink>
// 							))}
// 						</nav>
//
// 						<Button
// 							asChild
// 							variant="outline"
// 							size="sm"
// 							className="mt-6 w-full border-red-600/30 text-red-600 hover:bg-red-600 hover:text-white"
// 						>
// 							<Link to="/contact-us">
// 								Discuss a Project
// 								<ArrowUpRight className="ml-1 h-4 w-4" />
// 							</Link>
// 						</Button>
// 					</div>
//
// 					{/* Contact */}
// 					<div>
// 						<FooterHeading>Get In Touch</FooterHeading>
//
// 						<p className="mb-5 text-sm leading-relaxed">
// 							Have a project in mind? Contact our team to discuss your IT or
// 							fire safety requirements.
// 						</p>
//
// 						<ul className="flex flex-col gap-4">
// 							{contactInfo.map(({ icon: Icon, text, href }) => (
// 								<li key={text} className="flex items-start gap-3 text-sm">
// 									<div className="mt-0.5 rounded-lg border border-(--line) p-2">
// 										<Icon className="h-4 w-4 shrink-0 text-(--ink)" />
// 									</div>
//
// 									{href ? (
// 										<a
// 											href={href}
// 											className="pt-1.5 leading-relaxed transition-colors hover:text-(--ink)"
// 										>
// 											{text}
// 										</a>
// 									) : (
// 										<span className="pt-1.5 leading-relaxed">{text}</span>
// 									)}
// 								</li>
// 							))}
// 						</ul>
//
// 						<Button asChild className="mt-6 w-full">
// 							<Link to="/contact-us">
// 								Contact Us
// 								<ArrowUpRight className="ml-1 h-4 w-4" />
// 							</Link>
// 						</Button>
// 					</div>
// 				</div>
//
// 				{/* Divider */}
// 				<div className="mt-14 border-t border-(--line)" />
//
// 				{/* Bottom Bar */}
// 				<div className="mt-6 flex flex-col items-center justify-between gap-3 text-center text-xs sm:flex-row sm:text-left">
// 					<p className="m-0">
// 						&copy; {year} {COMPANY_NAME}. All rights reserved.
// 					</p>
//
// 					<p className="m-0">
// 						Designed by{" "}
// 						<a
// 							href="https://github.com/TeamNextCraft"
// 							className="font-semibold underline underline-offset-2 transition-colors hover:text-(--ink)"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 						>
// 							TeamNextCraft
// 						</a>
// 					</p>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }
