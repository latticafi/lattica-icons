import { forwardRef, type SVGProps, type Ref } from "react";
const SquareDashedTopSolid = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 21h1m6-7v1m0 4a2 2 0 0 1-2 2m2-12v1M3 14v1M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M3 9v1m2 11a2 2 0 0 1-2-2m6 2h1" /></svg>);
SquareDashedTopSolid.displayName = "SquareDashedTopSolid";
export default SquareDashedTopSolid;