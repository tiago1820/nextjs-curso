import Users from "@/components/Users";

export const metadata = {
    title: "Mi pagina especial Home",
}

export default function HomePage() {
    // server component
    return <section>
        {/* client component */}
        <Users />
    </section>
}