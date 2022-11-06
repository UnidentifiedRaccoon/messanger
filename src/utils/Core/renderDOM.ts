import Block from './Block';

export default function renderDOM(rootSelector: string, block: Block) {
  const root = document.querySelector(rootSelector);
  if (!root) throw new Error('Отсутствует компонент для вставки или неправильный селектор');
  root.innerHTML = '';
  root.append(block.getContent());
}
