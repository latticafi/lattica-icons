import { forwardRef, type SVGProps, type Ref } from "react";
const Mountain = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m8 3 4 8 5-5 5 15H2z" /></svg>);
Mountain.displayName = "Mountain";
export default Mountain;