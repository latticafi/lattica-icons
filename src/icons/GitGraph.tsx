import { forwardRef, type SVGProps, type Ref } from "react";
const GitGraph = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0v6m0 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m7-18v18m7-12a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-3 6.7A9 9 0 0 0 19 9" /></svg>);
GitGraph.displayName = "GitGraph";
export default GitGraph;