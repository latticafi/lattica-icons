import { forwardRef, type SVGProps, type Ref } from "react";
const Shapes = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.3 10a.7.7 0 0 1-.626-1.08L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1zm.7 4H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1m8.5 7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" /></svg>);
Shapes.displayName = "Shapes";
export default Shapes;