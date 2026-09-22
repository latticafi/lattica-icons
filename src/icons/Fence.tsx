import { forwardRef, type SVGProps, type Ref } from "react";
const Fence = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 8h4M6 18h4m4-10h4m-4 10h4M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5zm8 0-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5zm8 0-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5z" /></svg>);
Fence.displayName = "Fence";
export default Fence;