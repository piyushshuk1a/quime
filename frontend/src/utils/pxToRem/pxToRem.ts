import { TYPOGRAPHY_CONSTANTS } from '@/theme/theme.constants';

const BASE_FONT_SIZE = TYPOGRAPHY_CONSTANTS.fontStyle.baseFontSize.fontSize;

/**
 * Convert from px to rem rounded off to 2 decimal places
 * @param sizes Number of pixels
 * @returns size in rem
 */
export const pxToRem = (...sizes: (number | string)[]) => {
  const getSize = (size: number) =>
    `${Math.round((size / BASE_FONT_SIZE) * 100) / 100}rem`;

  // return the comma separated sizing after converting the pixels units to rem
  return sizes
    .map((size) => (typeof size === 'string' ? size : getSize(size)))
    .join(' ');
};
