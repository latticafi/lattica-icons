import { forwardRef, type SVGProps, type Ref } from "react";
const HouseWifi = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 13.866a4 4 0 0 1 5 .01M12 17h.01" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 10.754a8 8 0 0 1 10 0" /></svg>);
HouseWifi.displayName = "HouseWifi";
export default HouseWifi;