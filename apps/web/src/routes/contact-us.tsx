import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	Clock3,
	Flame,
	Mail,
	MapPin,
	MessageSquareText,
	Phone,
	ShieldCheck,
	Workflow,
} from "lucide-react";
import type { FormEvent } from "react";
import { Button } from "#/components/ui/button";
import {
	COMPANY_ADDRESS,
	COMPANY_EMAIL,
	COMPANY_NAME,
	COMPANY_PHONE,
} from "#/lib/constants";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact-us")({
	component: ContactUsPage,
});

const phoneHref = `tel:${COMPANY_PHONE.replace(/[^\d+]/g, "")}`;
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(COMPANY_ADDRESS)}&output=embed`;

const contactMethods = [
	{
		icon: Phone,
		label: "Call our team",
		value: COMPANY_PHONE,
		href: phoneHref,
		description: "Speak with us about your requirements.",
	},
	{
		icon: Mail,
		label: "Send us an email",
		value: COMPANY_EMAIL,
		href: `mailto:${COMPANY_EMAIL}`,
		description: "Share your project details or ask a question.",
	},
];

const businessAreas = [
	{
		icon: Workflow,
		title: "IT & Technology",
		description:
			"Discuss IT infrastructure, printing and imaging, system integration, software and workplace technology requirements.",
	},
	{
		icon: ShieldCheck,
		title: "Surveillance & Security",
		description:
			"Talk to us about surveillance systems, security equipment and connected building solutions.",
	},
	{
		icon: Flame,
		title: "Fire Safety Solutions",
		description:
			"Enquire about fire detection, alarms, suppression, hydrants, sprinklers and fire safety installation for buildings.",
	},
];

function handleEnquirySubmit(event: FormEvent<HTMLFormElement>) {
	event.preventDefault();

	const formData = new FormData(event.currentTarget);
	const details = Array.from(formData.entries())
		.map(([key, value]) => `${key}: ${String(value)}`)
		.join("\n");
	const subject = encodeURIComponent("Website enquiry - Baroda Enterprise");
	const body = encodeURIComponent(details);

	// Email-client fallback. Replace with a server function/API for direct submission.
	window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
}

function ContactUsPage() {
	return (
		<main className="pb-20">
			{/* Hero */}
			<section className="page-wrap pt-10 sm:pt-14">
				<div className="relative overflow-hidden rounded-3xl border border-(--line) bg-[linear-gradient(135deg,var(--header-bg),var(--accent-light))] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
					<div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border-[40px] border-primary/5" />
					<div className="pointer-events-none absolute -bottom-28 right-36 h-64 w-64 rounded-full border-[32px] border-red-500/5" />

					<div className="relative z-10 max-w-3xl">
						<Badge
							variant="outline"
							className="mb-5 border-primary/30 bg-background/70 px-3 py-1"
						>
							Let's start a conversation
						</Badge>
						<h1 className="text-4xl font-bold leading-tight tracking-tight text-(--ink) sm:text-5xl lg:text-6xl">
							Have a project in mind?{" "}
							<span className="text-primary">Let's talk.</span>
						</h1>
						<p className="mt-5 max-w-2xl text-base leading-7 text-(--ink-soft) sm:text-lg">
							Whether you are planning an IT upgrade, need integrated security
							solutions, or are looking for fire protection for a residential,
							commercial or industrial building, our team is ready to understand
							your requirements.
						</p>
						<div className="mt-8 flex flex-wrap gap-3">
							<Button asChild size="lg">
								<a href="#enquiry-form">
									Send an Enquiry <ArrowRight className="ml-2 h-4 w-4" />
								</a>
							</Button>
							<Button asChild variant="outline" size="lg">
								<a href={phoneHref}>
									<Phone className="mr-2 h-4 w-4" /> Call Us
								</a>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Contact details and form */}
			<section className="page-wrap mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
				<div className="space-y-6">
					<div>
						<p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
							Contact information
						</p>
						<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
							Get in touch with our team
						</h2>
						<p className="mt-3 text-sm leading-6 text-(--ink-soft)">
							Reach out using the details below or send us a message through the
							enquiry form. We'll use your project information to direct your
							request to the appropriate team.
						</p>
					</div>

					<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
						{contactMethods.map(
							({ icon: Icon, label, value, href, description }) => (
								<Card key={label} className="border-(--line) shadow-none">
									<CardContent className="flex gap-4 p-5">
										<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
											<Icon className="h-5 w-5" />
										</div>
										<div className="min-w-0">
											<p className="text-sm font-semibold text-(--ink)">
												{label}
											</p>
											<a
												href={href}
												className="mt-1 block break-words text-sm font-medium text-primary hover:underline"
											>
												{value}
											</a>
											<p className="mt-1 text-xs leading-5 text-(--ink-soft)">
												{description}
											</p>
										</div>
									</CardContent>
								</Card>
							),
						)}
					</div>

					<Card className="border-(--line) shadow-none">
						<CardContent className="flex gap-4 p-5">
							<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
								<MapPin className="h-5 w-5" />
							</div>
							<div>
								<p className="text-sm font-semibold text-(--ink)">
									Visit our office
								</p>
								<p className="mt-1 text-sm leading-6 text-(--ink-soft)">
									{COMPANY_ADDRESS}
								</p>
							</div>
						</CardContent>
					</Card>

					<div className="flex items-start gap-3 rounded-2xl border border-(--line) p-5">
						<Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
						<div>
							<p className="text-sm font-semibold text-(--ink)">
								Enquiry assistance
							</p>
							<p className="mt-1 text-sm leading-6 text-(--ink-soft)">
								Share your preferred contact details and a short description of
								the project. Our team can follow up to understand the next
								steps.
							</p>
						</div>
					</div>
				</div>

				{/* Enquiry form */}
				<Card
					id="enquiry-form"
					className="scroll-mt-28 border-(--line) shadow-sm"
				>
					<CardHeader className="border-b border-(--line) px-6 py-6 sm:px-8">
						<Badge variant="secondary" className="mb-2 w-fit">
							<MessageSquareText className="mr-1.5 h-3.5 w-3.5" /> Project
							enquiry
						</Badge>
						<CardTitle className="text-2xl text-(--ink)">
							Tell us what you need
						</CardTitle>
						<CardDescription className="text-sm leading-6">
							Fill in the details below so we can understand your requirement.
						</CardDescription>
					</CardHeader>
					<CardContent className="px-6 py-6 sm:px-8 sm:py-8">
						<form className="space-y-6" onSubmit={handleEnquirySubmit}>
							<div className="grid gap-5 sm:grid-cols-2">
								<div className="space-y-2">
									<Label htmlFor="fullName">
										Full name <span className="text-destructive">*</span>
									</Label>
									<Input
										id="fullName"
										name="fullName"
										placeholder="Your name"
										autoComplete="name"
										required
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="company">Company / Organisation</Label>
									<Input
										id="company"
										name="company"
										placeholder="Company name"
										autoComplete="organization"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="email">
										Email address <span className="text-destructive">*</span>
									</Label>
									<Input
										id="email"
										name="email"
										type="email"
										placeholder="you@example.com"
										autoComplete="email"
										required
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="phone">
										Phone number <span className="text-destructive">*</span>
									</Label>
									<Input
										id="phone"
										name="phone"
										type="tel"
										placeholder="Your contact number"
										autoComplete="tel"
										required
									/>
								</div>
							</div>

							<div className="grid gap-5 sm:grid-cols-2">
								<div className="space-y-2">
									<Label htmlFor="businessArea">
										I'm enquiring about{" "}
										<span className="text-destructive">*</span>
									</Label>
									<Select name="businessArea" required>
										<SelectTrigger id="businessArea" className="w-full">
											<SelectValue placeholder="Select a business area" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="it-technology">
												IT & Technology
											</SelectItem>
											<SelectItem value="products">
												Products & Equipment
											</SelectItem>
											<SelectItem value="system-integration">
												System Integration
											</SelectItem>
											<SelectItem value="surveillance">
												Surveillance & Security
											</SelectItem>
											<SelectItem value="fire-safety">
												Fire Safety Solutions
											</SelectItem>
											<SelectItem value="other">Other</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="space-y-2">
									<Label htmlFor="location">Project location</Label>
									<Input
										id="location"
										name="location"
										placeholder="City / area"
										autoComplete="address-level2"
									/>
								</div>
							</div>

							<div className="space-y-2">
								<Label htmlFor="projectType">Building / project type</Label>
								<Select name="projectType">
									<SelectTrigger id="projectType" className="w-full">
										<SelectValue placeholder="Select project type (optional)" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="residential">Residential</SelectItem>
										<SelectItem value="industrial">
											Industrial / Factory
										</SelectItem>
										<SelectItem value="commercial">
											Commercial / Office
										</SelectItem>
										<SelectItem value="warehouse">Warehouse</SelectItem>
										<SelectItem value="institutional">
											Hospital / School / Institution
										</SelectItem>
										<SelectItem value="other">Other</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="space-y-2">
								<Label htmlFor="message">
									Project details <span className="text-destructive">*</span>
								</Label>
								<Textarea
									id="message"
									name="message"
									placeholder="Tell us about your requirements, the services you're interested in, project size or expected timeline..."
									className="min-h-36 resize-y"
									required
								/>
							</div>

							<p className="text-xs leading-5 text-(--ink-soft)">
								By submitting this enquiry, you agree that Baroda Enterprise may
								contact you about your request.
							</p>

							<Button type="submit" size="lg" className="w-full sm:w-auto">
								Submit Enquiry <ArrowRight className="ml-2 h-4 w-4" />
							</Button>
							{/* The current fallback opens the visitor's email application. */}
						</form>
					</CardContent>
				</Card>
			</section>

			{/* Business divisions */}
			<section className="page-wrap mt-20">
				<div className="mx-auto max-w-2xl text-center">
					<p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
						How we can help
					</p>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink) sm:text-4xl">
						One point of contact for different business needs
					</h2>
					<p className="mt-3 text-sm leading-6 text-(--ink-soft)">
						Choose the area that best matches your requirement. Not sure where
						to start? Send us a general enquiry and tell us about your project.
					</p>
				</div>

				<div className="mt-8 grid gap-4 md:grid-cols-3">
					{businessAreas.map(({ icon: Icon, title, description }, index) => (
						<Card
							key={title}
							className="border-(--line) shadow-none transition-shadow hover:shadow-md"
						>
							<CardHeader>
								<div
									className={`mb-2 flex h-12 w-12 items-center justify-center rounded-xl ${index === 2 ? "bg-red-500/10 text-red-600" : "bg-primary/10 text-primary"}`}
								>
									<Icon className="h-6 w-6" />
								</div>
								<CardTitle className="text-lg text-(--ink)">{title}</CardTitle>
								<CardDescription className="leading-6">
									{description}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<a
									href="#enquiry-form"
									className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
								>
									Make an enquiry <ArrowRight className="ml-1.5 h-4 w-4" />
								</a>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* Map and closing CTA */}
			<section className="page-wrap mt-20 grid gap-6 lg:grid-cols-[1fr_1fr]">
				<div className="overflow-hidden rounded-2xl border border-(--line) bg-muted">
					<iframe
						title={`${COMPANY_NAME} office location`}
						src={mapSrc}
						className="h-72 w-full border-0 sm:h-80"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						allowFullScreen
					/>
				</div>

				<div className="flex flex-col justify-center rounded-2xl border border-(--line) bg-(--header-bg) p-7 sm:p-10">
					<Badge variant="outline" className="mb-4 w-fit">
						Baroda Enterprise
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-(--ink)">
						Let's find the right solution for your project.
					</h2>
					<p className="mt-3 text-sm leading-6 text-(--ink-soft)">
						From technology and connected systems to fire safety installations,
						share your goals with us and start a conversation with our team.
					</p>
					<div className="mt-6 flex flex-wrap gap-3">
						<Button asChild>
							<a href={`mailto:${COMPANY_EMAIL}`}>Email our team</a>
						</Button>
						<Button asChild variant="outline">
							<Link to="/">Back to Home</Link>
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
}
