import { forwardRef, type SVGProps, type Ref } from "react";
const HatGlasses = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 18a2 2 0 1 0-4 0m9-7-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11m-3 0h20" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
HatGlasses.displayName = "HatGlasses";
export default HatGlasses;