export default function CoffeeBox() {
  return (
    <div className="border-0 border-background rounded-sm">
      <img src="/images/coffee.jpg" alt="coffee" />
      <div className="flex justify-around">
        <p>Description</p>
        <p>Price</p>
      </div>
    </div>
  )
}
