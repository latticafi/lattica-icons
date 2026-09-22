import { forwardRef, type SVGProps, type Ref } from "react";
const WavesLadder = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 5a2 2 0 0 0-2 2v11" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M7 13h10M7 9h10" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 5a2 2 0 0 0-2 2v11" /></svg>);
WavesLadder.displayName = "WavesLadder";
export default WavesLadder;