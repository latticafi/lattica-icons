import { forwardRef, type SVGProps, type Ref } from "react";
const Club = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 17.66a5.501 5.501 0 1 1-5.28-8.61 5.5 5.5 0 1 1 10.56 0v.01a5.5 5.5 0 1 1-5.28 8.6m0 0V22" /></svg>);
Club.displayName = "Club";
export default Club;