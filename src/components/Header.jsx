import Link from "next/link";

export default function Header(){
    return (
        <header className="app-header">
            <Link href="/" className="app-brand">
                <span className="app-logo-texto">WRKT</span>
            </Link>
        </header>
    );
}