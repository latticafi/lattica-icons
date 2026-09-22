import { forwardRef, type SVGProps, type Ref } from "react";
const Scaling = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 10v5h5m-5 0L21 3m0 5V3h-5" /></svg>);
Scaling.displayName = "Scaling";
export default Scaling;