export default function About() {
  const DownArrowIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>;
  
  
  return (
      <section id="about" className="min-h-screen snap-start flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-900 px-6">
        <div className="grow"></div>
        <div className="text-center grow">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Hi!
          </h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I'm Ricardo Brites, a Gameplay Programmer with a curiosity problem (I have too much of it). <br /><br />
            I'm currently looking to relocate to the US for work — though I don't have a visa just yet. <br /><br />
          </p>
        </div>
        <div className="relative flex flex-col items-center text-zinc-600 dark:text-zinc-300 animate-pulse">
          <span className="mb-2 text-sm">
            Scroll Down
          </span>
          {DownArrowIcon}
        </div>
      </section>
    );
  }
  