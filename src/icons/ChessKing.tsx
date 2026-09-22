import { forwardRef, type SVGProps, type Ref } from "react";
const ChessKing = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m17.3 18 1-1c1.341-1.327 2.7-2.918 2.7-5a5 5 0 0 0-4.95-5c-1.584 0-2.7.455-4.05 1.818C10.65 7.455 9.534 7 7.95 7A5 5 0 0 0 3 12c0 2.09 1.35 3.682 2.7 5l1 1M12 8.818V2m-2 2h4M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" /></svg>);
ChessKing.displayName = "ChessKing";
export default ChessKing;