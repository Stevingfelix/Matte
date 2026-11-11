/** Resolve a path inside public/ */
export const asset = (path: string) => `/${path}`;

/** Resolve a path inside public/assets/images */
export const img = (path: string) => asset(`assets/images/${path}`);
