import { Transition } from "motion";

export type TextFlowProps = {
  children: string;
  duration?: Transition["duration"];
  ease?: Transition["ease"];
  respectMotionPreference?: boolean;
  onAnimationComplete?: () => void;
};
