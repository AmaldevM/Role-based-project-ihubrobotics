import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginApi } from "../api/auth";
import Cookies from "js-cookie";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      const res = await loginApi(data.email, data.password);
      Cookies.set("token", res.token);
      Cookies.set("role", res.role);
      window.location.href = "/dashboard";
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 bg-white shadow rounded"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="border p-2 mb-2 w-full"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="border p-2 mb-2 w-full"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
