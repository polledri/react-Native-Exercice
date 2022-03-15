import React, { useState } from "react";
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';

export default function Star() {
    const [flag, setFlag] = useState(0);

    return (
        <View style={{flexDirection: "row"}}>
            <TouchableOpacity style={styles.onClick} onPress={() => setFlag(1)}>
                <Image style={styles.squareImg} source={flag > 0 ? require('./assets/star_fulla.png') : require('./assets/star_empty.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.onClick} onPress={() => setFlag(2)}>
                <Image style={styles.squareImg} source={flag > 1 ? require('./assets/star_fulla.png') : require('./assets/star_empty.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.onClick} onPress={() => setFlag(3)}>
                <Image style={styles.squareImg} source={flag > 2 ? require('./assets/star_fulla.png') : require('./assets/star_empty.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.onClick} onPress={() => setFlag(4)}>
                <Image style={styles.squareImg} source={flag > 3 ? require('./assets/star_fulla.png') : require('./assets/star_empty.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.onClick} onPress={() => setFlag(5)}>
                <Image style={styles.squareImg} source={flag > 4 ? require('./assets/star_fulla.png') : require('./assets/star_empty.png')} />
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
    squareImg: {
        width: 40,
        height: 40,
    },
    onClick: {
        marginLeft: '3%',
        marginTop: '5%',
    },
});
