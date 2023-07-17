import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectTestById } from '@/services/testsApiSlice';

const Test = ({ testId }) => {
  const test = useSelector((state) => selectTestById(state, testId));

  const navigate = useNavigate();

  // TODO: consider using date-fns
  if (test) {
    const created = new Date(test?.createdAt).toLocaleString('en-US', {
      day: 'numeric',
      month: 'long',
    });

    const updated = new Date(test?.updatedAt).toLocaleString('en-US', {
      day: 'numeric',
      month: 'long',
    });

    const handleEdit = () => navigate(`/dash/tests/${testId}`);

    return (
      <tr className="table__row">
        <td className="table__cell test__status">
          {test?.completed ? (
            <span className="test__status--completed">Completed</span>
          ) : (
            <span className="test__status--open">Open</span>
          )}
        </td>
        <td className="table__cell test__created">{created}</td>
        <td className="table__cell test__updated">{updated}</td>
        <td className="table__cell test__title">{test?.title}</td>
        <td className="table__cell test__username">{test?.username}</td>

        <td className="table__cell">
          <button
            type="button"
            className="icon-button table__button"
            onClick={handleEdit}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </td>
      </tr>
    );
  }
  return null;
};
export default Test;
