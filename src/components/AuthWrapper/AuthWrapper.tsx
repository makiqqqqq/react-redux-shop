import { AuthWrapperProps } from "@/components/AuthWrapper/types.ts";
import Button from "@/components/Button";
import InputController from "@/components/InputController";
import loginIcon from "@/assets/loginMockIcon.png";

const AuthWrapper = <T extends {}>({ isLoading, handleSubmit, form, isRegister = false }: AuthWrapperProps<T>) => {
  const title = isRegister ? "Sign up to your account" : "Sign in to your account";
  const buttonText = isRegister ? "Sign up" : "Sign in";

  return (
    <section className="bg-gray-50 h-screen">
      <div className="flex flex-col items-center justify-center gap-4 px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center flex-col gap-2">
          <img className="w-[70px] h-[70px] mr-2" src={loginIcon} alt="Pizza" />
          <h1> Welcome to the Club</h1>
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">{title}</h1>
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
              {isRegister && (
                <InputController control={form.control} name="name" type="text" placeholder="Makiqqq" id="name" />
              )}
              <InputController
                type="email"
                name="email"
                id="email"
                control={form.control}
                placeholder="name@company.com"
              />
              <InputController
                type="password"
                name="password"
                id="password"
                control={form.control}
                placeholder="••••••••"
              />
              <Button type="submit" isProcessing={isLoading}>
                {buttonText}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AuthWrapper;
