import { forwardRef, type SVGProps, type Ref } from "react";
const Mars = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 8V3h-5m5 0-6.75 6.75M10 20a6 6 0 1 0 0-12 6 6 0 0 0 0 12" /></svg>);
Mars.displayName = "Mars";
export default Mars;