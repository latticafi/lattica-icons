import { forwardRef, type SVGProps, type Ref } from "react";
const Flower = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 16.5A4.5 4.5 0 1 1 7.5 12m4.5 4.5a4.5 4.5 0 1 0 4.5-4.5M12 16.5V15m0-6V7.5A4.5 4.5 0 1 0 7.5 12m0 0H9m6 0h1.5A4.5 4.5 0 1 0 12 7.5M8 8l1.88 1.88m4.24 0L16 8m-8 8 1.88-1.88m4.24 0L16 16" /></svg>);
Flower.displayName = "Flower";
export default Flower;