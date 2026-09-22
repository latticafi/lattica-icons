import { forwardRef, type SVGProps, type Ref } from "react";
const Infinity = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 16c5 0 7-8 12-8a4 4 0 1 1 0 8c-5 0-7-8-12-8a4 4 0 0 0 0 8" /></svg>);
Infinity.displayName = "Infinity";
export default Infinity;