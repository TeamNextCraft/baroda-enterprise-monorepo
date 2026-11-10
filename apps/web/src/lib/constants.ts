import type { Product, Service, SurveillanceSystem } from "./types";

export const COMPANY_NAME = "Baroda Enterprise";
export const COMPANY_EMAIL = "info@barodaenterprise.in";
export const COMPANY_PHONE = "+91 9157510030";
export const COMPANY_PHONE_2 = "+91 9909453668";
export const COMPANY_ADDRESS =
	"204 2nd Floor, Unique Trade Center, Below Kansar Hotel, Opp Surya Hotel, Sayajigunj, Vadodara - 390020, Gujarat - India";
export const COMPANY_ADDRESS_ARRAY = [
	"204 2nd Floor, Unique Trade Center",
	"Below Kansar Hotel, Opp Surya Hotel, Sayajigunj",
	"Vadodara - 390020, Gujarat - India",
];

export const productItems: Product[] = [
	{
		id: 1,
		name: "Printing & Imaging",
		image: "/images/navigation/products/printing-and-imaging.jpg",
		href: "/products/printing-and-imaging/",
		description:
			"Printers, multifunction devices and document imaging solutions for the workplace.",
	},
	{
		id: 2,
		name: "System Integrations",
		image: "/images/navigation/products/system-integrations.jpg",
		href: "/products/system-integrations/",
		description:
			"Connect business systems, applications and infrastructure into a coordinated environment.",
	},
	{
		id: 3,
		name: "Software Licensing",
		image: "/images/navigation/products/software-licensing.jpg",
		href: "/products/software-licensing/",
		description:
			"Software procurement, licensing guidance, renewals and deployment support.",
	},
	{
		id: 4,
		name: "Hardware Components",
		image: "/images/navigation/products/hardware-components.jpg",
		href: "/products/hardware-components/",
		description:
			"Business computers, servers, networking equipment, peripherals and components.",
	},
];

export const serviceItems: Service[] = [
	{
		id: 1,
		name: "Annual Maintenance Contract (AMC)",
		image: "/images/navigation/services/amc.jpg",
		description:
			"Planned maintenance and technical support for covered IT equipment and systems.",
		href: "/services/amc/",
	},
	{
		id: 2,
		name: "Core Networking & Rack Solutions",
		image: "/images/navigation/services/core-networking.jpg",
		description:
			"Structured cabling, network equipment, racks and business connectivity solutions.",
		href: "/services/core-networking/",
	},
	{
		id: 3,
		name: "IT Infrastructure Management",
		image: "/images/navigation/services/it-infrastructure.jpg",
		description:
			"Server, storage, endpoint and hybrid infrastructure planning and implementation.",
		href: "/services/it-infrastructure/",
	},
	{
		id: 4,
		name: "Backup Solutions",
		image: "/images/navigation/services/backup-solutions.jpg",
		description:
			"Data backup planning, implementation and recovery-readiness support.",
		href: "/services/backup-solutions/",
	},
	{
		id: 5,
		name: "Enterprise Security",
		image: "/images/navigation/services/enterprise-security.jpg",
		description:
			"Network, endpoint and access protection for business IT environments.",
		href: "/services/enterprise-security/",
	},
];

export const surveillanceSystems: SurveillanceSystem[] = [
	{
		id: 1,
		name: "CCTV Solutions",
		image: "/images/navigation/surveillance/cctv-solutions.jpg",
		description:
			"Camera systems, recording equipment and video coverage planning for properties.",
		href: "/surveillance/cctv-solutions/",
	},
	{
		id: 2,
		name: "Access Control Systems",
		image: "/images/navigation/surveillance/access-control.jpg",
		description:
			"Manage entry points with electronic access readers, controllers and credentials.",
		href: "/surveillance/access-control-systems/",
	},
	{
		id: 3,
		name: "Biometric & RFID Solutions",
		image: "/images/navigation/surveillance/biometric-rfid.jpg",
		description:
			"Biometric and RFID-based identification for access and workforce workflows.",
		href: "/surveillance/biometric-rfid-solutions/",
	},
	{
		id: 4,
		name: "Network Surveillance Solutions",
		image: "/images/navigation/surveillance/network-surveillance.jpg",
		description:
			"IP cameras, network video recording and connected surveillance infrastructure.",
		href: "/surveillance/network-surveillance-solutions/",
	},
];

export const fireSafetyGroups = [
	{
		title: "Building Solutions",
		items: [
			{
				name: "Residential Fire Safety",
				image: "/images/navigation/fire-safety/residential.jpg",
				href: "/fire-safety/residential",
				description:
					"Fire protection planning for apartments, homes and housing societies.",
			},
			{
				name: "Industrial Fire Safety",
				image: "/images/navigation/fire-safety/industrial.jpg",
				href: "/fire-safety/industrial",
				description:
					"Fire protection systems for factories, production areas and warehouses.",
			},
			{
				name: "Commercial Fire Safety",
				image: "/images/navigation/fire-safety/commercial.jpg",
				href: "/fire-safety/commercial",
				description:
					"Fire and life-safety solutions for offices and commercial properties.",
			},
		],
	},
	{
		title: "Systems & Services",
		items: [
			{
				name: "Fire Detection & Alarm",
				image: "/images/navigation/fire-safety/fire-detection.jpg",
				href: "/fire-safety/fire-detection",
				description:
					"Detection devices, alarm panels and occupant notification systems.",
			},
			{
				name: "Fire Suppression Systems",
				image: "/images/navigation/fire-safety/fire-suppression.jpg",
				href: "/fire-safety/fire-suppression",
				description:
					"Water-based and specialist suppression options for assessed fire hazards.",
			},
			{
				name: "Fire Hydrant & Sprinkler",
				image: "/images/navigation/fire-safety/hydrant-sprinkler.jpg",
				href: "/fire-safety/hydrant-sprinkler",
				description:
					"Hydrant networks, sprinkler piping and associated fire-water equipment.",
			},
			{
				name: "Fire Extinguishers",
				image: "/images/navigation/fire-safety/fire-extinguishers.jpg",
				href: "/fire-safety/fire-extinguishers",
				description:
					"Portable fire extinguishers selected for the relevant fire risks.",
			},
			{
				name: "Maintenance & Inspection",
				image: "/images/navigation/fire-safety/maintenance.jpg",
				href: "/fire-safety/maintenance",
				description:
					"Inspection, testing and maintenance support for installed fire systems.",
			},
		],
	},
];
