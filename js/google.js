/**
 * 
 */

 
const scriptURL = 'https://script.google.com/macros/s/AKfycbyZ-2e9xVe7wJ4cvpa3DOyDE63avthH2gYCsM--XuFGUGAhUPB8ZcHzv9MQIoy6TBoE/exec'

/**const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Дякую! Ваше повідомлення відправленно успішно." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
}) */

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      alert("Дякую! Ваше повідомлення відправлено успішно.");
      window.location.href = 'https://www.sitetronix.site/'; // <-- сюда вставь адрес своей основной страницы
    })
    .catch(error => console.error('Error!', error.message))
})


