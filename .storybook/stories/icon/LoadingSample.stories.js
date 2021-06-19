import LoadingSample from '@components/icon/LoadingSample.vue'

export default {
  title: 'Inputs/LoadingSample',
  component: LoadingSample
}

const Template = ({argTypes}) => ({
  components: { LoadingSample },
  template: '<loading-sample />'
})

export const Usual = Template.bind({})