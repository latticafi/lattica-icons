import { forwardRef, type SVGProps, type Ref } from "react";
const TrainFrontTunnel = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 22V12a10 10 0 0 1 20 0v10" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 6.8v1.4c0 .742-.316 1.455-.879 1.98A3.1 3.1 0 0 1 12 11a3.1 3.1 0 0 1-2.121-.82A2.7 2.7 0 0 1 9 8.2V6.8m1 8.2h.01M14 15h.01" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9 19-2 3m8-3 2 3m-7-3a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4z" /></svg>);
TrainFrontTunnel.displayName = "TrainFrontTunnel";
export default TrainFrontTunnel;