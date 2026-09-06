const CLOUD_BASE = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL ?? "";

/**
 * Construit l'URL d'un média renvoyé par l'API.
 * - `null` / `undefined` / vide  → chaîne vide (à gérer par l'appelant).
 * - URL déjà absolue (http/https/protocol-relative) ou data URI → renvoyée telle quelle.
 *   (les valeurs par défaut des modèles Django sont des URLs Cloudinary complètes)
 * - Chemin relatif (public_id Cloudinary) → préfixé avec la base Cloudinary.
 */
export function mediaUrl(path?: string | null): string {
  if (!path) return "";
  if (/^(https?:)?\/\//i.test(path) || path.startsWith("data:")) return path;
  return `${CLOUD_BASE}${path.replace(/^\/+/, "")}`;
}
