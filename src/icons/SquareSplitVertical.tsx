import { forwardRef, type SVGProps, type Ref } from "react";
const SquareSplitVertical = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 12h20m-1 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3m0-8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3" /></svg>);
SquareSplitVertical.displayName = "SquareSplitVertical";
export default SquareSplitVertical;