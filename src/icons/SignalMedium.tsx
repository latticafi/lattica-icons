import { forwardRef, type SVGProps, type Ref } from "react";
const SignalMedium = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 20h.01M7 20v-4m5 4v-8" /></svg>);
SignalMedium.displayName = "SignalMedium";
export default SignalMedium;