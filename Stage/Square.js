import { StyleSheet, Image, TextInput, Text, View } from 'react-native';

export default function Square() {
    return (
        <View style={styles.squareShape}>
            <View style={{marginLeft: '10%', marginRight: '10%'}}>
            <Text style={styles.squareText}>
                Noter ce trail
            </Text>
            <View style={{flexDirection: "row"}}>
                <Image style={styles.squareImg} source={require('./assets/star_fulla.png')} />
                <Image style={styles.squareImg} source={require('./assets/star_empty.png')} />
                <Image style={styles.squareImg} source={require('./assets/star_empty.png')} />
                <Image style={styles.squareImg} source={require('./assets/star_empty.png')} />
                <Image style={styles.squareImg} source={require('./assets/star_empty.png')} />
            </View>
            <Text style={styles.squareText}>
                Commenter
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={''}
                value={''}
                backgroundColor='white'
                borderRadius='20'
                placeholder={'Ajouter un commentaire...'}/>
            </View>
        </View>
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    img: {
        width: '100%',
        height: '30%',
    },
    squareShape: {
        marginTop: '10%',
        width: '80%',
        height: '60%',
        backgroundColor: '#046399',
        borderRadius: 30,
    },
    squareText: {
        marginTop: '15%',
        fontSize: 18,
        color: 'white',
    },
    squareImg: {
        marginTop: '5%',
        marginLeft: '3%',
        width: 40,
        height: 40,
    },
    input: {
        height: 60,
        width: '100%',
        marginTop: '5%',
        borderWidth: 1,
        textAlign : "center",
    },
  });