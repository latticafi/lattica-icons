import { forwardRef, type SVGProps, type Ref } from "react";
const Vibrate = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m2 8 2 2-2 2 2 2-2 2m20-8-2 2 2 2-2 2 2 2M15 5H9a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" /></svg>);
Vibrate.displayName = "Vibrate";
export default Vibrate;