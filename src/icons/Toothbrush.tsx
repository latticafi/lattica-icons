import { forwardRef, type SVGProps, type Ref } from "react";
const Toothbrush = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 11c-2 2-4 2-6 4l-7 7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m22 4-7.414 7.414-2-2A2 2 0 0 1 14 6a2 2 0 0 1 2-2 2 2 0 0 1 3.262-1.552l2.152 2.138" /></svg>);
Toothbrush.displayName = "Toothbrush";
export default Toothbrush;