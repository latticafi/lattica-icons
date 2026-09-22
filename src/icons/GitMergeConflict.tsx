import { forwardRef, type SVGProps, type Ref } from "react";
const GitMergeConflict = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 6h4a2 2 0 0 1 2 2v7M6 12v9M8.5 3.5l-5 5m5 0-5-5M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
GitMergeConflict.displayName = "GitMergeConflict";
export default GitMergeConflict;