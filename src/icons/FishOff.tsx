import { forwardRef, type SVGProps, type Ref } from "react";
const FishOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 12.5V12m-.475 5.526c-.803.32-1.66.48-2.525.474-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.8 8.8 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.8 9.8 0 0 1 16 6.07m0 11.86a9.8 9.8 0 0 1-1.728-3.618" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20" /></svg>);
FishOff.displayName = "FishOff";
export default FishOff;