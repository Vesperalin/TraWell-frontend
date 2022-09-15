import { Text, Wrapper } from './AdditionalRideInfo.style';

interface Props {
  seats: number;
  takenSeats: number;
  cost: number;
}

export const AdditionalRideInfo = ({ seats, takenSeats, cost }: Props) => {
  return (
    <Wrapper>
      <Text variant='h4'>
        Available seats:&nbsp;
        <span>
          {takenSeats}/{seats}
        </span>
      </Text>
      <Text variant='h4'>
        Cost:&nbsp;
        <span>{cost}zł</span>
      </Text>
    </Wrapper>
  );
};
