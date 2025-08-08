import React, { useState } from "react";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
  bgColor: string;
};

const tabs: Tab[] = [
  { id: "con", label: "con", content: <p>Texto de contacto</p>, bgColor: "bg-green-100" },
  { id: "exp", label: "exp", content: <p>Experiencia</p>, bgColor: "bg-red-100" },
  { id: "exi", label: "exi", content: <p>Éxitos</p>, bgColor: "bg-yellow-100" },
  { id: "lid", label: "lid", content: <p>Liderazgo</p>, bgColor: "bg-blue-100" },
];

export default function InteractivePanel() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex">
        {/* Barra lateral */}
        <div className="flex flex-col gap-2 absolute left-0 top-4 z-20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id === activeTab ? null : tab.id)}
              className={`px-2 py-1 rounded-r-md shadow text-sm font-semibold ${tab.bgColor}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenedor de imagen */}
        <div className="w-[400px] h-[300px] bg-blue-100 rounded-xl flex items-center justify-center relative overflow-hidden">
          <span className="text-lg font-bold">IMAGEN</span>

          {/* Panel superpuesto */}
          {activeTab && (
            <div
              className={`absolute inset-0 flex items-center justify-center text-center rounded-xl p-4 transition-all duration-500 ${
                tabs.find((t) => t.id === activeTab)?.bgColor || ""
              }`}
            >
              <div>
                <h2 className="text-xl font-bold uppercase">
                  {activeTab === "con" ? "CONTACTOS" : ""}
                </h2>
                <p>{tabs.find((t) => t.id === activeTab)?.content}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
