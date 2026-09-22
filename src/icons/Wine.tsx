import { forwardRef, type SVGProps, type Ref } from "react";
const Wine = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 22h8M7 10h10m-5 5a5 5 0 0 1-5-5c0-2 .5-4 2-8h6c1.5 4 2 6 2 8m0 0a5 5 0 0 1-5 5m0 0v7" /></svg>);
Wine.displayName = "Wine";
export default Wine;