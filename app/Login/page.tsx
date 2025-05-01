"use client";

import { useState } from "react";
import Link from "next/link";
import BackButton from "../compenents/BackButton";
import FormCard from "../compenents/FormCard";
import FormField from "../compenents/FormField";
import PrimaryButton from "../compenents/PrimaryButton";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { username, password });
    // Authentication logic would go here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-parkGreen-600 to-parkGreen-300 flex items-center justify-center p-4">
      <div
        style={{ clipPath: "polygon(100% 0, 0 100%,100% 100%)" }}
        className="absolute top-0 z-0 bottom-0 w-screen h-screen bg-[#1a661aff]"
      ></div>
      <div
        style={{ clipPath: "polygon(0 0, 100% 0,0 100%)" }}
        className="absolute top-0 z-0 bottom-0 w-screen h-screen bg-[#d2ecd6]"
      ></div>

      <BackButton to="/" />

      <FormCard>
        <h2 className="text-xl font-medium mb-6">Utilisateur</h2>

        <form onSubmit={handleSubmit}>
          <FormField label="Utilisateur" htmlFor="username">
            <input
              id="username"
              type="text"
              placeholder="Valeur"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormField>

          <FormField label="Mot de passe" htmlFor="password">
            <input
              id="password"
              type="password"
              placeholder="Valeur"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>

          <PrimaryButton type="submit" className="mt-4">
            Se connecter
          </PrimaryButton>
        </form>

        <Link
          href="/forgot-password"
          className="block mt-4 text-gray-600 hover:underline"
        >
          Mot de passe oublié ?
        </Link>
      </FormCard>
    </div>
  );
};

export default Login;
