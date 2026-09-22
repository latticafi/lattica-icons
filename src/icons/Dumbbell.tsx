import { forwardRef, type SVGProps, type Ref } from "react";
const Dumbbell = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m2.5 21.5 1.4-1.4M20.1 3.9l1.4-1.4M9.6 14.4l4.8-4.8m3.196 3.168a2 2 0 0 0 2.829-2.83l-1.768-1.766a2 2 0 0 0 2.828-2.83l-2.828-2.827a2 2 0 1 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829zM5.343 21.485a2 2 0 0 0 2.829-2.828l1.767 1.768a2 2 0 0 0 2.829-2.83l-6.364-6.363a2.001 2.001 0 1 0-2.829 2.829l1.768 1.767a2 2 0 1 0-2.828 2.829z" /></svg>);
Dumbbell.displayName = "Dumbbell";
export default Dumbbell;