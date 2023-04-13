import { TransformedToken} from 'style-dictionary'

export const isSizingToken = ({ path }: TransformedToken) => {
  return path[0] === 'sizing';
};