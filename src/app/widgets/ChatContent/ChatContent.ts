import Block from '../../../utils/Core/Block';

import { isEqual } from '../../../utils/common/objectHelpers';

import Message from '../../components/Message';

import { Bubble } from '../../components';

import { timeFormat } from '../../../utils/common/time';

import chatContentTmpl from './ChatContent.tmpl';
import * as styles from './ChatContent.module.scss';

interface ChatContentProps {
  staticData: Record<string, any>
  message: Record<string, any>
}

export default class ChatContent extends Block {
  static className = 'ChatContent';
  private getUnread = false;
  constructor(props: ChatContentProps) {
    // const { messages } = props.data;
    // const days = separateByDays(messages); // чтобы старые были вверху, новые внизу
    // const formatTime = formatToMessageTime(days);
    // const bubble = props.staticData.newSeparator;
    // const withNewBubble = addNewBubble(formatTime, bubble); // не нашел другого способа пробросить i11y текст
    super({ ...props, message: {}, styles });
  }

  protected componentDidUpdate(oldProps: any, newProps: any): boolean {
    if (!isEqual(oldProps.message, newProps.message)) {
      // Будем динамически создавать контент для чата,
      // Таким образом мы будем добавлять сообщения, и не перерисовывать
      // весь компонент.
      const { message } = newProps;
      if (message.type === 'user connected') {
        // ToDo добавить информирование слушателей чата о подключении к каналу очередного пользователя
        return false;
      }

      // Данные для передачи в new Message()
      const messageProps = {
        context: {
          text: message.content,
          time: {
            datetime: message.time.toISOString(),
            formatted: new Intl.DateTimeFormat('ru', { hour: '2-digit', minute: '2-digit' }).format(message.time),
          },
        },
      };
      const messageHTML = new Message(messageProps).getContent();
      const data = message.time.toLocaleDateString('en').split('/').join('-');
      // Если в чате есть div для вставки дня, то будем вставлять сообщение в него
      let dayContainer = this.getContent().querySelector(`#day-wrapper-${data}`);
      // Иначе создадим новый div и вставим его
      if (!dayContainer) {
        dayContainer = document.createElement('div');
        dayContainer.setAttribute('id', `day-wrapper-${data}`);
        // Bubble отображающий сегодняшнюю дату
        const bubbleProps = {
          time: {
            datetime: message.time.toISOString(),
            formatted: timeFormat(message.time, false),
          },
        };
        const bubbleWrapper = document.createElement('div');
        bubbleWrapper.setAttribute('id', `day-bubble-wrapper-${data}`);
        bubbleWrapper.append(new Bubble(bubbleProps).getContent());
        dayContainer.append(bubbleWrapper);
        switch (message.insert) {
          case 'append': {
            this.getContent().append(dayContainer);
            break;
          }
          default: {
            this.getContent().prepend(dayContainer);
            break;
          }
        }
      }
      if (message.new && !this.getUnread) {
        const newBubble = document.createElement('div');
        newBubble.setAttribute('id', 'day-bubble-wrapper-new');
        newBubble.append(new Bubble({ text: newProps.staticData.newSeparator }).getContent());
        dayContainer.append(newBubble);
        this.getUnread = true;
      }
      dayContainer.append(messageHTML);
      this.getContent().scrollTop = messageHTML.offsetTop;
      return false;
    }
    return super.componentDidUpdate(oldProps, newProps);
  }

  render() {
    return chatContentTmpl();
  }
}
