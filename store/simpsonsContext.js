import React, { useState, createContext, useEffect } from 'react';
import { getData, setData } from '../Helper/AsyncStorageHelper';
import fetchSimpsons from '../client';

const SimpsonsContext = createContext();

const SimpsonsProvider = ({ children }) => {
  const [simpsons, setSimpsons] = useState();
  const [shouldUpdate, setShouldUpdate] = useState(new Date());

  const updateSimpsonData = async payload => {
    payload.id = Math.floor(Math.random() * 100);
    const data = await getData();
    const customSimpsonData = [...data, payload];
    await setData(customSimpsonData);
    setSimpsons(customSimpsonData);
    setShouldUpdate(new Date());
  };

  const deleteSimpsonData = async id => {
    const customSimpsonData = simpsons.filter(item => item.id !== id);
    await setData(customSimpsonData);
    setSimpsons(customSimpsonData);
    setShouldUpdate(new Date());
  };

  const getSimpsons = async () => {
    const deviceData = await getData();
    const responseData = await fetchSimpsons();
    const filteredData = filterData(responseData, deviceData);
    const newList = [...deviceData, ...filteredData];
    await setData(newList);
    setSimpsons(newList);
  };

  const filterData = (responseData, deviceData) => {
    const newData = responseData.filter(
      item => !deviceData.some(deviceItem => deviceItem.id === item.id),
    );
    return newData;
  };

  useEffect(() => {
    const fetch = async () => {
      await getSimpsons();
    };

    fetch();
  }, []);

  useEffect(() => {}, [shouldUpdate]);

  return (
    <SimpsonsContext.Provider
      value={{
        updateSimpsonData,
        deleteSimpsonData,
        getSimpsons,
        simpsons,
      }}>
      {children}
    </SimpsonsContext.Provider>
  );
};

export default SimpsonsContext;

export { SimpsonsProvider };
