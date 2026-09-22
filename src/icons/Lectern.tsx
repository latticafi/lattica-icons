import { forwardRef, type SVGProps, type Ref } from "react";
const Lectern = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 13h4a2 2 0 0 0 1.901-1.38l1.057-4.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287L3.1 11.621A2 2 0 0 0 5.001 13h4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 22V11a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11m9 0H6M18 6V3a1 1 0 0 0-1-1h-3" /></svg>);
Lectern.displayName = "Lectern";
export default Lectern;