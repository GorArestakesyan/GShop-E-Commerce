import RightArrow from '@assets/icons/svg/arrowCircleRight.svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, colors, Text} from '@styles/theme';
import {TRootStackParamList} from '@types';
import {TopSales} from '@ui-modules/top-sales';
import React from 'react';
import {Dimensions, Pressable} from 'react-native';

type Props = NativeStackScreenProps<TRootStackParamList, 'HomeScreen'>;

const {width} = Dimensions.get('window');

export const HomeScreen = ({navigation}: Props) => {
  const goToShop = () => navigation.navigate('ShopScreen');
  return (
    <Box flex={1} backgroundColor={'primary'}>
      <Box
        py={'m'}
        px={'m'}
        width={width}
        alignSelf={'center'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Text variant={'text24Bold'} color={'textPrimary'}>
          SHOP NOW
        </Text>
        <Pressable onPress={goToShop}>
          <RightArrow fill={colors.primary} />
        </Pressable>
      </Box>
      <TopSales />
    </Box>
  );
};
