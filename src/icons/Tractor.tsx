import { forwardRef, type SVGProps, type Ref } from "react";
const Tractor = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20m-4 0h-5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 5a1 1 0 0 0-1 1v5.573M3 4h8.129a1 1 0 0 1 .99.863L13 11.246M4 11V4m3 11h.01M8 10.1V4m10 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 20a5 5 0 1 0 0-10 5 5 0 0 0 0 10" /></svg>);
Tractor.displayName = "Tractor";
export default Tractor;