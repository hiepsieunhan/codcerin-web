export const getPaths = (path = '') => {
  path = path.trim();
  const paths = path.split('/');
  const filteredPaths = paths.filter(path => (path.length > 0));
  return filteredPaths.length > 0 ? filteredPaths : [''];
}

export const fixPath = (path = '') => {
  return getPaths(path).join('/');
}
