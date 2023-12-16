

import { MemoryRouter } from 'react-router-dom';
import EditCar from './edit.car';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';


jest.mock('../hooks/use.cars', () => ({
  useCars: () => ({
    updateCar: jest.fn(),
    cars: [],
    loadCars: jest.fn(),
    carUpdateState: 'idle',
  }),
}));

describe('EditCar component', () => {
  test('updates car and navigates to /profile', async () => {
    // Given
    render(
      <MemoryRouter>
        <EditCar />
      </MemoryRouter>
    );

    // When
    fireEvent.change(screen.getByLabelText('Make'), { target: { value: 'Test Make' } });
    fireEvent.change(screen.getByLabelText('Model'), { target: { value: 'Test Model' } });
    fireEvent.change(screen.getByLabelText('Color'), { target: { value: 'Test Color' } });
    fireEvent.change(screen.getByLabelText('Year'), { target: { value: '2022' } });

    const fileInput = screen.getByLabelText('file');
    Object.defineProperty(fileInput, 'files', {
      value: [new File(['(⌐□_□)'], 'test.jpg', { type: 'image/jpg' })],
    });
    fireEvent.change(fileInput);

    fireEvent.click(screen.getByText('SAVE'));

    // Then

    expect(screen.queryByText('SAVE')).toBeNull();
    expect(screen.queryByText('Test Make')).toBeInTheDocument();
    

    expect(screen.getByText('CANCEL').closest('a')).toHaveAttribute('href', '/profile');
  });
});
