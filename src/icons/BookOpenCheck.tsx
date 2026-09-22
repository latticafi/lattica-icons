import { forwardRef, type SVGProps, type Ref } from "react";
const BookOpenCheck = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 5v16m4-9 2 2 4-4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 6V5a2 2 0 0 0-1.999-2L16 3.002A5 5 0 0 0 12 5a5 5 0 0 0-4-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 1.999 2H8a5 5 0 0 1 4 2 5 5 0 0 1 4-2h4.001A2 2 0 0 0 22 17v-1.344" /></svg>);
BookOpenCheck.displayName = "BookOpenCheck";
export default BookOpenCheck;