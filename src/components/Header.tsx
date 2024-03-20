export default function Header() {
  const handleClick = () => {
    console.log('Button is clicked.')
  }
  return (
    <div className="items-center justify-between grid grid-cols-5 gap-4 h-28">
      <div className="flex items-center col-span-4">
        <img src="/images/logo.png" alt="logo" className="w-10" />
        <h1 className="font-bold text-lg">Cafe Baba</h1>
      </div>
      <div className="flex justify-around">
        <button onClick={handleClick}>Cart</button>
        <button onClick={handleClick}>Profile</button>
      </div>
    </div>
  )
}
