import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import EditCarPage from './edit.car.page';


jest.mock('../edit.car', () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="edit-car-mock" />),
}));

describe('EditCarPage', () => {
  it('renders the EditCarPage with the correct content', () => {
    render(<EditCarPage />);

    const titleElement = screen.getByText(/Edit your car/i);
    expect(titleElement).toBeInTheDocument();
    const editCarElement = screen.getByTestId('edit-car-mock');
    expect(editCarElement).toBeInTheDocument();
  });
});
