import React, { useEffect, useState } from 'react';
import { View } from 'native-base';
import { Outlet } from 'react-router-native';
import { faker } from '@faker-js/faker';

import { randomNumber } from '<utils>/number';
import { ISeededData } from '<types>/seededData';
import Loader from '<components>/loader';

const MAX_DATA_AMOUNT = 100000;
const MIN_EMPLOYEE_COUNT = 1;
const MAX_EMPLOYEE_NUMBER = 5;

const AppLayout = (): JSX.Element => {
  const [seeded, setSeeded] = useState(false);
  const [seededData, setSeededData] = useState<ISeededData[] | null>(null);

  const generateEmployees = () =>
    [...Array(randomNumber(MIN_EMPLOYEE_COUNT, MAX_EMPLOYEE_NUMBER))].map((_, index) => ({
      key: `employee_${index + 1}`,
      id: index + 1,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    }));

  const seedData = () => {
    const data: ISeededData[] = [];

    [...Array(MAX_DATA_AMOUNT)].map((_, index) => {
      data.push({
        id: index + 1,
        key: `company_${index + 1}`,
        name: faker.company.companyName(),
        phrase: faker.company.catchPhrase(),
        employees: generateEmployees(),
      });
    });

    setSeededData(data);
  };

  useEffect(() => {
    if (!seededData?.length) seedData();
  }, []);

  useEffect(() => {
    if (seededData) setTimeout(() => setSeeded(true), 1000);
  }, [seededData]);

  return seeded ? (
    <View flex={1} pt={2}>
      <Outlet context={seededData} />
    </View>
  ) : (
    <Loader
      title={seededData ? 'Seeded!' : 'Seeding...'}
      message="Creating fake data for the application"
      description={`Creating ${MAX_DATA_AMOUNT} objects...`}
      status={seededData ? 'success' : 'loading'}
    />
  );
};

export default AppLayout;
