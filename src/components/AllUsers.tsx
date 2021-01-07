import * as React from "react";
import useFetch from "../hooks/useFetch";

const AllUsers: React.FunctionComponent = () => {
  const [data] = useFetch();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(false);
  }, [data]);

  return (
    <section id="fetchingData">
      <h2>Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>LastName</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            data !== undefined &&
            data.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};

export default AllUsers;
