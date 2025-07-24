import styles from "./page.module.css";
import {TextField} from "@/components/TextField/TextField";
import {TextArea} from "@/components/TextArea/TextArea";
import {PasswordField} from "@/components/PasswordField/PasswordField";
import {Button} from "@/components/Button/Button";
import {Checkbox} from "@/components/Checkbox/Checkbox";
import {Switch} from "@/components/Switch/Switch";
import {Select} from "@/components/Select/Select";
import {Option} from "@/components/Select/Option";
import {ToggleButtonGroup} from "@/components/ToggleButton/ToggleButtonGroup";
import {ToggleButton} from "@/components/ToggleButton/ToggleButton";
import {HexColorField} from "@/components/HexColorField/HexColorField";
import {HueSlider} from "@/components/HueSlider/HueSlider";
import {OpacitySlider} from "@/components/OpacitySlider/OpacitySlider";
import {ColorSlider2D} from "@/components/ColorSlider2D/ColorSlider2D";
import {ColorPicker} from "@/components/ColorPicker/ColorPicker";

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
