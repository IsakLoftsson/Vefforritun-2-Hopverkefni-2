import Link from "next/link";
import variables from '../styles/variables.module.scss'

export default function Header(){
    return (
        <>
            <header>
              <h1>
                Stundartafla 
              </h1>
              <p>Flokkaðu verkefni dagsins!</p>
              <nav >
                <ul>
                  <li><Link href="/">Forsíða</Link></li>
                  <li><Link href="/verkefni">Verkefni</Link></li>
                  <li><Link href="/flokkar">Flokkar</Link></li>
                  <li><Link href="/innskraning">Innskráning</Link></li>
                </ul>
              </nav>
            </header>
        </>
    )
}