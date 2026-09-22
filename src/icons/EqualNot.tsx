import { forwardRef, type SVGProps, type Ref } from "react";
const EqualNot = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 9h14M5 15h14m0-10L5 19" /></svg>);
EqualNot.displayName = "EqualNot";
export default EqualNot;