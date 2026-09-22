import { forwardRef, type SVGProps, type Ref } from "react";
const Shrub = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5m5 1L12 17" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 1 1 10 0z" /></svg>);
Shrub.displayName = "Shrub";
export default Shrub;