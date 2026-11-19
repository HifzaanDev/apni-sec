import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { services } from "@/content/site";

const service = services.find((s) => s.slug === "vapt")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.short,
};

export default function VaptPage() {
  return <ServiceDetail service={service} />;
}
