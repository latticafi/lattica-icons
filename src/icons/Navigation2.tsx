import { forwardRef, type SVGProps, type Ref } from "react";
const Navigation2 = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12 2 7 19-7-4-7 4z" /></svg>);
Navigation2.displayName = "Navigation2";
export default Navigation2;