![GitHub](https://img.shields.io/github/license/liorp/react-dvd-player-animation)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-dvd-player-animation)

# react-dvd-player-animation

### A fully composable React component that reproduces the iconic DVD animation.

Credit for the original code is due to [andrewchmr](https://github.com/andrewchmr/BouncingDVDLogoReactSVG/)

### Installation

```bash
npm install react-dvd-player-animation
```

### Usage

Simply import the DVDLogoAnimation component.

```js
import React from "react";
import DVDLogoAnimation from "react-dvd-player-animation";

const MyDVDAnimationComponent = () => <DVDLogoAnimation />;
```

### Available props

All default styles can be overriden. A full list of props:

```ts
export interface DVDLogoAnimationProps {
  height: number;
  width: number;
  logoHeight: number;
  logoWidth: number;
  xSpeed: number;
  ySpeed: number;
}
```
