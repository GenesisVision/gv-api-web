const handleCallback = (resolve: any, reject: any, callback: any, r: any) => {
  try {
    resolve(callback(r));
  } catch (e) {
    reject(e);
  }
};

export default class CancelablePromise<T> extends Promise<T> implements PromiseLike<T>{
  private state: {
    canceled: boolean
  };

  private _promise: Promise<any>;
  private _onCancel?: () => void;

  static all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): CancelablePromise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
  static all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>]): CancelablePromise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
  static all<T1, T2, T3, T4, T5, T6, T7, T8>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>]): CancelablePromise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
  static all<T1, T2, T3, T4, T5, T6, T7>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>]): CancelablePromise<[T1, T2, T3, T4, T5, T6, T7]>;
  static all<T1, T2, T3, T4, T5, T6>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>]): CancelablePromise<[T1, T2, T3, T4, T5, T6]>;
  static all<T1, T2, T3, T4, T5>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>]): CancelablePromise<[T1, T2, T3, T4, T5]>;
  static all<T1, T2, T3, T4>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>]): CancelablePromise<[T1, T2, T3, T4]>;
  static all<T1, T2, T3>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>]): CancelablePromise<[T1, T2, T3]>;
  static all<T1, T2>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]): CancelablePromise<[T1, T2]>;
  static all<T>(values: (T | PromiseLike<T>)[]): CancelablePromise<T[]>;

  static all() {
    if (arguments.length === 1) {
      return new CancelablePromise((y, n) => {
        Promise.all(arguments[0]).then(y, n);
      });
    }
    return CancelablePromise.reject();
  }

  static race<T>(values: T[]): CancelablePromise<T extends PromiseLike<infer U> ? U : T>;
  static race<T>(values: Iterable<T>): CancelablePromise<T extends PromiseLike<infer U> ? U : T>;
  static race() {
    if (arguments.length === 1) {
      return new CancelablePromise((y, n) => {
        Promise.race(arguments[0]).then(y, n);
      });
    }
    return CancelablePromise.reject();
  }

  static reject<T = never>(value?: any): CancelablePromise<T> {
    return new CancelablePromise((y, n) => {
      Promise.reject(value).then(y, n);
    });
  }

  resolve<T>(value: T | PromiseLike<T>): CancelablePromise<T> {
    return new CancelablePromise((y, n) => {
      Promise.resolve(value).then(y, n);
    });
  }

  constructor(
    executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void,
    onCancel?: () => void,
    state = {
      canceled: false
    }
  ) {
    const r = super(executor);
    this._promise = new Promise(executor);
    this._onCancel = onCancel;
    this.state = state;
  }

  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): CancelablePromise<TResult1 | TResult2> {
    return new CancelablePromise<TResult1 | TResult2>(
      (resolve, reject) => {
        this._promise.then(
          r => {
            if (onfulfilled && !this.state.canceled) {
              handleCallback(resolve, reject, onfulfilled, r);
            } else {
              resolve(r);
            }
          },
          r => {
            if (onrejected && !this.state.canceled) {
              handleCallback(resolve, reject, onrejected, r);
            } else {
              reject(r);
            }
          }
        );
      },
      this._onCancel,
      this.state
    );
  }

  finally(onfinally?: () => void) {
    const _finally = (data: any) => {
      if (typeof onfinally === "function") {
        onfinally();
      }
      return data;
    };
    return this.then(_finally, _finally);
  }

  catch(error: any) {
    return this.then(undefined, error);
  }

  cancel() {
    if (this.state.canceled) return;
    this.state.canceled = true;
    if (this._onCancel) {
      this._onCancel();
    }
    return this;
  }
}
