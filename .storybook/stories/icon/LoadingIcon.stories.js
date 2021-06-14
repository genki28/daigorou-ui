import LoadingIcon from '@components/icon/LoadingIcon.vue'

export default {
  title: 'Inputs/LoadingIcon',
  component: LoadingIcon
}

const Template = ({argTypes}) => ({
  components: { LoadingIcon },
  template: '<loading-icon />'
})

export const Usual = Template.bind({})