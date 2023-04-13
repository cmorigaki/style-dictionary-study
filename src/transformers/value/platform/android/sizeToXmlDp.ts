import { isSizeDimension } from '../../../../matchers/dimension/isSizeDimension';
import { Named, Transform, TransformedToken, transform } from 'style-dictionary';

export const sizeAndroidXmlDpTransform: Named<Transform> = {
  matcher: isSizeDimension,
  name: 'size/android/xmlDp',
  transformer: ({ value }) => {
    const intValue = parseInt(value);

    return `${intValue}dp`;
  },
  type: 'value',
};
