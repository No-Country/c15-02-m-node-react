import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../../Redux/actions";
import UserInfo from "../UserInfo/UserInfo";

// Parent component (e.g., Users.jsx)

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUsers()); // Fetch all users from the store
  }, [dispatch]);

  return (
    <div>
      {users?.map((user) => (
        <UserInfo
          key={user.id}
          nombre={user.nombre}
          apellido={user.apellido}
          dni={user.dni}
          email={user.email}
        />
      ))}
    </div>
  );
};

export default Users;

