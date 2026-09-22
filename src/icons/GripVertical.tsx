import { forwardRef, type SVGProps, type Ref } from "react";
const GripVertical = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /></svg>);
GripVertical.displayName = "GripVertical";
export default GripVertical;