import { Provider } from 'react-redux';
import storeFactory from '../store';
import FlightsPage from '../components/FlightsPage';
const store = storeFactory();

const Index = () => {
  return (
    <Provider store={store}>
      <FlightsPage />
    </Provider>
  )
}

export default Index;