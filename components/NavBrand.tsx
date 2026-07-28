import Logo from "../assests/logo.jpg";

const F_DISPLAY = "font-['Barlow_Condensed',sans-serif]";
const F_MONO = "font-['IBM_Plex_Mono',monospace]";

export default function NavBrand({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-9 h-9 bg-gold flex items-center justify-center overflow-hidden">
        <img src={Logo.src} alt="GMS LEE" className="w-full h-full object-cover" />
      </div>
      <div>
        <div
          className={`${F_DISPLAY} font-semibold text-lg tracking-wide leading-none uppercase ${dark ? "text-[#14181B]" : "text-[#ECE8DF]"}`}
        >
          GMS LEE
        </div>
        <div
          className={`${F_MONO} text-[9px] tracking-[0.2em] uppercase ${dark ? "text-[#55606B]" : "text-[#ECE8DF]/45"}`}
        >
          BUILDERS PTE. LTD — SG
        </div>
      </div>
    </div>
  );
}
