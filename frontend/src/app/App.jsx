import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../features/auth/pages/Login';
import ProtectedRoute from '../features/shared/components/ProtectedRoute';

import InternDashboard from '../features/auth/pages/InternDashboard';
import TLDashboard from '../features/auth/pages/TLDashboard';
import AdminDashboard from '../features/auth/pages/AdminDashboard';

import ThemeToggle from '../features/shared/components/ThemeToggle';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === 'dark' ? 'light' : 'dark'
    );
  };

  return (
    <>
      <ThemeToggle
        theme={theme}
        onToggle={toggleTheme}
      />

      <Routes>

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* INTERN DASHBOARD */}
        <Route
          element={
            <ProtectedRoute allowedRoles={['intern']} />
          }
        >
          <Route
            path="/intern/dashboard"
            element={<InternDashboard />}
          />
        </Route>

        {/* TEAM LEADER DASHBOARD */}
        <Route
          element={
            <ProtectedRoute allowedRoles={['hr']} />
          }
        >
          <Route
            path="/hr/dashboard"
            element={<TLDashboard />}
          />
        </Route>

        {/* ADMIN DASHBOARD */}
        <Route
          element={
            <ProtectedRoute allowedRoles={['admin']} />
          }
        >
          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />
        </Route>

        {/* DEFAULT */}
        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

        {/* INVALID ROUTE */}
        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

      </Routes>
    </>
  );
}