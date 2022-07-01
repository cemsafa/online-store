import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const ImageDetail = (props) => {

    return <View>
                <Image source={props.imageSource} style={styles.logoStyle} />
           </View>
    
};

const styles = StyleSheet.create ({

    logoStyle: {
        hieght: 50,
        width: 50,
    }


});

export default ImageDetail;
