import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
);

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    margin: 10
  }
};

export { Card };
