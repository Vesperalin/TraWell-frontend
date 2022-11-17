import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { RidesRecurrentAsDriver } from './components/RidesRecurrentAsDriver';
import { RidesSingularAsDriver } from './components/RidesSingularAsDriver';
import { RidesSingularAsPassenger } from './components/RidesSingularAsPassenger';
import { Wrapper } from './History.style';

export const History = () => {
  const { tab } = useParams();
  const [tabNumber, setTabNumber] = useState<number>(Number(tab));

  const handleChangeTab = (_event: React.SyntheticEvent, newValue: number) => {
    setTabNumber(newValue);
  };

  const renderTab = () => {
    if (tabNumber === 0) {
      return <RidesSingularAsDriver />;
    } else if (tabNumber === 1) {
      return <RidesRecurrentAsDriver />;
    } else {
      return <RidesSingularAsPassenger />;
    }
  };

  return (
    <Wrapper>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabNumber}
          onChange={handleChangeTab}
          variant='fullWidth'
        >
          <Tab label='Singular as driver' />
          <Tab label='Recurrent as driver' />
          <Tab label='Singular as passenger' />
        </Tabs>
      </Box>
      {renderTab()}
    </Wrapper>
  );
};
