import { forwardRef, type SVGProps, type Ref } from "react";
const TrainFront = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 3.1V7a4 4 0 0 0 8 0V3.1M9 15l-1-1m7 1 1-1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m8 19-2 3m10-3 2 3m-9-3c-2.8 0-5-2.2-5-5v-4a8 8 0 1 1 16 0v4c0 2.8-2.2 5-5 5z" /></svg>);
TrainFront.displayName = "TrainFront";
export default TrainFront;