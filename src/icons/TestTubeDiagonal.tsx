import { forwardRef, type SVGProps, type Ref } from "react";
const TestTubeDiagonal = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 7 6.82 21.18a2.83 2.83 0 0 1-4.818-2.01c0-.75.298-1.47.828-2L17 3m-1-1 6 6m-10 8H4" /></svg>);
TestTubeDiagonal.displayName = "TestTubeDiagonal";
export default TestTubeDiagonal;