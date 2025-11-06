"use client";
import { HeroUIProvider } from "@heroui/react";
import { store } from './store'
import { Provider } from 'react-redux'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <HeroUIProvider>
                {children}
            </HeroUIProvider>
        </Provider>
    );
}