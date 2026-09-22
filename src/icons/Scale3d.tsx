import { forwardRef, type SVGProps, type Ref } from "react";
const Scale3d = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 7v11a1 1 0 0 0 .293.707m0 0A1 1 0 0 0 6 19h11m-11.707-.293L11 13" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
Scale3d.displayName = "Scale3d";
export default Scale3d;