import { forwardRef, type SVGProps, type Ref } from "react";
const MapPinPlus = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19.914 11.105q.087-.55.086-1.105a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0q.419-.361.824-.738" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6m4 5h6m-3-3v6" /></svg>);
MapPinPlus.displayName = "MapPinPlus";
export default MapPinPlus;