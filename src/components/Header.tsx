import { useNavigate } from 'react-router'

export default function Header() {
  const navigate = useNavigate()
  const handleClick = () => {
    console.log('Button is clicked.')
    navigate('/shopping-cart')
  }
  const handleLogo = () => {
    navigate('/')
  }
  //TO DO: Add Authentication on User icon so that it can connect to firebase auth func.
  return (
    <div className="items-center justify-between grid grid-cols-10 gap-4 h-28 border-b-2 border-light-green mb-10">
      <div
        className="flex items-center col-span-9 ml-5 cursor-pointer"
        onClick={handleLogo}
      >
        <h1 className="font-medium text-lg">CAFE BABA</h1>
      </div>
      <div className="flex justify-around mr-5">
        <button onClick={handleClick}>
          <img src="/images/search.png" alt="search" className="w-5" />
        </button>
        <button onClick={handleClick}>
          <img src="/images/user.png" alt="user" className="w-5" />
        </button>
        <button onClick={handleClick}>
          <img
            src="/images/shopping-cart.png"
            alt="shopping-cart"
            className="w-5"
          />
        </button>
      </div>
    </div>
  )
}
