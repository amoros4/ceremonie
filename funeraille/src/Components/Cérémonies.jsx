import React, { useState, useEffect } from "react";
import Footer from "./Footer";

const Cérémonies = () => {
  const [selectedCeremony, setSelectedCeremony] = useState(null);
  const [filters, setFilters] = useState({ type: "", location: "" });

  const [ceremonies, setCeremonies] = useState([
    {
      id: 1,
      title: "Cérémonie de Mr. Adou",
      date: "2025-05-10",
      location: "Cotonou",
      type: "Enterrement",
      description: "Hommage à M. Adou décédé le 3 mai 2025...",
    },
    {
      id: 2,
      title: "Veillée de Mme Kossi",
      date: "2025-05-12",
      location: "Porto-Novo",
      type: "Veillée",
      description: "Veillée en mémoire de Mme Kossi, proche de la famille...",
    },
  ]);

  const [newCeremony, setNewCeremony] = useState({
    title: "",
    date: "",
    location: "",
    type: "",
    description: "",
  });

  //  Supprimer les cérémonies passées
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // format YYYY-MM-DD
    const updated = ceremonies.filter((ceremony) => ceremony.date >= today);
    if (updated.length !== ceremonies.length) {
      setCeremonies(updated);
    }
  }, []);

  //  Ajouter une cérémonie
  const handleAddCeremony = (e) => {
    e.preventDefault();
    const newItem = {
      ...newCeremony,
      id: ceremonies.length + 1,
    };
    setCeremonies([newItem, ...ceremonies]);
    setNewCeremony({
      title: "",
      date: "",
      location: "",
      type: "",
      description: "",
    });
  };

  const filtered = ceremonies.filter((ceremony) => {
    return (
      (!filters.type || ceremony.type === filters.type) &&
      (!filters.location || ceremony.location === filters.location)
    );
  });

  return (
    <div id="ceremonies" className="w-full py-20 px-4 pt-24 pb-10  bg-slate-400 m-2 p-4">
      
      <div className="max-w-6xl mx-auto">

        {/*  Formulaire */}
        <form
          onSubmit={handleAddCeremony}
          className="bg-white p-6 rounded shadow mb-8 grid gap-4 md:grid-cols-2"
        >
          <h2 className="text-xl font-bold col-span-2">Nouvelle Cérémonie</h2>
          <input
            type="text"
            placeholder="Titre"
            required
            className="p-2 border rounded"
            value={newCeremony.title}
            onChange={(e) =>
              setNewCeremony({ ...newCeremony, title: e.target.value })
            }
          />
          <input
            type="date"
            required
            className="p-2 border rounded"
            value={newCeremony.date}
            onChange={(e) =>
              setNewCeremony({ ...newCeremony, date: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Lieu"
            required
            className="p-2 border rounded"
            value={newCeremony.location}
            onChange={(e) =>
              setNewCeremony({ ...newCeremony, location: e.target.value })
            }
          />
          <select
            required
            className="p-2 border rounded"
            value={newCeremony.type}
            onChange={(e) =>
              setNewCeremony({ ...newCeremony, type: e.target.value })
            }
          >
            <option value="">-- Type --</option>
            <option value="Enterrement">Enterrement</option>
            <option value="Veillée">Veillée</option>
          </select>
          <textarea
            placeholder="Description"
            required
            className="p-2 border rounded col-span-2"
            value={newCeremony.description}
            onChange={(e) =>
              setNewCeremony({ ...newCeremony, description: e.target.value })
            }
          />
          <button
            type="submit"
            className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Ajouter la cérémonie
          </button>
        </form>

        {/*  Filtres */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select
            className="p-2 rounded border"
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            value={filters.type}
          >
            <option value="">-- Type --</option>
            <option value="Enterrement">Enterrement</option>
            <option value="Veillée">Veillée</option>
            <option value="Veillée">Restauration</option>
            <option value="Veillée">Cérémonie</option>
            <option value="Veillée">Suivie numérique</option>
            <option value="Veillée">Décoration</option>
          </select>

          <select
            className="p-2 rounded border"
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
            value={filters.location}
          >
            <option value="">-- Lieu --</option>
            <option value="Cotonou">Cotonou</option>
            <option value="Porto-Novo">Porto-Novo</option>
            <option value="Porto-Novo">Parakou</option>
            <option value="Porto-Novo">Glazoué</option>
            <option value="Porto-Novo">Dassa</option>
            <option value="Porto-Novo">Abomey</option>
            <option value="Porto-Novo">Bohicon</option>
            <option value="Porto-Novo">Autres....</option>
          </select>
        </div>

        {/*  Liste */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((ceremony) => (
            <div
              key={ceremony.id}
              className="bg-white shadow rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelectedCeremony(ceremony)}
            >
              <h3 className="text-xl font-bold">{ceremony.title}</h3>
              <p className="text-sm text-gray-500">
                {ceremony.date} — {ceremony.location}
              </p>
              <p className="mt-2 text-gray-700 line-clamp-2">
                {ceremony.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/*  Détails */}
      {selectedCeremony && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setSelectedCeremony(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedCeremony.title}</h2>
            <p className="text-sm text-gray-500 mb-4">
              {selectedCeremony.date} — {selectedCeremony.location}
            </p>
            <p className="text-gray-700">{selectedCeremony.description}</p>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Cérémonies