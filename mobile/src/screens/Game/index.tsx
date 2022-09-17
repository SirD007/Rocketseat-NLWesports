import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GameParams } from '../../@types/@navigation';
import { Entypo } from '@expo/vector-icons'
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png'

import { styles } from './styles';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';

import { DuoMatch } from '../../components/DuoMatch';

export function Game() {

  const [duos, setDuos] = useState<DuoCardProps[]>([])
  const [discordDuoSelected, setDiscordDuoSelected] = useState('')

  const navigation = useNavigation()

  function handleGoBackHome() {
    navigation.goBack();
  }

  async function getUserDiscord (adsId: string) {
       fetch(`http://192.168.15.9:3002/ads/${adsId}/discord`)
      .then(response => response.json())
      .then(data => setDiscordDuoSelected(data.discord));
  }

  const route = useRoute();
  const game = route.params as GameParams;



  useEffect(() =>{
    fetch(`http://192.168.15.9:3002/games/${game.id}/ads`)
    .then(response => response.json())
    .then(data => setDuos(data))
  }, []);


  return (
    <Background>
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
        onPress={handleGoBackHome}
        >
          <Entypo
            name='chevron-thin-left'
            color={THEME.COLORS.CAPTION_300}
            size={20}
          />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
          />

          <View style={styles.right}></View>

      </View>

      
      <Image
      source={{uri:game.bannerUrl}}
      style={styles.cover}
      />

      <Heading 
        title={game.title}
        subtitle='Conect-se e comece a jogar'
      />

      <FlatList
      data={duos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <DuoCard
        data={item}
        onConnect={() => getUserDiscord(item.id)}
        />
  )}
  horizontal
  style={styles.containerList}
  contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.EmpytContentList]}
  showsHorizontalScrollIndicator={false}
  ListEmptyComponent={() => (
    <Text
    style={styles.empytText}
    >
      Não há Anúncios Publicados
    </Text>
  )}
      />

    <DuoMatch 
      visible={discordDuoSelected.length > 0}
      discord={discordDuoSelected}
      onClose={() => setDiscordDuoSelected('')}
    />

    </SafeAreaView>
    </Background>
  );
}