import Head from 'next/head'
import Image from 'next/image'
import Cookie from '../components/cookie'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (

    <div>
        <Navbar />
        <Footer />
        <Cookie />
    </div>
  )


}
