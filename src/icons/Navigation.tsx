import { forwardRef, type SVGProps, type Ref } from "react";
const Navigation = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m3 11 19-9-9 19-2-8z" /></svg>);
Navigation.displayName = "Navigation";
export default Navigation;