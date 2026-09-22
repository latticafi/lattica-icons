import { forwardRef, type SVGProps, type Ref } from "react";
const Guitar = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m11.9 12.1 4.514-4.514m0 0A2 2 0 0 0 17 6.172V4.828a2 2 0 0 1 .586-1.414L18.7 2.3a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4l-1.114 1.114A2 2 0 0 1 19.172 7h-1.344a2 2 0 0 0-1.414.586M6 16l2 2m.23-8.15A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z" /></svg>);
Guitar.displayName = "Guitar";
export default Guitar;