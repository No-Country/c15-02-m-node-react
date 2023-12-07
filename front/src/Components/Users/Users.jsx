// import { useSelector, useDispatch } from "react-redux";
// import { getAllUsers } from "../../Redux/actions";
import { useEffect, useState } from "react";
import UserInfo from "../UserInfo/UserInfo";
import axios from 'axios'
import { useGlobalState } from "../../Context/context";
// Parent component (e.g., Users.jsx)

const Users = () => {
  // const dispatch = useDispatch();
  // const users = useSelector((state) => state.users);

  // useEffect(() => {
  //   dispatch(getAllUsers()); // Fetch all users from the store
  // }, [dispatch]);
  const [users, setUsers] = useState([])
  const { API_URL } = useGlobalState()

  useEffect(()=>{
    async function fetchUsers(){
      const users = await axios.get(`${API_URL}/admin/users`)
      console.log(users.data.data);
      setUsers(users.data.data)
    }
    fetchUsers()
  },[])


  return (
    <div>
      <h2>Users</h2>
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

