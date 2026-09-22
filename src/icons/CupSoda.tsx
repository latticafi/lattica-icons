import { forwardRef, type SVGProps, type Ref } from "react";
const CupSoda = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8M5 8h14" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0m-5-7 1-6h2" /></svg>);
CupSoda.displayName = "CupSoda";
export default CupSoda;