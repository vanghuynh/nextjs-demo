'use server';

import { readFile, writeFile, readFileSync, writeFileSync } from 'fs';

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (formData: FormData) => {
  'use server';

  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  //   const rawData = Object.fromEntries(formData);
  //   console.log('rawData', rawData);
  console.log('create user', firstName, lastName);
  const newUser: User = { firstName, lastName, id: Date.now().toString() };
  await saveUser(newUser);
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = readFileSync('users.json', { encoding: 'utf8' });
  const users: User[] = result ? JSON.parse(result) : [];
  return users;
};

const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  writeFileSync('users.json', JSON.stringify(users));
};
