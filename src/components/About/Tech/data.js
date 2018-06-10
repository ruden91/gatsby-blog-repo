const coreData = ['html5', 'css3', 'vue']
const subData = []

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
