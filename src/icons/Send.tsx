import { forwardRef, type SVGProps, type Ref } from "react";
const Send = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.914 13.085a2 2 0 0 0-.67-.441l-7.93-3.18a.5.5 0 0 1 .024-.937l19-6.5a.496.496 0 0 1 .635.635l-6.5 19a.5.5 0 0 1-.937.024l-3.18-7.932a2 2 0 0 0-.442-.67m0 0 10.94-10.938" /></svg>);
Send.displayName = "Send";
export default Send;