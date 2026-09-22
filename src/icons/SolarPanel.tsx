import { forwardRef, type SVGProps, type Ref } from "react";
const SolarPanel = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 2h2m1.28 12-4.56 8M21 22l-1.558-4H4.558M3 10v2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 2a4 4 0 0 1-4 4m5.66 1.66 1.41 1.41m-3.825 5.97A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z" /></svg>);
SolarPanel.displayName = "SolarPanel";
export default SolarPanel;