export default function Logout() {


  const logout = () => {
    document.cookie = "token="
    window.location.reload()
  }


  return (
    <div className="absolute top-[8.5rem] z-20 md:top-[3.5rem] md:right-0 lg:right-[11rem]">
      <form onSubmit={logout} 
      className="flex flex-col w-screen bg-green-800 md:w-[20rem] md:rounded-b-md md:border-b md:border-l md:bg-green-900 
      lg:border-r lg:rounded-b-md">
        <div className="bg-green-700 mt-3 pt-3 p-2 grow flex flex-col justify-between md:rounded-bl-md lg:rounded-b-md">
          <input type="submit" value="Logout" className="font-bold text-xl rounded-md bg-orange-300 hover:bg-orange-400 w-full h-10
          md:text-lg"/>
        </div>
      </form>
    </div>
  )
}