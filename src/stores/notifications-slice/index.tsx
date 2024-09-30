import { StateCreator } from "zustand";
import { FavoritesSlice } from "../favorites-slice/favorites-slice.types";
import { NotificationsSlice } from "./notifications-slice.types";

export const createNotificationsSlice: StateCreator<
  NotificationsSlice & FavoritesSlice,
  [],
  [],
  NotificationsSlice
> = (set, get) => ({
  notification: {
    text: "",
    error: false,
    show: false,
  },
  showNotification: (payload) => {
    set({
      notification: {
        text: payload.text,
        error: payload.error,
        show: true,
      },
    });

    setTimeout(()=>{
        get().closeNotification()
    },5000)
  },
  closeNotification: () => {
    set({  notification: {
        text: "",
        error: false,
        show: false,
      }})
  }
});
