import { forwardRef, type SVGProps, type Ref } from "react";
const Rainbow = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 17a10 10 0 0 0-20 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 17a6 6 0 1 1 12 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 17a2 2 0 0 1 4 0" /></svg>);
Rainbow.displayName = "Rainbow";
export default Rainbow;