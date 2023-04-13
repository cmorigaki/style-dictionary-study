import type { Core, Named, Transform } from 'style-dictionary';
import { colorAndroidComposeColorTransform } from "./value/platform/android/colorToComposeColor";
import { sizeAndroidComposeDpTransform } from  "./value/platform/android/sizeToComposeDp";
import { colorToXmlColorTransform } from  "./value/platform/android/colorToXmlColor";
import { sizeAndroidXmlDpTransform } from  "./value/platform/android/sizeToXmlDp";

export function registerTransforms(styleDictionary: Core) {
    const transforms: Named<Transform>[] = [
        colorAndroidComposeColorTransform,
        sizeAndroidComposeDpTransform,
        colorToXmlColorTransform,
        sizeAndroidXmlDpTransform,
    ];

    transforms.forEach((transform) => {
      styleDictionary.registerTransform(transform);
    });
}
