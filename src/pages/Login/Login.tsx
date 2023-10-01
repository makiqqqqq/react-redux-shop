import Button from "@/components/Button";
import Input from "@/components/Input";
import pizzaIcon from "@/assets/pizza.png";
import { useNavigation } from "@/hooks/useNavigation/useNavigation.tsx";
import { ROUTES } from "@/utils/routes.tsx";

const Login = () => {
  const { navigateTo } = useNavigation();
  const redirectToMain = () => navigateTo(ROUTES.MAIN);

  return (
    <section className="bg-gray-50 h-screen">
      <div className="flex flex-col items-center justify-center gap-4 px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center flex-col gap-2">
          <img className="w-[70px] h-[70px] mr-2" src={pizzaIcon} alt="Pizza" />
          <h1> Welcome to Pizza Club</h1>
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={redirectToMain}>
              <Input type="email" name="email" label="email" id="email" placeholder="name@company.com" required />
              <Input type="password" name="password" label="password" id="password" placeholder="••••••••" required />
              <Button type="submit">Sign in</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
