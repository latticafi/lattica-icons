import { forwardRef, type SVGProps, type Ref } from "react";
const Dome = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 21v-3a2 2 0 0 1 4 0v3M12 2v2m6 8v9" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 12a8 8 0 1 1 16 0M6 12v9m16-2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1z" /></svg>);
Dome.displayName = "Dome";
export default Dome;