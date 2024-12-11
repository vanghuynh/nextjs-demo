'use server';

import { readFile, writeFile, readFileSync, writeFileSync } from 'fs';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (prevState: any, formData: FormData) => {
  'use server';

  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(prevState);
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  //   const rawData = Object.fromEntries(formData);
  //   console.log('rawData', rawData);
  console.log('create user', firstName, lastName);
  const newUser: User = { firstName, lastName, id: Date.now().toString() };
  try {
    await saveUser(newUser);
    revalidatePath('/actions');
    //do not put redirect inside try block, it will cause error
    //redirect('/');
    return 'User created sucessfully';
  } catch (error) {
    console.log(error);
    return 'Something went wrong creating user...';
  }
  //revalidatePath('/actions');
  //redirect('/');
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = readFileSync('users.json', { encoding: 'utf8' });
  const users: User[] = result ? JSON.parse(result) : [];
  return users;
};

export const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  writeFileSync('users.json', JSON.stringify(users));
};

export const deleteUser = async (formData: FormData) => {
  const id = formData.get('id') as string;
  const users = await fetchUsers();
  const updatedUsers = users.filter((user) => user.id !== id);
  writeFileSync('users.json', JSON.stringify(updatedUsers));
  revalidatePath('/actions');
};

export const removeUser = async (id: string, formData: FormData) => {
  const name = formData.get('name') as string;
  console.log(name);
  const users = await fetchUsers();
  const updatedUsers = users.filter((user) => user.id !== id);
  writeFileSync('users.json', JSON.stringify(updatedUsers));
  revalidatePath('/actions');
};
