import { render, screen } from '@testing-library/react';
import { Heading } from './index';

describe('Heading', () => {
    it('renders as h1 by default', () => {
        render(<Heading>Title</Heading>);
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });

    it('renders as h2 when tag="h2"', () => {
        render(<Heading tag="h2">Title</Heading>);
        expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    });

    it('renders as h3 when tag="h3"', () => {
        render(<Heading tag="h3">Title</Heading>);
        expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    });

    it('renders as h4 when tag="h4"', () => {
        render(<Heading tag="h4">Title</Heading>);
        expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument();
    });

    it('renders as h5 when tag="h5"', () => {
        render(<Heading tag="h5">Title</Heading>);
        expect(screen.getByRole('heading', { level: 5 })).toBeInTheDocument();
    });

    it('renders children text', () => {
        render(<Heading>My Heading</Heading>);
        expect(screen.getByText('My Heading')).toBeInTheDocument();
    });
});
