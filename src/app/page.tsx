
"use client";

import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import LoginForm from "@/components/LoginForm";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { logout } from "@/store/authSlice";

export default function Home() {
  // Get auth state from Redux store
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  // Handle logout
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex h-full items-center justify-center bg-zinc-50 px-4 dark:bg-zinc-900">
      <Card className="w-full max-w-md p-4">
        <CardHeader className="flex flex-col gap-1 pb-4">
          <h1 className="text-2xl font-semibold">
            {isAuthenticated ? "Welcome Back!" : "Login"}
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {isAuthenticated
              ? "You are successfully logged in"
              : "Enter your credentials to continue"}
          </p>
        </CardHeader>

        <CardBody>
          {isAuthenticated && user ? (
            // Logged In State
            <div className="flex flex-col gap-4">
              <div className="rounded-lg bg-zinc-100 p-4 dark:bg-zinc-800">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Logged in as
                </p>
                <p className="mt-1 text-lg font-semibold">{user.email}</p>
              </div>
              <Button
                color="danger"
                variant="flat"
                size="lg"
                onPress={handleLogout}
              >
                Logout
              </Button>
            </div>
          ) : (
            // Login Form
            <LoginForm />
          )}
        </CardBody>
      </Card>
    </div>
  );
}

