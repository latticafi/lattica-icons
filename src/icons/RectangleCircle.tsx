import { forwardRef, type SVGProps, type Ref } from "react";
const RectangleCircle = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16" /></svg>);
RectangleCircle.displayName = "RectangleCircle";
export default RectangleCircle;