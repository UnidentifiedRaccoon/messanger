import Block from '../../../utils/Core/Block';

import avatarLoaderTmpl from './AvatarLoader.tmpl';
import * as styles from './AvatarLoader.module.scss';

const loadImg = (refs: Record<string, any>, onClick: (formData: FormData) => void) => {
  const fileLoader = refs.fileLoader.getContent() as HTMLInputElement;
  new Promise((resolve) => {
    fileLoader.click();
    fileLoader.onchange = () => {
      resolve(true);
    };
  })
    .then(() => {
      if (fileLoader.files) {
        const form = refs.form.getContent() as HTMLFormElement;
        const formData = new FormData(form);
        onClick(formData);
      }
    });
};

interface AvatarLoaderProps {
  onClick: (formData: FormData) => void
}

export default class AvatarLoader extends Block {
  static className = 'AvatarLoader';

  constructor({ onClick, ...props }: AvatarLoaderProps) {
    super({
      ...props,
      styles,
      events: {
        click: () => {
          loadImg(this.refs, onClick);
        },
        keydown: (e: KeyboardEvent) => {
          if (e.code === 'Enter') {
            loadImg(this.refs, onClick);
          }
        },
      },
    });
  }

  render() {
    return avatarLoaderTmpl();
  }
}
