import { forwardRef, type SVGProps, type Ref } from "react";
const LifeBuoy = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M4.93 4.93l4.24 4.24m5.66 0 4.24-4.24m-4.24 9.9 4.24 4.24m-9.9-4.24-4.24 4.24" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /></svg>);
LifeBuoy.displayName = "LifeBuoy";
export default LifeBuoy;