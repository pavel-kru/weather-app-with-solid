import type { Accessor, JSX } from 'solid-js';
import { onCleanup } from 'solid-js';

export default function clickOutside(el: HTMLElement, accessor: Accessor<any>) {
  const onClick: JSX.EventHandler<HTMLBodyElement, MouseEvent> = (e) =>
    !el.contains(e.target) && accessor()?.();
  document.body.addEventListener(
    'click',
    onClick as EventListenerOrEventListenerObject
  );

  onCleanup(() =>
    document.body.removeEventListener(
      'click',
      onClick as EventListenerOrEventListenerObject
    )
  );
}
