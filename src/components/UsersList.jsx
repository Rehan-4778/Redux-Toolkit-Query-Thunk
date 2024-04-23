import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useDispatchThunk } from "../hooks/use-dispatch-thunk";
import UsersListItem from "./UsersListItem";

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useDispatchThunk(fetchUsers);

  const [doAddUser, isAddingUser, addingUserError] = useDispatchThunk(addUser);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const { data } = useSelector((state) => {
    return state.users;
  });

  const handleAddUser = () => {
    doAddUser();
  };

  let content = null;
  if (isLoadingUsers) {
    content = <Skeleton times={5} />;
  } else if (loadingUsersError) {
    content = <div>Error fetching...</div>;
  } else {
    content = data.map((item) => <UsersListItem key={item.id} item={item} />);
  }

  let error = addingUserError && "Error adding user...";

  return (
    <div className="w-1/2 mx-auto my-5">
      <div className="flex justify-between items-center">
        <div className="font-bold text-2xl">UsersList</div>
        <Button primary onClick={handleAddUser} loading={isAddingUser}>
          Add User
        </Button>
      </div>
      <div className="my-2 text-red-600 font-semibold">{error}</div>
      <div className="my-3">{content}</div>
    </div>
  );
}

export default UsersList;
