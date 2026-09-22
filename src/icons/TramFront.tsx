import { forwardRef, type SVGProps, type Ref } from "react";
const TramFront = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 3H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M4 11h16m-8-8v8m-4 8-2 3m12 0-2-3m-8-4h.01M16 15h.01" /></svg>);
TramFront.displayName = "TramFront";
export default TramFront;