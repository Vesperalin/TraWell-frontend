import { RecurrenceProvider } from '~/context/RecurrenceProvider';
import { RecurrenceType } from '~/models/RecurrenceType';
import { RecurrenceWrapper } from './components/RecurrenceWrapper';

interface Props {
  recurrence: RecurrenceType;
  onChange: (recurrence: RecurrenceType) => void;
}

const Recurrence = ({ recurrence, onChange }: Props) => {
  const handleFieldChange = (key: string, value: unknown) => {
    const newRecurrence = {
      ...recurrence,
      [key]: value,
    };
    onChange(newRecurrence);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFieldsChange = (object: any) => {
    const newRecurrence = {
      ...recurrence,
      ...object,
    };
    onChange(newRecurrence);
  };

  return (
    <RecurrenceProvider
      recurrence={recurrence}
      onFieldChange={handleFieldChange}
      onFieldsChange={handleFieldsChange}
    >
      <RecurrenceWrapper></RecurrenceWrapper>
    </RecurrenceProvider>
  );
};

export { Recurrence };
