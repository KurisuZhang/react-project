import LoginNav from '../components/login/loginNav.jsx';
import LoginBody from '../components/login/loginBody.jsx';
import Footer from '../components/login/footer.jsx';

const Login = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <LoginNav />
      <main className="flex-grow">
        <LoginBody />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
