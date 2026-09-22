import { forwardRef, type SVGProps, type Ref } from "react";
const PenOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982m-1.171-6.81 4.359-4.346a2.818 2.818 0 1 1 3.986 3.986l-4.353 4.353M2 2l20 20" /></svg>);
PenOff.displayName = "PenOff";
export default PenOff;