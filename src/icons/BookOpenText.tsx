import { forwardRef, type SVGProps, type Ref } from "react";
const BookOpenText = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 5v16m0 0a5 5 0 0 0-4-2H3.999A2 2 0 0 1 2 17V5a2 2 0 0 1 2-2h4a5 5 0 0 1 4 2 5 5 0 0 1 4-1.998L20.001 3A2 2 0 0 1 22 5v12a2 2 0 0 1-1.999 2H16a5 5 0 0 0-4 2m4-8h2m-2-4h2M6 13h2M6 9h2" /></svg>);
BookOpenText.displayName = "BookOpenText";
export default BookOpenText;