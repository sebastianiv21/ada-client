import { useGetTestsQuery } from '@/services/testsApiSlice';

import Test from './Test';

const TestsList = () => {
  const {
    data: tests,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTestsQuery();

  let content;

  // TODO: change to spinner component
  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = tests;

    const tableContent = ids?.length
      ? ids.map((testId) => <Test key={testId} testId={testId} />)
      : null;

    content = (
      <table className="table table--tests">
        <thead className="table__thead">
          <tr>
            <th scope="col" className="table__th test__status">
              Username
            </th>
            <th scope="col" className="table__th test__created">
              Created
            </th>
            <th scope="col" className="table__th test__updated">
              Updated
            </th>
            <th scope="col" className="table__th test__title">
              Title
            </th>
            <th scope="col" className="table__th test__username">
              Owner
            </th>
            <th scope="col" className="table__th test__edit">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    );
  }

  return content;
};
export default TestsList;
