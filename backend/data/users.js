import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Aly Assem',
    email: 'aly@aly.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Steve Harvey',
    email: 'steve@steve.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
