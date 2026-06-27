import type { LucideIcon } from "lucide-react";
import {
  ScanFace,
  Car,
  Radar,
  Shield,
  Eye,
  MonitorSmartphone,
} from "lucide-react";

/**
 * 🚀 CORE TYPES (future-proofed)
 */

export type SolutionSlug =
  | "facial-recognition"
  | "vehicle-intelligence"
  | "border-intelligence"
  | "cargo-security"
  | "smart-surveillance"
  | "command-center";

export type SolutionCategory =
  | "BIOMETRIC"
  | "MOBILITY"
  | "DEFENSE"
  | "LOGISTICS"
  | "SURVEILLANCE"
  | "COMMAND";

/**
 * MAIN TYPE
 */

export type Solution = {
  slug: SolutionSlug;
  category: SolutionCategory;

  title: string;
  icon: LucideIcon;

  desc: string;

  heroTitle: string;
  heroSubtitle: string;

  tags: string[];

  pipeline: string[];
  layers: string[];

  features: string[];
  deployments: string[];
  benefits: string[];

  stats: {
    accuracy: string;
    response: string;
    uptime: string;
  };

  /**
   * 🧠 FUTURE EXTENSIONS (safe optional)
   */
  status?: "active" | "beta" | "research";
  priority?: number;
  colorTheme?: "cyan" | "blue" | "violet";
};

/**
 * 🔥 SOLUTIONS DATA
 */

