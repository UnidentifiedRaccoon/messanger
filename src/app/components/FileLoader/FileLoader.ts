import Block, { BaseProps } from '../../../utils/Core/Block';

import FileLoaderTmpl from './FileLoader.tmpl';
import * as styles from './FileLoader.module.scss';

interface FileLoaderProps {
  accept: string
  name: string
}

export default class FileLoader extends Block<BaseProps> {
  static className = 'FileLoader';

  constructor({ ...props }: FileLoaderProps) {
    super({
      ...props,
      styles,
    });
  }

  render() {
    return FileLoaderTmpl();
  }
}
