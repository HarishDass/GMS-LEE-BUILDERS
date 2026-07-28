import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { getServiceBySlug } from "@/components/serviceCatalog";

type ServiceRouteParams = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceRoute({ params }: ServiceRouteParams) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }

  return <ServicePage service={service} />;
}
