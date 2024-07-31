import { Header } from "./components/Header";
import { Post } from "./Post";

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
