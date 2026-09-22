import { forwardRef, type SVGProps, type Ref } from "react";
const Scissors = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2.12-.88L12 12m8-8L8.12 15.88M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6m8.8-6.2L20 20" /></svg>);
Scissors.displayName = "Scissors";
export default Scissors;