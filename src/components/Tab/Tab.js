import Handlebars from 'handlebars/dist/handlebars.runtime';

import { timeFormat } from '../../utils/time';

import * as styles from './Tab.module.scss';
import template from './Tab.hbs';

Handlebars.registerPartial('Tab', (...props) => {
  const time = new Date(props[0].data.lastMessage.time);
  const formattedTime = timeFormat(time);
  const dataCopy = {
    ...props[0].data,
    lastMessage: {
      ...props[0].data.lastMessage,
      time: {
        formatted: formattedTime,
        datetime: time.toISOString(),
      },
    },
  };
  return template({ ...props[0], styles: { ...props[0].styles, ...styles }, data: dataCopy }, props[1]);
});
