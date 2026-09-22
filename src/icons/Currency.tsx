import { forwardRef, type SVGProps, type Ref } from "react";
const Currency = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16M3 3l3 3m15-3-3 3M3 21l3-3m15 3-3-3" /></svg>);
Currency.displayName = "Currency";
export default Currency;