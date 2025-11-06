"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Input } from "@heroui/react";
import { LoginFormData } from "@/types/auth";
import { useAppDispatch } from "@/hooks/useRedux";
import { login } from "@/store/authSlice";

// Validation schema using Yup
// Ensures email is valid format and both fields are minimum 3 characters
const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid email address")
        .min(3, "Email must be at least 3 characters")
        .required("Email is required"),
    password: yup
        .string()
        .min(3, "Password must be at least 3 characters")
        .required("Password is required"),
});

export default function LoginForm() {
    const dispatch = useAppDispatch();

    // Initialize React Hook Form with Yup resolver
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: yupResolver(loginSchema),
        mode: "onChange", // Validate on change for better UX
    });

    // Handle form submission
    // Dispatches login action with user email to Redux store
    const onSubmit = async (data: LoginFormData) => {
        // Simulate async login process
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Dispatch login action with user data
        dispatch(login({ email: data.email }));
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full max-w-md flex-col gap-4"
        >
            {/* Email Input Field */}
            <Input
                {...register("email")}
                type="email"
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
                isInvalid={!!errors.email}
                errorMessage={errors.email?.message}
            />

            {/* Password Input Field */}
            <Input
                {...register("password")}
                type="password"
                label="Password"
                placeholder="Enter your password"
                variant="bordered"
                isInvalid={!!errors.password}
                errorMessage={errors.password?.message}
            />

            {/* Submit Button */}
            <Button
                type="submit"
                color="primary"
                size="lg"
                isLoading={isSubmitting}
                className="mt-2"
                isDisabled={!!errors.email || !!errors.password}
            >
                {isSubmitting ? "Logging in..." : "Login"}
            </Button>
        </form>
    );
}
