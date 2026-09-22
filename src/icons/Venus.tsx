import { forwardRef, type SVGProps, type Ref } from "react";
const Venus = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 15v7m-3-3h6m-3-4a6 6 0 1 0 0-12 6 6 0 0 0 0 12" /></svg>);
Venus.displayName = "Venus";
export default Venus;