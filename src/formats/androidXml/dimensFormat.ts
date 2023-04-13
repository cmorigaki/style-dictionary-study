import fs from 'fs';

import _template from 'lodash/template';
import { Format, formatHelpers } from 'style-dictionary';

const { fileHeader } = formatHelpers;

export const androidXmlDimensFormat: Format = {
  name: 'androidXml/dimens',
  formatter: ({ dictionary, file, options }) => {
    const template = _template(
      fs.readFileSync(__dirname + '/keyValueResource.xml.template', { encoding: 'utf8' })
    );
    const node = 'dimen';

    const allTokens = dictionary.allTokens;

    return template({ allTokens, file, options, fileHeader, node });
  },
};
