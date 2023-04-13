import { File, Platform } from 'style-dictionary'
import { isBorderRadiusToken } from './../matchers/token/isBorderRadiusToken';
import { isColorToken } from './../matchers/token/isColorToken';
import { isSizingToken } from './../matchers/token/isSizingToken';

export function getAndroidComposePlatform(brand: String, theme: String): Platform {
    let themeCapitalized = theme.charAt(0).toUpperCase() + theme.slice(1);
    return {
        buildPath: `build/android/${brand}/tokens/src/main/kotlin/com/designsystem/`,
        files: [
            {
                className: `Color${themeCapitalized}`,
                destination: `${theme}/Color${themeCapitalized}.kt`,
                filter: isColorToken,
                format: 'compose/object',
                packageName: `com.designsystem.${theme}`,
            } as File,
            {
                className: 'Sizing',
                destination: 'Sizing.kt',
                filter: isSizingToken,
                format: 'compose/object',
                packageName: 'com.designsystem',
            } as File,
            {
                className: 'BorderRadius',
                destination: 'BorderRadius.kt',
                filter: isBorderRadiusToken,
                format: 'compose/object',
                packageName: 'com.designsystem',
            } as File
        ],
        transforms: [
            'name/ti/camel',
            'color/android/composeColor',
            'size/android/composeDp',
        ]
    }
}
