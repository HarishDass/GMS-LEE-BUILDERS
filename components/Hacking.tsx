import { SERVICES } from "./ServiceData";
import ServicePageTemplate from "./ServicePageTemplate";

export default function Hacking() {
  return <ServicePageTemplate data={SERVICES["hacking"]} />;
}