import LoginNav from "../components/loginNav.jsx";
import LoginBody from "../components/loginBody.jsx";
import Footer from "../components/footer.jsx";

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
