import { forwardRef, type SVGProps, type Ref } from "react";
const Disc3 = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 12c0-1.7.7-3.2 1.8-4.2M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m6-2c0 1.7-.7 3.2-1.8 4.2" /></svg>);
Disc3.displayName = "Disc3";
export default Disc3;