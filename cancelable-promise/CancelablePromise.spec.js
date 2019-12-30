import expect from "expect.js";
import CancelablePromise from "./CancelablePromise";

describe("Promise", function() {
  it("should be success", done => {
    const message = "success";

    const promise = new CancelablePromise(resolve => {
      resolve(message);
    });

    promise
      .then(data => {
        expect(data).to.be.equal(message);
        done();
      })
      .catch(() => done(new Error("Promise has rejected")));
  });

  it("should be failed", () => {
    const error = "error";
    const promise = new CancelablePromise((resolve, reject) => {
      reject(error);
    });

    promise.catch(data => {
      expect(data).to.be.equal(error);
    });
  });

  it("Promise all should be canceled", done => {
    const message1 = "m1";
    const message2 = "m2";
    const promise1 = new CancelablePromise(resolve => {
      resolve(message1);
    });
    const promise2 = new CancelablePromise(resolve => {
      resolve(message2);
    });

    let hasError = false;

    Promise.all([promise1, promise2]).then(data => {
      hasError = true;
      done(new Error(`Promise has resolved with data: "${data}"`));
    });

    promise1.cancel();

    setTimeout(() => {
      if (hasError) return;
      done();
    }, 0);
  });

  it("Promise with resolve should be canceled", done => {
    const message = "hello world";
    const promise = new CancelablePromise(resolve => {
      resolve(message);
    });

    let hasError = false;

    promise.then(data => {
      hasError = true;
      done(new Error(`Promise has resolved with data: "${data}"`));
    });

    const promise2 = promise.then(() => {
      hasError = true;
      done(new Error("Next promise has resolved"));
    });

    promise2.cancel();

    promise2.then(() => {
      hasError = true;
      done(new Error("Next promise has resolved"));
    });

    setTimeout(() => {
      if (hasError) return;
      done();
    }, 0);
  });

  it("Promise with reject should be canceled", done => {
    const message = "hello world";
    let hasError = false;

    const promise = new CancelablePromise((_, reject) => {
      reject(message);
    });

    promise
      .catch(data => {
        hasError = true;
        done(new Error(`Promise has rejected with data: "${data}"`));
      })
      .catch(() => {
        hasError = true;
        done(new Error("Next promise has rejected"));
      });

    promise.cancel();

    setTimeout(() => {
      if (hasError) return;
      done();
    }, 0);
  });

  it("cancel should execute callback", done => {
    const message = "message";
    const promise = new CancelablePromise(
      resolve => {
        setTimeout(() => resolve(message), 5000);
      },
      () => {
        done();
      }
    );

    const promise2 = promise
      .then(() => {
        done(new Error("Promise has resolved"));
      })
      .catch(() => {
        done(new Error("Promise has rejected"));
      });

    promise2.cancel();
  });

  it("finally", done => {
    const message1 = "message 1";
    const message2 = "message 2";
    let counter = 0;
    const onFinally = () => {
      counter += 1;
    };

    new CancelablePromise(resolve => {
      resolve(message1);
    })
      .then(data => {
        expect(data).to.be.equal(message1);
        return message2;
      })
      .finally(onFinally)
      .then(data => {
        expect(data).to.be.equal(message2);
      });

    new CancelablePromise((_, reject) => {
      reject(message1);
    })
      .catch(error => {
        expect(error).to.be.equal(message1);
      })
      .finally(onFinally);

    setTimeout(() => {
      expect(counter).to.be.equal(2);
      done();
    }, 0);
  });

  it("cancel should execute callback once", done => {
    const message = "message";
    let counter = 0;
    const promise = new CancelablePromise(
      resolve => {
        setTimeout(() => {
          resolve(message);
        }, 500);
      },
      () => {
        counter++;
      }
    );

    promise.cancel();

    const promise2 = promise
      .then(() => {
        done(new Error("Promise has resolved"));
      })
      .catch(() => {
        done(new Error("Promise has rejected"));
      });

    promise2.cancel();

    setTimeout(() => {
      expect(counter).to.be.equal(1);
      done();
    }, 0);
  });
});
