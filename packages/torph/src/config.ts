import { TorphProps } from "./components/torph/types";

type DefaultTorphProps = Omit<TorphProps, "duration" | "children"> & {
  duration: NonNullable<TorphProps["duration"]>;
  children?: TorphProps["children"];
};

const defaultConfig: DefaultTorphProps = {
  duration: 0.4,
  ease: [0.19, 1, 0.22, 1],
  respectMotionPreference: true,
};

export default defaultConfig;
