const guideForm = document.querySelector('#guide-form');
const downloadReady = document.querySelector('#download-ready');
const checkoutDialog = document.querySelector('#checkout-dialog');
const successDialog = document.querySelector('#success-dialog');

guideForm.addEventListener('submit', (event) => {
  event.preventDefault();
  downloadReady.hidden = false;
  downloadReady.focus();
  const link = document.createElement('a');
  link.href = 'assets/SECONDS-LEFT-Free-Go-Bag-Guide.pdf';
  link.download = 'SECONDS-LEFT-Free-Go-Bag-Guide.pdf';
  document.body.appendChild(link);
  link.click();
  link.remove();
});

document.querySelector('#buy-button').addEventListener('click', () => checkoutDialog.showModal());
document.querySelector('#test-complete').addEventListener('click', () => {
  checkoutDialog.close();
  successDialog.showModal();
});

document.querySelectorAll('.dialog-close').forEach((button) => {
  button.addEventListener('click', () => button.closest('dialog').close());
});

document.querySelector('.dialog-done').addEventListener('click', () => successDialog.close());

document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.addEventListener('click', (event) => {
    const box = dialog.getBoundingClientRect();
    const outside = event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
    if (outside) dialog.close();
  });
});
