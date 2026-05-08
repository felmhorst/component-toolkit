import { render, screen, fireEvent, within } from '@testing-library/react';
import { ToggleButton } from './index';
import { ToggleButtonGroup } from './ToggleButtonGroup';

describe('ToggleButtonGroup', () => {
    it('renders all child buttons in single mode', () => {
        render(
            <ToggleButtonGroup>
                <ToggleButton value="a">A</ToggleButton>
                <ToggleButton value="b">B</ToggleButton>
            </ToggleButtonGroup>
        );
        expect(screen.getAllByRole('radio')).toHaveLength(2);
    });

    it('has role="radiogroup" in single mode', () => {
        render(
            <ToggleButtonGroup>
                <ToggleButton value="a">A</ToggleButton>
            </ToggleButtonGroup>
        );
        expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    });

    it('has role="toolbar" in multiple mode', () => {
        render(
            <ToggleButtonGroup multiple>
                <ToggleButton value="a">A</ToggleButton>
            </ToggleButtonGroup>
        );
        expect(screen.getByRole('toolbar')).toBeInTheDocument();
    });

    it('clicking a button selects it in single mode', () => {
        render(
            <ToggleButtonGroup>
                <ToggleButton value="a">A</ToggleButton>
            </ToggleButtonGroup>
        );
        const button = screen.getByRole('radio', { name: 'A' });
        fireEvent.click(button);
        expect(button).toHaveAttribute('aria-checked', 'true');
    });

    it('single mode deselects previous button when new one is clicked', () => {
        render(
            <ToggleButtonGroup>
                <ToggleButton value="a">A</ToggleButton>
                <ToggleButton value="b">B</ToggleButton>
            </ToggleButtonGroup>
        );
        const [buttonA, buttonB] = screen.getAllByRole('radio');
        fireEvent.click(buttonA);
        fireEvent.click(buttonB);
        expect(buttonA).toHaveAttribute('aria-checked', 'false');
        expect(buttonB).toHaveAttribute('aria-checked', 'true');
    });

    it('multiple mode allows selecting multiple buttons', () => {
        render(
            <ToggleButtonGroup multiple>
                <ToggleButton value="a">A</ToggleButton>
                <ToggleButton value="b">B</ToggleButton>
            </ToggleButtonGroup>
        );
        const toolbar = screen.getByRole('toolbar');
        const buttons = within(toolbar).getAllByRole('button');
        fireEvent.click(buttons[0]);
        fireEvent.click(buttons[1]);
        expect(buttons[0]).toHaveAttribute('aria-pressed', 'true');
        expect(buttons[1]).toHaveAttribute('aria-pressed', 'true');
    });

    it('multiple mode deselects a selected button when clicked again', () => {
        render(
            <ToggleButtonGroup multiple>
                <ToggleButton value="a">A</ToggleButton>
            </ToggleButtonGroup>
        );
        const toolbar = screen.getByRole('toolbar');
        const button = within(toolbar).getByRole('button', { name: 'A' });
        fireEvent.click(button);
        expect(button).toHaveAttribute('aria-pressed', 'true');
        fireEvent.click(button);
        expect(button).toHaveAttribute('aria-pressed', 'false');
    });

    it('disabled group prevents selection', () => {
        render(
            <ToggleButtonGroup disabled>
                <ToggleButton value="a">A</ToggleButton>
            </ToggleButtonGroup>
        );
        const group = screen.getByRole('radiogroup');
        expect(group).toHaveAttribute('aria-disabled', 'true');
        const button = screen.getByRole('radio');
        fireEvent.click(button);
        expect(button).toHaveAttribute('aria-checked', 'false');
    });

    it('ArrowRight moves focus to the next button', () => {
        render(
            <ToggleButtonGroup>
                <ToggleButton value="a">A</ToggleButton>
                <ToggleButton value="b">B</ToggleButton>
            </ToggleButtonGroup>
        );
        const group = screen.getByRole('radiogroup');
        fireEvent.keyDown(group, { key: 'ArrowRight' });
        const buttons = screen.getAllByRole('radio');
        expect(buttons[1]).toHaveAttribute('tabindex', '0');
    });

    it('ArrowLeft moves focus to the previous button', () => {
        render(
            <ToggleButtonGroup>
                <ToggleButton value="a">A</ToggleButton>
                <ToggleButton value="b">B</ToggleButton>
            </ToggleButtonGroup>
        );
        const group = screen.getByRole('radiogroup');
        fireEvent.keyDown(group, { key: 'ArrowRight' });
        fireEvent.keyDown(group, { key: 'ArrowLeft' });
        const buttons = screen.getAllByRole('radio');
        expect(buttons[0]).toHaveAttribute('tabindex', '0');
    });

    it('Home key moves focus to the first button', () => {
        render(
            <ToggleButtonGroup>
                <ToggleButton value="a">A</ToggleButton>
                <ToggleButton value="b">B</ToggleButton>
            </ToggleButtonGroup>
        );
        const group = screen.getByRole('radiogroup');
        fireEvent.keyDown(group, { key: 'ArrowRight' });
        fireEvent.keyDown(group, { key: 'Home' });
        expect(screen.getAllByRole('radio')[0]).toHaveAttribute('tabindex', '0');
    });

    it('End key moves focus to the last button', () => {
        render(
            <ToggleButtonGroup>
                <ToggleButton value="a">A</ToggleButton>
                <ToggleButton value="b">B</ToggleButton>
            </ToggleButtonGroup>
        );
        const group = screen.getByRole('radiogroup');
        fireEvent.keyDown(group, { key: 'End' });
        const buttons = screen.getAllByRole('radio');
        expect(buttons[buttons.length - 1]).toHaveAttribute('tabindex', '0');
    });

    it('Enter key selects the focused button', () => {
        render(
            <ToggleButtonGroup>
                <ToggleButton value="a">A</ToggleButton>
            </ToggleButtonGroup>
        );
        const group = screen.getByRole('radiogroup');
        fireEvent.keyDown(group, { key: 'Enter' });
        expect(screen.getByRole('radio', { name: 'A' })).toHaveAttribute('aria-checked', 'true');
    });
});
