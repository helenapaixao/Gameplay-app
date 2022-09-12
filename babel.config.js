module.exports = function(api) {
  plugins: [
    'react-native-reanimated/plugin'
  ],
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };

};

module.exports = { presets: ['module:metro-react-native-babel-preset'], plugins: ['react-native-reanimated/plugin'], };
