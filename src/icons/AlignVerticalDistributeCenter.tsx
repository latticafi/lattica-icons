import { forwardRef, type SVGProps, type Ref } from "react";
const AlignVerticalDistributeCenter = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 17h-3m3-10h-5M5 17H2M7 7H2m15 7H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2M15 4H9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" /></svg>);
AlignVerticalDistributeCenter.displayName = "AlignVerticalDistributeCenter";
export default AlignVerticalDistributeCenter;