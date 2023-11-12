import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/selectors';

export const selectLoading = state => state.cars.isLoading;

export const selectError = state => state.cars.error;

export const selectCars = state => state.cars.entities;

export const selectVisibleCars = createSelector(
  [selectCars, selectFilter],
  (cars, filter) => {
    console.log(cars);
    return cars
      .filter(car => {
        if (filter.make !== '') {
          return car.make.includes(filter.make);
        }
        return car;
      })
      .filter(car => {
        if (filter.price !== '') {
          return Number(car.rentalPrice.slice(1)) <= filter.price;
        }
        return car;
      })
      .filter(car => {
        if (filter.From !== '') {
          return car.mileage >= filter.From;
        }
        return car;
      })
      .filter(car => {
        if (filter.to !== '') {
          return car.mileage <= filter.to;
        }
        return car;
      });
  }
);
