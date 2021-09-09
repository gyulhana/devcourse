export default function ClickBtn ({ target, onClick }) {
  const clickBtn = document.createElement('button')
  clickBtn.innerText = 'Click Me'
  target.appendChild(clickBtn)

  clickBtn.addEventListener('click', () => {
    onClick()
  })
}