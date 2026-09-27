import { useState } from "react";
//import Logo from "./Logo.jsx";
import WelcomeHeader from "./WelcomeHeader.jsx";
import InputField from "./InputField.jsx";
import PasswordField from "./PasswordField.jsx";
import RememberMeRow from "./RememberMeRow.jsx";
import LoginButton from "./LoginButton.jsx";
import OrDivider from "./OrDivider.jsx";
import GoogleButton from "./GoogleButton.jsx";
import SignupFooter from "./SignupFooter.jsx";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const handleLogin = () => {
    console.log({ email, password, rememberMe });
    // Replace with your actual login API call
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-[#f4f5fb] pt-16">
      <div className="w-full max-w-md px-6">
        {/* <div className="mb-10">
          <Logo />
        </div> */}

        <WelcomeHeader />

        <InputField
          label="Email"
          icon="✉"
          type="email"
          placeholder=" enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <RememberMeRow
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />

        <LoginButton onClick={handleLogin} />

        <OrDivider />

        <GoogleButton onClick={() => console.log("Google login")} />

        <SignupFooter />
      </div>
    </div>
  );
}

export default LoginPage;