import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar/>
        </aside>

        <Post
        author="Vânia Gomes"
        content="Conteúdo do post"
        />
        <Post
          author="Vânia Gomes"
          content="Conteúdo do post"
        />
      </div>
    </>
  )
}
