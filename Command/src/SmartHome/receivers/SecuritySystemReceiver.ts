export class SecuritySystemReceiver {
    private isLocked = false;

    lockAll() {
        console.log('Locking all dors!');
        this.isLocked = true;
        return true;
    }

    unlockAll() {
        console.log('Unlocking all dors!');
        this.isLocked = false;
        return true;
    }

    get currentState() {
        return this.isLocked;
    }
}