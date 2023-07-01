// ** MUI imports
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

const TabsWrapper = ({ children, orientation, panelTopRound, panelLeftRound }) => {
  const Wrapper = styled(Box)(({ theme }) => ({
    '& .MuiTabPanel-root': {
      borderBottomRightRadius: theme.shape.borderRadius,
      ...(orientation !== 'vertical' && {
        borderBottomLeftRadius: theme.shape.borderRadius,
        ...(panelTopRound === 'left' && { borderTopLeftRadius: theme.shape.borderRadius }),
        ...(panelTopRound === 'right' && { borderTopRightRadius: theme.shape.borderRadius }),
        ...(panelTopRound === 'both' && {
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius
        })
      }),
      ...(orientation === 'vertical' && {
        borderTopRightRadius: theme.shape.borderRadius,
        ...(panelLeftRound === 'top' && { borderTopLeftRadius: theme.shape.borderRadius }),
        ...(panelLeftRound === 'bottom' && { borderBottomLeftRadius: theme.shape.borderRadius }),
        ...(panelLeftRound === 'both' && {
          borderTopLeftRadius: theme.shape.borderRadius,
          borderBottomLeftRadius: theme.shape.borderRadius
        })
      })
    }
  }))

  return <Wrapper>{children}</Wrapper>
}

export default TabsWrapper
