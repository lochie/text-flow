# torph

An animated text component for React.

## Installation

```shell
pnpm i torph
```

## Usage

```tsx
import { TextMorph } from "torph";

<TextMorph>Hello world</TextMorph>;
```

## Options

```tsx
<TextMorph
  // text to animate
  children="Hello world"
  // duration of the transition in seconds
  duration={1}
  // easing curve for the transition
  ease={[0.5, 0, 0.5, 1]}
  // disables motion for users with reduced motion preferences, true by default
  respectMotionPreference={true}
  // callback for when the animation completes
  onAnimationComplete={() => console.log("Animation complete")}
/>
```

## Found this useful?

Follow me on [Twitter](https://twitter.com/lochieaxon).

## Other projects

You might also like:

- [number-flow](https://number-flow.barvian.me/) - Animated number component by [Maxwell Barvian](https://x.com/mbarvian).
- [easing.dev](https://easing.dev) - Easily create custom easing graphs.

# Acknowledgements

- Thanks to [Alex](https://x.com/alexvanderzon) for assistance with the site design.
- Thanks to [Pugson](https://x.com/pugson) for putting up with my bullshit.
- Thanks to [Benji](https://x.com/benjitaylor) for coining the `Torph` name and outlining the method in [Family Values](https://benji.org/family-values#:~:text=This%20effect%20is,0.5x).
