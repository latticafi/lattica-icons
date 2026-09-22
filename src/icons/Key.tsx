import { forwardRef, type SVGProps, type Ref } from "react";
const Key = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m2 21 9.6-9.6m-4.1 4.1 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19m11.5-6a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" /></svg>);
Key.displayName = "Key";
export default Key;