// ** MUI Imports
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiListSubheader from '@mui/material/ListSubheader'

// ** Custom Components Imports
import Translations from 'src/layouts/components/Translations'
import CanViewNavSectionTitle from 'src/layouts/components/acl/CanViewNavSectionTitle'

// ** Styled Components
const ListSubheader = styled(props => <MuiListSubheader component='li' {...props} />)(({ theme }) => ({
  lineHeight: 1,
  display: 'flex',
  position: 'static',
  margin: theme.spacing(4, 0, 2),
  backgroundColor: 'transparent',
  padding: theme.spacing(2.5, 8, 2.5, 0),
  transition: 'padding .25s ease-in-out'
}))

const TypographyHeaderText = styled(Typography)({
  fontSize: '0.75rem',
  lineHeight: 'normal',
  textTransform: 'uppercase'
})

const VerticalNavSectionTitle = props => {
  // ** Props
  const { item, navHover, settings, collapsedNavWidth, navigationBorderWidth } = props

  // ** Hooks & Vars
  const theme = useTheme()
  const { mode, navCollapsed } = settings

  return (
    <CanViewNavSectionTitle navTitle={item}>
      <ListSubheader
        className='nav-section-title'
        sx={{
          ...(navCollapsed &&
            !navHover && {
              pl: (collapsedNavWidth - navigationBorderWidth - 16) / 8,
              pr: (collapsedNavWidth - navigationBorderWidth - 16) / 8
            })
        }}
      >
        {navCollapsed && !navHover ? (
          <Divider
            sx={{
              width: '1rem',
              m: theme => `${theme.spacing(1.625, 0)} !important`,
              borderColor: mode === 'semi-dark' ? `rgba(${theme.palette.customColors.dark}, 0.38)` : 'text.disabled'
            }}
          />
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Divider
              sx={{
                width: '1rem',
                m: theme => `${theme.spacing(0, 4, 0, 0)} !important`,
                borderColor: mode === 'semi-dark' ? `rgba(${theme.palette.customColors.dark}, 0.38)` : 'text.disabled'
              }}
            />
            <TypographyHeaderText
              noWrap
              sx={{ color: mode === 'semi-dark' ? `rgba(${theme.palette.customColors.dark}, 0.38)` : 'text.disabled' }}
            >
              <Translations text={item.sectionTitle} />
            </TypographyHeaderText>
          </Box>
        )}
      </ListSubheader>
    </CanViewNavSectionTitle>
  )
}

export default VerticalNavSectionTitle
