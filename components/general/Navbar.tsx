import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button, buttonVariants } from "../ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="py-5 flex items-center justify-between relative">
      {/* Left Content */}
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1>
            Blog <span className="text-blue-500">Hamza</span>
          </h1>
        </Link>
      </div>

      {/* Centered Dashboard */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <h1>
            Dashboard <span className="text-blue-500">Hamza</span>
          </h1>
        </Link>
      </div>

      {/* Right Content */}
      {user ? (
        <div className="flex items-center gap-2">
          <p>{user.given_name}</p>
          <LogoutLink className={buttonVariants({ variant: "secondary" })}>
            Logout
          </LogoutLink>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <LoginLink className={buttonVariants({ variant: "default" })}>
            Login
          </LoginLink>
          <RegisterLink className={buttonVariants({ variant: "secondary" })}>
            Sign Up
          </RegisterLink>
        </div>
      )}
    </nav>
  );
}
