import { forwardRef, type SVGProps, type Ref } from "react";
const ChartPie = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 12c.552 0 1.005-.45.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21.21 15.89A10 10 0 1 1 8 2.83" /></svg>);
ChartPie.displayName = "ChartPie";
export default ChartPie;