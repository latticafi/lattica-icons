import { forwardRef, type SVGProps, type Ref } from "react";
const HourglassCog = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14.305 19.53.923-.382m0-2.296-.923-.383m2.547-1.241-.383-.923m.383 6.467-.383.924M17 2v4.172a2 2 0 0 1-.586 1.414l-8.828 8.828A2 2 0 0 0 7 17.828V22m12.148-6.772.383-.923m-.001 7.391-.382-.924m1.624-3.92.924-.383m-.924 2.679.924.383M5 22h6.159M5 2h14" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 2v4.172a2 2 0 0 0 .586 1.414l5.188 5.188M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
HourglassCog.displayName = "HourglassCog";
export default HourglassCog;