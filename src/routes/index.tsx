import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Nathan Cobbald</Title>
      <h1>Welcome, take a look around</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://github.com/Real4XoR" target="_blank">
          GitHub
        </a>{""}
        to check out my other projects
      </p>
    </main>
  );
}
