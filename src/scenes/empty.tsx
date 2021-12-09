import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import React, { FunctionComponent } from 'react'
import { Image, Text, View } from 'react-native'

import { MainParamList } from '../navigators'
import { tw } from '../styles'

type Props = BottomTabScreenProps<MainParamList, 'Profile'>

export const Empty: FunctionComponent<Props> = () => (
  <View style={tw`items-center justify-center flex-1`}>
    <Image
      source={require('../../assets/img/bother.png')}
      style={tw`w-32 h-32`}
    />
    <Text style={tw`mt-8 text-4xl text-black font-bother-bold`}>Bother</Text>
    <Text style={tw`text-lg text-gray-600 font-bother-medium`}>
      What bothers you?
    </Text>
  </View>
)
