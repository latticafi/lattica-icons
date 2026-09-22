import { forwardRef, type SVGProps, type Ref } from "react";
const Feather = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 8 2 22m15.488-7H9m5.086 3.412A2 2 0 0 1 12.67 19H5v-7.672a2 2 0 0 1 .586-1.414L11.75 3.75a6.003 6.003 0 1 1 8.49 8.49z" /></svg>);
Feather.displayName = "Feather";
export default Feather;