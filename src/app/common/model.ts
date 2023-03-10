export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

interface OrderCols<T> {
  order: number;
  column: keyof T;
}

export const PeColumns: OrderCols<PeriodicElement>[] = [{ order: 1, column: 'name' }];

interface Person {
  lastName: string;
  firstName: string;
}

abstract class IArea {
  area() {
    return 33;
  }
}

class Rectangle extends IArea {}
