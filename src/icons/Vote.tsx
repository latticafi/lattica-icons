import { forwardRef, type SVGProps, type Ref } from "react";
const Vote = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 19H2M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5z" /></svg>);
Vote.displayName = "Vote";
export default Vote;