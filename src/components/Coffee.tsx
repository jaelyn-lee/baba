import CoffeeBox from './UI/CoffeeBox'

export default function Coffee() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <CoffeeBox />
      <CoffeeBox />
      <CoffeeBox />
      <CoffeeBox />
    </div>
  )
}
