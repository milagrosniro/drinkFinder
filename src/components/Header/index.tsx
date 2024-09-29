import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UseAppStore } from "../../stores/useAppStore";

const Header = () => {
  const {pathname} = useLocation();

  const isHome = useMemo(()=>pathname === '/',[pathname]);

  const {fetchCategories, categories, searchRecipes} = UseAppStore();

  const [searchFilters, setSearchFilters] = useState({
    ingredient: '',
    category: ''
  })



  useEffect(()=>{
    fetchCategories()
  },[])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>{setSearchFilters({...searchFilters, [e.target.name]: e.target.value})}

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if(Object.values(searchFilters).includes('')){return console.log('All fields are required')}
    const {category, ingredient} = searchFilters

    searchRecipes({category, ingredient})


  }

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
              <form onSubmit={handleSubmit}>
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
                  value={searchFilters.ingredient}
                  onChange={handleChange}
                  />
                </div>
                <div className="space-y-4">

                  <label htmlFor="category"
                  className=" block text-white uppercase font-extrabold text-lg"> Category</label>
                  <select
                  id='category'
                  name='category'
                  className="p-3 w-full rounded-lg focus:outline-none"
                  value={searchFilters.category}
                  onChange={handleChange}
                  >
                    <option value={''}>--Select category--</option>
                    {categories.drinks && categories.drinks.map((category) => <option key={category.strCategory}>{category.strCategory}</option>
                    )}
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