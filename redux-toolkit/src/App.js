import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from './components/UserProfile';

import { useSelector} from "react-redux";

function App() {
  const authSelector = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <Header />
      {!authSelector && <Auth />}
      {authSelector && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
