import { forwardRef, type SVGProps, type Ref } from "react";
const ChessQueen = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12.474 5.943 1.567 5.34a1 1 0 0 0 1.75.328l2.616-3.402M20 9l-3 9M5.594 8.21l2.615 3.402a1 1 0 0 0 1.75-.329l1.567-5.34M7 18 4 9m0 11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8 3a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
ChessQueen.displayName = "ChessQueen";
export default ChessQueen;