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

    constructor(executor, onCancel) {
        this._promise = new Promise(executor);
        this._canceled = false;
        this._onCancel = onCancel;
        this._chained = false;
    }

    then(success, error) {
        const p = new CancelablePromise((resolve, reject) => {
            this._promise.then((r) => {
                if (this._canceled) {
                    p.abort();
                }
                if (success && !this._canceled) {
                    handleCallback(resolve, reject, success, r);
                } else {
                    resolve(r);
                }
            }, (r) => {
                if (this._canceled) {
                    p.abort();
                }
                if (error && !this._canceled) {
                    handleCallback(resolve, reject, error, r);
                } else {
                    reject(r);
                }
            });
        }, this._canceled ? () => {} : this._onCancel);
        this._chained = true;
        return p;
    }

    catch(error) {
        return this.then(undefined, error);
    }

    abort(data) {
        if (this._onCancel) {
            if (!this._chained && !this._canceled) this._onCancel();
        }
        this._canceled = true;
        if (data) {
            CancelablePromise.resolve(data);
        }
        return this;
    }
}