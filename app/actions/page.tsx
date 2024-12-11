import Form from '../../components/Form';
import UsersList from '../../components/UsersList';
import { fetchUsers } from '../../utils/action';

const ActionsPage = async () => {
  const users = await fetchUsers();
  return (
    <>
      <Form />
      <UsersList users={users} />
    </>
  );
};

export default ActionsPage;
