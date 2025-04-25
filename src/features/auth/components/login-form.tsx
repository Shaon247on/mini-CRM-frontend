import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { loginSchema } from "../schema/loginSchema";
import { useState } from "react";
import { useAuthService } from "../services/authService";

export function LoginForm() {
  const [user, setUser] = useState({})
  const {login} = useAuthService()
  const router = useNavigate()

  console.log(user)
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  console.log(form.formState.errors);

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    console.log(values);
    try {
      const result = await login(values);

      if (result) {
        console.log(result);
        setUser(result)
        router("../dashboard")
        toast.success("Login successful!");
      } else {
        console.log(result);
        toast.error("Login failed!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="flex flex-col items-center gap-2 text-center mb-6">
          <h1 className="text-2xl font-bold">Login to you account</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Enter your Email and Password.
          </p>
        </div>
        <div className="grid gap-6 space-x-4 mb-6">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password"</FormLabel>
                  <FormControl>
                    <Input placeholder="enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" variant="authButton">
            Login
          </Button>
        </div>
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to={"/register"} className="underline underline-offset-4">
            Register
          </Link>
        </div>
      </form>
    </Form>
  );
}
