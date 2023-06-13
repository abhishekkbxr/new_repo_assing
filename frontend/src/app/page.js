// import Image from 'next/image'
import styles from './page.module.css';
import Card from '../components/Tab'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Card/>
    </main>
  )
}
