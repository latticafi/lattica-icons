import { forwardRef, type SVGProps, type Ref } from "react";
const Merge = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m8 6 4-4 4 4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22m16 0-5-5" /></svg>);
Merge.displayName = "Merge";
export default Merge;