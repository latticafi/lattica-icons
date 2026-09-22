import { forwardRef, type SVGProps, type Ref } from "react";
const Blender = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 14a2 2 0 0 1 1.963 1.615l1.018 5.193A1 1 0 0 1 18 22H6a1 1 0 0 1-.981-1.192l1.018-5.193A2 2 0 0 1 8 14zm0 0 1-12M8.006 14 7 2m.565 6.787A5 5 0 0 0 12 8a5 5 0 0 1 4.56-.75M19 2H5a2 2 0 0 0-2 2v5a2 2 0 0 0 .688 1.5M12 18h.01" /></svg>);
Blender.displayName = "Blender";
export default Blender;