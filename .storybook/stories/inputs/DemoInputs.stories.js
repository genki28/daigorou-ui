import DemoInputs from '@components/inputs/DemoInputs.vue'

export default {
  title: 'Inputs/DemoInputs',
  component: DemoInputs
}

const Template = ({argTypes}) => ({
  components: { DemoInputs },
  template: '<demo-inputs />'
})

export const Usual = Template.bind({})