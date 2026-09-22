import { forwardRef, type SVGProps, type Ref } from "react";
const Tickets = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8M6 10V8m0 6v1m0 4v2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2" /></svg>);
Tickets.displayName = "Tickets";
export default Tickets;