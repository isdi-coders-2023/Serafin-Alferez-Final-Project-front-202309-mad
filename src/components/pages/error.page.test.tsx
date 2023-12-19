import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ErrorPage from './error.page';


describe('ErrorPage', () => {
  it('renders the error page with the correct content', () => {
    render(<ErrorPage />);

    const headerElement = screen.getByText(/404 - NOT FOUND/i);
    expect(headerElement).toBeInTheDocument();
    const imageElement = screen.getByAltText(/coche calamitoso/i);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'https://res.cloudinary.com/drv1kbmgi/image/upload/h_250/v1702739546/ca954fdb-a363-4ec2-a939-2435059437c4-broken-car-png-16.png');
  });
});
