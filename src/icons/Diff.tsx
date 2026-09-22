import { forwardRef, type SVGProps, type Ref } from "react";
const Diff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 3v14m-7-7h14M5 21h14" /></svg>);
Diff.displayName = "Diff";
export default Diff;