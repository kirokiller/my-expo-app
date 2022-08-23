import { Dimensions, PixelRatio, Platform } from "react-native";
import { colors } from "../constants";

const pixelRatio = PixelRatio.get();

const deviceW = Math.min(414, Dimensions.get("window").width);

const basePx = 750;

export function rpx(px: number) {
  return (px * deviceW) / basePx;
}

/**
 * 1像素函数
 *
 */
export function singlePx() {
  return Platform.OS == "web"
    ? 1
    : Platform.OS == "ios"
    ? rpx(1)
    : 1 / pixelRatio;
}

export function getRouletteColor(index: number) {
  return colors[index % colors.length];
}

export default {
  rpx,
  singlePx,
  getRouletteColor,
};
