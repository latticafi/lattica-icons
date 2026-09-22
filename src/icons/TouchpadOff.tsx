import { forwardRef, type SVGProps, type Ref } from "react";
const TouchpadOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 20v-6m7.656 0H22M2 14h12M2 2l20 20m-2-2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m5.656 0H20a2 2 0 0 1 2 2v10.344" /></svg>);
TouchpadOff.displayName = "TouchpadOff";
export default TouchpadOff;