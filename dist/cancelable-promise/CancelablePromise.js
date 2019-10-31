const handleCallback = (resolve, reject, callback, r) => {
    try {
        resolve(callback(r));
    }
    catch (e) {
        reject(e);
    }
};
export default class CancelablePromise extends Promise {
    constructor(executor, onCancel, state = {
        canceled: false
    }) {
        super(() => { });
        this._promise = new Promise(executor);
        this._onCancel = onCancel;
        this.state = state;
    }
    static all() {
        if (arguments.length === 1) {
            return new CancelablePromise((y, n) => {
                Promise.all(arguments[0]).then(y, n);
            });
        }
        return CancelablePromise.reject();
    }
    static race() {
        if (arguments.length === 1) {
            return new CancelablePromise((y, n) => {
                Promise.race(arguments[0]).then(y, n);
            });
        }
        return CancelablePromise.reject();
    }
    static reject(value) {
        return new CancelablePromise((y, n) => {
            Promise.reject(value).then(y, n);
        });
    }
    resolve(value) {
        return new CancelablePromise((y, n) => {
            Promise.resolve(value).then(y, n);
        });
    }
    then(onfulfilled, onrejected) {
        return new CancelablePromise((resolve, reject) => {
            this._promise.then(r => {
                if (onfulfilled && !this.state.canceled) {
                    handleCallback(resolve, reject, onfulfilled, r);
                }
                else {
                    resolve(r);
                }
            }, r => {
                if (onrejected && !this.state.canceled) {
                    handleCallback(resolve, reject, onrejected, r);
                }
                else {
                    reject(r);
                }
            });
        }, this._onCancel, this.state);
    }
    finally(onfinally) {
        const _finally = (data) => {
            if (typeof onfinally === "function") {
                onfinally();
            }
            return data;
        };
        return this.then(_finally, _finally);
    }
    catch(error) {
        return this.then(undefined, error);
    }
    cancel() {
        if (this.state.canceled)
            return;
        this.state.canceled = true;
        if (this._onCancel) {
            this._onCancel();
        }
        return this;
    }
}
