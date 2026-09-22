import { forwardRef, type SVGProps, type Ref } from "react";
const TicTacToe = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m9-6-5 5m5 0-5-5m6-4H2m6-9L3 8m5 0L3 3m15.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-13 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" /></svg>);
TicTacToe.displayName = "TicTacToe";
export default TicTacToe;