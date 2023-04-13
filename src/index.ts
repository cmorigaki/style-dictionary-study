import StyleDictionary from 'style-dictionary'
import { Config } from 'style-dictionary';
import { getAndroidComposePlatform } from './config/androidComposePlatform'
import { getAndroidXmlPlatform } from './config/androidXmlPlatform'
import { registerTransforms } from './transformers';
import { registerFormats } from './formats';

function getStyleDictionaryConfig(brand: String, theme: String) : Config {
  return {
    source: [
        `tokens/${brand}/*.json`,
        `tokens/${brand}/${theme}/*.json`,
        "tokens/globals/*.json",
        `tokens/globals/${theme}/*.json`,
      ],
      platforms: {
        androidXml: getAndroidXmlPlatform(brand, theme),
        androidCompose: getAndroidComposePlatform(brand, theme),
      }
  } as Config
}

console.log('Build started...');

['brand-1', 'brand-2'].map(function (brand) {
  ['androidXml', 'androidCompose'].map(function (platform) {
    ['light', 'dark'].map(function (theme) {
      console.log('\n==============================================');
      console.log(`\nProcessing: [${platform}] [${brand}] [${theme}]`);

      let styleDictionary = StyleDictionary.extend(getStyleDictionaryConfig(brand, theme));
      registerTransforms(styleDictionary);
      registerFormats(styleDictionary);
      styleDictionary.buildPlatform(platform);
      console.log('\nEnd processing');
    })
  })
})

console.log('\n==============================================');
console.log('\nBuild completed!');
