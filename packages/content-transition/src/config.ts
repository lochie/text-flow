import { ContentTransitionProps } from "./components/content-transition/types";

const defaultConfig: Partial<ContentTransitionProps> = {
  duration: 0.4,
  ease: [0.19, 1, 0.22, 1],
  respectMotionPreference: true,
};

export default defaultConfig;
