import { TransformedToken} from 'style-dictionary'

export const isColorToken = ({ path } : TransformedToken) => {
  return path[0] === 'color';
};