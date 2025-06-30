import styles from "./page.module.css";
import {TextField} from "@/components/TextField/TextField";
import {TextArea} from "@/components/TextArea/TextArea";
import {PasswordField} from "@/components/PasswordField/PasswordField";
import {Button} from "@/components/Button/Button";
import {Checkbox} from "@/components/Checkbox/Checkbox";
import {Switch} from "@/components/Switch/Switch";
import {Select} from "@/components/Select/Select";
import {Option} from "@/components/Select/Option";

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
            <Switch/>
            <Select>
                 <Option value={"option a"}>option a</Option>
                 <Option value={"test"}>test</Option>
                 <Option value={"hello"}>hello</Option>
                 <Option value={"-s"}>-s</Option>
            </Select>
            <select>
                <option value={"option a"}>option a</option>
                <option value={"test"}>test</option>
                <option value={"hello"}>hello</option>
                <option value={"-s"}>-s</option>
            </select>
        </div>
    );
}
