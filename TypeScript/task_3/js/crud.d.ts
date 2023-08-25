import {RowID} from './interface';
import {RowElement} from './interface';

type insertRow = (row: RowElement) => number;

type deleteRow = (id: RowID) => void;

type updateRow = (id: RowID, row: RowElement) => number;

export {insertRow, deleteRow, updateRow};