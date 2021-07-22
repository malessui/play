import { styled } from "../index"

const Button = styled('button', {
  lineHeight: '1.5715',
  position: 'relative',
  whiteSpace: 'nowrap',
  border: '1px solid transparent',
  boxShadow: '0 2px #00000004',
  transition: 'all .3s cubic-bezier(.645,.045,.355,1)',
  userSelect: 'none',
  touchAction: 'manipulation',
  height: '32px',
  padding: '4px 15px',
  fontSize: '14px',
  borderRadius: '2px',
  color: '#000000d9',
  background: '#fff',
  borderColor: '#d9d9d9',
  variants: {
    size: {
      small: {
        fontSize: '13px',
      },
      large: {
        fontSize: '15px',
        height: '35px',
        paddingLeft: '15px',
        paddingRight: '15px',
      },
    },
  }
});

export { Button }