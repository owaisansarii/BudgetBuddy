import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryContainer,
  VictoryTheme,
  VictoryPie,
  VictoryTooltip,
} from 'victory-native';
import _ from 'lodash';
const data = [
  {x: 'C', y: 35, fill: '#00a0b0'},
  {x: 'C++', y: 55, fill: '#fdae61'},
  {x: 'Java', y: 25, fill: '#d7191c'},
  {x: 'Python', y: 20, fill: '#abdda4'},
  {x: 'JavaScript', y: 15, fill: '#2b83ba'},
  {x: 'PHP', y: 15, fill: '#fdae61'},
  {x: 'C#', y: 100, fill: '#d7191c'},
  {x: 'Go', y: 50, fill: '#abdda4'},
  {x: 'Swift', y: 50, fill: '#2b83ba'},
  {x: 'Ruby', y: 50, fill: '#fdae61'},
];

const HistoryScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <VictoryPie
          padAngle={2}
          height={300}
          innerRadius={90}
          data={data}
          cornerRadius={5}
          // labelPlacement="parallel"
          labels={[]}
          padding={{top: 90, bottom: 90}}
          containerComponent={
            <VictoryContainer
              style={styles.chartContainer}
              width={200}
              height={200}
            />
          }
          origin={{x: 100, y: 100}}
          // width={400}
          // use different colors for each scale
          // shades of purple
          colorScale={['#00a0b0', '#fdae61', '#d7191c', '#abdda4', '#2b83ba']}
          animate={{duration: 2000}}
        />
        <View>
          {/* show only top 4 and others as remaining */}
          {/* sort and show only top 4 */}
          {_.sortBy(data, 'y')
            .reverse()
            .map((item, index) => {
              if (index < 4) {
                return (
                  <View key={index} style={styles.item}>
                    <Text style={[styles.itemText, {color: item.fill}]}>
                      {item.x}
                    </Text>
                    <Text style={[styles.itemText, {color: item.fill}]}>
                      {item.y}
                    </Text>
                  </View>
                );
              }
            })}

          <View style={styles.item}>
            <Text style={styles.itemText}>{data.length - 4} others</Text>
            <Text style={styles.itemText}>
              {data.reduce((acc, item) => acc + item.y, 0)}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  chartContainer: {
    backgroundColor: '#f3f3f3',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 0,
    margin: 0,
    width: 100,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  tooltip: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  flyout: {
    backgroundColor: '#f3f3f3',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 0,
    margin: 0,
    width: 100,
  },
  flyoutText: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
});
