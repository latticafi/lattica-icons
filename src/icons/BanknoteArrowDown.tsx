import { forwardRef, type SVGProps, type Ref } from "react";
const BanknoteArrowDown = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5m0 6-3 3-3-3m3 3v-6m-1-4h.01M6 12h.01" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
BanknoteArrowDown.displayName = "BanknoteArrowDown";
export default BanknoteArrowDown;