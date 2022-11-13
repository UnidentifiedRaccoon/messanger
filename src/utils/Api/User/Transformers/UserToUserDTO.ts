import { User, UserDTO } from '../Types';

const UserToUserDTO = (user: User): UserDTO => ({
  id: user.id,
  first_name: user.name,
  second_name: user.surname,
  display_name: user.displayName,
  login: user.login,
  email: user.email,
  phone: user.phone,
  avatar: user.avatar,
});

export default UserToUserDTO;
