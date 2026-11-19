import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { services } from "@/content/site";

const service = services.find((s) => s.slug === "red-team")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.short,
};

export default function RedTeamPage() {
  return <ServiceDetail service={service} />;
}
