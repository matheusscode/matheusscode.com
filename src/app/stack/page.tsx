import Title from "@/components/title";


export default function Page() {
  return (
    <div className='relative'>
      <div className="absolute top-0 -z-10 h-full w-full bg-transparent">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
      </div>
      <section className="flex h-screen max-w-5xl w-full mx-auto pt-24 px-8 pb-16">
        <div className="py-4 px-12 bg-yellow w-full h-full">
          <Title>Stack</Title>

        </div>
      </section>
    </div>
  );
}
