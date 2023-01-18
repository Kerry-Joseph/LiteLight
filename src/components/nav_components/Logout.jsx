export default function Logout() {


  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }


  return (
    <h1 className="absolute top-20 left-[40rem] z-20 bg-red-400" onClick={logout}>
      Logout
    </h1>
  )
}