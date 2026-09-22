import { forwardRef, type SVGProps, type Ref } from "react";
const WineOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 22h8M7 10h3m4.391 4.391A5 5 0 0 1 7 10a12.3 12.3 0 0 1 .307-2.693M17 10h-1.343m1.198 1.198q.144-.585.145-1.198c0-2-.5-4-2-8H9q-.194.51-.362.981M12 15v7M2 2l20 20" /></svg>);
WineOff.displayName = "WineOff";
export default WineOff;