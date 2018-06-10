const coreData = ['html5', 'css3', 'vue', 'sass', 'react', 'javascript']
const subData = ['typescript', 'd3', 'highcharts', 'webpack', 'firebase']

export const coreTech = coreData.map(item => ({
  name: item,
  image: require(`images/devicon/${item}.svg`),
  component: require(`components/About/Tech/${item}Component.js`),
}))

export const subTech = subData.map(item => ({
  name: item,
  image: require(`images/devicon/${item}.svg`),
  component: require(`components/About/Tech/${item}Component.js`),
}))

export const totalTech = [...coreTech, ...subTech]
