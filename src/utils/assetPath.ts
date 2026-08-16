export const getAssetPath = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // If already starts with /My_Portfolio/, do not double-prefix
  if (cleanPath.startsWith('/My_Portfolio/')) {
    return cleanPath;
  }

  // Check runtime window location OR build environment
  const isGithubPages = (typeof window !== 'undefined' && (
    window.location.pathname.startsWith('/My_Portfolio') ||
    window.location.hostname.includes('github.io')
  )) || process.env.GITHUB_ACTIONS === 'true';

  const prefix = isGithubPages ? '/My_Portfolio' : '';
  return `${prefix}${cleanPath}`;
};
