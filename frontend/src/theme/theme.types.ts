import type { Color } from '@mui/material';

/**
 * Font variants to be used in App
 * @note To add custom typography add the name of the custom typography variant here.
 */
export type CustomTypographyVariantsType = 'title' | 'subtitle';

/**
 * Custom font sizes
 * @note Add the key of the custom font size object here.
 */
export type CustomFontSizeType =
  | 'baseFontSize'
  | 'title'
  | 'subtitle'
  | 'body1'
  | 'body2';

/**
 * Different types of font weights
 */
export type FontWeightType =
  | 'light'
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold';

/**
 * Theme Typography variant map type
 */
export type VariantMapType = Record<CustomTypographyVariantsType, string>;

export interface FontType {
  /**
   * Font size
   */
  readonly fontSize: number;

  /**
   * Font line height
   */
  readonly lineHeight: number;
}

/**
 * Typography constants type
 */
export interface TypographyConstantsType {
  /**
   * Font weight and font size for each variant
   */
  fontStyle: Record<CustomFontSizeType, FontType>;

  /**
   * Font weights
   */
  fontWeights: Record<FontWeightType, number>;
}

export type CustomColor = Omit<Color, 50 | 'A100' | 'A200' | 'A400' | 'A700'>;
