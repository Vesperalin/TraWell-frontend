import { Text, Wrapper } from './AdditionalRideInfo.style';

interface Props {
  seats: number;
  takenSeats: number;
  cost: number;
}

export const AdditionalRideInfo = ({ seats, takenSeats, cost }: Props) => {
  return (
    <Wrapper>
      <Text variant='h5'>
        Available seats:&nbsp;
        <span>
          {takenSeats}/{seats}
        </span>
      </Text>
      <Text variant='h5'>
        Cost:&nbsp;
        <span>{cost.toFixed(2)}zł</span>
      </Text>
    </Wrapper>
  );
};
