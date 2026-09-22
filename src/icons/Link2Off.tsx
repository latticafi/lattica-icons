import { forwardRef, type SVGProps, type Ref } from "react";
const Link2Off = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 17H7A5 5 0 0 1 7 7m8 0h2a5 5 0 0 1 4 8M8 12h4M2 2l20 20" /></svg>);
Link2Off.displayName = "Link2Off";
export default Link2Off;