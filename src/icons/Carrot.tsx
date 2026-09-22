import { forwardRef, type SVGProps, type Ref } from "react";
const Carrot = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 16a4.95 4.95 0 1 0-7-7q-4 4-5.987 12.385a.5.5 0 0 0 .602.602Q11 20 15 16m0 0-3-3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 9q4 4 7 0-3-4-7 0m0 0q4-4 0-7-4 3 0 7m-7 6-2.58-2.58" /></svg>);
Carrot.displayName = "Carrot";
export default Carrot;