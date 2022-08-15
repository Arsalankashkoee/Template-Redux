import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Redux/User/userActions";

const UserContainer = () => {
  const userData = useSelector((state) => state.user);
  const { users, error, loading } = userData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  //   -------- way-2 --------
  const renderUsers = () => {
    if (loading)
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-b-2 border-violet-900 rounded-full animate-spin mt-2"></div>
          <div className="mt-2 text-violet-800">loading</div>
        </div>
      );

    if (!loading && error) return <p>{error}</p>;

    if (!loading && !error && userData && users && users.length)
      return (
        <div>
          <h2 className="text-violet-500 font-bold text-xl mb-5">user list</h2>
          {users.map((user) => (
            <p key={user.id} className="mb-3">
              {user.name}
            </p>
          ))}
        </div>
      );
  };

  return (
    <div className="container">
      {/* ------- way-1 ------- */}
      {/* {loading ? (
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-b-2 border-violet-900 rounded-full animate-spin mt-2"></div>
          <div className="mt-2 text-violet-800">loading</div>
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        userData &&
        users &&
        users.length && (
          <div>
            <h2 className="text-violet-500 font-bold text-xl mb-5">
              user list
            </h2>
            {users.map((user) => (
              <p key={user.id} className="mb-3">
                {user.name}
              </p>
            ))}
          </div>
        )
      )} */}

      {/* ------- way-2 ------- */}
      {renderUsers()}
    </div>
  );
};

export default UserContainer;
