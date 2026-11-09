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
		image: "/images/product1.jpg",
		href: "/products/printing-and-imaging/",
		description: "Description for Product 1",
	},
	{
		id: 2,
		name: "System Integrations",
		image: "/images/product2.jpg",
		href: "/products/system-integrations/",
		description: "Description for Product 2",
	},
	{
		id: 3,
		name: "Software Licensing",
		image: "/images/product3.jpg",
		href: "/products/software-licensing/",
		description: "Description for Product 3",
	},
	{
		id: 4,
		name: "Hardware Components",
		image: "/images/product4.jpg",
		href: "/products/hardware-components/",
		description: "Description for Product 4",
	},
];

export const serviceItems: Service[] = [
	{
		id: 1,
		name: "Annual Maintenance Contract (AMC)",
		description: "Description for Service 1",
		href: "/services/amc/",
	},
	{
		id: 2,
		name: "Core Networking & Rack Solutions",
		description: "Description for Service 2",
		href: "/services/core-networking/",
	},
	{
		id: 3,
		name: "IT Infrastructure Management",
		description: "Description for Service 3",
		href: "/services/it-infrastructure/",
	},
	{
		id: 4,
		name: "Backup Solutions",
		description: "Description for Service 4",
		href: "/services/backup-solutions/",
	},
	{
		id: 5,
		name: "Enterprise Security",
		description: "Description for Service 5",
		href: "/services/enterprise-security/",
	},
	{
		id: 6,
		name: "Audio Video Conference",
		description: "Description for Service 6",
		href: "/services/audio-video-conference/",
	},
];

export const surveillanceSystems: SurveillanceSystem[] = [
	{
		id: 1,
		name: "CCTV Solutions",
		description: "Description for Surveillance System 1",
		href: "/surveillance/cctv-solutions/",
	},
	{
		id: 2,
		name: "Access Control Systems",
		description: "Description for Surveillance System 2",
		href: "/surveillance/access-control-systems/",
	},
	{
		id: 3,
		name: "Biometric & RFID Solutions",
		description: "Description for Surveillance System 3",
		href: "/surveillance/biometric-rfid-solutions/",
	},
	{
		id: 4,
		name: "Network Surveillance Solutions",
		description: "Description for Surveillance System 4",
		href: "/surveillance/network-surveillance-solutions/",
	},
];
