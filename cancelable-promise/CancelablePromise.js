const handleCallback = (resolve, reject, callback, r) => {
    try {
        resolve(callback(r));
    } catch (e) {
        reject(e);
    }
};

export default class CancelablePromise {
    static all(iterable) {
        return new CancelablePromise((y, n) => {
            Promise.all(iterable).then(y, n);
        });
    }

    static race(iterable) {
        return new CancelablePromise((y, n) => {
            Promise.race(iterable).then(y, n);
        });
    }

    static reject(value) {
        return new CancelablePromise((y, n) => {
            Promise.reject(value).then(y, n);
        });
    }

    static resolve(value) {
        return new CancelablePromise((y, n) => {
            Promise.resolve(value).then(y, n);
        });
    }

    constructor(executor, onCancel, state = {
        canceled: false
    }) {
        this._promise = new Promise(executor);
        this._onCancel = onCancel;
        this.state = state;
    }

    then(success, error) {
        return new CancelablePromise((resolve, reject) => {
            this._promise.then((r) => {
                if (success && !this.state.canceled) {
                    handleCallback(resolve, reject, success, r);
                } else {
                    resolve(r);
                }
            }, (r) => {
                if (error && !this.state.canceled) {
                    handleCallback(resolve, reject, error, r);
                } else {
                    reject(r);
                }
            });
        }, this._onCancel, this.state);
    }

    catch(error) {
        return this.then(undefined, error);
    }

    abort() {
        if (this.state.canceled) return;
        this.state.canceled = true;
        if (this._onCancel) {
            this._onCancel();
        }
        return this;
    }
}