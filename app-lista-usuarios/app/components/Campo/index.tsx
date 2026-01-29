import { Text, TextInput, View } from "react-native";
import styles from "./styles";

export enum TipoCampo {

  email,
  telefone,
  senha,
  dataNascimento,
  padrao

}

interface Props {

  label: string;
  valor: string;
  placeholder: string;
  erro: string;
  limiteCaracteres?: number;
  tipoCampo: TipoCampo;
  habilitado: boolean;
  alterarValorCampo: (valorDigitado: string) => void;

}

const Campo = ({
  label,
  valor,
  placeholder,
  erro = "",
  limiteCaracteres,
  tipoCampo = TipoCampo.padrao,
  alterarValorCampo,
  habilitado = true
}: Props) => {

  const getTipoCampo = (tipo: TipoCampo): string => {

    if (tipo === TipoCampo.email) {

      return "email-address";
    }

    if (tipo === TipoCampo.dataNascimento) {

      return "numeric";
    }

    if (tipo === TipoCampo.telefone) {

      return "phone-pad";
    }

    return "default";
  }

  return (
    <View style={ styles.containerCampo }>
      <Text style={ styles.label }>{ label }</Text>
      <TextInput
        style={ styles.campo }
        value={ valor }
        placeholder={ placeholder }
        onChangeText={ alterarValorCampo }
        maxLength={ (limiteCaracteres && limiteCaracteres > 0) ? limiteCaracteres : 255 }
        keyboardType={ getTipoCampo(tipoCampo) ?? "default" }
        secureTextEntry={ tipoCampo === TipoCampo.senha }
        editable={ habilitado } />
      { erro != "" && <Text>{ erro }</Text> }
    </View>
  );
}

export default Campo;