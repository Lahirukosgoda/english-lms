import { Lock } from "lucide-react";

function SecureHeader() {
  return (
    <div className="flex items-center justify-between px-16 py-8">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Lock size={14} className="text-emerald-600" />
        <span>Secure registration</span>
      </div>

      <a
        href="#"
        className="text-sm font-semibold text-blue-600 hover:text-blue-700"
      >
        Need help?
      </a>
    </div>
  );
}

export default SecureHeader;