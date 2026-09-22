import { forwardRef, type SVGProps, type Ref } from "react";
const Music2 = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 18V2l7 4" /></svg>);
Music2.displayName = "Music2";
export default Music2;