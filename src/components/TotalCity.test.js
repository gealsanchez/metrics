import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import TotalCity from './TotalCity';
import store from '../redux/configureStore';

const citySelected = {
  id: 1,
  city: 'Atlanta',
  image: 'https://www.countryflags.io/ar/flat/64.png',
};

test('renders TotalCity component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <TotalCity citySelected={citySelected} />
      </Router>
    </Provider>,
  );
  expect(getByText('Atlanta')).toBeInTheDocument();
});
