import Button from './TSmigration/components/Button';
import RequestError from './TSmigration/widgets/RequestError';
import registerComponents from './utils/registerComponents';
import Link from './TSmigration/components/Link';

const registrar = () => {
  registerComponents(Button);
  registerComponents(RequestError);
  registerComponents(Link);
};

export default registrar;
