import { BeatLoader } from 'react-spinners';

const Spinner = ({ color = '#8aa936', size = 12 }) => {
  return <BeatLoader color={color} size={size} />;
};

export default Spinner;
