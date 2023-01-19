export default function Logout() {


  const logout = () => {
    document.cookie = "token="
    window.location.reload()
  }


  return (
    <h1 className="absolute top-[6.3rem] h-8 w-20 right-2 z-20 rounded flex
    justify-center items-center border text-white bg-green-800 font-medium active:bg-green-700
    cursor-pointer" onClick={logout}>
      Logout
    </h1>
  )
}