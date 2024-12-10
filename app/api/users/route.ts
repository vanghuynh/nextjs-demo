import { fetchUsers, saveUser } from '../../../utils/action';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  console.log('searchParams: ', searchParams);
  const id = searchParams.get('id');
  console.log('id: ', id);
  const users = await fetchUsers();

  return Response.json({ users: users });
};
