import { render, screen } from '@testing-library/react';
import { Link } from './index';
import type { LinkProps } from 'next/link';
import React from 'react';

vi.mock('next/link', () => ({
    default: ({ children, href, ...props }: LinkProps & React.PropsWithChildren) => <a href={String(href)} {...props}>{children}</a>,
}));

describe('Link', () => {
    it('renders label text', () => {
        render(<Link label="Home" href="/" color="neutral" />);
        expect(screen.getByText('Home')).toBeInTheDocument();
    });

    it('forwards href to the anchor element', () => {
        render(<Link label="About" href="/about" color="neutral" />);
        expect(screen.getByRole('link')).toHaveAttribute('href', '/about');
    });

    it('renders with primary color without error', () => {
        render(<Link label="Home" href="/" color="primary" />);
        expect(screen.getByRole('link')).toBeInTheDocument();
    });
});
