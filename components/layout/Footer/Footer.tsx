import styles from "./Footer.module.css";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span>Florian Elmhorst © 2026</span>

            <div className={styles.links}>
                <Link href={"/imprint"}>
                    Imprint
                </Link>
                <Link href={"/privacy"}>
                    Privacy
                </Link>
            </div>
        </footer>
    );
}