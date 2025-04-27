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
import { registerSchema } from "../schema/registerSchema";
import { toast } from "sonner";
import { useAuthService } from "../services/authService";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export type RegistrationFormData = z.infer<typeof registerSchema>;

const formFields: {
  name: keyof RegistrationFormData;
  label: string;
  placeholder: string;
  type?: string;
}[] = [
  { name: "username", label: "Username", placeholder: "enter your username" },
  { name: "email", label: "Email", placeholder: "enter your email" },
  {
    name: "password",
    label: "Password",
    placeholder: "enter your password",
    type: "password",
  },
];

export function RegisterForm() {
  const router = useNavigate()
  const { register } = useAuthService();

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      photo: "",
      role: "freelancer",
    },
  });

  const onSubmit = async (values: RegistrationFormData) => {

    console.log("Submitted data:",values)

    try {
      const result = await register(values);
      if (result) {
        toast.success("Registration successful!");
        router("./login")
      } else {
        toast.error("Registration failed!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center gap-2 text-center mb-6">
          <h1 className="text-2xl font-bold">Register an account</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Enter your information below to register an account.
          </p>
        </div>

        <div className="grid gap-4 mb-6">
          {formFields.map(({ name, label, placeholder, type }) => (
            <div className="grid gap-2" key={name}>
              <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={placeholder}
                        type={type || "text"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}

          {/* Optional: Role ToggleGroup (you can add more fields this way too) */}
          <div className="grid gap-2">
            <FormItem>
              <FormLabel>Join As</FormLabel>
              <ToggleGroup
                type="single"
                defaultValue="freelancer"
                onValueChange={(value) => {
                  if (value) {
                    form.setValue("role", value as "freelancer" | "client");
                  }
                }}
                className="flex gap-2"
              >
                <ToggleGroupItem
                  value="freelancer"
                  className="data-[state=on]:bg-[#37474f] data-[state=on]:text-white px-5"
                >
                  Freelancer
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="client"
                  className="data-[state=on]:bg-[#37474f] data-[state=on]:text-white px-5"
                >
                  Client
                </ToggleGroupItem>
              </ToggleGroup>
              <FormMessage>{form.formState.errors.role?.message}</FormMessage>
            </FormItem>
          </div>

          <Button type="submit" variant="authButton">
            Register
          </Button>
        </div>

        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="underline underline-offset-4">
            Login
          </Link>
        </div>
      </form>
    </Form>
  );
}
