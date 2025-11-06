// Form data interface for login form
export interface LoginFormData {
    email: string;
    password: string;
}

// User interface for authenticated user
export interface User {
    email: string;
}

// Auth state interface for Redux store
export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
}

