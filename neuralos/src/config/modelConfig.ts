/**
 * Anatomical Model Configuration
 * ─────────────────────────────────────────────────────────────────
 * To use a real 3D nervous system model:
 *
 * 1. Download a GLB from:
 *    → sketchfab.com (search "human nervous system", filter Downloadable)
 *    → 3d.nih.gov
 *    → free3d.com
 *
 * 2. Place the file inside the /public folder of this project:
 *    Example: public/nervous_system.glb
 *
 * 3. Update MODEL_PATH below to match your filename.
 *    Example: export const MODEL_PATH = "/my_nervous_system.glb";
 *
 * Supported formats: .glb (preferred), .gltf
 * ─────────────────────────────────────────────────────────────────
 */
export const MODEL_PATH = "/model_of_a_human_brain.glb";

/** Display name shown in placeholder UI */
export const MODEL_DISPLAY_NAME = "Human Brain Model";

/** Expected formats for validation error messages */
export const SUPPORTED_FORMATS = [".glb", ".gltf"];
