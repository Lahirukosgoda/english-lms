function LoginButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors"
    >
      Login <span>→</span>
    </button>
  );
}

export default LoginButton;