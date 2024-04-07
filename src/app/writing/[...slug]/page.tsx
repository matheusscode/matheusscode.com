
interface Page {
    params: {
        slug: string
    }
}


export default function Page({ params }: Page) {
    return (
        <main className="flex h-screen max-w-5xl mx-auto pt-24 px-8 pb-16">
            {params.slug}
        </main>
    )
}