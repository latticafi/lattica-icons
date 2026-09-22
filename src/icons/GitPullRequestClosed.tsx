import { forwardRef, type SVGProps, type Ref } from "react";
const GitPullRequestClosed = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m15.5 3.5 5 5m-5 0 5-5M18 11.62V15M6 9v12m12 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
GitPullRequestClosed.displayName = "GitPullRequestClosed";
export default GitPullRequestClosed;