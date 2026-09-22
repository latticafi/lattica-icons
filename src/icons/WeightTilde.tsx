import { forwardRef, type SVGProps, type Ref } from "react";
const WeightTilde = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.5 8a2 2 0 0 0-1.906 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.999 15a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 0 4 0M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
WeightTilde.displayName = "WeightTilde";
export default WeightTilde;