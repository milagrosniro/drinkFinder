import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const {pathname} = useLocation();

  const isHome = useMemo(()=>pathname === '/',[pathname]);

  return (
    <header className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}>
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
              <div>

                <img className="w-32" src='/logo.svg' alt='logo'/>
              </div>
            
            <nav className="flex  gap-4">
              <NavLink  className={({isActive})=> isActive ? "text-orange-500 font-bold uppercase" : "text-white font-bold uppercase"} to={"/"}  >Home</NavLink>
              <NavLink  className={({isActive})=> isActive ? "text-orange-500 font-bold uppercase" : "text-white font-bold uppercase"} to={"/favorites"}  >Favorites</NavLink>

            </nav>
            </div>
            {isHome && (
              <form>
                <div className=" md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6 ">
                <div className="space-y-4">

                  <label htmlFor="ingredient"
                  className=" block text-white uppercase font-extrabold text-lg"> Name or Ingredient</label>
                  <input
                  id='ingredient'
                  name='ingredient'
                  type="text"
                  className="p-3 w-full rounded-lg focus:outline-none"
                  placeholder="Insert Name or ingredient. Ex: vodka, coffe"
                  />
                </div>
                <div className="space-y-4">

                  <label htmlFor="category"
                  className=" block text-white uppercase font-extrabold text-lg"> Category</label>
                  <select
                  id='category'
                  name='category'
                  className="p-3 w-full rounded-lg focus:outline-none"
                  >
                    <option value={''}>--Select category--</option>
                  </select>
                </div>
                <input
                type="submit"
                value={"Search Recipe"}
                className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"/>
                </div>
              </form>
            )}
        </div>
    </header>
  )
}

export default Header