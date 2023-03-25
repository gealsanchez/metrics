import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import TotalTeams from './TotalTeams';
import store from '../redux/configureStore';

describe('TotalTeams', () => {
  it('renders TotalTeams component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <TotalTeams />
        </Router>
      </Provider>,
    );
    expect(getByText('views')).toBeInTheDocument();
  });
});
