import * as components from '../../app/components';
import * as widgets from '../../app/widgets';

import registerComponents from './registerComponents';

const isBlock = (_: any): _ is any => true;
const componentList: any[] = Object.values(components).filter(isBlock);
const widgetList: any[] = Object.values(widgets).filter(isBlock);

const registrar = () => {
  componentList.forEach(registerComponents);
  widgetList.forEach(registerComponents);
};

export default registrar;
