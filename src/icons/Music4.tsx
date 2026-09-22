import { forwardRef, type SVGProps, type Ref } from "react";
const Music4 = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 18V5l12-2v13M9 9l12-2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6m12-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
Music4.displayName = "Music4";
export default Music4;