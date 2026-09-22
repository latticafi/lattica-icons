import { forwardRef, type SVGProps, type Ref } from "react";
const SquaresSubtract = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 22a2 2 0 0 1-2-2m8 2h-2m6-14a2 2 0 0 1 2 2m0 4v2m0 4a2 2 0 0 1-2 2M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z" /></svg>);
SquaresSubtract.displayName = "SquaresSubtract";
export default SquaresSubtract;