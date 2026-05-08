import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from './index';
import { Option } from './Option';

describe('Select', () => {
    it('renders placeholder text when nothing is selected', () => {
        render(
            <Select placeholder="Choose">
                <Option value="a">Option A</Option>
            </Select>
        );
        expect(screen.getByText('Choose')).toBeInTheDocument();
    });

    it('renders option items', () => {
        render(
            <Select placeholder="Choose">
                <Option value="a">Option A</Option>
                <Option value="b">Option B</Option>
            </Select>
        );
        expect(screen.getByRole('option', { name: 'Option A' })).toBeInTheDocument();
        expect(screen.getByRole('option', { name: 'Option B' })).toBeInTheDocument();
    });

    it('sets aria-expanded to false initially', () => {
        render(
            <Select placeholder="Choose">
                <Option value="a">Option A</Option>
            </Select>
        );
        expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
    });

    it('sets aria-expanded to true when opened', () => {
        render(
            <Select placeholder="Choose">
                <Option value="a">Option A</Option>
            </Select>
        );
        fireEvent.click(screen.getByRole('button'));
        expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
    });

    it('closes dropdown on Escape key', () => {
        render(
            <Select placeholder="Choose">
                <Option value="a">Option A</Option>
            </Select>
        );
        const button = screen.getByRole('button');
        fireEvent.click(button);
        fireEvent.keyDown(button, { key: 'Escape' });
        expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('selects an option on mousedown and marks it as selected', () => {
        render(
            <Select placeholder="Choose">
                <Option value="a">Option A</Option>
            </Select>
        );
        fireEvent.mouseDown(screen.getByRole('option', { name: 'Option A' }));
        expect(screen.getByRole('option', { name: 'Option A' })).toHaveAttribute('aria-selected', 'true');
    });

    it('shows selected value in the button after selection', () => {
        render(
            <Select placeholder="Choose">
                <Option value="a">Option A</Option>
            </Select>
        );
        fireEvent.mouseDown(screen.getByRole('option', { name: 'Option A' }));
        expect(screen.getByText('a')).toBeInTheDocument();
    });

    it('disables the trigger button when disabled prop is set', () => {
        render(
            <Select placeholder="Choose" disabled>
                <Option value="a">Option A</Option>
            </Select>
        );
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('ArrowDown selects the next option', () => {
        render(
            <Select placeholder="Choose">
                <Option value="a">Option A</Option>
                <Option value="b">Option B</Option>
            </Select>
        );
        const button = screen.getByRole('button');
        fireEvent.keyDown(button, { key: 'ArrowDown' });
        expect(screen.getByRole('option', { name: 'Option A' })).toHaveAttribute('aria-selected', 'true');
    });

    it('Home key jumps to the first option', () => {
        render(
            <Select placeholder="Choose">
                <Option value="a">Option A</Option>
                <Option value="b">Option B</Option>
            </Select>
        );
        const button = screen.getByRole('button');
        fireEvent.keyDown(button, { key: 'ArrowDown' });
        fireEvent.keyDown(button, { key: 'ArrowDown' });
        fireEvent.keyDown(button, { key: 'Home' });
        expect(screen.getByRole('option', { name: 'Option A' })).toHaveAttribute('aria-selected', 'true');
    });

    it('End key jumps to the last option', () => {
        render(
            <Select placeholder="Choose">
                <Option value="a">Option A</Option>
                <Option value="b">Option B</Option>
            </Select>
        );
        const button = screen.getByRole('button');
        fireEvent.keyDown(button, { key: 'End' });
        expect(screen.getByRole('option', { name: 'Option B' })).toHaveAttribute('aria-selected', 'true');
    });
});
