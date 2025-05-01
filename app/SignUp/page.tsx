"use client";

import { useState } from "react";
import BackButton from "../compenents/BackButton";
import FormCard from "../compenents/FormCard";
import FormField from "../compenents/FormField";
import PrimaryButton from "../compenents/PrimaryButton";

const SignUp = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    gender: "",
    birthDate: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("SignUp form submitted with:", formData);
    // Registration logic would go here
  };

  return (
    <div>
      <div
        style={{ clipPath: "polygon(100% 0, 0 100%,100% 100%)" }}
        className="absolute top-0 z-0 bottom-0 w-screen h-screen bg-[#1a661aff]"
      ></div>
      <div
        style={{ clipPath: "polygon(0 0, 100% 0,0 100%)" }}
        className="absolute top-0 z-0 bottom-0 w-screen h-screen bg-[#d2ecd6]"
      ></div>

      <BackButton to="/" />

      <div className="min-h-screen z-20 bg-transparent flex items-center justify-center p-4">
        <FormCard>
          <h1 className="text-2xl font-bold text-center mb-8">INSCRIPTION</h1>

          <form
            onSubmit={handleSubmit}
            className="z-20 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <FormField label="Nom" htmlFor="lastName">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Votre nom ...."
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </FormField>

              <FormField label="Prénom(s)" htmlFor="firstName">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Votre prénom(s) ...."
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </FormField>

              <FormField label="Sexe" htmlFor="gender">
                <select
                  id="gender"
                  name="gender"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Value</option>
                  <option value="male">Homme</option>
                  <option value="female">Femme</option>
                  <option value="other">Autre</option>
                </select>
              </FormField>

              <FormField label="Addresse" htmlFor="address">
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Addresse"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={formData.address}
                  onChange={handleChange}
                />
              </FormField>
            </div>

            <div>
              <FormField label="Date de naissance" htmlFor="birthDate">
                <input
                  id="birthDate"
                  name="birthDate"
                  type="text"
                  placeholder="01/11/2000"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={formData.birthDate}
                  onChange={handleChange}
                />
              </FormField>

              <FormField label="E-mail" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="exemple@gmail.com"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormField>

              <FormField label="Téléphone" htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+26134000000"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormField>

              <PrimaryButton type="submit" className="mt-4">
                S'inscrire
              </PrimaryButton>
            </div>
          </form>
        </FormCard>
      </div>
    </div>
  );
};

export default SignUp;
