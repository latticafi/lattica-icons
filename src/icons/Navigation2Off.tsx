import { forwardRef, type SVGProps, type Ref } from "react";
const Navigation2Off = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17m-3.3-8.95L12 2l-1.17 3.17M2 2l20 20" /></svg>);
Navigation2Off.displayName = "Navigation2Off";
export default Navigation2Off;