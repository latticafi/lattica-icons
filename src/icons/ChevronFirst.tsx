import { forwardRef, type SVGProps, type Ref } from "react";
const ChevronFirst = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m17 18-6-6 6-6M7 6v12" /></svg>);
ChevronFirst.displayName = "ChevronFirst";
export default ChevronFirst;