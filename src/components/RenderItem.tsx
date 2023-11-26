import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Data} from '../data/data';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routes/SharedElementNavigator';
import Animated, {FadeInDown} from 'react-native-reanimated';

type Props = {
  item: Data;
  index: number;
};

const RenderItem = ({item, index}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    // <Animated.View entering={FadeInDown.delay(200 * index)}>
    //   <Pressable
    //     style={styles.container}
    //     onPress={() => {
    //       navigation.navigate('Detail', {item: item});
    //       console.log('hi');
          
    //     }}>
    //     <Animated.Image
    //       source={item.image}
    //       style={styles.image}
    //       sharedTransitionTag={item.name}
    //     />
    //     <View style={styles.textContainer}>
    //       <Text style={styles.textName}>{item.name}</Text>
    //       <Text style={styles.textLocation}>{item.location}</Text>
    //     </View>
    //   </Pressable>
    // </Animated.View>
    <Animated.View style={styles.cardContainer}>
         <Pressable
        
        onPress={() => {
          navigation.navigate('Detail', {item: item});
        }}>
      <Animated.Image source={item.image} sharedTransitionTag={item.name} style={styles.cardImage} />
      <Text style={styles.textName}>{item.name}</Text>
      </Pressable>
    </Animated.View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    elevation: 3,
  },
  cardImage: {
    height: 150, // Set the height as needed
    resizeMode: 'cover',
  },
  textContainer: {
    margin: 20,
    flexShrink: 1,
    gap: 10,
  },
  textName: {
    color: '#323232',
    fontSize: 16,
  },
  textLocation: {
    color: '#323232',
    fontSize: 18,
  },
});