import { forwardRef, type SVGProps, type Ref } from "react";
const TentTree = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m16-1-3-3-3 3m3-3v12m-3-4 3-3 3 3m-3 4H7l-5 8h20zm-9 0v8m1-8 5 8" /></svg>);
TentTree.displayName = "TentTree";
export default TentTree;