import { forwardRef, type SVGProps, type Ref } from "react";
const BellPlus = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.268 21a2 2 0 0 0 3.464 0M15 8h6m-3-3v6m2.002 3.464q.342.455.738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.957 6 12.5 6 8a6 6 0 0 1 8.75-5.332" /></svg>);
BellPlus.displayName = "BellPlus";
export default BellPlus;