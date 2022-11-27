import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  calloutTitle: {
    fontWeight: "bold",
    alignSelf: "center",
  },
});

const markers = [
  { title: "Test1", description: "Hello World", coordinate: { latitude: 30.270652526064772, longitude: -97.75368988587985 } },
  { title: "Test2", description: "Hello World", coordinate: { latitude: 30.269826083021613, longitude: -97.75316677471446 } },
  { title: "Test3", description: "Hello World", coordinate: { latitude: 30.270928005532998, longitude: -97.75273297521144 } },
];

export default function App() {
  async function onPressMarkerCallout(marker) {
    console.log("marker pressed: " + marker.title);
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 30.26714,
          longitude: -97.74259,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          >
            <Callout onPress={async () => onPressMarkerCallout(marker)}>
              <Text style={styles.calloutTitle}>{marker.title}</Text>
              <Text>Tap here for details</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}
