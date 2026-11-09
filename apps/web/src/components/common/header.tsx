import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { Flame, Menu, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "#/components/ui/button";
import {
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

// Fire safety navigation
const fireSafetyGroups = [
	{
		title: "Building Solutions",
		items: [
			{
				name: "Residential Fire Safety",
				href: "/fire-safety/residential",
				description:
					"Fire protection for apartments, homes and housing societies.",
			},
			{
				name: "Industrial Fire Safety",
				href: "/fire-safety/industrial",
				description: "Fire protection systems for factories and warehouses.",
			},
			{
				name: "Commercial Fire Safety",
				href: "/fire-safety/commercial",
				description:
					"Safety solutions for offices, hospitals and commercial spaces.",
			},
		],
	},
	{
		title: "Systems & Services",
		items: [
			{
				name: "Fire Detection & Alarm",
				href: "/fire-safety/fire-detection",
				description: "Early fire detection and alarm systems.",
			},
			{
				name: "Fire Suppression Systems",
				href: "/fire-safety/fire-suppression",
				description:
					"Automatic systems designed to control and suppress fires.",
			},
			{
				name: "Fire Hydrant & Sprinkler",
				href: "/fire-safety/hydrant-sprinkler",
				description: "Building-wide water-based fire protection.",
			},
			{
				name: "Fire Extinguishers",
				href: "/fire-safety/fire-extinguishers",
				description: "Fire extinguisher supply and installation.",
			},
			{
				name: "Maintenance & Inspection",
				href: "/fire-safety/maintenance",
				description: "Fire protection system testing and maintenance.",
			},
		],
	},
];

// Reusable mobile submenu link
function MobileNavLink({
	href,
	children,
	onClose,
}: {
	href: string;
	children: React.ReactNode;
	onClose: () => void;
}) {
	return (
		<Link
			to={href as never}
			className="block rounded-xl px-4 py-2.5 text-sm font-normal text-(--ink) hover:bg-(--link-bg-hover)"
			onClick={onClose}
		>
			{children}
		</Link>
	);
}

export default function Header() {
	const [open, setOpen] = useState(false);

	const closeMenu = () => setOpen(false);

	const Logo = (
		<Link to="/" aria-label="Baroda Enterprise home">
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
	);

	return (
		<header className="sticky top-0 z-50 border-b border-(--line) bg-(--header-bg)/95 px-4 backdrop-blur-lg">
			<nav className="page-wrap flex items-center justify-between gap-4 py-3">
				{Logo}

				{/* Desktop Navigation */}
				<div className="hidden xl:block">
					<NavigationMenu>
						<NavigationMenuList className="flex items-center gap-1 text-sm font-semibold">
							{/* Home */}
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

							{/* About */}
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

							{/* Products */}
							<NavigationMenuItem>
								<NavigationMenuTrigger>Products</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-1 p-2 sm:w-70">
										{productItems.map((item) => (
											<li key={item.id}>
												<NavigationMenuLink asChild>
													<Link
														to={item.href}
														className="block rounded-xl px-4 py-3 text-sm text-(--ink) hover:bg-(--link-bg-hover)"
													>
														{item.name}
													</Link>
												</NavigationMenuLink>
											</li>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							{/* Existing Services */}
							<NavigationMenuItem>
								<NavigationMenuTrigger>Services</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-1 p-2 sm:w-65">
										{serviceItems.map((item) => (
											<li key={item.id}>
												<NavigationMenuLink asChild>
													<Link
														to={item.href}
														className="block rounded-xl px-4 py-3 text-sm text-(--ink) hover:bg-(--link-bg-hover)"
													>
														{item.name}
													</Link>
												</NavigationMenuLink>
											</li>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							{/* Surveillance Systems */}
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									Surveillance Systems
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-1 p-2 sm:w-65">
										{surveillanceSystems.map((item) => (
											<li key={item.id}>
												<NavigationMenuLink asChild>
													<Link
														to={item.href}
														className="block rounded-xl px-4 py-3 text-sm text-(--ink) hover:bg-(--link-bg-hover)"
													>
														{item.name}
													</Link>
												</NavigationMenuLink>
											</li>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							{/* NEW: Fire Safety */}
							<NavigationMenuItem>
								<NavigationMenuTrigger className="gap-2">
									<Flame className="h-4 w-4 text-red-600" />
									Fire Safety
								</NavigationMenuTrigger>

								<NavigationMenuContent>
									<div className="grid w-[600px] grid-cols-2 gap-6 p-5">
										{fireSafetyGroups.map((group) => (
											<div key={group.title}>
												<div className="mb-3 flex items-center gap-2 border-b pb-2">
													<ShieldCheck className="h-4 w-4 text-red-600" />
													<h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
														{group.title}
													</h3>
												</div>

												<ul className="space-y-1">
													{group.items.map((item) => (
														<li key={item.href}>
															<NavigationMenuLink asChild>
																<a
																	href={item.href}
																	className="block rounded-lg p-3 transition-colors hover:bg-(--link-bg-hover)"
																>
																	<p className="text-sm font-semibold text-(--ink)">
																		{item.name}
																	</p>
																	<p className="mt-1 text-xs font-normal leading-relaxed text-muted-foreground">
																		{item.description}
																	</p>
																</a>
															</NavigationMenuLink>
														</li>
													))}
												</ul>
											</div>
										))}
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>

							{/* Contact */}
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link to="/contact-us" className="nav-link">
										Contact Us
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuViewport />
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				{/* Desktop CTA */}
				<div className="hidden xl:block">
					<Button asChild size="sm">
						<Link to="/contact-us">Request a Quote</Link>
					</Button>
				</div>

				{/* Mobile Navigation */}
				<div className="xl:hidden">
					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild>
							<Button
								className="rounded-lg p-2 hover:bg-(--link-bg-hover)"
								aria-label="Open navigation menu"
							>
								<Menu className="h-5 w-5" />
							</Button>
						</SheetTrigger>

						<SheetContent side="right" className="w-80 overflow-y-auto sm:w-96">
							<SheetHeader className="mb-5">
								<SheetTitle className="text-left text-base">
									Navigation
								</SheetTitle>
							</SheetHeader>

							<nav className="flex flex-col gap-1 text-sm font-semibold">
								{/* Home */}
								<Link
									to="/"
									className="nav-link rounded-xl px-3 py-2"
									activeProps={{
										className: "nav-link is-active rounded-xl px-3 py-2",
									}}
									onClick={closeMenu}
								>
									Home
								</Link>

								{/* About */}
								<Link
									to="/about"
									className="nav-link rounded-xl px-3 py-2"
									activeProps={{
										className: "nav-link is-active rounded-xl px-3 py-2",
									}}
									onClick={closeMenu}
								>
									About Us
								</Link>

								<Accordion type="multiple" className="w-full">
									{/* Products */}
									<AccordionItem value="products" className="border-none">
										<AccordionTrigger className="rounded-xl px-3 py-2 text-sm hover:bg-(--link-bg-hover) hover:no-underline">
											Products
										</AccordionTrigger>

										<AccordionContent className="pb-1">
											<ul className="flex flex-col gap-0.5 pl-2">
												{productItems.map((item) => (
													<li key={item.id}>
														<MobileNavLink href={item.href} onClose={closeMenu}>
															{item.name}
														</MobileNavLink>
													</li>
												))}
											</ul>
										</AccordionContent>
									</AccordionItem>

									{/* Existing Services */}
									<AccordionItem value="services" className="border-none">
										<AccordionTrigger className="rounded-xl px-3 py-2 text-sm hover:bg-(--link-bg-hover) hover:no-underline">
											Services
										</AccordionTrigger>

										<AccordionContent className="pb-1">
											<ul className="flex flex-col gap-0.5 pl-2">
												{serviceItems.map((item) => (
													<li key={item.id}>
														<MobileNavLink href={item.href} onClose={closeMenu}>
															{item.name}
														</MobileNavLink>
													</li>
												))}
											</ul>
										</AccordionContent>
									</AccordionItem>

									{/* Surveillance */}
									<AccordionItem value="surveillance" className="border-none">
										<AccordionTrigger className="rounded-xl px-3 py-2 text-sm hover:bg-(--link-bg-hover) hover:no-underline">
											Surveillance Systems
										</AccordionTrigger>

										<AccordionContent className="pb-1">
											<ul className="flex flex-col gap-0.5 pl-2">
												{surveillanceSystems.map((item) => (
													<li key={item.id}>
														<MobileNavLink href={item.href} onClose={closeMenu}>
															{item.name}
														</MobileNavLink>
													</li>
												))}
											</ul>
										</AccordionContent>
									</AccordionItem>

									{/* NEW: Fire Safety */}
									<AccordionItem value="fire-safety" className="border-none">
										<AccordionTrigger className="rounded-xl px-3 py-2 text-sm hover:bg-red-50 hover:text-red-700 hover:no-underline dark:hover:bg-red-950/30">
											<span className="flex items-center gap-2">
												<Flame className="h-4 w-4 text-red-600" />
												Fire Safety
											</span>
										</AccordionTrigger>

										<AccordionContent className="pb-2">
											<div className="space-y-4 pl-2">
												{fireSafetyGroups.map((group) => (
													<div key={group.title}>
														<p className="px-4 pb-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
															{group.title}
														</p>

														<div className="flex flex-col gap-0.5">
															{group.items.map((item) => (
																<a
																	key={item.href}
																	href={item.href}
																	onClick={closeMenu}
																	className="block rounded-xl px-4 py-2.5 text-sm font-normal text-(--ink) hover:bg-(--link-bg-hover)"
																>
																	{item.name}
																</a>
															))}
														</div>
													</div>
												))}
											</div>
										</AccordionContent>
									</AccordionItem>
								</Accordion>

								{/* Contact */}
								<Link
									to="/contact-us"
									className="rounded-xl px-3 py-2"
									onClick={closeMenu}
								>
									Contact Us
								</Link>

								{/* Mobile CTA */}
								<div className="mt-4 border-t pt-4">
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
// import { Menu } from "lucide-react";
// import { useState } from "react";
// import {
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
// 	NavigationMenuIndicator,
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
// // Reusable mobile submenu link
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
// 			to={href}
// 			className="block rounded-xl px-4 py-2.5 text-sm text-(--ink) hover:bg-(--link-bg-hover)"
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
// 	const Logo = (
// 		<Link to="/">
// 			<div className="flex items-center gap-2">
// 				<Image
// 					src="/logo.jpg"
// 					layout="constrained"
// 					width={60}
// 					height={64}
// 					alt="Logo"
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
// 		<header className="sticky top-0 z-50 border-b border-(--line) bg-(--header-bg) px-4 backdrop-blur-lg">
// 			<nav className="page-wrap flex items-center justify-between gap-x-3 py-3 sm:py-4">
// 				{Logo}
//
// 				{/* ── Desktop Nav (md and above) ── */}
// 				<div className="hidden text-sm font-semibold md:block">
// 					<NavigationMenu>
// 						<NavigationMenuList className="flex items-center gap-x-2">
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
// 							<NavigationMenuItem>
// 								<NavigationMenuLink asChild>
// 									<Link to="/contact-us" className="nav-link">
// 										Contact Us
// 									</Link>
// 								</NavigationMenuLink>
// 							</NavigationMenuItem>
//
// 							<NavigationMenuIndicator />
// 						</NavigationMenuList>
// 						<NavigationMenuViewport />
// 					</NavigationMenu>
// 				</div>
//
// 				{/* ── Mobile Hamburger (below md) ── */}
// 				<div className="md:hidden">
// 					<Sheet open={open} onOpenChange={setOpen}>
// 						<SheetTrigger asChild>
// 							<button
// 								className="rounded-lg p-2 hover:bg-(--link-bg-hover)"
// 								aria-label="Open navigation menu"
// 							>
// 								<Menu className="h-5 w-5" />
// 							</button>
// 						</SheetTrigger>
//
// 						<SheetContent side="right" className="w-72 overflow-y-auto sm:w-80">
// 							<SheetHeader className="mb-4">
// 								<SheetTitle className="text-left text-base">Menu</SheetTitle>
// 							</SheetHeader>
//
// 							<nav className="flex flex-col gap-1 text-sm font-semibold">
// 								{/* Flat links */}
// 								<Link
// 									to="/"
// 									className="nav-link rounded-xl px-3 py-2"
// 									activeProps={{
// 										className: "nav-link is-active rounded-xl px-3 py-2",
// 									}}
// 									onClick={() => setOpen(false)}
// 								>
// 									Home
// 								</Link>
// 								<Link
// 									to="/about"
// 									className="nav-link rounded-xl px-3 py-2"
// 									activeProps={{
// 										className: "nav-link is-active rounded-xl px-3 py-2",
// 									}}
// 									onClick={() => setOpen(false)}
// 								>
// 									About Us
// 								</Link>
//
// 								{/* Expandable submenus */}
// 								<Accordion type="multiple" className="w-full">
// 									<AccordionItem value="products" className="border-none">
// 										<AccordionTrigger className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-(--link-bg-hover) hover:no-underline">
// 											Products
// 										</AccordionTrigger>
// 										<AccordionContent className="pb-1">
// 											<ul className="flex flex-col gap-0.5 pl-2">
// 												{productItems.map((item) => (
// 													<li key={item.id}>
// 														<MobileNavLink
// 															href={item.href}
// 															onClose={() => setOpen(false)}
// 														>
// 															{item.name}
// 														</MobileNavLink>
// 													</li>
// 												))}
// 											</ul>
// 										</AccordionContent>
// 									</AccordionItem>
//
// 									<AccordionItem value="services" className="border-none">
// 										<AccordionTrigger className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-(--link-bg-hover) hover:no-underline">
// 											Services
// 										</AccordionTrigger>
// 										<AccordionContent className="pb-1">
// 											<ul className="flex flex-col gap-0.5 pl-2">
// 												{serviceItems.map((item) => (
// 													<li key={item.id}>
// 														<MobileNavLink
// 															href={item.href}
// 															onClose={() => setOpen(false)}
// 														>
// 															{item.name}
// 														</MobileNavLink>
// 													</li>
// 												))}
// 											</ul>
// 										</AccordionContent>
// 									</AccordionItem>
//
// 									<AccordionItem value="surveillance" className="border-none">
// 										<AccordionTrigger className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-(--link-bg-hover) hover:no-underline">
// 											Surveillance Systems
// 										</AccordionTrigger>
// 										<AccordionContent className="pb-1">
// 											<ul className="flex flex-col gap-0.5 pl-2">
// 												{surveillanceSystems.map((item) => (
// 													<li key={item.id}>
// 														<MobileNavLink
// 															href={item.href}
// 															onClose={() => setOpen(false)}
// 														>
// 															{item.name}
// 														</MobileNavLink>
// 													</li>
// 												))}
// 											</ul>
// 										</AccordionContent>
// 									</AccordionItem>
// 								</Accordion>
//
// 								{/* Contact */}
// 								<Link
// 									to="/contact-us"
// 									className="nav-link rounded-xl px-3 py-2"
// 									onClick={() => setOpen(false)}
// 								>
// 									Contact Us
// 								</Link>
// 							</nav>
// 						</SheetContent>
// 					</Sheet>
// 				</div>
// 			</nav>
// 		</header>
// 	);
// }
