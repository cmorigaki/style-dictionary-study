import type { Core, Format } from 'style-dictionary';
import { androidXmlColorsFormat } from "./androidXml/colorFormat";
import { androidXmlDimensFormat } from "./androidXml/dimensFormat";
import { composeClassFormat } from "./compose/composeFormat";

export function registerFormats(styleDictionary: Core) {
  const formats: Format[] = [
    androidXmlColorsFormat,
    androidXmlDimensFormat,
    composeClassFormat,
  ];

  formats.forEach((formats) => {
    styleDictionary.registerFormat(formats);
  });
}
