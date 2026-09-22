import { forwardRef, type SVGProps, type Ref } from "react";
const ChessPawn = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14.5 10 1.5 8m-9-8h10m-9 8 1.5-8M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /></svg>);
ChessPawn.displayName = "ChessPawn";
export default ChessPawn;