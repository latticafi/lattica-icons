import { forwardRef, type SVGProps, type Ref } from "react";
const Radio = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.247 7.76a6 6 0 0 1 0 8.479m2.828-11.306a10 10 0 0 1 0 14.134m-14.15 0a10 10 0 0 1 0-14.134m2.828 11.306a6 6 0 0 1 0-8.478M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
Radio.displayName = "Radio";
export default Radio;