import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useMemo } from "react";
import { Recipe } from "../../stores/recipe-slice/recipe-slice.types";
import { UseAppStore } from "../../stores/useAppStore";

export const Modal = () => {
  const { modal, closeModal, recipeSelected, addFavourite, deleteFavourite, favorites } = UseAppStore();

  const isRecipeFavourite = useMemo(()=>{
    const isFav = favorites.find(fav => fav.idDrink === recipeSelected.idDrink)
    return isFav
  },[recipeSelected, favorites])


  const renderIngredients = () => {
    const ingredients: JSX.Element[] = [];
    for (let i = 1; i <= 6; i++) {
      const ingredient = recipeSelected[`strIngredient${i}` as keyof Recipe];
      const measure = recipeSelected[`strMeasure${i}` as keyof Recipe];

      if (ingredient && measure) {
        ingredients.push(
          <li key={i} className=" text-lg font-normal">
            {ingredient} - {measure}
          </li>
        );
      }
    }
    return ingredients;
  };

  const handleAddFavourite = (recipe: Recipe) =>{
    closeModal()
    addFavourite(recipe)
  }

  const handleDeleteFavourite = (id: Recipe['idDrink']) => {
    closeModal()
    deleteFavourite(id)
  }
  
  return (

      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-4xl font-extrabold my-5 text-center"
                  >
                    {recipeSelected && recipeSelected.strDrink}
                  </Dialog.Title>
                  <img
                    alt={`img-${recipeSelected.idDrink}`}
                    src={recipeSelected.strDrinkThumb}
                    className=" mx-auto w-96"
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    Ingredients & Quantities
                  </Dialog.Title>
                  {renderIngredients()}
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    Instructions
                  </Dialog.Title>
                  <p className=" text-lg ">{recipeSelected.strInstructions}</p>

                  <div className=" mt-5 flex justify-between gap-4">
                    <button
                      type="button"
                      className=" w-full bg-gray-600 rounded-gray-600 p-3 font-bold uppercase text-white shadow hover:bg-gray-500"
                      onClick={closeModal}
                    >
                      Close
                    </button>

                    <button
                      type="button"
                      className=" w-full bg-orange-600 rounded-orange-600 p-3 font-bold uppercase text-white shadow hover:bg-orange-500"
                      onClick={
                        isRecipeFavourite ? 
                        () => handleDeleteFavourite(recipeSelected.idDrink)
                        :
                        ()=> handleAddFavourite(recipeSelected)

                      }
                    >
                      {isRecipeFavourite ? 'Delete to favorites' : 'Add to favorites'}
                    </button>

                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

  );
}

export default Modal