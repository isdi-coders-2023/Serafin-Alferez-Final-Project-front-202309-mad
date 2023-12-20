import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { BrowserRouter } from 'react-router-dom';

import { Card } from './card';
import { User } from '../../entities/user';

jest.mock('../../hooks/use.users', () => ({
  useUsers: jest.fn()
}))

jest.mock('../../hooks/use.cars', () => ({
  useCars: jest.fn().mockReturnValue({
    handleDetailsPage: jest.fn(),
    deleteCar: jest.fn()
  }),
}));



describe('Card Component', () => {
  test('renders Card correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card data={{
            id: '',
            make: 'Alfa Romeo',
            model: '',
            color: '',
            year: 0,
            author: {} as User,
            info: '',
            picture: {
              publicId: '',
              format: '',
              size: 0,
              url: '',
              width: 0,
              height: 0
            }
          }}></Card>
        </BrowserRouter>
      </Provider>
    );

    const detailsButton = screen.getByTestId('button');
    expect(detailsButton).toBeInTheDocument();
        
  });
  
});
