import { transformPlaceToText } from './TransformPlaceToText';

describe('TransformPlaceToText', () => {
  test('if returns correctly formatted full string', () => {
    expect(transformPlaceToText('Leszno', 'Greater Poland Voivodeship', 'Poland', 'Leszno')).toBe(
      'Leszno, Leszno, Greater Poland Voivodeship, Poland',
    );
  });

  test('if returns correctly formatted string without state', () => {
    expect(transformPlaceToText('Leszno', 'Greater Poland Voivodeship', 'Poland')).toBe(
      'Leszno, Greater Poland Voivodeship, Poland',
    );
  });

  test('if returns incorrectly formatted full string', () => {
    expect(
      transformPlaceToText('Leszno', 'Leszno', 'Greater Poland Voivodeship', 'Poland'),
    ).not.toBe('Leszno, Leszno, Greater Poland Voivodeship, Poland');
  });
});

export {};
