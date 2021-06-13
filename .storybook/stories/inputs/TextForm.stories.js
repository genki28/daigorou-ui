import TextForm from '@components/inputs/TextForm.vue'

export default {
  title: 'Inputs/TextForm',
  component: TextForm
}

const Template = ({argTypes}) => ({
  components: { TextForm },
  template: '<text-form />'
})

export const Usual = Template.bind({})