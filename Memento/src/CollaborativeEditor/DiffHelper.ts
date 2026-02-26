import { Details } from "./IncrementalMemento";

export class DiffHelper {
    public static calculate(oldText: string, newText: string): Details {
        let start = 0;
        while (
            start < oldText.length &&
            start < newText.length &&
            oldText[start] === newText[start]
        ) {
            start++;
        }

        let oldEnd = oldText.length - 1;
        let newEnd = newText.length - 1;

        while (
            oldEnd >= start &&
            newEnd >= start &&
            oldText[oldEnd] === newText[newEnd]
        ) {
            oldEnd--;
            newEnd--;
        }

        if (newText.length >= oldText.length) {
            const addedText = newText.substring(start, newEnd + 1);
            return {
                action: 'INSERT',
                index: start,
                text: addedText,
            }
        } else {
            const removedText = oldText.substring(start, oldEnd + 1);
            return {
                action: 'DELETE',
                index: start,
                text: removedText,
            }
        }
    }
}