import { forwardRef, type SVGProps, type Ref } from "react";
const MirrorRound = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 6.6 8.6 8M12 18v4m3-14.5L9.5 13M7 22h10m-5-4a8 8 0 1 0 0-16 8 8 0 0 0 0 16" /></svg>);
MirrorRound.displayName = "MirrorRound";
export default MirrorRound;