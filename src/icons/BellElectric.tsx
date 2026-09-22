import { forwardRef, type SVGProps, type Ref } from "react";
const BellElectric = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18.518 17.347A7 7 0 0 1 14 19m4.8-15A11 11 0 0 1 20 9M9 9h.01" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14m3 0H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2" /></svg>);
BellElectric.displayName = "BellElectric";
export default BellElectric;