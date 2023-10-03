import AuthWrapper from "@/components/AuthWrapper";
import { useLoginForm } from "@/pages/Login/hooks/useLoginForm.ts";
import { LoginForm } from "@/pages/Login/types.ts";

const Login = () => {
  const { handleSubmit, isLoading, form } = useLoginForm();

  return <AuthWrapper<LoginForm> form={form} handleSubmit={handleSubmit} isLoading={isLoading} />;
};

export default Login;
