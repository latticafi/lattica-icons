import { forwardRef, type SVGProps, type Ref } from "react";
const Scooter = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 4h-3.5l2 11.05M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-15 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" /></svg>);
Scooter.displayName = "Scooter";
export default Scooter;