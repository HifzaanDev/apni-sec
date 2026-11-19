import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { services } from "@/content/site";

const service = services.find((s) => s.slug === "cloud-security")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.short,
};

export default function CloudSecurityPage() {
  return <ServiceDetail service={service} />;
}
