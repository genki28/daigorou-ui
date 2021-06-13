import Template404 from '@components/others/Template404.vue'

export default {
  title: 'othres/Template404',
  component: Template404
}

const Template = ({argTypes}) => ({
  components: { Template404 },
  template: '<template404 />'
})

export const Usual = Template.bind({})