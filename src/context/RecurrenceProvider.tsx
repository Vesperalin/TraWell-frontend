import { FC, ReactNode } from 'react';
import { RecurrenceType } from '~/models/RecurrenceType';
import { RecurrenceContext } from './RecurrenceContext';

export interface RecurrenceProviderProps {
  recurrence: RecurrenceType;
  onFieldChange: (key: string, value: unknown) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFieldsChange: (object: any) => void;
  children: ReactNode;
}

const RecurrenceProvider: FC<RecurrenceProviderProps> = ({
  recurrence,
  onFieldChange,
  onFieldsChange,
  children,
}) => {
  return (
    <RecurrenceContext.Provider value={{ recurrence, onFieldChange, onFieldsChange }}>
      {children}
    </RecurrenceContext.Provider>
  );
};

export { RecurrenceProvider };
