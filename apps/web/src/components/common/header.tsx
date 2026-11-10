import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { ArrowRight, Flame, Menu, ShieldCheck } from "lucide-react";
import * as React from "react";
import { Button } from "#/components/ui/button";
import {
	fireSafetyGroups,
	productItems,
	serviceItems,
	surveillanceSystems,
} from "#/lib/constants";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

/**
 * All navigation cards use the same shape. Add `image` to the corresponding
 * Product, Service and SurveillanceSystem records in #/lib/constants.
 */
type NavigationCardItem = {
	id?: number;
	name: string;
	href: string;
	image: string;
	description: string;
};

type NavigationGroup = {
	title: string;
	items: NavigationCardItem[];
};

function MenuIntro({
	eyebrow,
	title,
	description,
}: {
	eyebrow: string;
	title: string;
	description: string;
}) {
	return (
		<div className="mb-5 flex items-end justify-between gap-4 border-b border-(--line) pb-4">
			<div>
				<p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
					{eyebrow}
				</p>
				<h2 className="text-lg font-semibold tracking-tight text-(--ink)">
					{title}
				</h2>
				<p className="mt-1 max-w-xl text-xs leading-relaxed text-(--ink-soft)">
					{description}
				</p>
			</div>
			<Link
				to="/contact-us"
				className="hidden shrink-0 items-center gap-1 text-xs font-semibold text-primary transition-colors hover:gap-2 sm:inline-flex"
			>
				Talk to our team <ArrowRight className="h-3.5 w-3.5" />
			</Link>
		</div>
	);
}

function DesktopMenuCard({ item }: { item: NavigationCardItem }) {
	return (
		<NavigationMenuLink asChild>
			<Link
				to={item.href as never}
				className="group flex min-w-0 gap-3 rounded-xl border border-transparent p-2.5 transition-all hover:border-(--line) hover:bg-(--link-bg-hover)"
			>
				<img
					src={item.image}
					alt={item.name}
					loading="lazy"
					className="h-[76px] w-[92px] shrink-0 rounded-lg bg-muted object-cover"
				/>
				<span className="flex min-w-0 flex-1 flex-col justify-center">
					<span className="text-sm font-semibold leading-snug text-(--ink) group-hover:text-primary">
						{item.name}
					</span>
					<span className="mt-1 line-clamp-2 text-xs font-normal leading-relaxed text-(--ink-soft)">
						{item.description}
					</span>
					<span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-primary opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100">
						Explore <ArrowRight className="h-3 w-3" />
					</span>
				</span>
			</Link>
		</NavigationMenuLink>
	);
}

function DesktopMenuPanel({
	eyebrow,
	title,
	description,
	items,
}: {
	eyebrow: string;
	title: string;
	description: string;
	items: NavigationCardItem[];
}) {
	return (
		<div className="w-[min(92vw,820px)] p-5">
			<MenuIntro eyebrow={eyebrow} title={title} description={description} />
			<div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
				{items.map((item) => (
					<DesktopMenuCard key={item.href} item={item} />
				))}
			</div>
			<div className="mt-4 flex items-center justify-between rounded-lg bg-muted/60 px-4 py-3">
				<p className="text-xs text-(--ink-soft)">
					Not sure what your business needs? Let’s discuss your requirements.
				</p>
				<Button asChild size="sm" variant="outline" className="shrink-0">
					<Link to="/contact-us">Enquire now</Link>
				</Button>
			</div>
		</div>
	);
}

function MobileMenuCard({
	item,
	onClose,
}: {
	item: NavigationCardItem;
	onClose: () => void;
}) {
	return (
		<Link
			to={item.href as never}
			onClick={onClose}
			className="group flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-(--link-bg-hover)"
		>
			<img
				src={item.image}
				alt={item.name}
				loading="lazy"
				className="h-14 w-16 shrink-0 rounded-lg bg-muted object-cover"
			/>
			<span className="min-w-0">
				<span className="block text-sm font-semibold text-(--ink) group-hover:text-primary">
					{item.name}
				</span>
				<span className="mt-0.5 line-clamp-2 block text-xs font-normal leading-relaxed text-(--ink-soft)">
					{item.description}
				</span>
			</span>
		</Link>
	);
}

