import { useState } from "react";
import { Link } from "react-router-dom";
import SecureHeader from "./SecureHeader.jsx";
import FormField from "./FormField.jsx";
import PasswordField from "./PasswordField.jsx";
import PasswordStrength from "./PasswordStrength.jsx";
import PasswordRules from "./PasswordRules.jsx";
import TermsCheckbox from "./TermsCheckbox.jsx";
import OrDivider from "./OrDivider.jsx";
import GoogleButton from "./GoogleButton.jsx";
import { getPasswordChecks } from "./passwordChecks.js";

function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agreed, setAgreed] = useState(false);

  const nameValid = fullName.trim().length >= 2;
  const emailValid = /^\S+@\S+\.\S+$/.test(email);
  const passwordValid = getPasswordChecks(password).every((c) => c.passed);
  const passwordsMatch = confirm.length > 0 && password === confirm;

  const canSubmit =
    nameValid && emailValid && passwordValid && passwordsMatch && agreed;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, email, password });
    // Replace with your real sign-up API call
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SecureHeader />

      <main className="flex-1 flex justify-center px-6 pb-10">
        <form onSubmit={handleSubmit} className="w-full max-w-[520px]">
          <h1 className="text-4xl font-extrabold text-slate-900">
            Create your account
          </h1>
          <p className="text-slate-500 mt-3 mb-8">
            Welcome! Set up your student account and start learning at your own pace.
          </p>

          <FormField
            label="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Your full name"
            valid={nameValid}
          />

          <FormField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            valid={emailValid}
          />

          <div className="mb-5">
            <PasswordField
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
            />
            <PasswordStrength password={password} />
            <PasswordRules password={password} />
          </div>

          <div className="mb-5">
            <PasswordField
              label="Confirm password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Re-enter your password"
            />
            {confirm.length > 0 && (
              <p
                className={`text-sm mt-2 ${
                  passwordsMatch ? "text-emerald-600" : "text-red-500"
                }`}
              >
                {passwordsMatch ? "Passwords match" : "Passwords do not match"}
              </p>
            )}
          </div>

          <div className="mb-5">
            <TermsCheckbox
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full h-[52px] rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Create account
          </button>

          <OrDivider />

          <GoogleButton onClick={() => console.log("Google sign up")} />

          <p className="text-center text-slate-500 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </main>

      <p className="text-center text-xs text-slate-400 pb-8">
        Protected with encrypted account security
      </p>
    </div>
  );
}

export default SignupPage;