import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <div className="flex flex-col items-center w-full max-w-md p-6">
        <h1 className="text-3xl font-bold mb-3 text-center">Welcome back to Canopy</h1>
        <p className="text-base mb-6 text-gray-500 dark:text-gray-400 text-center">
          Sign in to access your personalized dashboard and manage your bio data.
        </p>

        <div className="w-full flex justify-center">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
