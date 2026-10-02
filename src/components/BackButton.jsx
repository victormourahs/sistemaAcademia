import Link from "next/link";
import { useRouter } from "next/router";

export default function BackButton({ href }) {
    const router = useRouter();

    if (href) {
        return (
            <Link href={href}>
                <button className="botao-fechar">← Voltar</button>
            </Link>
        );
    }
    return (
        <button className="botao-fechar" onClick={() => router.back()}>← Voltar</button>
    );
}