export const solutions: Solution[] = [
  {
    slug: "facial-recognition",
    category: "BIOMETRIC",
    icon: ScanFace,

    title: "Facial Recognition System",
    desc: "Enterprise biometric intelligence engine for real-time identity verification across distributed surveillance networks.",

    heroTitle: "Biometric Intelligence Platform",
    heroSubtitle:
      "Real-time facial recognition, identity verification and watchlist detection across distributed surveillance networks.",

    tags: ["REAL-TIME AI PIPELINE", "EDGE COMPUTING", "BIOMETRIC ENGINE"],

    pipeline: ["CAPTURE", "PROCESS", "ANALYZE", "RESPOND"],
    layers: [
      "Edge AI Inference Nodes",
      "Deep Face Matching Network",
      "Continuous Learning System",
    ],

    features: [
      "High-accuracy face matching engine",
      "Real-time watchlist detection",
      "Cross-camera identity tracking",
      "Edge AI inference optimization",
    ],

    deployments: [
      "Airports",
      "Smart Cities",
      "Government Facilities",
      "Railway Stations",
      "Corporate Campuses",
      "Critical Infrastructure",
    ],

    benefits: [
      "Instant Identification",
      "Reduced Security Risks",
      "Automated Monitoring",
      "Real-Time Threat Response",
    ],

    stats: {
      accuracy: "99.7%",
      response: "<100ms",
      uptime: "24/7",
    },

    status: "active",
    priority: 1,
    colorTheme: "cyan",
  },

  {
    slug: "vehicle-intelligence",
    category: "MOBILITY",
    icon: Car,

    title: "Vehicle Intelligence System",
    desc: "AI-powered ANPR system for vehicle tracking, traffic intelligence and movement analytics.",

    heroTitle: "Transportation Intelligence Platform",
    heroSubtitle:
      "AI-powered vehicle analytics, ANPR recognition and movement intelligence.",

    tags: ["ANPR ENGINE", "TRAFFIC AI", "MOBILITY INTELLIGENCE"],

    pipeline: ["CAPTURE", "READ", "TRACK", "ANALYZE"],
    layers: [
      "ANPR Recognition Engine",
      "Traffic Pattern AI",
      "Route Intelligence System",
    ],

    features: [
      "Number Plate Recognition Engine",
      "Real-Time Vehicle Tracking",
      "Traffic Heatmap Analytics",
      "Violation Detection System",
    ],

    deployments: [
      "Highways",
      "Toll Plazas",
      "Smart Cities",
      "Border Checkpoints",
      "Airports",
      "Logistics Parks",
    ],

    benefits: [
      "Traffic Optimization",
      "Vehicle Tracking",
      "Violation Detection",
      "Route Intelligence",
    ],

    stats: {
      accuracy: "99.5%",
      response: "<120ms",
      uptime: "24/7",
    },

    status: "active",
    priority: 2,
    colorTheme: "cyan",
  },

  {
    slug: "border-intelligence",
    category: "DEFENSE",
    icon: Radar,

    title: "Border Intelligence System",
    desc: "Advanced perimeter monitoring system designed for high-security zones and border surveillance.",

    heroTitle: "Perimeter Defense Network",
    heroSubtitle:
      "Integrated surveillance and perimeter monitoring for critical security zones.",

    tags: ["PERIMETER AI", "DEFENSE GRID", "SURVEILLANCE CORE"],

    pipeline: ["SCAN", "DETECT", "ALERT", "RESPOND"],
    layers: [
      "Perimeter Sensor Network",
      "Threat Detection AI",
      "Border Control System",
    ],

    features: [
      "Multi-Zone Perimeter Detection",
      "Drone + Sensor Fusion System",
      "Automated Threat Alerts",
      "Satellite-Ready Monitoring",
    ],

    deployments: [
      "National Borders",
      "Military Bases",
      "Ports",
      "Airfields",
      "Critical Assets",
    ],

    benefits: [
      "Threat Prevention",
      "Perimeter Visibility",
      "Faster Response",
      "Remote Operations",
    ],

    stats: {
      accuracy: "99.2%",
      response: "<150ms",
      uptime: "24/7",
    },

    status: "active",
    priority: 3,
    colorTheme: "cyan",
  },

  {
    slug: "cargo-security",
    category: "LOGISTICS",
    icon: Shield,

    title: "Cargo Security System",
    desc: "Intelligent cargo inspection and logistics screening for critical infrastructure.",

    heroTitle: "Cargo Inspection Intelligence",
    heroSubtitle:
      "Advanced cargo screening and anomaly detection powered by AI.",

    tags: ["LOGISTICS AI", "INSPECTION ENGINE", "RISK SCORING"],

    pipeline: ["SCAN", "CHECK", "SCORE", "DECIDE"],
    layers: [
      "X-Ray AI Inspection Engine",
      "Risk Scoring Model",
      "Cargo Validation System",
    ],

    features: [
      "Cargo Anomaly Detection",
      "AI-Based Inspection System",
      "Risk Scoring Engine",
      "Fraud Detection Module",
    ],

    deployments: [
      "Ports",
      "Warehouses",
      "Air Cargo Facilities",
      "Border Checkpoints",
      "Logistics Centers",
    ],

    benefits: [
      "Reduced Fraud",
      "Faster Screening",
      "Risk Visibility",
      "Automated Inspection",
    ],

    stats: {
      accuracy: "98.9%",
      response: "<200ms",
      uptime: "24/7",
    },

    status: "active",
    priority: 4,
    colorTheme: "cyan",
  },

  {
    slug: "smart-surveillance",
    category: "SURVEILLANCE",
    icon: Eye,

    title: "Smart Surveillance System",
    desc: "AI-powered monitoring system for behavior detection and anomaly intelligence.",

    heroTitle: "AI Video Analytics Platform",
    heroSubtitle:
      "Behavior intelligence and anomaly detection from live video streams.",

    tags: ["VIDEO AI", "BEHAVIOR ENGINE", "LIVE ANALYTICS"],

    pipeline: ["WATCH", "UNDERSTAND", "DETECT", "ALERT"],
    layers: [
      "Behavior Analysis AI",
      "Video Stream Engine",
      "Event Detection System",
    ],

    features: [
      "Crowd Behavior Detection",
      "Suspicious Activity Alerts",
      "Live Video Analytics",
      "Multi-Camera Sync System",
    ],

    deployments: [
      "Smart Cities",
      "Corporate Campuses",
      "Public Venues",
      "Transportation Hubs",
    ],

    benefits: [
      "Behavior Analysis",
      "Automated Monitoring",
      "Live Alerts",
      "Operational Visibility",
    ],

    stats: {
      accuracy: "99.1%",
      response: "<120ms",
      uptime: "24/7",
    },

    status: "active",
    priority: 5,
    colorTheme: "cyan",
  },

  {
    slug: "command-center",
    category: "COMMAND",
    icon: MonitorSmartphone,

    title: "Command Center System",
    desc: "Unified intelligence dashboard for monitoring, control and response orchestration.",

    heroTitle: "Unified Security Operations Center",
    heroSubtitle:
      "Centralized command and control platform for integrated security operations.",

    tags: ["OPS CENTER", "CONTROL HUB", "REAL-TIME DASHBOARD"],

    pipeline: ["MONITOR", "DECIDE", "CONTROL", "RESPOND"],
    layers: [
      "Unified Control Dashboard",
      "Incident Response Engine",
      "Multi-Site Monitoring System",
    ],

    features: [
      "Unified Operations Dashboard",
      "Real-Time Command System",
      "Multi-Location Monitoring",
      "Automated Incident Response",
    ],

    deployments: [
      "National Operations Centers",
      "Smart Cities",
      "Defense Facilities",
      "Enterprise Networks",
    ],

    benefits: [
      "Unified Visibility",
      "Faster Decisions",
      "Incident Coordination",
      "Multi-Site Management",
    ],

    stats: {
      accuracy: "Real-Time",
      response: "<1s",
      uptime: "24/7",
    },

    status: "active",
    priority: 6,
    colorTheme: "cyan",
  },
];