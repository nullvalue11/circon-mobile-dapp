import { Box, Heading, Text } from 'native-base'
import React from 'react'

export default function ActivityCard({card}) {
  return (
    <Box borderWidth={1} borderColor='#18191B' borderRadius={'8px'} p='4' mt='4'>
        <Text fontSize="16" fontWeight={900}>{card.title}</Text>
        <Text fontSize={16} mt='2' fontFamily={'Prompt-Regular'}>{card.des}</Text>
    </Box>
  )
}
