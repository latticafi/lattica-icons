import { forwardRef, type SVGProps, type Ref } from "react";
const GitBranchPlus = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 3v12m0 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6m12-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 6a9 9 0 0 0-9 9m12 0v6m3-3h-6" /></svg>);
GitBranchPlus.displayName = "GitBranchPlus";
export default GitBranchPlus;