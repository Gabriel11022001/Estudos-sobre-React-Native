import { SafeAreaView } from "react-native-safe-area-context";

type TelaProps = {

  children: any;

}

const TelaApp = ({ children }: TelaProps) => {

  return <SafeAreaView style={ { flex: 1, backgroundColor: "#fafafa", padding: 20 } }>
    { children }  
  </SafeAreaView>
}

export default TelaApp; 