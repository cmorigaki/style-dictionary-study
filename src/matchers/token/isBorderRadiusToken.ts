import { TransformedToken} from 'style-dictionary'

export const isBorderRadiusToken = ({ path } : TransformedToken) => {
  return path[0] === 'borderRadius';
};