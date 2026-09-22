import { forwardRef, type SVGProps, type Ref } from "react";
const PlayingCards = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7.18 20.827-5-11a2 2 0 0 1 .993-2.647L7 5.44m7.832 3.005a1 1 0 0 0-1.589-.098l-2.075 3.098a1 1 0 0 0 0 1.11l2 3a1 1 0 0 0 1.664 0l2-3a1 1 0 0 0 0-1.11z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 2H9a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2" /></svg>);
PlayingCards.displayName = "PlayingCards";
export default PlayingCards;