import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { MemoryRouter } from 'react-router-dom';

import { Card } from './card';
import { User } from '../../entities/user';
import userEvent from '@testing-library/user-event';
import { useCars } from '../../hooks/use.cars';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
 useLocation: jest.fn().mockReturnValue({
    pathname: '/profile/'
 } as unknown as Location)
}));

jest.mock('../../hooks/use.cars', () => ({
  useCars: jest.fn().mockReturnValue({
    handleDetailsPage: jest.fn(),
    deleteCar: jest.fn()
  }),
}));



describe('Card Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter >
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
        </MemoryRouter>
      </Provider>
    );
  })
  test('renders Card correctly', async() => {
    

    const deleteButton = screen.getAllByRole('button');
    await userEvent.click(deleteButton[0]);
    expect(useCars().deleteCar).toHaveBeenCalled()
        
  });
  test('renders Card correctly', async() => {
    

    const detailsButton = screen.getAllByRole('button');
    await userEvent.click(detailsButton[2]);
    expect(useCars().handleDetailsPage).toHaveBeenCalled()
        
  });
  test('renders Card correctly', async() => {
    

    const detailsButton = screen.getAllByRole('button');
    await userEvent.click(detailsButton[1]);
  
    
        
  });
  
});
