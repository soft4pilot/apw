module.exports = {
  title: "APW 1.1 - Guía de estilo"
  theme: {
    color: {
      link: 'blue',
      linkHover: 'green'
    },
    fontFamily: {
      base: '"Raleway", sans-serif'
    }
  },
  sections: [{
      name: 'Átomos',
      components: 'src/components/atoms/**/[A-Z]*.js'
    },{
      name: 'Moléculas',
      components: 'src/components/molecules/**/[A-Z]*.js'
    },{
      name: 'Organismos',
      components: 'src/components/organisms/**/[A-Z]*.js'
    }
  ]
}
