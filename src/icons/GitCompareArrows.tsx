import { forwardRef, type SVGProps, type Ref } from "react";
const GitCompareArrows = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m7-3h5a2 2 0 0 1 2 2v7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m15 9-3-3 3-3m4 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-7-3H7a2 2 0 0 1-2-2V9" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9 15 3 3-3 3" /></svg>);
GitCompareArrows.displayName = "GitCompareArrows";
export default GitCompareArrows;