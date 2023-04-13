import { isColorDimension } from '../../../../matchers/dimension/isColorDimension';
import { Named, Transform, TransformedToken, transform } from 'style-dictionary';

// Reusing the style dictionary transformation but wrapping it with our naming guidelines
export const colorToXmlColorTransform: Named<Transform> = {
  matcher: isColorDimension,
  name: 'color/android/xmlColor',
  transformer: (transformedToken: TransformedToken) => {
    const { transformer } = transform['color/hex8android'] as Transform;
    return transformer(transformedToken);
  },
  type: 'value',
};
