import { forwardRef, type SVGProps, type Ref } from "react";
const FaceSlightlySmilingPlus = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.267 2.08a10 10 0 1 0 8.653 8.653M15 10V9m1-4h6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.472 15a6 6 0 0 1-8.943 0M19 2v6M9 10V9" /></svg>);
FaceSlightlySmilingPlus.displayName = "FaceSlightlySmilingPlus";
export default FaceSlightlySmilingPlus;