import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";
import styles from './App.module.css';

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Vânia Gomes"
        content="Conteúdo do post"
      />
    </>
  )
}
