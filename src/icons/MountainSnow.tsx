import { forwardRef, type SVGProps, type Ref } from "react";
const MountainSnow = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m8 3 4 8 5-5 5 15H2z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.14 15.08q3.93-2.355 7.86.42c2.74 1.94 5.49 2 8.23.19" /></svg>);
MountainSnow.displayName = "MountainSnow";
export default MountainSnow;