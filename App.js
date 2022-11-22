import {NavigationContainer} from "@react-navigation/native";
import{createNativeStackNavigator} from '@react-navigation/native-stack';
import Home_Page from './componnents/Tela/Home_Page';
import Input_Screen from './componnents/Tela/cadastro';

const stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="tela" component={Home_Page} />
        <stack.Screen name="cadastro" component={Input_Screen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
