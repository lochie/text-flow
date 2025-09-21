import { Transition } from "motion";

export type TextFlowProps = {
  debug?: boolean;
  children: string; // TODO: support ReactNode
  duration?: Transition["duration"];
  ease?: Transition["ease"];
  respectMotionPreference?: boolean;
  onAnimationComplete?: () => void;
};
