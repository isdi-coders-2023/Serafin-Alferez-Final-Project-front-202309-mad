import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import { store } from '../../store/store';

import { useCars } from '../../hooks/use.cars';
import { User } from '../../entities/user';
import { ImgData } from '../../entities/img.data';
import userEvent from '@testing-library/user-event';
import { List } from '../pages/list';


jest.mock('../../hooks/use.cars', () => ({
  useCars: jest.fn().mockReturnValue({
    loadCarsByPage: jest.fn(),
    cars: [
      {
        id: '1',
        make: 'Audi',
        model: 'A4',
        color: 'test',
        year: 1,
        author: {} as User,
        info: 'test',
        picture: {} as ImgData,
      },
    ],
  }),
}));

describe('List', () => {
  test('calls loadCars on mount and renders cards for each car', () => {
    render(
      <Router>
        <Provider store={store}>
          <List></List>
        </Provider>
      </Router>
    );

    const list = screen.getByRole('list');
    expect(useCars().loadCarsByPage).toHaveBeenCalled();
    expect(list).toBeInTheDocument();
  });

  test('goes to next page when button is clicked', async () => {
    render(
      <Router>
        <Provider store={store}>
          <List></List>
        </Provider>
      </Router>
    );

    const nextButton = screen.getByText('Next');
    await userEvent.click(nextButton);
  });
  
  test('goes to previous page when button is clicked', async () => {
    render(
      <Router initialEntries={['/home/page/2']}>
        <Provider store={store}>
          <Routes>
            <Route path="/home/page/:page" element={<List />} />
          </Routes>
        </Provider>
      </Router>
    );

    const prevButton = screen.getByText('Previous');
    await userEvent.click(prevButton);
  });
});
