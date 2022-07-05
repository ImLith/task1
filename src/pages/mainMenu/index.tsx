import React, { useState } from 'react';
import { RowMap, SwipeListView } from 'react-native-swipe-list-view';
import { useOutletContext } from 'react-router-native';

import { ISeededData } from '<types>/seededData';

import RenderItems from './components/renderItems';
import RenderHiddenItem from './components/renderHiddenItem';

const MainMenu = (): JSX.Element => {
  const [companies, setCompanies] = useState(useOutletContext<ISeededData[]>());
  const [displayEmployees, setDisplayEmployees] = useState<string>();

  const closeRow = (rowMap: RowMap<ISeededData>, rowKey: string) => {
    if (rowMap[rowKey]) rowMap[rowKey].closeRow();
  };

  const deleteRow = (rowMap: RowMap<ISeededData>, rowKey: string) => {
    closeRow(rowMap, rowKey);

    const newData = [...companies];
    const prevIndex = companies.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);

    setCompanies(newData);
  };

  return (
    <SwipeListView
      data={companies}
      renderItem={({ item }) => (
        <RenderItems
          item={item}
          displayEmployees={displayEmployees}
          setDisplayEmployees={setDisplayEmployees}
        />
      )}
      renderHiddenItem={({ item }, rowMap) => (
        <RenderHiddenItem
          item={item}
          rowMap={rowMap}
          deleteRow={deleteRow}
          displayRow={setDisplayEmployees}
        />
      )}
      leftOpenValue={75}
      rightOpenValue={-75}
      previewRowKey="0"
      previewOpenValue={-40}
      previewOpenDelay={3000}
      initialNumToRender={20}
      maxToRenderPerBatch={5}
      windowSize={10}
    />
  );
};

export default MainMenu;
