import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hone Page</h1>
      <user name="Anil" />
      <user name="Asif" />
    </main>
    )}

    const User=(users)=>{
      return (
        <div>
        <h2> User Name is {users.name}</h2>
        </div>
      )
    }