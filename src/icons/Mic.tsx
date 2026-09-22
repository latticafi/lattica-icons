import { forwardRef, type SVGProps, type Ref } from "react";
const Mic = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 19v3M5 10v2a7 7 0 1 0 14 0v-2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 5a3 3 0 1 0-6 0v7a3 3 0 1 0 6 0z" /></svg>);
Mic.displayName = "Mic";
export default Mic;