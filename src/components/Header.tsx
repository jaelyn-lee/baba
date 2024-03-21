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

  return (
    <div className="items-center justify-between grid grid-cols-8 gap-4 h-28 border-b-2 border-light-green">
      <div className="flex items-center col-span-7" onClick={handleLogo}>
        <img src="/images/logo.png" alt="logo" className="w-10" />
        <h1 className="font-bold text-lg">Cafe Baba</h1>
      </div>
      <div className="flex justify-around">
        <button onClick={handleClick}>
          <img src="/images/search.png" alt="search" className="w-7" />
        </button>
        <button onClick={handleClick}>
          <img src="/images/user.png" alt="user" className="w-7" />
        </button>
        <button onClick={handleClick}>
          <img
            src="/images/shopping-cart.png"
            alt="shopping-cart"
            className="w-7"
          />
        </button>
      </div>
    </div>
  )
}
