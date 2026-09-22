import { forwardRef, type SVGProps, type Ref } from "react";
const Variable = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 21s-4-3-4-9 4-9 4-9m8 0s4 3 4 9-4 9-4 9M15 9l-6 6m0-6 6 6" /></svg>);
Variable.displayName = "Variable";
export default Variable;