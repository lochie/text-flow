import { TextMorphProps } from "./components/text-morph/types";

type DefaultTextMorphProps = Omit<TextMorphProps, "duration" | "children"> & {
  duration: NonNullable<TextMorphProps["duration"]>;
  children?: TextMorphProps["children"];
};

const defaultConfig: DefaultTextMorphProps = {
  duration: 0.4,
  ease: [0.19, 1, 0.22, 1],
  respectMotionPreference: true,
};

export default defaultConfig;
