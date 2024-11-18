import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DefaultScene from './scene';
import AccountOpeningFormScene from './scenes/account-opening/account-opening';
import CardLinkingScene from './scenes/account-opening/card-linking';
import AccountOpeningHomeScene from './scenes/account-opening/home';
import ViewAllAccountsScene from './scenes/account-opening/view-all-accounts';
import ProductPaymentScene from './scenes/transactions/product-payment';
import SelectProductScene from './scenes/transactions/select-product';
import SelectSubCategoryScene from './scenes/transactions/select-sub-category';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="DefaultScene" component={DefaultScene} />
    <Stack.Screen name="CardLinking" component={CardLinkingScene} />
    <Stack.Screen name="ProductPayment" component={ProductPaymentScene} />
    <Stack.Screen name="SelectProduct" component={SelectProductScene} />
    <Stack.Screen name="SelectSubCategory" component={SelectSubCategoryScene} />
    <Stack.Screen
      name="AccountOpeningHome"
      component={AccountOpeningHomeScene}
    />
    <Stack.Screen
      name="AccountOpeningForm"
      component={AccountOpeningFormScene}
    />
    <Stack.Screen
      name="ViewAllAccountsScene"
      component={ViewAllAccountsScene}
    />
  </Stack.Navigator>
);

export default AppNavigator;
