import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, Button, FlatList } from 'react-native';
import Star from "./Star";

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
                <Star/>
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
                            if (com !== '') {
                            addElement()
                            onChangeCom('')
                        }}}/>
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
        maxHeight: '20%',
        marginTop: '5%',
        backgroundColor: 'white',
    },
    squareTextCom: {
        height: 35,
        fontSize: 15,
        padding: 10,
        color: 'black',
    },
});