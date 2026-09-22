import { forwardRef, type SVGProps, type Ref } from "react";
const Expand = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m15 15 6 6m-5 0h5v-5m-6-7 6-6m-5 0h5v5M8 21H3v-5m0 5 6-6M8 3H3v5m0-5 6 6" /></svg>);
Expand.displayName = "Expand";
export default Expand;