import { forwardRef, type SVGProps, type Ref } from "react";
const Tangent = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-1.41-.59L5.41 15.59M4 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8 3s-4-9-1.5-11.5S22 12 22 12" /></svg>);
Tangent.displayName = "Tangent";
export default Tangent;