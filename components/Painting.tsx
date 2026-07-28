import ServicePageTemplate from "./ServicePageTemplate";
import { SERVICES } from "./ServiceData";

export default function Painting() {
  return <ServicePageTemplate data={SERVICES["painting"]} />;
}
