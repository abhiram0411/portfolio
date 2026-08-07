import { create } from "zustand";

interface UIState {
  isLoaded: boolean;
  activeSection: string;
  hoveredNeuron: string | null;
  selectedProject: string | null;
  setLoaded: (loaded: boolean) => void;
  setActiveSection: (section: string) => void;
  setHoveredNeuron: (neuron: string | null) => void;
  setSelectedProject: (project: string | null) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isLoaded: false,
  activeSection: "hero",
  hoveredNeuron: null,
  selectedProject: null,
  setLoaded: (loaded) => set({ isLoaded: loaded }),
  setActiveSection: (section) => set({ activeSection: section }),
  setHoveredNeuron: (neuron) => set({ hoveredNeuron: neuron }),
  setSelectedProject: (project) => set({ selectedProject: project }),
}));
