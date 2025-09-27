import { component$, useStyles$ } from '@builder.io/qwik';

import styles from './announcement-pill.css?inline';

export default component$(() => {
  useStyles$(styles);

  return (
    <div class="announcement-pill">
      New: Products Drop 25' <a href="#" class="learn-more">Learn more</a>
    </div>
  );
});