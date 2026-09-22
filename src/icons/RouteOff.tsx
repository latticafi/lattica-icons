import { forwardRef, type SVGProps, type Ref } from "react";
const RouteOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 19h8.5c.4 0 .9-.1 1.3-.2M5.2 5.2a3.5 3.5 0 0 0-1.758 1.587 3.56 3.56 0 0 0-.36 2.351 3.54 3.54 0 0 0 1.2 2.048c.624.522 1.408.81 2.218.814H12M2 2l20 20m-1-6.7a3.5 3.5 0 0 0-3.3-3.3M15 5h-4.3M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
RouteOff.displayName = "RouteOff";
export default RouteOff;