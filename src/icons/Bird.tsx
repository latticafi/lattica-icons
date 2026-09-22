import { forwardRef, type SVGProps, type Ref } from "react";
const Bird = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 7h.01M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m20 7 2 .5-2 .5M10 18v3m4-3.25V21m-7-3a6 6 0 0 0 3.84-10.61" /></svg>);
Bird.displayName = "Bird";
export default Bird;