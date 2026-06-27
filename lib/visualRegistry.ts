import { ComponentType } from "react";

import {
  FaceVisual,
  VehicleVisual,
  BorderVisual,
  CargoVisual,
  SurveillanceVisual,
  CommandCenterVisual,
} from "@/components/solutions";

export type VisualTheme =
  | "cyan"
  | "red-cyan"
  | "orange-cyan"
  | "blue-cyan"
  | "deep-blue";

export type VisualGlow =
  | "face-grid"
  | "road-flow"
  | "radar-scan"
  | "scanner-beam"
  | "multi-cam"
  | "ops-core";

export type VisualConfig = {
  component: ComponentType<any>;
  theme: VisualTheme;
  glow: VisualGlow;
};

/**
 * CORE VISUAL ENGINE
 * Maps each solution slug → animated AI visual system
 */
export const visualRegistry: Record<string, VisualConfig> = {
  "facial-recognition": {
    component: FaceVisual,
    theme: "cyan",
    glow: "face-grid",
  },

  "vehicle-intelligence": {
    component: VehicleVisual,
    theme: "cyan",
    glow: "road-flow",
  },

  "border-intelligence": {
    component: BorderVisual,
    theme: "red-cyan",
    glow: "radar-scan",
  },

  "cargo-security": {
    component: CargoVisual,
    theme: "orange-cyan",
    glow: "scanner-beam",
  },

  "smart-surveillance": {
    component: SurveillanceVisual,
    theme: "blue-cyan",
    glow: "multi-cam",
  },

  "command-center": {
    component: CommandCenterVisual,
    theme: "deep-blue",
    glow: "ops-core",
  },
};

/**
 * SAFE ACCESSOR
 */
export function getVisualBySlug(slug: string) {
  return visualRegistry[slug] || null;
}