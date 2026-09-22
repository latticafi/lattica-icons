import { forwardRef, type SVGProps, type Ref } from "react";
const TurkishLira = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 4 5 9m10-.5-10 5M18 12a9 9 0 0 1-9 9V3" /></svg>);
TurkishLira.displayName = "TurkishLira";
export default TurkishLira;