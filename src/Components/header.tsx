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
              <div >
                <ul>
                  <li><a href="frontpage">Forsíða</a></li>
                  <li><a href="calander">Dagatal</a></li>
                  <li><a href="mypage">Mín síða</a></li>
                </ul>
              </div>
            </header>
        </>
    )
}