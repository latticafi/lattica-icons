import { forwardRef, type SVGProps, type Ref } from "react";
const DnaOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8m3-2-2.891-2.891M2 15c3.333-3 6.667-3 10-3M2 2l20 20M20 9l.891.891M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1M3.109 14.109 4 15m2.5-2.5 1 1M7 18l2.891 2.891M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" /></svg>);
DnaOff.displayName = "DnaOff";
export default DnaOff;