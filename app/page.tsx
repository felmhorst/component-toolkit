import styles from "./page.module.css";
import {TextField} from "@/components/TextField/TextField";
import {TextArea} from "@/components/TextArea/TextArea";
import {PasswordField} from "@/components/PasswordField/PasswordField";

export default function Home() {
    return (
        <div className={styles.page}>
            <h1>Input Components</h1>
            <TextField/>
            <PasswordField/>
            <TextArea/>
        </div>
    );
}
