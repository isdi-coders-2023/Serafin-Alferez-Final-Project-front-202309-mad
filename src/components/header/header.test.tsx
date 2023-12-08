import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Header } from "./header";
import { MemoryRouter as Router } from "react-router-dom";
import { HeaderButtons } from '../header.buttons/header.buttons';

jest.mock('../header.buttons/header.buttons')
describe('Given header component', () => {
  describe('When the header component is called', () => {
    const { getByAltText, getByText } = render(
      <Router>
        <Header></Header>
        <HeaderButtons></HeaderButtons>
      </Router>
    

    );
    
    const logo = getByAltText('logo Classic Cars');
    const title = getByText('MY CLASSIC CARS');

    test('Then the screen shows', async () => {
      expect(logo).toBeInTheDocument();
      expect(title).toBeInTheDocument();
    });
  
    
  });




})
