import { forwardRef, type SVGProps, type Ref } from "react";
const Flower2 = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1m3 2a3 3 0 1 1-3 3m3-3h-1M9 8a3 3 0 1 0 3 3M9 8h1m2 3v-1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 0v12m0 0c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5m0 0c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5" /></svg>);
Flower2.displayName = "Flower2";
export default Flower2;