import React, { useState } from "react";
import { StyleSheet, Image, TextInput, Text, View, ScrollView, Button, FlatList } from 'react-native';

export default function Square() {
    const [com, onChangeCom] = useState('');
    const [initialElements, changeEl]  = useState([]);
    const [flatlist, setFlatList] = useState(initialElements);
    const [idx, incr] = useState(0);
    const addElement = () => {
        var newArray = [...initialElements , {id : idx, text: com }];
        incr(idx + 1);
        setFlatList(newArray);
        changeEl(newArray);
    }

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
                    style={styles.squareInput}
                    value={com}
                    backgroundColor='white'
                    borderRadius='20'
                    onChangeText={onChangeCom}
                    placeholder={'Ajouter un commentaire...'}/>
                <View style={styles.squareButton}>
                    <Button
                        title="Valider"
                        color='black'
                        onPress={() => {
                            addElement()
                            onChangeCom('')
                        }}/>
                </View>
                <View style={styles.squareCommentary}>
                    <FlatList
                        keyExtractor = {item => item.id}
                        data={flatlist}
                        renderItem = {item => (<Text style={styles.squareTextCom}>{item.item.text}</Text>)} />
                </View>
            </View>
        </View>
    );
  }


const styles = StyleSheet.create({
    squareShape: {
        marginTop: '10%',
        marginBottom: '10%',
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
    squareInput: {
        height: 60,
        width: '100%',
        marginTop: '5%',
        borderWidth: 1,
        textAlign : 'center',
    },
    squareButton: {
        alignSelf: 'flex-start',
        width: 120,
        marginTop: 10,
        backgroundColor:'white',
        borderWidth: 1,
    },
    squareCommentary: {
        maxHeight: 80,
        marginTop: '5%',
        backgroundColor: 'white',
        justifyContent: "center"
    },
    squareTextCom: {
        height: 40,
        fontSize: 15,
        padding: 10,
        color: 'black',
    },
  });