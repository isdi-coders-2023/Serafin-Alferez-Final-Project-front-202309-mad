// import '@testing-library/jest-dom';
// import { render, fireEvent, screen } from '@testing-library/react';

// import { MemoryRouter as Router } from "react-router-dom";

// import { Provider } from 'react-redux';
// import userEvent from '@testing-library/user-event';

// import EditCar from './edit.car';
// import { store } from '../store/store';

// jest.mock('react-redux', () => ({
//   useNavigate: jest.fn(),
// }))

// jest.mock('../hooks/use.cars')

// jest.mock('react-router', () => ({
//   ...jest.requireActual('react-router'),
//   useParams: jest.fn(),
// }));

// // jest.mock('../../hooks/use.users', () => ({
// //   useUsers: jest.fn().mockReturnValue({
// //     register: jest.fn(),
// //   }),
// // }));

// const mockedCars = [
//   { id: '1', make: 'Toyota' },
//   { id: '2', make: 'Honda' },
//   { id: '3', make: 'Ford' },
// ];
// jest.mock('array.prototype.find', () => {
//   return jest.fn((predicate) => mockedCars.find(predicate));
// });

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: jest.fn(),
// }));

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useEffect: jest.fn().mockReturnValue(jest.fn()),
// }));
// describe('Given Register component', () => {
//   describe('When the Register component is rendered', () => {
//     test('Then renders register form and handles submission', async () => {
//     render( 
//       <Router>
//       <Provider store={store}>
//         <EditCar></EditCar>
//       </Provider>
//     </Router>
//     )

//     // const title = screen.getByText('NEW USER');
//     const form = screen.getByRole('form');
//     const input = screen.getAllByRole('textbox');
//     await userEvent.type(input[0],'test');
//     await userEvent.click(screen.getAllByRole('button')[0]);
//     await fireEvent.submit(form);  
//     // expect(title).toBeInTheDocument();
//     expect (useUsers().register).toHaveBeenCalled(); 
//   });

//   })


// })
