import Link from "next/link";


export default function Page() {
  return (
    <section className="flex h-screen max-w-5xl w-full mx-auto pt-24 px-8 pb-16">
      <div className="py-4 px-12 bg-yellow w-full h-full">
        <div className="flex flex-col gap-6 font-normal text-lg">
          <h1>
            Olá 👋, Eu me chamo Matheus {'(que significa "Dádiva de Deus" em português)'}, Engenheiro de Software, músico,
            professor e minimalista que mora na cidade de Manaus - Amazonas, Brasil.
          </h1>
          <h2>
            Eu desenvolvo coisas como Engenheiro de Software Frontend Júnior na{" "}
            <Link target="_blank" href="https://ream.com.br/" className="transition-all hover:text-red-500 underline">Ream</Link>.
            Anteriormente, trabalhei como Engenheiro de Software Fullstack
            Júnior no {" "}
            <Link target="_blank" href="https://ham.org.br/" className="transition-all hover:text-emerald-500 underline">Hospital Adventista de Manaus e Engenheiro de Manaus</Link>
            {" "}Software Frontend na {" "}
            <Link target="_blank" href="https://www.trixxtem.com.br/" className="transition-all hover:text-purple-500 underline">Trixx Tecnologia</Link>
          </h2>
        </div>
      </div>
    </section>
  );
}
