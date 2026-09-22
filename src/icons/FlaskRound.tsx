import { forwardRef, type SVGProps, type Ref } from "react";
const FlaskRound = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 2v6.292a7 7 0 1 0 4 0V2M5 15h14M8.5 2h7" /></svg>);
FlaskRound.displayName = "FlaskRound";
export default FlaskRound;