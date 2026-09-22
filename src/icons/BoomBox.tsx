import { forwardRef, type SVGProps, type Ref } from "react";
const BoomBox = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M8 8v1m4-1v1m4-1v1m4 0H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
BoomBox.displayName = "BoomBox";
export default BoomBox;