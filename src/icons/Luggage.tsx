import { forwardRef, type SVGProps, type Ref } from "react";
const Luggage = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14m-6 2h4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
Luggage.displayName = "Luggage";
export default Luggage;