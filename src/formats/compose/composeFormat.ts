import fs from 'fs';

import _template from 'lodash/template';
import { Dictionary, Format, TransformedToken, formatHelpers } from 'style-dictionary';

const { fileHeader } = formatHelpers;

export const composeClassFormat: Format = {
  name: 'compose/object',
  formatter: ({ dictionary, file, options }) => {
    const template = _template(fs.readFileSync(__dirname + '/object.kt.template', { encoding: 'utf8' }));
    const { parentName } = file.options || {};
    const parentCode = generateParentCode(parentName);

    const allTokens = dictionary.allTokens;

    const importArray = generateImportArray(dictionary);

    return template({ allTokens, file, parentCode, importArray, options, fileHeader });
  },
};

function generateImportArray(dictionary: Dictionary) : string[] | null {
  let importArray = new Set<string>();
  dictionary.allTokens.forEach((token: TransformedToken) => {
    if ((token.value as string).startsWith("Color(")) {
      importArray.add('import androidx.compose.ui.graphics.Color');
    }
    if ((token.value as string).endsWith(".dp")) {
      importArray.add('iimport androidx.compose.ui.unit.dp');
    }
  });
  return Array.from(importArray).sort();
}

export const composeInterfaceFormat: Format = {
  name: 'compose/interface',
  formatter: ({ dictionary, file, options }) => {
    const template = _template(fs.readFileSync(__dirname + '/template/interface.kt.template', { encoding: 'utf8' }));
    const { importArray, parentName } = file.options || {};
    const parentCode = generateParentCode(parentName);

    return template({
      dictionary,
      file,
      parentCode,
      importArray,
      options,
      fileHeader,
    });
  },
};

function generateParentCode(parentName?: string): string {
  if (parentName) {
    return ` : ${parentName}`;
  } else {
    return '';
  }
}
