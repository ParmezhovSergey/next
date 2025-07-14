import styles from "./page.module.css";
import Header from "./components/Header";
import PageList from "./components/PageList";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.pagelist}>
        <PageList />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
