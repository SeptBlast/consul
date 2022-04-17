export default css => css `
@keyframes icon-chevron-up {
  50% {

    background-color: var(--icon-color, var(--color-chevron-up-500, currentColor));
    -webkit-mask-image: var(--icon-chevron-up-24);
    mask-image: var(--icon-chevron-up-24);
  }

  100% {

    background-color: var(--icon-color, var(--color-chevron-up-500, currentColor));
    -webkit-mask-image: var(--icon-chevron-up-16);
    mask-image: var(--icon-chevron-up-16);
  }
}`;