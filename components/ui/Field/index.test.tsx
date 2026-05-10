import { render, screen } from '@testing-library/react';
import { Field } from './index';
import { TextField } from '../TextField';

describe('Field', () => {
    it('renders label text', () => {
        render(<Field label="Name"><TextField /></Field>);
        expect(screen.getByText('Name')).toBeInTheDocument();
    });

    it('links label to input via htmlFor and id', () => {
        render(<Field label="Name" id="my-input"><TextField /></Field>);
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
    });

    it('injects a generated id into child when no id is provided', () => {
        render(<Field label="Name"><TextField /></Field>);
        const input = screen.getByRole('textbox');
        const label = screen.getByText('Name').closest('label');
        expect(input).toHaveAttribute('id');
        expect(label).toHaveAttribute('for', input.getAttribute('id'));
    });

    it('uses provided id over generated one', () => {
        render(<Field label="Name" id="custom-id"><TextField /></Field>);
        expect(screen.getByRole('textbox')).toHaveAttribute('id', 'custom-id');
    });

    it('shows required asterisk when isRequired is true', () => {
        render(<Field label="Name" isRequired><TextField /></Field>);
        expect(screen.getByText('*')).toBeInTheDocument();
    });

    it('does not show required asterisk by default', () => {
        render(<Field label="Name"><TextField /></Field>);
        expect(screen.queryByText('*')).not.toBeInTheDocument();
    });

    it('shows hint text', () => {
        render(<Field label="Name" hint="As it appears on your ID"><TextField /></Field>);
        expect(screen.getByText('As it appears on your ID')).toBeInTheDocument();
    });

    it('shows error text with alert role', () => {
        render(<Field label="Name" error="This field is required"><TextField /></Field>);
        expect(screen.getByRole('alert')).toHaveTextContent('This field is required');
    });

    it('shows both hint and error when both are provided', () => {
        render(<Field label="Name" hint="A hint" error="An error"><TextField /></Field>);
        expect(screen.getByText('A hint')).toBeInTheDocument();
        expect(screen.getByRole('alert')).toHaveTextContent('An error');
    });
});
