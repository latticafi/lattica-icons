import { forwardRef, type SVGProps, type Ref } from "react";
const WindArrowDown = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 2v8m4-4-4 4-4-4m6.8 15.6A2 2 0 1 0 14 18H2m15.5-8a2.5 2.5 0 1 1 2 4H2" /></svg>);
WindArrowDown.displayName = "WindArrowDown";
export default WindArrowDown;