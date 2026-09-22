import { forwardRef, type SVGProps, type Ref } from "react";
const FlagOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528M2 2l20 20M4 22V4m3.656-2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347" /></svg>);
FlagOff.displayName = "FlagOff";
export default FlagOff;