import { forwardRef, type SVGProps, type Ref } from "react";
const Bus = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 6v6m7-6v6M2 12h19.6M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2s-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2-2h5m2 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
Bus.displayName = "Bus";
export default Bus;