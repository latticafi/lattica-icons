import { forwardRef, type SVGProps, type Ref } from "react";
const GitCommitHorizontal = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-9-3h6m6 0h6" /></svg>);
GitCommitHorizontal.displayName = "GitCommitHorizontal";
export default GitCommitHorizontal;