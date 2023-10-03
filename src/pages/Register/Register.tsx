import AuthWrapper from "@/components/AuthWrapper";
import { useRegisterForm } from "@/pages/Register/hooks/useRegisterForm.ts";
import { RegisterForm } from "@/pages/Register/types.ts";

const Register = () => {
  const { form, handleSubmit, isLoading } = useRegisterForm();

  console.log(form.formState.errors);

  return <AuthWrapper<RegisterForm> form={form} handleSubmit={handleSubmit} isLoading={isLoading} isRegister />;
};

export default Register;
