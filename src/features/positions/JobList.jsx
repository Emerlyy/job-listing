import { addFilter, selectAllFilters } from 'features/filter/filter-slice';
import { useDispatch, useSelector } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisiblePositions } from './position-slice';

const JobList = () => {

  const filters = useSelector(selectAllFilters);
  const data = useSelector((state) => selectVisiblePositions(state, filters));
  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className='job-list'>
      {data.map(item => (
        <JobPosition
          handleAddFilter={handleAddFilter}
          key={item.id}
          {...item} />
      ))}
    </div>
  )
}

export { JobList };