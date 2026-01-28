import { TextInput } from "react-native";
import styles from "./styles";

interface CampoProps {

  cep: string;
  placeholder: string;
  digitarCep: (cepDigitado: string) => void;

}

const Campo = ({
  cep,
  placeholder,
  digitarCep
}: CampoProps) => {

  return (
    <TextInput
      style={ styles.campo }
      value={ cep }
      placeholder={ placeholder }
      onChangeText={ (cepDigitado: string) => {
        digitarCep(cepDigitado);
      } }
      keyboardType="number-pad"
      inputMode="numeric" />
  );
}

export default Campo;