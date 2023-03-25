import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Players from './Players';
import store from '../redux/configureStore';

const citySelected = {
  id: 1,
  name: 'Argentina',
  image: 'https://restcountries.eu/data/arg.svg',
};

describe('Players', () => {
  test('renders Players component', () => {
    render(
      <Provider store={store}>
        <Router>
          <Players citySelected={citySelected} />
        </Router>
      </Provider>,
    );
    expect(document.querySelector('.list-players')).toBeInTheDocument();
  });
});
