import { ParkingSystem } from '../design-parking-system';

describe('ParkingSystem', () => {
    test('', () => {
        const parking = new ParkingSystem(1, 1, 0);

        const parking1 = parking.addCar(1);
        expect(parking1).toBeTruthy();

        const parking2 = parking.addCar(2);
        expect(parking2).toBeTruthy();

        const parking3 = parking.addCar(3);
        expect(parking3).toBeFalsy();

        const parking4 = parking.addCar(1);
        expect(parking4).toBeFalsy();
    });
});
