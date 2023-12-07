// import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
// import { Login } from './login'
// import { useUsers } from '../../hooks/use.users';

// // Mocking the useUsers hook
// jest.mock('../../hooks/use.users', () => ({
//   useUsers: () => ({
//     login: jest.fn(),
//   }),

// }));

// describe('Given login component...', () => {
//   describe('When Login component is called', () => {
//     beforeEach(() => {
//       render(<Login></Login>)
      
//     })
    
//     test('renders login form and handles submission', () => {
//       // Check if the form is rendered
//       const emailInput = screen.getByLabelText('EMAIL');
//       const passwordInput = screen.getByLabelText('PASSWORD');
//       const loginButton = screen.getByText('LOGIN');

//       // Mock user input
//       fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
//       fireEvent.change(passwordInput, { target: { value: 'password123' } });

//       // Trigger form submission
//       fireEvent.click(loginButton);

//       // Check if the login function is called
//       expect(useUsers().login).toHaveBeenCalledWith({
//         email: 'test@example.com',
//         passwd: 'password123',
//       });

//       // Check if the success message is rendered
//       const successMessage = screen.getByText('SUCCESS');
//       expect(successMessage).toBeInTheDocument();
//     });
//   })
// })
