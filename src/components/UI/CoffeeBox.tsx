import { useNavigate } from 'react-router'

export default function CoffeeBox() {
  //TO DO: Pass coffee ID from somewhere and pass it as a param to navigate to the page.
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/coffee/1')
  }
  return (
    <div className="border-0 border-background rounded-sm">
      <img
        src="/images/coffee.jpg"
        alt="coffee"
        onClick={handleClick}
        className="cursor-pointer"
      />
      <div className="flex justify-around w-2/3 items-center m-auto">
        <p>Flat White</p>
        <p className="font-bold">$5.5</p>
      </div>
    </div>
  )
}
