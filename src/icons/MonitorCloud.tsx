import { forwardRef, type SVGProps, type Ref } from "react";
const MonitorCloud = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 17v4m-4 0h8m-5-8a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2" /></svg>);
MonitorCloud.displayName = "MonitorCloud";
export default MonitorCloud;