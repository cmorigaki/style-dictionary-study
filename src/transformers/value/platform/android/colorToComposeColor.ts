import { isColorDimension } from '../../../../matchers/dimension/isColorDimension';
import { Named, Transform, TransformedToken, transform } from 'style-dictionary';

// Reusing the style dictionary transformation but wrapping it with our naming guidelines
export const colorAndroidComposeColorTransform: Named<Transform> = {
  matcher: isColorDimension,
  name: 'color/android/composeColor',
  transformer: (transformedToken: TransformedToken) => {
    const { transformer } = transform['color/composeColor'] as Transform;
    return transformer(transformedToken);
  },
  type: 'value',
};
