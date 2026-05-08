import { render, screen } from '@testing-library/react';
import { HexColorField } from './index';

describe('HexColorField', () => {
    it('renders as a text input', () => {
        render(<HexColorField />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('has the hex color validation pattern', () => {
        render(<HexColorField />);
        expect(screen.getByRole('textbox')).toHaveAttribute('pattern', '#[0-9a-fA-F]{6}');
    });

    it('has autocomplete disabled', () => {
        render(<HexColorField />);
        expect(screen.getByRole('textbox')).toHaveAttribute('autocomplete', 'off');
    });

    it('has autocorrect disabled', () => {
        render(<HexColorField />);
        expect(screen.getByRole('textbox')).toHaveAttribute('autocorrect', 'off');
    });

    it('forwards placeholder prop', () => {
        render(<HexColorField placeholder="#ffffff" />);
        expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', '#ffffff');
    });
});
