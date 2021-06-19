import LoadingRotation from '@components/icon/LoadingRotation.vue'

export default {
  title: 'Inputs/LoadingRotation',
  component: LoadingRotation
}

const Template = ({argTypes}) => ({
  components: { LoadingRotation },
  template: '<loading-rotation />'
})

export const Usual = Template.bind({})