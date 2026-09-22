import { forwardRef, type SVGProps, type Ref } from "react";
const TestTubes = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 2v17.5a2.5 2.5 0 0 1-5 0V2m16 0v17.5a2.5 2.5 0 0 1-5 0V2M3 2h7m4 0h7M9 16H4m16 0h-5" /></svg>);
TestTubes.displayName = "TestTubes";
export default TestTubes;