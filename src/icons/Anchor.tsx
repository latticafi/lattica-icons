import { forwardRef, type SVGProps, type Ref } from "react";
const Anchor = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 6v16m7-9 2-1a9 9 0 0 1-18 0l2 1m4-2h6m-3-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
Anchor.displayName = "Anchor";
export default Anchor;