import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },
    resultadoAnterior: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 30,
        textAlign: 'right',
        fontWeight: '300',
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        fontWeight: '300',
        marginBottom: 5,
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    
})