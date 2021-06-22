import SquareLoading from '@components/loading/SquareLoading.vue'

export default {
  title: 'loading/SquareLoading',
  component: SquareLoading
}

const Template = ({argTypes}) => ({
  components: { SquareLoading },
  template: '<square-loading />'
})

export const Usual = Template.bind({})