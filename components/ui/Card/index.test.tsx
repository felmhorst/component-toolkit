import { render, screen } from '@testing-library/react';
import { Card } from './index';

describe('Card', () => {
    it('renders children', () => {
        render(<Card><p>Content</p></Card>);
        expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('renders multiple children', () => {
        render(
            <Card>
                <p>First</p>
                <p>Second</p>
            </Card>
        );
        expect(screen.getByText('First')).toBeInTheDocument();
        expect(screen.getByText('Second')).toBeInTheDocument();
    });
});
