import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '@/app/store';

// Custom typed hooks for Redux
// These hooks provide type safety when using Redux in components

// Use throughout the app instead of plain `useDispatch`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// Use throughout the app instead of plain `useSelector`
export const useAppSelector = useSelector.withTypes<RootState>();
