import { forwardRef, type SVGProps, type Ref } from "react";
const SquareSplitHorizontal = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m4-19h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3m-8 0H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3" /></svg>);
SquareSplitHorizontal.displayName = "SquareSplitHorizontal";
export default SquareSplitHorizontal;