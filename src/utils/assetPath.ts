export const getAssetPath = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // If already prefixed with /My_Portfolio, return cleanPath
  if (cleanPath.startsWith('/My_Portfolio/')) return cleanPath;
  
  // Check runtime pathname for GitHub Pages subpath hosting
  const isGithubPages = typeof window !== 'undefined' && window.location.pathname.startsWith('/My_Portfolio');
  const prefix = isGithubPages ? '/My_Portfolio' : '';
  
  return `${prefix}${cleanPath}`;
};
