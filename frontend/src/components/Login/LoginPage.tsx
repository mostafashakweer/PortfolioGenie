import FolioLogo from "./FolioLogo";
import LoginForm from "./LoginForm";
import type { LoginFormProps } from "./LoginForm";
import QuotePanel from "./QuotePanel";

export default function LoginPage(props: LoginFormProps) {
  return (
    <main className="grid min-h-screen bg-white lg:grid-cols-[55.7fr_44.3fr]">
      <div className="relative flex flex-col items-center justify-center px-6 pt-28 pb-16">
        <div className="absolute top-8 left-10">
          <FolioLogo />
        </div>

        <LoginForm {...props} />
      </div>

      <QuotePanel />
    </main>
  );
}
