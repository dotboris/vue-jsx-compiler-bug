module.exports = {
  presets: [
    ['@babel/env', {
      useBuiltIns: 'entry',
      modules: false,
      corejs: 3
    }],
    '@vue/babel-preset-jsx'
  ],
  env: {
    test: {
      plugins: [
        ['istanbul', {
          include: [
            'js/**',
            'test/**'
          ]
        }]
      ],
      presets: [
        ['@babel/env', {
          useBuiltIns: 'entry',
          modules: 'commonjs',
          corejs: 3
        }]
      ]
    }
  }
};
