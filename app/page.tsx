import Reel from "./reel";
import ConsoleNote from "./console-note";

export default function Home() {
  return (
    <div className="page">
      <header className="top">
        <b>The Vivek Interface</b>
        <span>Side A · 60 min</span>
      </header>

      <main className="main">
        <div className="deck" aria-hidden="true">
          <Reel />
          <div className="tape" />
          <Reel />
        </div>

        <h1>
          Side A is <span>rewinding.</span>
        </h1>

        <p className="sub">
          I&rsquo;m Vivek, a designer in Riyadh who <b>audits, plans, designs and builds</b> the
          front end too. The full site is being recorded right now. Come back when the tape clicks.
        </p>

        <p className="ml" lang="ml">
          വരി മറന്നപ്പോ നീ കൂടെപ്പാടിയ പാട്ടുകൾ
          <small>The songs you sang along to when I forgot the lines.</small>
        </p>
      </main>

      <footer className="foot">
        <span>Normal bias · High fidelity · Low patience for bad UX</span>
        <span>© 2026 Vivek V</span>
      </footer>

      <ConsoleNote />
    </div>
  );
}
