import { isSizeDimension } from '../../../../matchers/dimension/isSizeDimension';
import { Named, Transform } from 'style-dictionary';

export const sizeAndroidComposeDpTransform: Named<Transform> = {
  matcher: isSizeDimension,
  name: 'size/android/composeDp',
  transformer: ({ value }) => {
    const intValue = parseInt(value);

    if (intValue < 0) {
      return `(${intValue}).dp`;
    } else {
      return `${intValue}.dp`;
    }
  },
  type: 'value',
};
