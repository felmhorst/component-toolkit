import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from './index';

describe('LoadingSpinner', () => {
    it('has aria-label="loading"', () => {
        render(<LoadingSpinner />);
        expect(screen.getByLabelText('loading')).toBeInTheDocument();
    });

    it('renders with default medium size without error', () => {
        render(<LoadingSpinner />);
        expect(screen.getByLabelText('loading')).toBeInTheDocument();
    });

    it('renders with small size without error', () => {
        render(<LoadingSpinner size="sm" />);
        expect(screen.getByLabelText('loading')).toBeInTheDocument();
    });
});
