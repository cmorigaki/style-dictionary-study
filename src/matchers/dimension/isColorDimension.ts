import { TransformedToken} from 'style-dictionary'

export const isColorDimension = ({ value } : TransformedToken) => {
  return typeof value === 'string' && value.match('^#[0-9a-fA-F]{6}$') != null;
};