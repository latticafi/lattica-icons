import { forwardRef, type SVGProps, type Ref } from "react";
const LampCeiling = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 2v5m2.829 8.998a3 3 0 1 1-5.658 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z" /></svg>);
LampCeiling.displayName = "LampCeiling";
export default LampCeiling;