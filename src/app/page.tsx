import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className='forsida'>
        <h2>Planaðu daginn með stundartöflunni okkar!</h2>
        <p>Með okkur getur þú planað daginn með því að velja ýmsa viðeigandi flokka. Hjá okkur kostar það einungis 500 kr. á mánuði en einnig er hægt að nálgast upplýsingar um fjölskylduplan á þínum síðum.</p>
        <p>Smelltu á slóðina hér að neðan til að byrja að plana!</p>
        <a href="mypage">Mín síða</a>
      </div>
    </div>
  );
}
