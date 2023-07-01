const Progress = theme => {
  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 12,
          borderRadius: 10,
          backgroundColor: theme.palette.customColors.trackBg
        },
        bar: {
          borderRadius: 10
        }
      }
    }
  }
}

export default Progress
