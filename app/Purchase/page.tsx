"use client";

import { useState } from "react";
import BackButton from "../compenents/BackButton";
import FormCard from "../compenents/FormCard";
import FormField from "../compenents/FormField";
import PrimaryButton from "../compenents/PrimaryButton";

const Purchase = () => {
  const [step, setStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({
    lastName: "",
    firstName: "",
    gender: "",
    birthDate: "",
    email: "",
    phone: "",
    address: "",
    idNumber: "",
  });

  const [transactionInfo, setTransactionInfo] = useState({
    operator: "",
    transactionId: "",
  });

  const handlePersonalInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  const handleTransactionInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setTransactionInfo({
      ...transactionInfo,
      [name]: value,
    });
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Personal info submitted:", personalInfo);
    setStep(2);
  };

  const handleSubmitTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Transaction submitted:", transactionInfo);
    // Submit transaction logic would go here
  };

  return (
    <div className="min-h-screen bg-[#1a661aff] flex items-center justify-center p-4">
      <BackButton to="/" />

      <FormCard>
        <div className="flex items-center justify-center mb-4">
          <div className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full">
            {step}
          </div>
          <h2 className="text-xl font-medium ml-2">Achat de billet en ligne</h2>
        </div>

        {step === 1 ? (
          <form onSubmit={handleNextStep}>
            <FormField label="Nom" htmlFor="lastName">
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Votre nom ...."
                className="w-full p-3 border border-gray-300 rounded-md"
                value={personalInfo.lastName}
                onChange={handlePersonalInfoChange}
                required
              />
            </FormField>

            <FormField label="Prénom(s)" htmlFor="firstName">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Votre prénom(s) ...."
                className="w-full p-3 border border-gray-300 rounded-md"
                value={personalInfo.firstName}
                onChange={handlePersonalInfoChange}
                required
              />
            </FormField>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="Sexe" htmlFor="gender">
                <select
                  id="gender"
                  name="gender"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={personalInfo.gender}
                  onChange={handlePersonalInfoChange}
                  required
                >
                  <option value="">Value</option>
                  <option value="male">Homme</option>
                  <option value="female">Femme</option>
                  <option value="other">Autre</option>
                </select>
              </FormField>

              <FormField label="Téléphone" htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+26134000000"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={personalInfo.phone}
                  onChange={handlePersonalInfoChange}
                  required
                />
              </FormField>
            </div>

            <FormField label="Date de naissance" htmlFor="birthDate">
              <input
                id="birthDate"
                name="birthDate"
                type="text"
                placeholder="01/11/2000"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={personalInfo.birthDate}
                onChange={handlePersonalInfoChange}
                required
              />
            </FormField>

            <FormField label="E-mail" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="exemple@gmail.com"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={personalInfo.email}
                onChange={handlePersonalInfoChange}
                required
              />
            </FormField>

            <FormField label="Addresse" htmlFor="address">
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Addresse"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={personalInfo.address}
                onChange={handlePersonalInfoChange}
                required
              />
            </FormField>

            <FormField label="CIN" htmlFor="idNumber">
              <input
                id="idNumber"
                name="idNumber"
                type="text"
                placeholder="N° du carte d'identiter nationalle"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={personalInfo.idNumber}
                onChange={handlePersonalInfoChange}
                required
              />
            </FormField>

            <p className="text-sm text-gray-600 mt-4 mb-6">
              Veiller entrer une bonne information pour la sécurité des billets
              vendue dans
            </p>

            <PrimaryButton
              type="submit"
              className="flex items-center justify-center gap-2"
            >
              Suivante <span className="ml-1">→</span>
            </PrimaryButton>
          </form>
        ) : (
          <form onSubmit={handleSubmitTransaction}>
            <FormField label="Choix d'operateur" htmlFor="operator">
              <select
                id="operator"
                name="operator"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={transactionInfo.operator}
                onChange={handleTransactionInfoChange}
                required
              >
                <option value="">Telma</option>
                <option value="orange">Orange</option>
                <option value="airtel">Airtel</option>
              </select>
            </FormField>

            <div className="mt-4">
              <p className="font-medium">Numéro:</p>
              <p className="text-gray-600 text-sm">Nom de répertoire:</p>
            </div>

            <FormField label="ID transaction" htmlFor="transactionId">
              <input
                id="transactionId"
                name="transactionId"
                type="text"
                placeholder="Votre nom ...."
                className="w-full p-3 border border-gray-300 rounded-md"
                value={transactionInfo.transactionId}
                onChange={handleTransactionInfoChange}
                required
              />
            </FormField>

            <PrimaryButton type="submit">Validé</PrimaryButton>
          </form>
        )}
      </FormCard>
    </div>
  );
};

export default Purchase;
