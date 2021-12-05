import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import React, { FunctionComponent } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { UserContextProvider } from './contexts/auth'
import { FONTS } from './lib'
import { LandingNavigator } from './navigators'
import { navTheme, tw } from './styles'

export const Secret: FunctionComponent = () => {
  const [loaded] = useFonts(FONTS)

  if (!loaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw`flex-1`}>
        <UserContextProvider>
          <NavigationContainer theme={navTheme}>
            <StatusBar style="light" />

            <LandingNavigator />
          </NavigationContainer>
        </UserContextProvider>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  )
}
