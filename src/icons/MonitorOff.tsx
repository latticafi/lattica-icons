import { forwardRef, type SVGProps, type Ref } from "react";
const MonitorOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 17v4m5-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 1.184-1.826M2 2l20 20M8 21h8M8.656 3H20a2 2 0 0 1 2 2v10a2 2 0 0 1-.293 1.042" /></svg>);
MonitorOff.displayName = "MonitorOff";
export default MonitorOff;