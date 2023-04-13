import { File, Platform } from 'style-dictionary'
import { isBorderRadiusToken } from './../matchers/token/isBorderRadiusToken';
import { isColorToken } from './../matchers/token/isColorToken';
import { isSizingToken } from './../matchers/token/isSizingToken';

export function getAndroidXmlPlatform(brand: String, theme: String): Platform {
    var themeFolder = 'values'
    if (theme == 'dark') themeFolder += '-night'
    return {
        buildPath: `build/android/${brand}/tokens/src/main/res/`,
        files: [
            {
                destination: `${themeFolder}/colors.xml`,
                filter: isColorToken,
                format: "androidXml/colors"
            } as File,
            {
                destination: "values/sizing.xml",
                filter: isSizingToken,
                format: "androidXml/dimens"
            } as File,
            {
                destination: "values/border_radius.xml",
                filter: isBorderRadiusToken,
                format: "androidXml/dimens"
            } as File
        ],
        transforms: [
            'name/cti/snake',
            'color/android/xmlColor',
            'size/android/xmlDp',
        ],
    }
}
