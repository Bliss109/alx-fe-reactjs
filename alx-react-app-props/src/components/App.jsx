import ProfilePage from './ProfilePage';
import UserContext, { UserProvider } from './UserContext';

const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

function App() {
  return (
    <UserProvider userData={userData}>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
