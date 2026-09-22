import { forwardRef, type SVGProps, type Ref } from "react";
const RockingChair = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m15 13 3.708 7.416M3 19a15 15 0 0 0 18 0M3 2l3.21 9.633A2 2 0 0 0 8.109 13H18m-9 0-3.708 7.416" /></svg>);
RockingChair.displayName = "RockingChair";
export default RockingChair;