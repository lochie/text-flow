import { Transition } from "motion";

export interface TextMorphProps {
  debug?: boolean;
  children: string; // TODO: support ReactNode
  //fontSize?: number; // potentially supported in future
  //fontWeight?: number; // potentially supported in future
  duration?: Transition["duration"];
  ease?: Transition["ease"];
  respectMotionPreference?: boolean;
  onAnimationComplete?: () => void;
}
