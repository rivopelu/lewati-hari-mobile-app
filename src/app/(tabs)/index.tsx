import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';

import { HeaderGradient } from '@/src/components/atoms/HeaderGradient';
import { InputSearch } from '@/src/components/atoms/InputSearch';
import { MainContainer } from '@/src/components/atoms/MainContainer';
import { Spacer } from '@/src/components/atoms/Spacer';
import { AdsSwiper } from '@/src/components/layouts/AdsSwiper';
import HomeHeader from '@/src/components/layouts/HomeHeader';
import { HomeRecommendation } from '@/src/components/layouts/HomeRecommendation';
import { ListHomeMerchant } from '@/src/components/layouts/ListHomeMerchant';
import { SIZE } from '@/src/constants/STYLES';

export default function Index() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <StatusBar barStyle="dark-content" />
        <Spacer y={62} />
        <HeaderGradient />
        <HomeHeader />
        <Spacer y={SIZE.MD} />
        <MainContainer>
          <InputSearch />
        </MainContainer>

        <Spacer y={SIZE.MD} />

        <HomeRecommendation />
        <Spacer y={SIZE.MD} />

        <AdsSwiper />
        <Spacer y={SIZE.MD} />

        <ListHomeMerchant />
      </View>
      <Spacer y={SIZE.BOTTOM_SPACE} />
    </ScrollView>
  );
}
