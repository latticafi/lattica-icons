import { forwardRef, type SVGProps, type Ref } from "react";
const AlarmSmoke = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 21c0-2.5 2-2.5 2-5m3 5c0-2.5 2-2.5 2-5m1-8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8m1 13c0-2.5 2-2.5 2-5M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z" /></svg>);
AlarmSmoke.displayName = "AlarmSmoke";
export default AlarmSmoke;