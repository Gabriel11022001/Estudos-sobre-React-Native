import Cabecalho from "@/components/Cabecalho";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {

  return (
    <SafeAreaView>
      { /** reenderizando um componente que eu criei e passando uma propertie para */ }
      <Cabecalho titulo="Pessoas!" />
    </SafeAreaView>
  );
}

export default Home;