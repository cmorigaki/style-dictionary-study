import { TransformedToken} from 'style-dictionary'

export const isSizeDimension = ({ value } : TransformedToken) => {
  const intValue = parseInt(value);
  return !isNaN(intValue);
};