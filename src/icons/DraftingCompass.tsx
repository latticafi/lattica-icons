import { forwardRef, type SVGProps, type Ref } from "react";
const DraftingCompass = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12.99 6.74 1.93 3.44M19.136 12a10 10 0 0 1-14.271 0M21 21l-2.16-3.84M3 21l8.02-14.26M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
DraftingCompass.displayName = "DraftingCompass";
export default DraftingCompass;