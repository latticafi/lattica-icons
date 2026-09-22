import { forwardRef, type SVGProps, type Ref } from "react";
const GitPullRequestCreate = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0v12m7-15h3a2 2 0 0 1 2 2v3m0 4v6m3-3h-6" /></svg>);
GitPullRequestCreate.displayName = "GitPullRequestCreate";
export default GitPullRequestCreate;