import { forwardRef, type SVGProps, type Ref } from "react";
const SendHorizontal = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 12a.5.5 0 0 1-.286.451l-18 8.5a.497.497 0 0 1-.682-.626l2.842-7.627a2 2 0 0 0 0-1.396L3.031 3.675a.498.498 0 0 1 .683-.627l18 8.5a.5.5 0 0 1 .286.451m0 0H6" /></svg>);
SendHorizontal.displayName = "SendHorizontal";
export default SendHorizontal;