import Pessoa from "@/app/utils/entidades/pessoa";
import buscarPessoasService from "@/app/utils/requests/buscarPessoas";
import Cabecalho from "@/components/Cabecalho";
import ListaPessoas from "@/components/ListaPessoas";
import Loader from "@/components/Loader";
import PessoaItem from "@/components/PessoaItem";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {

  const [ pessoas, setPessoas ] = useState<Array<Pessoa>>([]);
  const [ isCarregando, setIsCarregando ] = useState<boolean>(false);

  // redirecionar o usuário para a tela para visualizar os dados da pessoa
  const visualizarPessoa = (pessoaVisualizarId: number): void => {

  }

  // a forma correta de renderizar elementos em listagem, é com o flat-list
  const RenderizarListaPessoas = (): any => {

    if (pessoas.length == 0) {

      return <View>
        <Text>Não existem pessoas cadastradas...</Text>
      </View>
    }

    return pessoas.map((pessoa) => {

      return <PessoaItem pessoaApresentar={ pessoa } onVisualizar={ () => {
        // quando o usuário clicar sobre o item, vai acionar esse evento
        visualizarPessoa(pessoa.id);
      } } key={ pessoa.id } />
    });
  }

  // buscar pessoas no servidor
  const buscarPessoas = async () => {
    /*const pessoasAuxiliar: Pessoa[] = [];

    for (let i: number = 0; i < 10; i++) {
      pessoasAuxiliar.push({
        id: i + 1,
        nomeCompleto: `Pessoa ${ i + 1 }`,
        telefone: "(14) 99877665",
        endereco: {
          cidade: "Bastos",
          estado: "SP",
          logradouro: "Logradouro de teste"
        }
      });
    }

    setPessoas(pessoasAuxiliar);*/

    setIsCarregando(true);

    try {
      const resp = await buscarPessoasService();

      if (resp.data) {
        const pessoasApi = resp.data.results;
        const pessoasAux: Array<Pessoa> = [];

        for (let i: number = 0; i < pessoasApi.length; i++) {
          pessoasAux.push({
            id: (i + 1),
            nomeCompleto: `${ pessoasApi[ i ].name.first } ${ pessoasApi[ i ].name.last }`,
            telefone: pessoasApi[ i ].phone,
            endereco: {
              cidade: pessoasApi[ i ].location.city,
              estado: pessoasApi[ i ].location.state,
              logradouro: pessoasApi[ i ].location.street.name
            }
          });
        }

        setPessoas(pessoasAux);

        const nomesPessoas: string[] = pessoasApi.map((pessoaApi: any) => {

          return pessoaApi.name.first;
        });

        console.log("Nomes as pessoas retornadas pela api:");
        console.log(nomesPessoas);
      }

    } catch (e) {
      console.error("Erro ao tentar-se consultar as pessoas: " + e);

      // apresentar um alerta de erro para o usuário
    } finally {
      setIsCarregando(false);
    }

  }
  
  useEffect(() => {
    buscarPessoas();
  }, []);

  return (
    <SafeAreaView style={ { flex: 1 } }>
      <Loader mensagem="Consultando as pessoas, aguarde..." isCarregando={ isCarregando } />
      { /** reenderizando um componente que eu criei e passando uma propertie para */ }
      <Cabecalho titulo="Pessoas!" />
      <ScrollView style={ { flex: 1, padding: 10 } } showsVerticalScrollIndicator={ false } >
        { /**
         * posso utilizar o TouchableOpacity para implementar um botão personalizado */ }
        <TouchableOpacity
          style={ {
            width: "100%",
            padding: 20,
            backgroundColor: "black",
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center"
          } }
          onPress={ () => { // quando o usuário clica no botão executa essa action
            // buscar pessoas novamente
            buscarPessoas();
          } }>
            <Text style={ { color: "white", fontSize: 16, fontWeight: "bold" } }>Recarregar</Text>
        </TouchableOpacity>
        { /* RenderizarListaPessoas()*/ }
        <ListaPessoas pessoas={ pessoas } onVisualizarPessoa={ (pessoaVisualizarId: number) => {
          visualizarPessoa(pessoaVisualizarId);
        } } />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;