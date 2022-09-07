import template from './index.hbs';
import styles from './index.module.scss';
import '../../components';

export default (props) => template({ ...props, styles });
