// import Image from 'next/image'
"use client"
import styles from './page.module.css';
import Tab from '../components/Tab'
import Navbar from '../components/Navbar'
import MiddleComp from '@/components/MiddleComp';
import { Container, Divider } from '@mui/material';
import Test from '../components/testComp'
export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Navbar /> */}
      
      {/* <Container>
      <MiddleComp />
      <Divider sx={{mt:2}}/>
      <Tab/>
      </Container> */}
      <Test />
      
    </main>
  )
}
