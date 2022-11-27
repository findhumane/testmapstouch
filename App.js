import React from 'react';
import { Marker } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';
import ClusteredMapView from 'react-native-maps-super-cluster-fh';

const markers = [
  { id: 1, title: "Test1", description: "Hello World", location: { latitude: 30.270652526064772, longitude: -97.75368988587985 } },
  { id: 2, title: "Test2", description: "Hello World", location: { latitude: 30.269826083021613, longitude: -97.75316677471446 } },
  { id: 3, title: "Test3", description: "Hello World", location: { latitude: 30.270928005532998, longitude: -97.75273297521144 } },
];

export default function App() {
  renderMarker = (marker) => <Marker key={marker.id} coordinate={marker.location} title={marker.title} description={marker.description} />;

  renderCluster = (cluster, onPress) => {
    return (
      <Marker coordinate={cluster.coordinate} onPress={onPress}>
        <View style={styles.myClusterStyle}>
          <Text style={styles.myClusterTextStyle}>
            {cluster.pointCount}
          </Text>
        </View>
      </Marker>
    );
  }

  return (
    <ClusteredMapView
      style={styles.map}
      data={markers}
      renderMarker={renderMarker}
      renderCluster={renderCluster}
      initialRegion={{
        latitude: 30.26714,
        longitude: -97.74259,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
}

const styles = StyleSheet.create({
  map: { flex: 1, },
  myClusterStyle: {
    width: 30,
    height: 30,
    padding: 6,
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
    borderColor: '#65bc46',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  myClusterTextStyle: {
    fontSize: 13,
    color: '#65bc46',
    fontWeight: '500',
    textAlign: 'center',
  },
});
