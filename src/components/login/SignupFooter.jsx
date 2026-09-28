import { Link } from "react-router-dom";

function SignupFooter() {
  return (
    <p className="text-center text-sm text-gray-500 mt-5">
      Don't have an account?{" "}
      <Link
        to="/signup"
        className="text-indigo-500 font-medium hover:underline"
      >
        Create account ↗
      </Link>
    </p>
  );
}

export default SignupFooter;