import SubmitButton from '@components/button/SubmitButton.vue'

export default {
  title: 'button/SubmitButton',
  component: SubmitButton
}

const Template = ({argTypes}) => ({
  components: { SubmitButton },
  template: '<submit-button />'
})

export const Usual = Template.bind({})