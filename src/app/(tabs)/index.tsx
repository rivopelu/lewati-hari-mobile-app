import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';

import { HeaderGradient } from '@/src/components/atoms/HeaderGradient';
import { InputSearch } from '@/src/components/atoms/InputSearch';
import { MainContainer } from '@/src/components/atoms/MainContainer';
import { Spacer } from '@/src/components/atoms/Spacer';
import { AdsSwiper } from '@/src/components/layouts/AdsSwiper';
import HomeHeader from '@/src/components/layouts/HomeHeader';
import { HomeRecommendation } from '@/src/components/layouts/HomeRecommendation';
import { SIZE } from '@/src/constants/STYLES';

export default function Index() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <StatusBar barStyle="dark-content" />
        <Spacer y={62} />
        <HeaderGradient />
        <HomeHeader />
        <Spacer y={SIZE.XS} />
        <MainContainer>
          <InputSearch />
        </MainContainer>

        <Spacer y={SIZE.XS} />
        <HomeRecommendation />
        <Spacer y={SIZE.XS} />
        <AdsSwiper />
        <Spacer y={SIZE.XS} />
      </View>
      <Spacer y={SIZE.BOTTOM_SPACE} />
    </ScrollView>
  );
}
