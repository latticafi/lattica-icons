import { forwardRef, type SVGProps, type Ref } from "react";
const JapaneseYen = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3M6 15h12M6 11h12" /></svg>);
JapaneseYen.displayName = "JapaneseYen";
export default JapaneseYen;