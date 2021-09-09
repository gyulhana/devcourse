import ClickBtn from "./button.js"
import Detail from "./detail.js"

export default function App ({ target }) {

  const picker = () => {
    const hexString = '0123456789abcdef'
    const pickIndex = () => Math.floor(Math.random() * 16)
    const hexColorCode = () => {
      let temp = '#'
      for (let i = 0; i < 6; i++){
        const index = pickIndex()
        temp += hexString[index]
      }
      return temp;
    }
    return hexColorCode();
  }

  const way = () => {
    const ways = ['right', 'left']
    const pickIndex = () => Math.floor(Math.random() * 2)
    return ways[pickIndex()]
  }

  const detail = new Detail({
    target,
    initialState: {
      way: 'right',
      start: '#ffffff',
      end: '#ffffff'
    }
  })

  new ClickBtn({
    target,
    onClick: () => {
      detail.setState({
        way: way(),
        start: picker(),
        end: picker()
      })
    }
  })
}