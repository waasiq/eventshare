import React from 'react'
import { Box } from '@mui/material'
import NavBar from '../../components/shared/NavBar/NavBar'
import CardC from '../../components/others/Card/Card'
import activitiesStyles from './styles'

const Activities: React.FC = function () {
  return (
    <React.Fragment>
        <NavBar />

        <Box sx={activitiesStyles.container} >
          <Box sx={activitiesStyles.card}>
            <CardC
              title='Football'
              description='Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal.'
              image='https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju'
            />
          </Box>

          <Box sx={activitiesStyles.card}>
            <CardC
              title='Basketball'
              description='Basketball is a team game in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defenders hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court) while preventing the opposing team from shooting through their own hoop.'
              image='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Carter_vs_Gasol%2C_Lakers_vs_Magic.jpg/640px-Carter_vs_Gasol%2C_Lakers_vs_Magic.jpg'
            />
          </Box>

          <Box sx={activitiesStyles.card}>
            <CardC
              title='Volleyball'
              description='Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other teams court under organized rules.'
              image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBxoAtnHD-FcFVVDDcvjGXEzaMyzE9XoqDz8p82UwpvSVuFFENOVzZ09X9Vs17DsnBDVc&usqp=CAU'
            />
          </Box>

          <Box sx={activitiesStyles.card}>
            <CardC
              title='Tennis'
              description='Tennis is a racket sport that can be played individually against a single opponent or between two teams of two players each. Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponents court.'
              image='https://www.atptour.com/-/media/images/news/2022/11/24/21/58/alcaraz-sinner-best-of-2022-grand-slam-matches.jpg'
            />
          </Box>
        </Box>

        <Box sx={activitiesStyles.container} >
          <Box sx={activitiesStyles.card}>
            <CardC
              title='Party'
              description='Discover the best parties in your city'
              image='https://www.contiki.com/six-two/wp-content/uploads/2015/09/sarthak-navjivan-iTZOPe7BpTM-unsplash.jpg'
            />
          </Box>

          <Box sx={activitiesStyles.card}>
            <CardC
              title='Golf'
              description='Golf is a club-and-ball sport in which players use various clubs to hit balls into a series of holes on a course in as few strokes as possible.'
              image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golfer_swing.jpg/1200px-Golfer_swing.jpg'
            />
          </Box>

          <Box sx={activitiesStyles.card}>
            <CardC
              title='Volleyball'
              description='Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other teams court under organized rules.'
              image='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Carter_vs_Gasol%2C_Lakers_vs_Magic.jpg/640px-Carter_vs_Gasol%2C_Lakers_vs_Magic.jpg'
            />
          </Box>

          <Box sx={activitiesStyles.card}>
            <CardC
              title='Tennis'
              description='Tennis is a racket sport that can be played individually against a single opponent or between two teams of two players each. Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponents court.'
              image='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Carter_vs_Gasol%2C_Lakers_vs_Magic.jpg/640px-Carter_vs_Gasol%2C_Lakers_vs_Magic.jpg'
            />
          </Box>
        </Box>

    </React.Fragment>
  )
}

export default Activities