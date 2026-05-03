import styles from "./page.module.css";
import {TextField} from "@/components/ui/TextField";
import {TextArea} from "@/components/ui/TextArea";
import {PasswordField} from "@/components/ui/PasswordField";
import {Button} from "@/components/ui/Button";
import {Checkbox} from "@/components/ui/Checkbox";
import {Switch} from "@/components/ui/Switch";
import {Select} from "@/components/ui/Select";
import {Option} from "@/components/ui/Select/Option";
import {ToggleButtonGroup} from "@/components/ui/ToggleButton/ToggleButtonGroup";
import {ToggleButton} from "@/components/ui/ToggleButton";
import {HexColorField} from "@/components/ui/HexColorField";
import {HueSlider} from "@/components/ui/HueSlider";
import {OpacitySlider} from "@/components/ui/OpacitySlider";
import {ColorSlider2D} from "@/components/ui/ColorSlider2D";
import {ColorPicker} from "@/components/ui/ColorPicker";

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
            <ToggleButtonGroup>
                <ToggleButton value={"left"}>left</ToggleButton>
                <ToggleButton value={"right"}>right</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup multiple>
                <ToggleButton value={"left"}>left</ToggleButton>
                <ToggleButton value={"right"}>right</ToggleButton>
            </ToggleButtonGroup>

            <h2>Color</h2>
            <HexColorField
                defaultValue={'#ff0000'}/>
            <HueSlider orientation={"horizontal"}/>
            <OpacitySlider orientation={"horizontal"}/>

            <ColorPicker/>
        </div>
    );
}
