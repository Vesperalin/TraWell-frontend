export const transformPlaceToText = (
  name: string,
  state: string,
  country: string,
  county?: string,
) => {
  return `${name + (name === '' ? '' : ', ')}${county ? county + (county === '' ? '' : ', ') : ''}${
    state + (state === '' ? '' : ', ')
  }${country}`;
};
