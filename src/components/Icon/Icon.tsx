/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as icons from '../../assets/svg';

type IconType = keyof typeof icons;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const iconTypes: IconType[] = Object.keys(icons) as any[]; // 스토리에서 불러오기 위함

export type IconProps = {
  /** Icon type to use */
  icon: IconType;
  /** Icon color  */
  color?: string;
  /** Icon size */
  size?: string | number;
  /** Use when you want to customize style */
  className?: string;
};

/** When you want to show an icon, use the `Icon` component.
 *
 * This component shows the icon in svg form, and you can use props or styles to define the color and size of the icon.
 *
 * When setting the appearance by style, set the color by `color` and the size by `width`.
 */
const Icon = ({ icon, color, size, className }: IconProps) => {
  const SVGIcon = icons[icon];
  return <SVGIcon css={{ fill: color || 'currentColor', width: size, height: 'auto' }} className={className} />;
};

export default Icon;
