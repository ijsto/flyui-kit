const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/kit'),
      '@components': path.resolve(__dirname, 'src/kit/components'),
      '@icons': path.resolve(__dirname, 'src/kit/icons'),
      '@lib': path.resolve(__dirname, 'src/kit/lib'),
      '@utils': path.resolve(__dirname, 'src/kit/utils'),
    },
  },
};
