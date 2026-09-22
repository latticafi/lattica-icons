import { forwardRef, type SVGProps, type Ref } from "react";
const Award = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12" /></svg>);
Award.displayName = "Award";
export default Award;