import { forwardRef, type SVGProps, type Ref } from "react";
const Repeat2 = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m2 9 3-3 3 3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13 18H7a2 2 0 0 1-2-2V6m17 9-3 3-3-3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 6h6a2 2 0 0 1 2 2v10" /></svg>);
Repeat2.displayName = "Repeat2";
export default Repeat2;