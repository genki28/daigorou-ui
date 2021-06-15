import CircleIcon from '@components/icon/CircleIcon.vue'

export default {
  title: 'Inputs/CircleIcon',
  component: CircleIcon
}

const Template = ({argTypes}) => ({
  components: { CircleIcon },
  template: '<circle-icon />'
})

export const Usual = Template.bind({})