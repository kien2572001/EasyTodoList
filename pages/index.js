import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
const TodoApp = dynamic(() => import("../components/TodoApp"), { ssr: false });

export default function Home() {
  return (
    <div className="App-container">
      <TodoApp />
    </div>
  );
}