function MobileGroup({
	value,
	label,
	items,
	onClose,
	icon,
}: {
	value: string;
	label: string;
	items: NavigationCardItem[];
	onClose: () => void;
	icon?: React.ReactNode;
}) {
	return (
		<AccordionItem
			value={value}
			className="border-b border-(--line) last:border-b-0"
		>
			<AccordionTrigger className="rounded-xl px-3 py-3 text-sm font-semibold hover:bg-(--link-bg-hover) hover:no-underline">
				<span className="flex items-center gap-2">
					{icon}
					{label}
				</span>
			</AccordionTrigger>
			<AccordionContent className="pb-3">
				<div className="flex flex-col gap-1 px-1">
					{items.map((item) => (
						<MobileMenuCard key={item.href} item={item} onClose={onClose} />
					))}
				</div>
			</AccordionContent>
		</AccordionItem>
	);
}

export default function Header() {
	const [open, setOpen] = React.useState(false);
	const closeMenu = () => setOpen(false);

	// These arrays are enriched with image paths and descriptions in constants.ts.
	const products = productItems as NavigationCardItem[];
	const services = serviceItems as NavigationCardItem[];
	const surveillance = surveillanceSystems as NavigationCardItem[];
	const fireGroups = fireSafetyGroups as NavigationGroup[];

	return (
		<header className="sticky top-0 z-50 border-b border-(--line) bg-(--header-bg)/95 px-4 backdrop-blur-lg">
			<nav className="page-wrap flex items-center justify-between gap-4 py-3">
				<Link to="/" aria-label="Baroda Enterprise home" className="shrink-0">
					<div className="flex items-center gap-2">
						<Image
							src="/logo.jpg"
							layout="constrained"
							width={60}
							height={64}
							alt="Baroda Enterprise Logo"
						/>
						<div className="flex flex-col text-xs font-semibold text-gray-400">
							<span>Baroda</span>
							<span>Enterprise</span>
						</div>
					</div>
				</Link>

				{/* Desktop mega navigation */}
				<div className="hidden min-w-0 flex-1 justify-center xl:flex">
					<NavigationMenu>
						<NavigationMenuList className="flex items-center gap-0.5 text-sm font-semibold">
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										to="/"
										className="nav-link"
										activeProps={{ className: "nav-link is-active" }}
									>
										Home
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										to="/about"
										className="nav-link"
										activeProps={{ className: "nav-link is-active" }}
									>
										About Us
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuTrigger>Products</NavigationMenuTrigger>
								<NavigationMenuContent>
									<DesktopMenuPanel
										eyebrow="Products & Equipment"
										title="Technology for everyday business"
										description="Explore workplace hardware, printing, software and integrated technology solutions."
										items={products}
									/>
								</NavigationMenuContent>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuTrigger>Services</NavigationMenuTrigger>
								<NavigationMenuContent>
									<DesktopMenuPanel
										eyebrow="IT Services"
										title="Keep your business connected and supported"
										description="Infrastructure, networking, security, backup and maintenance services for business environments."
										items={services}
									/>
								</NavigationMenuContent>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuTrigger>Surveillance</NavigationMenuTrigger>
								<NavigationMenuContent>
									<DesktopMenuPanel
										eyebrow="Surveillance & Access"
										title="Visibility and controlled access"
										description="Explore CCTV, access control, biometric and network surveillance solutions."
										items={surveillance}
									/>
								</NavigationMenuContent>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuTrigger className="gap-2">
									<Flame className="h-4 w-4 text-red-600" />
									Fire Safety
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className="w-[min(92vw,900px)] p-5">
										<MenuIntro
											eyebrow="Fire Protection & Life Safety"
											title="Fire safety solutions for every building"
											description="Explore fire protection options for residential, industrial and commercial properties."
										/>
										<div className="grid gap-6 md:grid-cols-2">
											{fireGroups.map((group) => (
												<section key={group.title}>
													<div className="mb-2 flex items-center gap-2 border-b border-(--line) pb-2">
														<ShieldCheck className="h-4 w-4 text-red-600" />
														<h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
															{group.title}
														</h3>
													</div>
													<div className="flex flex-col gap-1">
														{group.items.map((item) => (
															<DesktopMenuCard key={item.href} item={item} />
														))}
													</div>
												</section>
											))}
										</div>
										<div className="mt-4 flex items-center justify-between rounded-lg bg-red-50 px-4 py-3 dark:bg-red-950/20">
											<p className="text-xs text-(--ink-soft)">
												Need fire protection for a property or facility?
											</p>
											<Button
												asChild
												size="sm"
												variant="outline"
												className="shrink-0 border-red-600/30"
											>
												<Link to="/contact-us">
													Request a site consultation
												</Link>
											</Button>
										</div>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link to="/contact-us" className="nav-link">
										Contact Us
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
						<NavigationMenuViewport />
					</NavigationMenu>
				</div>

				<div className="hidden shrink-0 xl:block">
					<Button asChild size="sm">
						<Link to="/contact-us">Request a Quote</Link>
					</Button>
				</div>

				{/* Mobile navigation */}
				<div className="xl:hidden">
					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								aria-label="Open navigation menu"
							>
								<Menu className="h-5 w-5" />
							</Button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="w-[min(92vw,420px)] overflow-y-auto"
						>
							<SheetHeader className="mb-5">
								<SheetTitle className="text-left text-base">
									Explore Baroda Enterprise
								</SheetTitle>
							</SheetHeader>

							<nav className="flex flex-col gap-1 text-sm">
								<Link
									to="/"
									className="nav-link rounded-xl px-3 py-3 font-semibold"
									onClick={closeMenu}
								>
									Home
								</Link>
								<Link
									to="/about"
									className="nav-link rounded-xl px-3 py-3 font-semibold"
									onClick={closeMenu}
								>
									About Us
								</Link>

								<Accordion type="multiple" className="w-full">
									<MobileGroup
										value="products"
										label="Products"
										items={products}
										onClose={closeMenu}
									/>
									<MobileGroup
										value="services"
										label="Services"
										items={services}
										onClose={closeMenu}
									/>
									<MobileGroup
										value="surveillance"
										label="Surveillance Systems"
										items={surveillance}
										onClose={closeMenu}
									/>
									<AccordionItem
										value="fire-safety"
										className="border-b border-(--line)"
									>
										<AccordionTrigger className="rounded-xl px-3 py-3 text-sm font-semibold hover:bg-red-50 hover:no-underline dark:hover:bg-red-950/20">
											<span className="flex items-center gap-2">
												<Flame className="h-4 w-4 text-red-600" />
												Fire Safety
											</span>
										</AccordionTrigger>
										<AccordionContent className="pb-3">
											<div className="space-y-4 px-1">
												{fireGroups.map((group) => (
													<section key={group.title}>
														<p className="mb-1 px-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
															{group.title}
														</p>
														<div className="flex flex-col gap-1">
															{group.items.map((item) => (
																<MobileMenuCard
																	key={item.href}
																	item={item}
																	onClose={closeMenu}
																/>
															))}
														</div>
													</section>
												))}
											</div>
										</AccordionContent>
									</AccordionItem>
								</Accordion>

								<Link
									to="/contact-us"
									className="nav-link rounded-xl px-3 py-3 font-semibold"
									onClick={closeMenu}
								>
									Contact Us
								</Link>

								<div className="mt-3 border-t border-(--line) pt-4">
									<Button asChild className="w-full">
										<Link to="/contact-us" onClick={closeMenu}>
											Request a Quote
										</Link>
									</Button>
								</div>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
}

// import { Link } from "@tanstack/react-router";
// import { Image } from "@unpic/react";
// import { Flame, Menu, ShieldCheck } from "lucide-react";
// import { useState } from "react";
// import { Button } from "#/components/ui/button";
// import {
// 	fireSafetyGroups,
// 	productItems,
// 	serviceItems,
// 	surveillanceSystems,
// } from "#/lib/constants";
// import {
// 	Accordion,
// 	AccordionContent,
// 	AccordionItem,
// 	AccordionTrigger,
// } from "@/components/ui/accordion";
// import {
// 	NavigationMenu,
// 	NavigationMenuContent,
// 	NavigationMenuItem,
// 	NavigationMenuLink,
// 	NavigationMenuList,
// 	NavigationMenuTrigger,
// 	NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";
// import {
// 	Sheet,
// 	SheetContent,
// 	SheetHeader,
// 	SheetTitle,
// 	SheetTrigger,
// } from "@/components/ui/sheet";
//
// function MobileNavLink({
// 	href,
// 	children,
// 	onClose,
// }: {
// 	href: string;
// 	children: React.ReactNode;
// 	onClose: () => void;
// }) {
// 	return (
// 		<Link
// 			to={href as never}
// 			className="block rounded-xl px-4 py-2.5 text-sm font-normal text-(--ink) hover:bg-(--link-bg-hover)"
// 			onClick={onClose}
// 		>
// 			{children}
// 		</Link>
// 	);
// }
//
// export default function Header() {
// 	const [open, setOpen] = useState(false);
//
// 	const closeMenu = () => setOpen(false);
//
// 	const Logo = (
// 		<Link to="/" aria-label="Baroda Enterprise home">
// 			<div className="flex items-center gap-2">
// 				<Image
// 					src="/logo.jpg"
// 					layout="constrained"
// 					width={60}
// 					height={64}
// 					alt="Baroda Enterprise Logo"
// 				/>
// 				<div className="flex flex-col text-xs font-semibold text-gray-400">
// 					<span>Baroda</span>
// 					<span>Enterprise</span>
// 				</div>
// 			</div>
// 		</Link>
// 	);
//
// 	return (
// 		<header className="sticky top-0 z-50 border-b border-(--line) bg-(--header-bg)/95 px-4 backdrop-blur-lg">
// 			<nav className="page-wrap flex items-center justify-between gap-4 py-3">
// 				{Logo}
//
// 				{/* Desktop Navigation */}
// 				<div className="hidden xl:block">
// 					<NavigationMenu>
// 						<NavigationMenuList className="flex items-center gap-1 text-sm font-semibold">
// 							{/* Home */}
// 							<NavigationMenuItem>
// 								<NavigationMenuLink asChild>
// 									<Link
// 										to="/"
// 										className="nav-link"
// 										activeProps={{ className: "nav-link is-active" }}
// 									>
// 										Home
// 									</Link>
// 								</NavigationMenuLink>
// 							</NavigationMenuItem>
//
// 							{/* About */}
// 							<NavigationMenuItem>
// 								<NavigationMenuLink asChild>
// 									<Link
// 										to="/about"
// 										className="nav-link"
// 										activeProps={{ className: "nav-link is-active" }}
// 									>
// 										About Us
// 									</Link>
// 								</NavigationMenuLink>
// 							</NavigationMenuItem>
//
// 							{/* Products */}
// 							<NavigationMenuItem>
// 								<NavigationMenuTrigger>Products</NavigationMenuTrigger>
// 								<NavigationMenuContent>
// 									<ul className="grid gap-1 p-2 sm:w-70">
// 										{productItems.map((item) => (
// 											<li key={item.id}>
// 												<NavigationMenuLink asChild>
// 													<Link
// 														to={item.href}
// 														className="block rounded-xl px-4 py-3 text-sm text-(--ink) hover:bg-(--link-bg-hover)"
// 													>
// 														{item.name}
// 													</Link>
// 												</NavigationMenuLink>
// 											</li>
// 										))}
// 									</ul>
// 								</NavigationMenuContent>
// 							</NavigationMenuItem>
//
// 							{/* Existing Services */}
// 							<NavigationMenuItem>
// 								<NavigationMenuTrigger>Services</NavigationMenuTrigger>
// 								<NavigationMenuContent>
// 									<ul className="grid gap-1 p-2 sm:w-65">
// 										{serviceItems.map((item) => (
// 											<li key={item.id}>
// 												<NavigationMenuLink asChild>
// 													<Link
// 														to={item.href}
// 														className="block rounded-xl px-4 py-3 text-sm text-(--ink) hover:bg-(--link-bg-hover)"
// 													>
// 														{item.name}
// 													</Link>
// 												</NavigationMenuLink>
// 											</li>
// 										))}
// 									</ul>
// 								</NavigationMenuContent>
// 							</NavigationMenuItem>
//
// 							{/* Surveillance Systems */}
// 							<NavigationMenuItem>
// 								<NavigationMenuTrigger>
// 									Surveillance Systems
// 								</NavigationMenuTrigger>
// 								<NavigationMenuContent>
// 									<ul className="grid gap-1 p-2 sm:w-65">
// 										{surveillanceSystems.map((item) => (
// 											<li key={item.id}>
// 												<NavigationMenuLink asChild>
// 													<Link
// 														to={item.href}
// 														className="block rounded-xl px-4 py-3 text-sm text-(--ink) hover:bg-(--link-bg-hover)"
// 													>
// 														{item.name}
// 													</Link>
// 												</NavigationMenuLink>
// 											</li>
// 										))}
// 									</ul>
// 								</NavigationMenuContent>
// 							</NavigationMenuItem>
//
// 							{/* NEW: Fire Safety */}
// 							<NavigationMenuItem>
// 								<NavigationMenuTrigger className="gap-2">
// 									<Flame className="h-4 w-4 text-red-600" />
// 									Fire Safety
// 								</NavigationMenuTrigger>
//
// 								<NavigationMenuContent>
// 									<div className="grid w-[600px] grid-cols-2 gap-6 p-5">
// 										{fireSafetyGroups.map((group) => (
// 											<div key={group.title}>
// 												<div className="mb-3 flex items-center gap-2 border-b pb-2">
// 													<ShieldCheck className="h-4 w-4 text-red-600" />
// 													<h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
// 														{group.title}
// 													</h3>
// 												</div>
//
// 												<ul className="space-y-1">
// 													{group.items.map((item) => (
// 														<li key={item.href}>
// 															<NavigationMenuLink asChild>
// 																<a
// 																	href={item.href}
// 																	className="block rounded-lg p-3 transition-colors hover:bg-(--link-bg-hover)"
// 																>
// 																	<p className="text-sm font-semibold text-(--ink)">
// 																		{item.name}
// 																	</p>
// 																	<p className="mt-1 text-xs font-normal leading-relaxed text-muted-foreground">
// 																		{item.description}
// 																	</p>
// 																</a>
// 															</NavigationMenuLink>
// 														</li>
// 													))}
// 												</ul>
// 											</div>
// 										))}
// 									</div>
// 								</NavigationMenuContent>
// 							</NavigationMenuItem>
//
// 							{/* Contact */}
// 							<NavigationMenuItem>
// 								<NavigationMenuLink asChild>
// 									<Link to="/contact-us" className="nav-link">
// 										Contact Us
// 									</Link>
// 								</NavigationMenuLink>
// 							</NavigationMenuItem>
//
// 							<NavigationMenuViewport />
// 						</NavigationMenuList>
// 					</NavigationMenu>
// 				</div>
//
// 				{/* Desktop CTA */}
// 				<div className="hidden xl:block">
// 					<Button asChild size="sm">
// 						<Link to="/contact-us">Request a Quote</Link>
// 					</Button>
// 				</div>
//
// 				{/* Mobile Navigation */}
// 				<div className="xl:hidden">
// 					<Sheet open={open} onOpenChange={setOpen}>
// 						<SheetTrigger asChild>
// 							<Button
// 								className="rounded-lg p-2 hover:bg-(--link-bg-hover)"
// 								aria-label="Open navigation menu"
// 							>
// 								<Menu className="h-5 w-5" />
// 							</Button>
// 						</SheetTrigger>
//
// 						<SheetContent side="right" className="w-80 overflow-y-auto sm:w-96">
// 							<SheetHeader className="mb-5">
// 								<SheetTitle className="text-left text-base">
// 									Navigation
// 								</SheetTitle>
// 							</SheetHeader>
//
// 							<nav className="flex flex-col gap-1 text-sm font-semibold">
// 								{/* Home */}
// 								<Link
// 									to="/"
// 									className="nav-link rounded-xl px-3 py-2"
// 									activeProps={{
// 										className: "nav-link is-active rounded-xl px-3 py-2",
// 									}}
// 									onClick={closeMenu}
// 								>
// 									Home
// 								</Link>
//
// 								{/* About */}
// 								<Link
// 									to="/about"
// 									className="nav-link rounded-xl px-3 py-2"
// 									activeProps={{
// 										className: "nav-link is-active rounded-xl px-3 py-2",
// 									}}
// 									onClick={closeMenu}
// 								>
// 									About Us
// 								</Link>
//
// 								<Accordion type="multiple" className="w-full">
// 									{/* Products */}
// 									<AccordionItem value="products" className="border-none">
// 										<AccordionTrigger className="rounded-xl px-3 py-2 text-sm hover:bg-(--link-bg-hover) hover:no-underline">
// 											Products
// 										</AccordionTrigger>
//
// 										<AccordionContent className="pb-1">
// 											<ul className="flex flex-col gap-0.5 pl-2">
// 												{productItems.map((item) => (
// 													<li key={item.id}>
// 														<MobileNavLink href={item.href} onClose={closeMenu}>
// 															{item.name}
// 														</MobileNavLink>
// 													</li>
// 												))}
// 											</ul>
// 										</AccordionContent>
// 									</AccordionItem>
//
// 									{/* Existing Services */}
// 									<AccordionItem value="services" className="border-none">
// 										<AccordionTrigger className="rounded-xl px-3 py-2 text-sm hover:bg-(--link-bg-hover) hover:no-underline">
// 											Services
// 										</AccordionTrigger>
//
// 										<AccordionContent className="pb-1">
// 											<ul className="flex flex-col gap-0.5 pl-2">
// 												{serviceItems.map((item) => (
// 													<li key={item.id}>
// 														<MobileNavLink href={item.href} onClose={closeMenu}>
// 															{item.name}
// 														</MobileNavLink>
// 													</li>
// 												))}
// 											</ul>
// 										</AccordionContent>
// 									</AccordionItem>
//
// 									{/* Surveillance */}
// 									<AccordionItem value="surveillance" className="border-none">
// 										<AccordionTrigger className="rounded-xl px-3 py-2 text-sm hover:bg-(--link-bg-hover) hover:no-underline">
// 											Surveillance Systems
// 										</AccordionTrigger>
//
// 										<AccordionContent className="pb-1">
// 											<ul className="flex flex-col gap-0.5 pl-2">
// 												{surveillanceSystems.map((item) => (
// 													<li key={item.id}>
// 														<MobileNavLink href={item.href} onClose={closeMenu}>
// 															{item.name}
// 														</MobileNavLink>
// 													</li>
// 												))}
// 											</ul>
// 										</AccordionContent>
// 									</AccordionItem>
//
// 									{/* NEW: Fire Safety */}
// 									<AccordionItem value="fire-safety" className="border-none">
// 										<AccordionTrigger className="rounded-xl px-3 py-2 text-sm hover:bg-red-50 hover:text-red-700 hover:no-underline dark:hover:bg-red-950/30">
// 											<span className="flex items-center gap-2">
// 												<Flame className="h-4 w-4 text-red-600" />
// 												Fire Safety
// 											</span>
// 										</AccordionTrigger>
//
// 										<AccordionContent className="pb-2">
// 											<div className="space-y-4 pl-2">
// 												{fireSafetyGroups.map((group) => (
// 													<div key={group.title}>
// 														<p className="px-4 pb-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
// 															{group.title}
// 														</p>
//
// 														<div className="flex flex-col gap-0.5">
// 															{group.items.map((item) => (
// 																<a
// 																	key={item.href}
// 																	href={item.href}
// 																	onClick={closeMenu}
// 																	className="block rounded-xl px-4 py-2.5 text-sm font-normal text-(--ink) hover:bg-(--link-bg-hover)"
// 																>
// 																	{item.name}
// 																</a>
// 															))}
// 														</div>
// 													</div>
// 												))}
// 											</div>
// 										</AccordionContent>
// 									</AccordionItem>
// 								</Accordion>
//
// 								{/* Contact */}
// 								<Link
// 									to="/contact-us"
// 									className="rounded-xl px-3 py-2"
// 									onClick={closeMenu}
// 								>
// 									Contact Us
// 								</Link>
//
// 								{/* Mobile CTA */}
// 								<div className="mt-4 border-t pt-4">
// 									<Button asChild className="w-full">
// 										<Link to="/contact-us" onClick={closeMenu}>
// 											Request a Quote
// 										</Link>
// 									</Button>
// 								</div>
// 							</nav>
// 						</SheetContent>
// 					</Sheet>
// 				</div>
// 			</nav>
// 		</header>
// 	);
// }
