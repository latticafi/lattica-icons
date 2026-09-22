import { forwardRef, type SVGProps, type Ref } from "react";
const Brackets = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3m-8 0H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3" /></svg>);
Brackets.displayName = "Brackets";
export default Brackets;