// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import CardStatisticsTarget from 'src/@core/components/card-statistics/card-stats-target'

const CardStatsTarget = ({ data }) => {
  if (data) {
    return (
      <Grid container spacing={6}>
        {data.map((item, index) => (
          <Grid item xs={12} md={3} sm={6} key={index}>
            <CardStatisticsTarget {...item} />
          </Grid>
        ))}
      </Grid>
    )
  } else {
    return null
  }
}

export default CardStatsTarget
