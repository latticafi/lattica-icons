import { forwardRef, type SVGProps, type Ref } from "react";
const SquircleDashed = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.77 3.043a34 34 0 0 0-3.54 0m3.541 17.913q-1.771.096-3.541.001m9.95-3.217c-.51 1.15-1.29 1.93-2.439 2.44M20.18 6.26c-.51-1.149-1.291-1.93-2.44-2.439m3.217 6.41q.095 1.769 0 3.54M3.043 10.23q-.091 1.77.001 3.54m3.216 6.41c-1.15-.508-1.93-1.29-2.44-2.438m2.44-13.92c-1.149.51-1.93 1.29-2.44 2.44" /></svg>);
SquircleDashed.displayName = "SquircleDashed";
export default SquircleDashed;