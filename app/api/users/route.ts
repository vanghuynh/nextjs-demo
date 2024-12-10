import { fetchUsers, saveUser } from '../../../utils/action';

export const GET = async () => {
  const users = await fetchUsers();

  return Response.json({ users: users });
};
