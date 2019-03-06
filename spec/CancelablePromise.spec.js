import expect from 'expect.js';
import { CancelablePromise } from "../src/ApiClient";

describe('Promise', function () {
    it("should be success", (done) => {
        const message = "success";

        const promise = new CancelablePromise((resolve) => {
            resolve(message);
        });

        promise.then(data => {
            expect(data).to.be.equal(message);
            done();
        }).catch(() => done(new Error("Promise has rejected")))
    });

    it('should be failed', () => {
        const error = "error";
        const promise = new CancelablePromise((resolve, reject) => {
            reject(error);
        });

        promise.catch((data) => {
            expect(data).to.be.equal(error);
        })
    });

    it('Promise with resolve should be canceled', (done) => {
        const message = "hello world";
        const promise = new CancelablePromise((resolve) => {
            resolve(message)
        });

        let hasError = false;

        promise.abort();

        promise.then(data => {
            hasError = true;
            done(new Error(`Promise has resolved with data: "${data}"`));
        }).then(() => {
            hasError = true;
            console.info("fuck");
            done(new Error("Next promise has resolved"));
        }).catch();

        setTimeout(() => {
            if (hasError) return;
            done();
        }, 0);
    });

    it('Promise with reject should be canceled', (done) => {
        const message = "hello world";
        let hasError = false;

        const promise = new CancelablePromise((_, reject) => {
            reject(message)
        });

        promise.abort();

        promise.catch(data => {
            hasError = true;
            done(new Error(`Promise has rejected with data: "${data}"`));
        }).catch(() => {
            hasError = true;
            done(new Error("Next promise has rejected"));
        });

        setTimeout(() => {
            if (hasError) return;
            done();
        }, 0);
    });

    it('Abort should resolve default value', () => {
        const message = "message";
        const otherMessage = "other message";
        const promise = new CancelablePromise((resolve) => {
            resolve(message);
        });

        promise.then(data => {
            expect(data).to.be.equal(otherMessage);
            done();
        });

        promise.abort(otherMessage);
    });

    it('Abort should execute callback', (done) => {
        const message = "message";
        const promise = new CancelablePromise((resolve) => {
            setTimeout(() => resolve(message), 500)
        }, () => {
            done();
        });

        promise.abort();

        promise.then(() => {
            done(new Error("Promise has resolved"));
        }).catch(() => {
            done(new Error("Promise has rejected"));
        });
    });

    it('Abort should execute callback once', (done) => {
        const message = "message";
        let counter = 0;
        const promise = new CancelablePromise((resolve) => {
            setTimeout(() => {
                resolve(message)
            }, 500)
        }, () => {
            counter++;
        });

        const promise2 = promise.then(() => {
            done(new Error("Promise has resolved"));
        }).catch(() => {
            done(new Error("Promise has rejected"));
        });

        promise.abort();
        promise2.abort();

        setTimeout(() => {
            expect(counter).to.be.equal(1);
            done();
        }, 0)
    });
});