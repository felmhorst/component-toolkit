import { render, screen, fireEvent } from '@testing-library/react';
import { PasswordField } from './index';

describe('PasswordField', () => {
    it('renders as a password input by default', () => {
        const { container } = render(<PasswordField />);
        expect(container.querySelector('input')).toHaveAttribute('type', 'password');
    });

    it('toggle button shows "Show password" label initially', () => {
        render(<PasswordField />);
        expect(screen.getByRole('button', { name: /show password/i })).toBeInTheDocument();
    });

    it('clicking toggle reveals the password', () => {
        const { container } = render(<PasswordField />);
        fireEvent.click(screen.getByRole('button'));
        expect(container.querySelector('input')).toHaveAttribute('type', 'text');
    });

    it('clicking toggle again hides the password', () => {
        const { container } = render(<PasswordField />);
        const toggle = screen.getByRole('button');
        fireEvent.click(toggle);
        fireEvent.click(toggle);
        expect(container.querySelector('input')).toHaveAttribute('type', 'password');
    });

    it('toggle button label changes to "Hide password" when visible', () => {
        render(<PasswordField />);
        fireEvent.click(screen.getByRole('button'));
        expect(screen.getByRole('button', { name: /hide password/i })).toBeInTheDocument();
    });

    it('forwards extra props to the input', () => {
        const { container } = render(<PasswordField placeholder="Enter password" />);
        expect(container.querySelector('input')).toHaveAttribute('placeholder', 'Enter password');
    });
});
