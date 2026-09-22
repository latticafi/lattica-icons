import { forwardRef, type SVGProps, type Ref } from "react";
const GitCompare = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m7-3h3a2 2 0 0 1 2 2v7m-7 3H8a2 2 0 0 1-2-2V9" /></svg>);
GitCompare.displayName = "GitCompare";
export default GitCompare;