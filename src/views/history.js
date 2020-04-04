import React, { useCallback, useContext } from 'react'
import { StatusBar } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

import { Box, Text, Button } from '../components/shared'
import { Left, RotateCcw } from '../components/icons'
import SearchHistoryList from '../components/search-history-list'
import historyContext from '../context/history'

import theme from '../utils/theme'

const HistoryView = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    }, []),
  )

  const history = useContext(historyContext)

  return (
    <Box as={SafeAreaView} flex={1} bg="softRed">
      <Box
        height={44}
        position="relative"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          position="absolute"
          left={0}
          px={16}
          height="100%"
          onPress={() => navigation.navigate('Search')}
        >
          <Left height={24} color={theme.colors.textDark} />
        </Button>
        <Text color="textDark">Geçmiş</Text>
      </Box>
      <Box flex={1}>
        {history.history.length > 0 ? (
          <SearchHistoryList
            hasHeader={false}
            chevron={true}
            onPress={k => navigation.navigate('Detail', { keyword: k })}
            data={history.history}
          />
        ) : (
          <Box flex={1} justifyContent="center" alignItems="center">
            <RotateCcw height={48} width={48} color={theme.colors.textLight} />
            <Text mt={24} fontWeight="bold" color="textMedium">
              Henüz geçmiş yok.
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default HistoryView
