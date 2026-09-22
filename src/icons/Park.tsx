import { forwardRef, type SVGProps, type Ref } from "react";
const Park = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 18h10m-8.752-8.002A4.5 4.5 0 0 0 11.75 8.6V8a3.75 3.75 0 0 0-7.5 0 4.9 4.9 0 0 0 2.25 9H8m7-3-2 6m6-6 2 6m0-6h-8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 20v-5.922a2 2 0 0 0-.586-1.414L6.5 11.75m2.705 1.045L8 14m11-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
Park.displayName = "Park";
export default Park;