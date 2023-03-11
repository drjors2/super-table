export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Cols<T> {
  column: keyof T;
  label: string;
  options: {
    urlFun: (t: T) => string;
  };
}

export const PeColumns: Cols<PeriodicElement>[] = [
  // ['position', 'Pos'],
  ['name', 'Name'],
  ['weight', 'Weight'],
  [
    'symbol',
    'Symbol',
    (e: PeriodicElement) => 'https://google.com/search?q=' + e.name,
  ],
].map(
  ([column, label, urlFun]) =>
    ({ column, label, options: { urlFun } } as Cols<PeriodicElement>)
);

export const ELEMENT_DATA: PeriodicElement[] = [
  ['Hydrogen', 1.0079, 'H'],
  ['Helium', 4.0026, 'He'],
  ['Lithium', 6.941, 'Li'],
  ['Beryllium', 9.0122, 'Be'],
  ['Boron', 10.811, 'B'],
  ['Carbon', 12.0107, 'C'],
  ['Nitrogen', 14.0067, 'N'],
  ['Oxygen', 15.9994, 'O'],
  ['Fluorine', 18.9984, 'F'],
  ['Neon', 20.1797, 'Ne'],
].map(
  ([name, weight, symbol], ix) =>
    ({
      position: ix + 1,
      name,
      weight,
      symbol,
    } as PeriodicElement)
);
