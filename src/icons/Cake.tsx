import { forwardRef, type SVGProps, type Ref } from "react";
const Cake = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1M2 21h20M7 8v3m5-3v3m5-3v3M7 4h.01M12 4h.01M17 4h.01" /></svg>);
Cake.displayName = "Cake";
export default Cake;