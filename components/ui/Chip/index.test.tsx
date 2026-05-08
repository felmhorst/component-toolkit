import { render, screen } from '@testing-library/react';
import { Chip } from './index';

describe('Chip', () => {
    it('renders label text', () => {
        render(<Chip label="Tag" />);
        expect(screen.getByText('Tag')).toBeInTheDocument();
    });

    it('renders with default primary color without error', () => {
        render(<Chip label="Default" />);
        expect(screen.getByText('Default')).toBeInTheDocument();
    });

    it('renders with danger color', () => {
        render(<Chip label="Error" color="danger" />);
        expect(screen.getByText('Error')).toBeInTheDocument();
    });

    it('renders with warning color', () => {
        render(<Chip label="Warn" color="warning" />);
        expect(screen.getByText('Warn')).toBeInTheDocument();
    });

    it('renders with success color', () => {
        render(<Chip label="OK" color="success" />);
        expect(screen.getByText('OK')).toBeInTheDocument();
    });
});
