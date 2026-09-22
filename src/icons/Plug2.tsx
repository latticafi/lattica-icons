import { forwardRef, type SVGProps, type Ref } from "react";
const Plug2 = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 2v6m6-6v6m-3 9v5m0-5a6 6 0 0 0 6-6V8H6v3a6 6 0 0 0 6 6M5 8h14" /></svg>);
Plug2.displayName = "Plug2";
export default Plug2;