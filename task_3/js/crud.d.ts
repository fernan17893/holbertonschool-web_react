import {RowID} from './interface';
import {RowElement} from './interface';

type insertRow = (row: RowElement) => number;

type deleteRow = (id: RowID) => void;

type updateRow = (id: RowID, row: RowElement) => number;

export {insertRow, deleteRow, updateRow};

export function insertRow(row: RowElement): number {
    throw new Error("Function not implemented.");
}
export function deleteRow(arg0: number) {
    throw new Error("Function not implemented.");
}

export function updateRow(newRowID: number, updatedRow: RowElement) {
    throw new Error("Function not implemented.");
}

