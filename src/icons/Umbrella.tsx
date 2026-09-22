import { forwardRef, type SVGProps, type Ref } from "react";
const Umbrella = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 13v7a2 2 0 0 0 4 0M12 2v2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z" /></svg>);
Umbrella.displayName = "Umbrella";
export default Umbrella;