import Bubble from '../../components/Bubble';
import Button from '../../components/Button';
import Form from '../../components/Form';
import InputError from '../../components/ControlledInput/InputError';
import ControlledInput from '../../components/ControlledInput';
import IconProfile from '../../components/IconProfile';
import Link from '../../components/Link';
import MessageInput from '../../components/MessageInput';
import Search from '../../components/Search';
import Arrow from '../../components/shared/Arrow';
import Tab from '../../components/Tab';
import Chat from '../../widgets/Chat';
import ChatEmpty from '../../widgets/Chat/ChatEmpty';
import Cross from '../../components/shared/Cross';
import ChatTabs from '../../widgets/ChatTabs';
import RequestError from '../../widgets/RequestError';
import ChatList from '../../widgets/ChatList';
import ChatMessageBar from '../../widgets/ChatMessageBar';
import ChatContent from '../../widgets/ChatContent';
import IconInline from '../../components/IconInline';
import Overlay from '../../widgets/Modal/Overlay';
import ChatTabsEmpty from '../../widgets/ChatTabs/ChatTabsEmpty';
import Message from '../../components/Message';
import Input from '../../components/ControlledInput/Input';

import registerComponents from './registerComponents';

const registrar = () => {
  // components
  registerComponents(Bubble);
  registerComponents(Button);
  registerComponents(Form);
  registerComponents(Input);
  registerComponents(InputError);
  registerComponents(ControlledInput);
  registerComponents(IconInline);
  registerComponents(IconProfile);
  registerComponents(Link);
  registerComponents(Message);
  registerComponents(MessageInput);
  registerComponents(Search);
  registerComponents(Cross);
  registerComponents(Arrow);
  registerComponents(Tab);

  // widgets
  registerComponents(Chat);
  registerComponents(ChatEmpty);
  registerComponents(ChatContent);
  registerComponents(ChatList);
  registerComponents(ChatMessageBar);
  registerComponents(ChatTabs);
  registerComponents(ChatTabsEmpty);
  registerComponents(Overlay);
  registerComponents(RequestError);
};

export default registrar;
