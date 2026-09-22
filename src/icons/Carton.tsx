import { forwardRef, type SVGProps, type Ref } from "react";
const Carton = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m16 6-2.461 2.633A2 2 0 0 0 13 10v12m0-12H5m11-4H8m8 0 2.461 2.633A2 2 0 0 1 19 10v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V10m11-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3m0 0L5.539 8.633A2 2 0 0 0 5 10" /></svg>);
Carton.displayName = "Carton";
export default Carton;