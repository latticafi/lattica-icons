import { forwardRef, type SVGProps, type Ref } from "react";
const MonitorDown = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 13V7m-3 3 3 3 3-3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-8 14v4m-4 0h8" /></svg>);
MonitorDown.displayName = "MonitorDown";
export default MonitorDown;