import { forwardRef, type SVGProps, type Ref } from "react";
const ListClock = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 13v2.2l1.6 1M3 12h3.458M3 19h3.832M3 5h18" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 21a6 6 0 1 0 0-12 6 6 0 0 0 0 12" /></svg>);
ListClock.displayName = "ListClock";
export default ListClock;