import Link from "next/link";
import varibles from "../styles/variables.module.scss"

export default function NotFound() {
    return (
            <main>
                <h1>Upps...</h1>
                <p>Síðan sem þú ert að leita af er ekki til.</p>
                <p>Taktu mig aftur á <Link href="/">Upphafsíðu</Link></p>
            </main>
    );
}