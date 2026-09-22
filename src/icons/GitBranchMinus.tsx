import { forwardRef, type SVGProps, type Ref } from "react";
const GitBranchMinus = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 6a9 9 0 0 0-9 9V3m15 15h-6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
GitBranchMinus.displayName = "GitBranchMinus";
export default GitBranchMinus;