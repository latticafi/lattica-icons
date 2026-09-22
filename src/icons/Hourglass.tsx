import { forwardRef, type SVGProps, type Ref } from "react";
const Hourglass = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 22h14M5 2h14m-2 20v-4.172a2 2 0 0 0-.586-1.414L12 12m0 0-4.414 4.414A2 2 0 0 0 7 17.828V22m5-10L7.586 7.586A2 2 0 0 1 7 6.172V2m5 10 4.414-4.414A2 2 0 0 0 17 6.172V2" /></svg>);
Hourglass.displayName = "Hourglass";
export default Hourglass;