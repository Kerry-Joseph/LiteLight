export default function Logout() {


  const logout = () => {
    document.cookie = 'token=""'
    window.location.reload()
  }


  return (
    <h1 className="absolute top-20 left-[40rem] z-20 bg-red-400 hiddin" onClick={logout}>
      Logout
    </h1>
  )
}