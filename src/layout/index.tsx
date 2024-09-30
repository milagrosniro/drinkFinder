import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Modal from "../components/Modal"
import { UseAppStore } from "../stores/useAppStore"

const Layout = () => {

  const {loadFromStorage} = UseAppStore();

  useEffect(()=>{
    loadFromStorage()
  },[]);
  
  return (
    <>
    <Header/>
    <main className=" container mx-auto py-16">

    <Outlet/>
    </main>
    <Modal/>
    </>
  )
}

export default Layout