"use client";

import type { ServiceDefinition } from "@/components/serviceCatalog";
import Hacking from "./Hacking";
import ServicePageTemplate from "./ServicePageTemplate";
import { SERVICES } from "./ServiceData";

function ServicePage({ service }: { service: ServiceDefinition }) {
  console.log(service, "service");
  const services: Record<string, React.ReactNode> = {
    painting: <ServicePageTemplate data={SERVICES["painting"]} />,
    hacking: <ServicePageTemplate data={SERVICES["hacking"]} />,
    "ceiling-partition": (
      <ServicePageTemplate data={SERVICES["ceiling-partition"]} />
    ),
    reinforcement: <ServicePageTemplate data={SERVICES["reinforcement"]} />,
    "building-maintenance": (
      <ServicePageTemplate data={SERVICES["building-maintenance"]} />
    ),
    electrical: <ServicePageTemplate data={SERVICES["electrical"]} />,
    "garden-maintenance": (
      <ServicePageTemplate data={SERVICES["garden-maintenance"]} />
    ),
    "aircon-service": <ServicePageTemplate data={SERVICES["aircon-service"]} />,
  };
  return services[service.slug] || null;
}

export default ServicePage;
