import { forwardRef, type SVGProps, type Ref } from "react";
const FaceSlightlySmiling = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 10V9m1.472 6a6 6 0 0 1-8.943 0M9 10V9" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /></svg>);
FaceSlightlySmiling.displayName = "FaceSlightlySmiling";
export default FaceSlightlySmiling;