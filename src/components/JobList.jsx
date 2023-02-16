import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'store/filters/filters-actions';
import { selectAllFilters } from 'store/filters/filters-selectors';
import { selectVisiblePositions } from 'store/positions/position-selectors';
import { JobPosition } from './JobPosition';

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