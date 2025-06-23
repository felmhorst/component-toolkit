import styles from "./page.module.css";
import {TextField} from "@/components/TextField/TextField";
import {TextArea} from "@/components/TextArea/TextArea";
import {PasswordField} from "@/components/PasswordField/PasswordField";
import {Button} from "@/components/Button/Button";
import {Checkbox} from "@/components/Checkbox/Checkbox";

export default function Home() {
    return (
        <div className={styles.page}>
            <h1>Input Components</h1>
            <TextField/>
            <PasswordField/>
            <TextArea/>
            <Button theme={"primary"}>test</Button>
            <Button theme={"secondary"}>test</Button>
            <Button theme={"danger"}>test</Button>
            <Button theme={"warning"}>test</Button>
            <Button theme={"success"}>test</Button>
            <Checkbox/>
        </div>
    );
}
