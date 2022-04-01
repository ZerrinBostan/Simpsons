import Config from 'react-native-config';

const fetchSimpsons = async () => {
  const response = (await fetch(Config.API_KEY)).json();
  return response;
};

export default fetchSimpsons;
