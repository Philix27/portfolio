import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'


export default function Navbar() {
    return (
        <>    
        <div className={styles.nav}>

           <input type="checkbox" id="check" className={styles.check} />
            <div className={styles.bars}>
                <label htmlFor="check" >
                <FaBars />
                </label>
            </div>

           <div className={styles.nav_start}>
                    <Link href="/">
                        <a>
                        <img className={styles.logo}
                            src="/images/logo.png"
                            width={90} height={45} />
                        </a>
                    </Link>
           {/* <Image className={styles.logo} src="/images/logo.png" width={90} height={45}/> */}
               <div className={styles.nav_bg} >
                
                <ul className={styles.nav_start_list}>       
                        <li className={styles.nav_start_list_item}>
                            <div className={styles.bars_close}>
                                <label htmlFor="check" >
                                <FaTimes />
                                </label>
                            </div>
                        </li>
                        <li className={styles.nav_start_list_item}><Link href="/"><a className={styles.link}>Home</a></Link></li>
                        <li className={styles.nav_start_list_item}><Link href="#about"><a className={styles.link}>About</a></Link></li>
                        <li className={styles.nav_start_list_item}><Link href="/projects"><a className={styles.link}>Projects</a></Link></li>
                        <li className={styles.nav_start_list_item}><Link href="/pharmacist"><a className={styles.link}>Pharmacist</a></Link></li>
                        <li className={styles.nav_start_list_item}><Link href="/blogs"><a className={styles.link}>Blogs</a></Link></li>                        
                        <li className={styles.nav_start_list_item}><Link href="/blogs"><a className={styles.link}>Book Reviews</a></Link></li>                        
                    </ul>
               </div>

           </div>
          
        </div>
        </>
    )
}
