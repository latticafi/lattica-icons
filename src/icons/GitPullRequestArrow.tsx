import { forwardRef, type SVGProps, type Ref } from "react";
const GitPullRequestArrow = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0v12m14 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6M15 9l-3-3 3-3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 6h5a2 2 0 0 1 2 2v7" /></svg>);
GitPullRequestArrow.displayName = "GitPullRequestArrow";
export default GitPullRequestArrow;