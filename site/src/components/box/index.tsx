import { ComponentPropsWithoutRef, ElementType } from "react";

export type BoxProps<T extends ElementType> = {
  as: T;
  flexDirection?: "row" | "column";
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "stretch";
  gap?: number;
} & ComponentPropsWithoutRef<T>;

export function Box<T extends ElementType>({
  as: Component,
  gap = 16,
  flexDirection = "row",
  style,
  alignItems = "center",
  justifyContent = "space-between",
  ...rest
}: BoxProps<T>) {
  const props = {
    style: {
      display: "flex",
      flexDirection,
      alignItems,
      justifyContent,
      gap,
      ...style,
    },
    ...rest,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;

  return <Component {...props} />;
}
