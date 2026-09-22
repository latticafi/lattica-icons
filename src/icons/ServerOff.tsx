import { forwardRef, type SVGProps, type Ref } from "react";
const ServerOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5m7 7v-1a2 2 0 0 0-2-2h-1m3 8-.5-.5-1 .5H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h10zm0 0L2 2m4 16h.01M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2z" /></svg>);
ServerOff.displayName = "ServerOff";
export default ServerOff;