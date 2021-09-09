export default function Detail ({ target, initialState }) {
  const detail = document.createElement('div')
  target.appendChild(detail)

  this.state = initialState
  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { way, start, end } = this.state
    document.body.style.background = `
    linear-gradient(to ${way}, ${start}, ${end})
    `
    
    detail.innerHTML = `
    <p class="descript">
    CLICK THE BUTTON BELLOW TO GENERATE 
    A RANDOM GRADIENT HEX COLOR COMBINATION
    </p>

    <p class="gradientColor">
      background: linear-gradient(to ${way}, ${start}, ${end});
    </p>
    `
  }

  this.render()
}