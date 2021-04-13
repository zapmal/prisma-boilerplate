import { PrismaClient } from '@prisma/client';

import { User } from './userTypes';

const client = new PrismaClient();

const getSingleUser = async (userID: number) => {
  const user = await client.user.findUnique({ where: { id: userID } });

  return user;
};

const getAllUsers = async () => {
  const users = await client.user.findMany();

  return users;
};

const createUser = async (_user: User) => {
  const user = await client.user.create({
    data: {
      email: _user.email,
      firstName: _user.firstName,
      lastName: _user.lastName,
      age: _user.age,
    },
  });

  return user;
};

const deleteSingleUser = async (userID: number) => {
  const deletedUser = client.user.delete({ where: { id: userID } });

  return deletedUser;
};

export {
  getSingleUser,
  getAllUsers,
  createUser,
  deleteSingleUser,
};
