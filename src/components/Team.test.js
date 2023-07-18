import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Team from './Team';
import store from '../redux/configureStore';

const city = {
  id: 1,
  city: 'Atlanta',
  image: 'https://www.countryflags.io/ar/flat/64.png',
};

test('renders Team component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <Team
          key={city.id}
          id={city.id}
          city={city.city}
          image={city.image}
          team={city.full_name}
        />
      </Router>
    </Provider>,
  );
  expect(getByText('Atlanta')).toBeInTheDocument();
});
