import stopIcon from '@components/icon/stopIcon.vue'

export default {
  title: 'Inputs/stopIcon',
  component: stopIcon
}

const Template = ({argTypes}) => ({
  components: { stopIcon },
  template: '<stop-icon />'
})

export const Usual = Template.bind({})