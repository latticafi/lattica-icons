import { forwardRef, type SVGProps, type Ref } from "react";
const Trophy = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2m7-7.34V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2m.916-12H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3M4 22h16" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 9a6 6 0 1 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3" /></svg>);
Trophy.displayName = "Trophy";
export default Trophy;