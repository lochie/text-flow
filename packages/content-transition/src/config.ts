import { ContentTransitionProps } from "./components/content-transition/types";

type DefaultContentTransitionProps = Omit<
  ContentTransitionProps,
  "duration" | "children"
> & {
  duration: NonNullable<ContentTransitionProps["duration"]>;
  children?: ContentTransitionProps["children"];
};

const defaultConfig: DefaultContentTransitionProps = {
  duration: 0.4,
  ease: [0.19, 1, 0.22, 1],
  respectMotionPreference: true,
};

export default defaultConfig;
