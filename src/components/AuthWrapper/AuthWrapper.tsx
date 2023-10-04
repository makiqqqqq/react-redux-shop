import { AuthWrapperProps } from "@/components/AuthWrapper/types.ts";
import AuthAvatarBlock from "../AuthAvatarBlock";
import Button from "@/components/Button";
import InputController from "@/components/InputController";
import MemberBlock from "@/components/MemberBlock";
import { useNavigation } from "@/hooks/useNavigation.tsx";
import { ROUTES } from "@/utils/routes.tsx";

const AuthWrapper = <T extends {}>({
  isLoading,
  handleSubmit,
  form,
  isRegister = false,
  setSelectedImage,
}: AuthWrapperProps<T>) => {
  const { navigateTo } = useNavigation();
  const redirectTo = () => {
    navigateTo(isRegister ? ROUTES.LOGIN : ROUTES.REGISTER);
  };

  const title = isRegister ? "Sign up to your account" : "Sign in to your account";
  const buttonText = isRegister ? "Sign up" : "Sign in";

  return (
    <section className="bg-gray-50 h-screen">
      <div className="flex flex-col items-center justify-center gap-4 px-6 py-8 mx-auto md:h-screen lg:py-0 h-full">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-6 text-center">
              {title}
            </h1>
            {isRegister && <AuthAvatarBlock setSelectedImage={setSelectedImage} />}
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
              <div className="! mt-8">
                <Button type="submit" isProcessing={isLoading}>
                  {buttonText}
                </Button>
              </div>
              <MemberBlock isRegister={isRegister} redirectTo={redirectTo} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AuthWrapper;
