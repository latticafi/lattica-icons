import { forwardRef, type SVGProps, type Ref } from "react";
const LayersArrowDown = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 7v15m3-3-3 3-3-3m-7-7a1 1 0 0 0 .58.91l5.093 2.316M22 12a1 1 0 0 1-.59.92l-5.077 2.308M8 10.37 2.6 7.91a1 1 0 0 1 0-1.831l8.57-3.9a2 2 0 0 1 1.66 0l8.59 3.91a1 1 0 0 1 0 1.832l-5.392 2.45" /></svg>);
LayersArrowDown.displayName = "LayersArrowDown";
export default LayersArrowDown;