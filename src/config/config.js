// @flow

/**
 * Main application configuration
 */
export const config = {
  /**
   * Ergast Developer API endpoint
   */
  endpoint: 'https://ergast.com/api/f1',

  /**
   * React router basename based on host names.
   */
  basename: {
    'sparkbuzz.github.io': '/react-formula1',
  },

  resolveBasename: () => (config.basename[window.location.host] || ''),
};
