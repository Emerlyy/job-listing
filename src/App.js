import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FilterPanel } from 'features/filter/FilterPanel';
import { JobList } from 'features/positions/JobList';
import { TheHeader } from 'components/TheHeader';

import data from './mock/data.json';
import { addPositions } from 'features/positions/position-slice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPositions(data));
  });

  return (
    <>
      <TheHeader />
      <div className='container'>
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
}

export default App;
