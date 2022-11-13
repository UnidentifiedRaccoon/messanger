import { User, UserDTO } from '../Types';

const UserDTOToUser = (user: UserDTO): User => ({
  id: user.id,
  name: user.first_name,
  surname: user.second_name,
  displayName: user.display_name,
  login: user.login,
  email: user.email,
  phone: user.phone,
  avatar: user.avatar,
});

export default UserDTOToUser;
