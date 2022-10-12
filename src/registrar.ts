import registerComponents from './utils/registerComponents';
import Bubble from './components/Bubble';
import Button from './components/Button';
import Form from './components/Form/Form';
import IconInline from './components/IconInline';
import IconProfile from './components/IconProfile';
import Input from './components/Input';
import Link from './components/Link';
import Message from './components/Message';
import MessageInput from './components/MessageInput';
import Search from './components/Search';
import Cross from './components/shared/Cross';
import Arrow from './components/shared/Arrow';
import Tab from './components/Tab';
import Chat from './widgets/Chat';
import ChatEmpty from './widgets/Chat/ChatEmpty';
import ChatContent from './widgets/ChatContent';
import ChatList from './widgets/ChatList';
import ChatMessageBar from './widgets/ChatMessageBar';
import ChatTabs from './widgets/ChatTabs';
import ChatTabsEmpty from './widgets/ChatTabs/ChatTabsEmpty';
import Overlay from './widgets/Modal/Overlay';
import RequestError from './widgets/RequestError';

const registrar = () => {
  // components
  registerComponents(Bubble);
  registerComponents(Button);
  registerComponents(Form);
  registerComponents(IconInline);
  registerComponents(IconProfile);
  registerComponents(Input);
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
