import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Cities from './Cities';
import store from '../redux/configureStore';

describe('Cities', () => {
  it('renders Cities component', () => {
    render(
      <Provider store={store}>
        <Router>
          <Cities />
        </Router>
      </Provider>,
    );
    const playersList = document.querySelector('.cities-container');
    expect(playersList).toBeInTheDocument();
  });
});
