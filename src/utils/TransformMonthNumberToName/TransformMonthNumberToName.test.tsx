import { transformMonthNumberToName } from './TransformMonthNumberToName';

describe('TransformMonthNumberToName', () => {
  test('if returns correct month', () => {
    expect(transformMonthNumberToName(1)).toBe('February');
  });

  test('if returns incorrect month', () => {
    expect(transformMonthNumberToName(11)).not.toBe('November');
  });

  test('if returns error', () => {
    try {
      transformMonthNumberToName(14);
      expect(true).toBe(false);
    } catch (e) {
      expect((e as TypeError).message).toBe(
        // eslint-disable-next-line quotes
        "Cannot read properties of undefined (reading 'toString')",
      );
    }
  });
});

export {};
