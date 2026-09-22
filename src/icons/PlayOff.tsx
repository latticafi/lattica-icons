import { forwardRef, type SVGProps, type Ref } from "react";
const PlayOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10.215 4.56 9.79 5.71a2 2 0 0 1 .003 3.458l-.393.23m-3.573 2.084-8.034 4.686A2 2 0 0 1 5 19V5M2 2l20 20" /></svg>);
PlayOff.displayName = "PlayOff";
export default PlayOff;