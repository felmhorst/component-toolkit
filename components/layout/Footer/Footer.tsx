import styles from "./Footer.module.css";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span>Test</span>

            <div>
                <Link href={"/imprint"}>
                    Imprint
                </Link>
            </div>
        </footer>
    );
}