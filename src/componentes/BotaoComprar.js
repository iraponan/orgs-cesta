import { Button, StyleSheet } from "react-native";

export default function BotaoComprar( {children, style} ) {
    return <Button style={[style, estilos.botao]} title={children} />
}

const estilos = StyleSheet.create({
    botao:{

    }
});