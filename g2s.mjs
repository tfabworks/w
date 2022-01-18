import Long from 'long';
import bindTransport from 'firmata-io';
import SerialPort from '@serialport/stream';
import WSABinding from 'web-serial-binding';

var img$2 = "data:image/png;base64,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";

var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAoRJREFUeNrsmktoE0EYgP9UKcRaUkqLEDFNb0V8Ea8Vb3oRH6AX8dCzF1cFURQf4KMXNV489yCeBPWmnqoGb5aiIL1pUgyINWTRuBK0cSdN6oY27obspjvt98Eyme38yezH/vPPLhUBAAAAAAAAzYj4+WVTInftxmjnO76/fOE6pnfvvnanmk6JnPbjmrt8lDfWrrwOYtTmGx6BNknNsi8ZNoFrEgQicGVZH7YJ9V68KZVEvPm2IZdH4H/JTPq7tyKFEYhAQCAC2ca0SMk+PnoYN2wfPQhcipJ3Ph53HTeez8s2Upg1EIGwytZAVRh2ln55GofAJtX1hlkghVkDAYEIpAp754CHpw9VncNSYLgDEYhABFJEOsCmM6ca+l/u3ENgK2y4fK7xxCoRSAojkI30kk2yG8Pmz7Un8PerN57G6fAKa0UEzh48xhoICNQnhRNzc65jCqP75cfM28X+xpHd0p95HlhcbmCAO5AURiB0fBtTyc3KfDZb/bxuz6jnuPl376VimhKJxaRrx3bPcX9eZxbujqEhiSS26CmwfhGK0sQDKT59VP28+fGTf2Oy3xpj7L4zrnDcEMv6JNFoUvofpj3HfT5yuNr2HToqPWMnAhXo2/9zT4lctZsrGmXftdTCnFkDKSIIpAr7zqBx1nWMmb4vZbEW+90SlZhxMrC4r+nb+giMXrrgOsZ6NillxyNZ98jWQOMkAIGkMAIRiEDXNev6reqrpFZfJ6nXVipGta1Q/y31u9pWYedFl2c+LHvechSCen+5vzc73yzOWa1VweFRjkc51kDogMCiZtdeDJvACfuY1kTedG2+4SkitULSZze7dBCY0i9jAAAAACBE/BVgAKD6wpn2htc3AAAAAElFTkSuQmCC";

var en$1 = {
	"g2s.entry.name": "AkaDako",
	"g2s.entry.description": "Connect Grove sensors and actuators."
};
var ja$1 = {
	"g2s.entry.name": "AkaDako",
	"g2s.entry.description": "Groveのセンサー・アクチュエーターを接続する。"
};
var translations$1 = {
	en: en$1,
	ja: ja$1,
	"ja-Hira": {
	"g2s.entry.name": "AkaDako",
	"g2s.entry.description": "Groveのセンサー・アクチュエーターをせつぞくする。"
}
};

/**
 * This is an extension for Xcratch.
 */
/**
 * Formatter to translate the messages in this extension.
 * This will be replaced which is used in the React component.
 * @param {object} messageData - data for format-message
 * @returns {string} - translated message for the current locale
 */

var formatMessage$1 = function formatMessage(messageData) {
  return messageData.defaultMessage;
};

var entry = {
  get name() {
    return formatMessage$1({
      id: 'g2s.entry.name',
      default: 'AkaDako',
      description: 'name of the extension'
    });
  },

  extensionId: 'g2s',
  extensionURL: 'https://tfabworks.github.io/xcx-g2s/dist/g2s.mjs',
  collaborator: 'TFabWorks',
  iconURL: img$2,
  insetIconURL: img$1,

  get description() {
    return formatMessage$1({
      defaultMessage: 'an extension for Xcratch',
      description: 'Description for this extension',
      id: 'g2s.entry.description'
    });
  },

  featured: true,
  disabled: false,
  bluetoothRequired: false,
  internetConnectionRequired: false,
  helpLink: 'https://tfabworks.com/akadako/',
  setFormatMessage: function setFormatMessage(formatter) {
    formatMessage$1 = formatter;
  },
  translationMap: translations$1
};

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var runtime = {exports: {}};

(function (module) {
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }

    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  module.exports );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
})(runtime);

var regenerator = runtime.exports;

/**
 * Types of block
 * @enum {string}
 */
var BlockType = {
  /**
   * Boolean reporter with hexagonal shape
   */
  BOOLEAN: 'Boolean',

  /**
   * A button (not an actual block) for some special action, like making a variable
   */
  BUTTON: 'button',

  /**
   * Command block
   */
  COMMAND: 'command',

  /**
   * Specialized command block which may or may not run a child branch
   * The thread continues with the next block whether or not a child branch ran.
   */
  CONDITIONAL: 'conditional',

  /**
   * Specialized hat block with no implementation function
   * This stack only runs if the corresponding event is emitted by other code.
   */
  EVENT: 'event',

  /**
   * Hat block which conditionally starts a block stack
   */
  HAT: 'hat',

  /**
   * Specialized command block which may or may not run a child branch
   * If a child branch runs, the thread evaluates the loop block again.
   */
  LOOP: 'loop',

  /**
   * General reporter with numeric or string value
   */
  REPORTER: 'reporter'
};
var blockType = BlockType;

/**
 * Block argument types
 * @enum {string}
 */
var ArgumentType = {
  /**
   * Numeric value with angle picker
   */
  ANGLE: 'angle',

  /**
   * Boolean value with hexagonal placeholder
   */
  BOOLEAN: 'Boolean',

  /**
   * Numeric value with color picker
   */
  COLOR: 'color',

  /**
   * Numeric value with text field
   */
  NUMBER: 'number',

  /**
   * String value with text field
   */
  STRING: 'string',

  /**
   * String value with matrix field
   */
  MATRIX: 'matrix',

  /**
   * MIDI note number with note picker (piano) field
   */
  NOTE: 'note',

  /**
   * Inline image on block (as part of the label)
   */
  IMAGE: 'image'
};
var argumentType = ArgumentType;

var Color$1 = /*#__PURE__*/function () {
  function Color() {
    _classCallCheck(this, Color);
  }

  _createClass(Color, null, [{
    key: "RGB_BLACK",
    get:
    /**
     * @typedef {object} RGBObject - An object representing a color in RGB format.
     * @property {number} r - the red component, in the range [0, 255].
     * @property {number} g - the green component, in the range [0, 255].
     * @property {number} b - the blue component, in the range [0, 255].
     */

    /**
     * @typedef {object} HSVObject - An object representing a color in HSV format.
     * @property {number} h - hue, in the range [0-359).
     * @property {number} s - saturation, in the range [0,1].
     * @property {number} v - value, in the range [0,1].
     */

    /** @type {RGBObject} */
    function get() {
      return {
        r: 0,
        g: 0,
        b: 0
      };
    }
    /** @type {RGBObject} */

  }, {
    key: "RGB_WHITE",
    get: function get() {
      return {
        r: 255,
        g: 255,
        b: 255
      };
    }
    /**
     * Convert a Scratch decimal color to a hex string, #RRGGBB.
     * @param {number} decimal RGB color as a decimal.
     * @return {string} RGB color as #RRGGBB hex string.
     */

  }, {
    key: "decimalToHex",
    value: function decimalToHex(decimal) {
      if (decimal < 0) {
        decimal += 0xFFFFFF + 1;
      }

      var hex = Number(decimal).toString(16);
      hex = "#".concat('000000'.substr(0, 6 - hex.length)).concat(hex);
      return hex;
    }
    /**
     * Convert a Scratch decimal color to an RGB color object.
     * @param {number} decimal RGB color as decimal.
     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */

  }, {
    key: "decimalToRgb",
    value: function decimalToRgb(decimal) {
      var a = decimal >> 24 & 0xFF;
      var r = decimal >> 16 & 0xFF;
      var g = decimal >> 8 & 0xFF;
      var b = decimal & 0xFF;
      return {
        r: r,
        g: g,
        b: b,
        a: a > 0 ? a : 255
      };
    }
    /**
     * Convert a hex color (e.g., F00, #03F, #0033FF) to an RGB color object.
     * CC-BY-SA Tim Down:
     * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
     * @param {!string} hex Hex representation of the color.
     * @return {RGBObject} null on failure, or rgb: {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */

  }, {
    key: "hexToRgb",
    value: function hexToRgb(hex) {
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
    /**
     * Convert an RGB color object to a hex color.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!string} Hex representation of the color.
     */

  }, {
    key: "rgbToHex",
    value: function rgbToHex(rgb) {
      return Color.decimalToHex(Color.rgbToDecimal(rgb));
    }
    /**
     * Convert an RGB color object to a Scratch decimal color.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!number} Number representing the color.
     */

  }, {
    key: "rgbToDecimal",
    value: function rgbToDecimal(rgb) {
      return (rgb.r << 16) + (rgb.g << 8) + rgb.b;
    }
    /**
    * Convert a hex color (e.g., F00, #03F, #0033FF) to a decimal color number.
    * @param {!string} hex Hex representation of the color.
    * @return {!number} Number representing the color.
    */

  }, {
    key: "hexToDecimal",
    value: function hexToDecimal(hex) {
      return Color.rgbToDecimal(Color.hexToRgb(hex));
    }
    /**
     * Convert an HSV color to RGB format.
     * @param {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */

  }, {
    key: "hsvToRgb",
    value: function hsvToRgb(hsv) {
      var h = hsv.h % 360;
      if (h < 0) h += 360;
      var s = Math.max(0, Math.min(hsv.s, 1));
      var v = Math.max(0, Math.min(hsv.v, 1));
      var i = Math.floor(h / 60);
      var f = h / 60 - i;
      var p = v * (1 - s);
      var q = v * (1 - s * f);
      var t = v * (1 - s * (1 - f));
      var r;
      var g;
      var b;

      switch (i) {
        default:
        case 0:
          r = v;
          g = t;
          b = p;
          break;

        case 1:
          r = q;
          g = v;
          b = p;
          break;

        case 2:
          r = p;
          g = v;
          b = t;
          break;

        case 3:
          r = p;
          g = q;
          b = v;
          break;

        case 4:
          r = t;
          g = p;
          b = v;
          break;

        case 5:
          r = v;
          g = p;
          b = q;
          break;
      }

      return {
        r: Math.floor(r * 255),
        g: Math.floor(g * 255),
        b: Math.floor(b * 255)
      };
    }
    /**
     * Convert an RGB color to HSV format.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     */

  }, {
    key: "rgbToHsv",
    value: function rgbToHsv(rgb) {
      var r = rgb.r / 255;
      var g = rgb.g / 255;
      var b = rgb.b / 255;
      var x = Math.min(Math.min(r, g), b);
      var v = Math.max(Math.max(r, g), b); // For grays, hue will be arbitrarily reported as zero. Otherwise, calculate

      var h = 0;
      var s = 0;

      if (x !== v) {
        var f = r === x ? g - b : g === x ? b - r : r - g;
        var i = r === x ? 3 : g === x ? 5 : 1;
        h = (i - f / (v - x)) * 60 % 360;
        s = (v - x) / v;
      }

      return {
        h: h,
        s: s,
        v: v
      };
    }
    /**
     * Linear interpolation between rgb0 and rgb1.
     * @param {RGBObject} rgb0 - the color corresponding to fraction1 <= 0.
     * @param {RGBObject} rgb1 - the color corresponding to fraction1 >= 1.
     * @param {number} fraction1 - the interpolation parameter. If this is 0.5, for example, mix the two colors equally.
     * @return {RGBObject} the interpolated color.
     */

  }, {
    key: "mixRgb",
    value: function mixRgb(rgb0, rgb1, fraction1) {
      if (fraction1 <= 0) return rgb0;
      if (fraction1 >= 1) return rgb1;
      var fraction0 = 1 - fraction1;
      return {
        r: fraction0 * rgb0.r + fraction1 * rgb1.r,
        g: fraction0 * rgb0.g + fraction1 * rgb1.g,
        b: fraction0 * rgb0.b + fraction1 * rgb1.b
      };
    }
  }]);

  return Color;
}();

var color = Color$1;

var Color = color;
/**
 * @fileoverview
 * Utilities for casting and comparing Scratch data-types.
 * Scratch behaves slightly differently from JavaScript in many respects,
 * and these differences should be encapsulated below.
 * For example, in Scratch, add(1, join("hello", world")) -> 1.
 * This is because "hello world" is cast to 0.
 * In JavaScript, 1 + Number("hello" + "world") would give you NaN.
 * Use when coercing a value before computation.
 */

var Cast = /*#__PURE__*/function () {
  function Cast() {
    _classCallCheck(this, Cast);
  }

  _createClass(Cast, null, [{
    key: "toNumber",
    value:
    /**
     * Scratch cast to number.
     * Treats NaN as 0.
     * In Scratch 2.0, this is captured by `interp.numArg.`
     * @param {*} value Value to cast to number.
     * @return {number} The Scratch-casted number value.
     */
    function toNumber(value) {
      // If value is already a number we don't need to coerce it with
      // Number().
      if (typeof value === 'number') {
        // Scratch treats NaN as 0, when needed as a number.
        // E.g., 0 + NaN -> 0.
        if (Number.isNaN(value)) {
          return 0;
        }

        return value;
      }

      var n = Number(value);

      if (Number.isNaN(n)) {
        // Scratch treats NaN as 0, when needed as a number.
        // E.g., 0 + NaN -> 0.
        return 0;
      }

      return n;
    }
    /**
     * Scratch cast to boolean.
     * In Scratch 2.0, this is captured by `interp.boolArg.`
     * Treats some string values differently from JavaScript.
     * @param {*} value Value to cast to boolean.
     * @return {boolean} The Scratch-casted boolean value.
     */

  }, {
    key: "toBoolean",
    value: function toBoolean(value) {
      // Already a boolean?
      if (typeof value === 'boolean') {
        return value;
      }

      if (typeof value === 'string') {
        // These specific strings are treated as false in Scratch.
        if (value === '' || value === '0' || value.toLowerCase() === 'false') {
          return false;
        } // All other strings treated as true.


        return true;
      } // Coerce other values and numbers.


      return Boolean(value);
    }
    /**
     * Scratch cast to string.
     * @param {*} value Value to cast to string.
     * @return {string} The Scratch-casted string value.
     */

  }, {
    key: "toString",
    value: function toString(value) {
      return String(value);
    }
    /**
     * Cast any Scratch argument to an RGB color array to be used for the renderer.
     * @param {*} value Value to convert to RGB color array.
     * @return {Array.<number>} [r,g,b], values between 0-255.
     */

  }, {
    key: "toRgbColorList",
    value: function toRgbColorList(value) {
      var color = Cast.toRgbColorObject(value);
      return [color.r, color.g, color.b];
    }
    /**
     * Cast any Scratch argument to an RGB color object to be used for the renderer.
     * @param {*} value Value to convert to RGB color object.
     * @return {RGBOject} [r,g,b], values between 0-255.
     */

  }, {
    key: "toRgbColorObject",
    value: function toRgbColorObject(value) {
      var color;

      if (typeof value === 'string' && value.substring(0, 1) === '#') {
        color = Color.hexToRgb(value); // If the color wasn't *actually* a hex color, cast to black

        if (!color) color = {
          r: 0,
          g: 0,
          b: 0,
          a: 255
        };
      } else {
        color = Color.decimalToRgb(Cast.toNumber(value));
      }

      return color;
    }
    /**
     * Determine if a Scratch argument is a white space string (or null / empty).
     * @param {*} val value to check.
     * @return {boolean} True if the argument is all white spaces or null / empty.
     */

  }, {
    key: "isWhiteSpace",
    value: function isWhiteSpace(val) {
      return val === null || typeof val === 'string' && val.trim().length === 0;
    }
    /**
     * Compare two values, using Scratch cast, case-insensitive string compare, etc.
     * In Scratch 2.0, this is captured by `interp.compare.`
     * @param {*} v1 First value to compare.
     * @param {*} v2 Second value to compare.
     * @returns {number} Negative number if v1 < v2; 0 if equal; positive otherwise.
     */

  }, {
    key: "compare",
    value: function compare(v1, v2) {
      var n1 = Number(v1);
      var n2 = Number(v2);

      if (n1 === 0 && Cast.isWhiteSpace(v1)) {
        n1 = NaN;
      } else if (n2 === 0 && Cast.isWhiteSpace(v2)) {
        n2 = NaN;
      }

      if (isNaN(n1) || isNaN(n2)) {
        // At least one argument can't be converted to a number.
        // Scratch compares strings as case insensitive.
        var s1 = String(v1).toLowerCase();
        var s2 = String(v2).toLowerCase();

        if (s1 < s2) {
          return -1;
        } else if (s1 > s2) {
          return 1;
        }

        return 0;
      } // Handle the special case of Infinity


      if (n1 === Infinity && n2 === Infinity || n1 === -Infinity && n2 === -Infinity) {
        return 0;
      } // Compare as numbers.


      return n1 - n2;
    }
    /**
     * Determine if a Scratch argument number represents a round integer.
     * @param {*} val Value to check.
     * @return {boolean} True if number looks like an integer.
     */

  }, {
    key: "isInt",
    value: function isInt(val) {
      // Values that are already numbers.
      if (typeof val === 'number') {
        if (isNaN(val)) {
          // NaN is considered an integer.
          return true;
        } // True if it's "round" (e.g., 2.0 and 2).


        return val === parseInt(val, 10);
      } else if (typeof val === 'boolean') {
        // `True` and `false` always represent integer after Scratch cast.
        return true;
      } else if (typeof val === 'string') {
        // If it contains a decimal point, don't consider it an int.
        return val.indexOf('.') < 0;
      }

      return false;
    }
  }, {
    key: "LIST_INVALID",
    get: function get() {
      return 'INVALID';
    }
  }, {
    key: "LIST_ALL",
    get: function get() {
      return 'ALL';
    }
    /**
     * Compute a 1-based index into a list, based on a Scratch argument.
     * Two special cases may be returned:
     * LIST_ALL: if the block is referring to all of the items in the list.
     * LIST_INVALID: if the index was invalid in any way.
     * @param {*} index Scratch arg, including 1-based numbers or special cases.
     * @param {number} length Length of the list.
     * @param {boolean} acceptAll Whether it should accept "all" or not.
     * @return {(number|string)} 1-based index for list, LIST_ALL, or LIST_INVALID.
     */

  }, {
    key: "toListIndex",
    value: function toListIndex(index, length, acceptAll) {
      if (typeof index !== 'number') {
        if (index === 'all') {
          return acceptAll ? Cast.LIST_ALL : Cast.LIST_INVALID;
        }

        if (index === 'last') {
          if (length > 0) {
            return length;
          }

          return Cast.LIST_INVALID;
        } else if (index === 'random' || index === 'any') {
          if (length > 0) {
            return 1 + Math.floor(Math.random() * length);
          }

          return Cast.LIST_INVALID;
        }
      }

      index = Math.floor(Cast.toNumber(index));

      if (index < 1 || index > length) {
        return Cast.LIST_INVALID;
      }

      return index;
    }
  }]);

  return Cast;
}();

var cast = Cast;

var en = {
	"g2s.name": "AkaDako",
	"g2s.connectBoard": "connect board",
	"g2s.disconnectBoard": "disconnect board",
	"g2s.isConnected": "board is connected",
	"g2s.boardState.connected": "connected",
	"g2s.boardState.disconnected": "disconnected",
	"g2s.boardStateChanged": "When board is [STATE]",
	"g2s.analogConnector.prefix": "Analog",
	"g2s.analogLevelGet": "level of [CONNECTOR]",
	"g2s.digitalConnector.prefix": "Digital",
	"g2s.digitalLevelMenu.low": "Low",
	"g2s.digitalLevelMenu.high": "High",
	"g2s.inputBiasSet": "[PIN] bias [BIAS]",
	"g2s.inputBiasMenu.none": "none",
	"g2s.inputBiasMenu.pullUp": "pull up",
	"g2s.digitalIsHigh": "[CONNECTOR] is HIGH",
	"g2s.digitalLevelChanged": "When [CONNECTOR] is [LEVEL]",
	"g2s.digitalLevelSet": "[CONNECTOR] to [LEVEL]",
	"g2s.analogLevelSet": "[CONNECTOR] to PWM [LEVEL]",
	"g2s.servoTurn": "Servo [CONNECTOR] turn [DEGREE]",
	"g2s.i2cWrite": "I2C write on [ADDRESS] register [REGISTER] with [DATA]",
	"g2s.i2cReadOnce": "I2C read [LENGTH] bytes from [ADDRESS] register [REGISTER]",
	"g2s.oneWireReset": "OneWire [CONNECTOR] reset",
	"g2s.oneWireWrite": "OneWire [CONNECTOR] write [DATA]",
	"g2s.oneWireRead": "OneWire [CONNECTOR] read [LENGTH] bytes",
	"g2s.oneWireWriteAndRead": "OneWire [CONNECTOR] write [DATA] then read [LENGTH] bytes",
	"g2s.neoPixelConfigStrip": "Set NeoPixel length [LENGTH] on [CONNECTOR]",
	"g2s.neoPixelSetColor": "NeoPixel color [POSITION] R [RED] G [GREEN] B [BLUE]",
	"g2s.neoPixelShow": "NeoPixel show",
	"g2s.neoPixelClear": "NeoPixel clear",
	"g2s.measureDistance": "distance (mm)",
	"g2s.getAcceleration": "acceleration [AXIS] (m/s^2)",
	"g2s.accelerationAxisMenu.x": "x",
	"g2s.accelerationAxisMenu.y": "y",
	"g2s.accelerationAxisMenu.z": "z",
	"g2s.accelerationAxisMenu.absolute": "absolute",
	"g2s.numberAtIndex": "number of [ARRAY] at [INDEX]",
	"g2s.spliceNumbers": "[ARRAY] at [INDEX] delete [DELETE] insert [INSERT]",
	"g2s.lengthOfNumbers": "length of numbers [ARRAY]",
	"g2s.readBytesAs": "read bytes [ARRAY] as [TYPE] [ENDIAN]",
	"g2s.int64Operation": "int64 [LEFT] [OP] [RIGHT]",
	"g2s.bitOperation": "bit [LEFT] [OP] [RIGHT]",
	"g2s.bitNot": "bit NOT [VALUE]"
};
var ja = {
	"g2s.name": "AkaDako",
	"g2s.connectBoard": "ボードを接続する",
	"g2s.disconnectBoard": "ボードを切断する",
	"g2s.isConnected": "ボードに接続している",
	"g2s.boardState.connected": "つながった",
	"g2s.boardState.disconnected": "切れた",
	"g2s.boardStateChanged": "ボードが[STATE]とき",
	"g2s.analogConnector.prefix": "アナログ",
	"g2s.analogLevelGet": "[CONNECTOR]のレベル",
	"g2s.digitalConnector.prefix": "デジタル",
	"g2s.digitalLevelMenu.low": "ロー",
	"g2s.digitalLevelMenu.high": "ハイ",
	"g2s.inputBiasSet": "[PIN]を[BIAS]",
	"g2s.inputBiasMenu.none": "プルアップしない",
	"g2s.inputBiasMenu.pullUp": "プルアップする",
	"g2s.digitalIsHigh": "[CONNECTOR]がハイである",
	"g2s.digitalLevelChanged": "[CONNECTOR]が[LEVEL]になったとき",
	"g2s.digitalLevelSet": "[CONNECTOR]を[LEVEL]にする",
	"g2s.analogLevelSet": "[CONNECTOR]をPWM[LEVEL]にする",
	"g2s.servoTurn": "[CONNECTOR]のサーボを[DEGREE]度にする",
	"g2s.i2cWrite": "I2C[ADDRESS]のレジスタ[REGISTER]に[DATA]を書き込む",
	"g2s.i2cReadOnce": "I2C[ADDRESS]のレジスタ[REGISTER]を[LENGTH]バイト読み出す",
	"g2s.oneWireReset": "[CONNECTOR]のOneWireをリセットする",
	"g2s.oneWireWrite": "[CONNECTOR]のOneWireに[DATA]を書き込む",
	"g2s.oneWireRead": "[CONNECTOR]のOneWireから[LENGTH]バイト読み出す",
	"g2s.oneWireWriteAndRead": "[CONNECTOR]のOneWireに[DATA]を書き込んでから[LENGTH]バイト読み出す",
	"g2s.neoPixelConfigStrip": "[CONNECTOR]に長さ[LENGTH]のNeoPixelをつなぐ",
	"g2s.neoPixelSetColor": "NeoPixel[POSITION]の色を赤[RED] 緑[GREEN] 青[BLUE]にする",
	"g2s.neoPixelShow": "NeoPixelを光らせる",
	"g2s.neoPixelClear": "NeoPixelを消す",
	"g2s.measureDistance": "距離(mm)",
	"g2s.getAcceleration": "加速度[AXIS](m/s^2)",
	"g2s.accelerationAxisMenu.x": "x",
	"g2s.accelerationAxisMenu.y": "y",
	"g2s.accelerationAxisMenu.z": "z",
	"g2s.accelerationAxisMenu.absolute": "絶対値",
	"g2s.numberAtIndex": "数列[ARRAY]の[INDEX]番目",
	"g2s.spliceNumbers": "数列[ARRAY]の[INDEX]番目から[DELETE]個削除して[INSERT]を入れる",
	"g2s.lengthOfNumbers": "数列[ARRAY]の長さ",
	"g2s.readBytesAs": "バイト列[ARRAY]を[TYPE][ENDIAN]として読む",
	"g2s.int64Operation": "int64 [LEFT] [OP] [RIGHT]",
	"g2s.bitOperation": "bit [LEFT] [OP] [RIGHT]",
	"g2s.bitNot": "bit NOT [VALUE]"
};
var translations = {
	en: en,
	ja: ja,
	"ja-Hira": {
	"g2s.name": "AkaDako",
	"g2s.connectBoard": "ボードをせつぞくする",
	"g2s.disconnectBoard": "ボードをせつだんする",
	"g2s.isConnected": "ボードにせつぞくている",
	"g2s.boardState.connected": "つながった",
	"g2s.boardState.disconnected": "きれた",
	"g2s.boardStateChanged": "ボードが[STATE]とき",
	"g2s.analogConnector.prefix": "アナログ",
	"g2s.getAnalogLevel": "[CONNECTOR]のレベル",
	"g2s.digitalConnector.prefix": "デジタル",
	"g2s.digitalLevelMenu.low": "ロー",
	"g2s.digitalLevelMenu.high": "ハイ",
	"g2s.inputBiasSet": "[PIN]を[BIAS]",
	"g2s.inputBiasMenu.none": "プルアップしない",
	"g2s.inputBiasMenu.pullUp": "プルアップする",
	"g2s.digitalIsHigh": "[CONNECTOR]がハイである",
	"g2s.digitalLevelChanged": "[CONNECTOR]が[LEVEL]になったとき",
	"g2s.digitalLevelSet": "[CONNECTOR]を[LEVEL]にする",
	"g2s.analogLevelSet": "[CONNECTOR]をPWM[LEVEL]にする",
	"g2s.servoTurn": "[CONNECTOR]のサーボを[DEGREE]どにする",
	"g2s.i2cWrite": "I2C[ADDRESS]のレジスタ[REGISTER]に[DATA]をかきこむ",
	"g2s.i2cReadOnce": "I2C[ADDRESS]のレジスタ[REGISTER]を[LENGTH]バイトよみだす",
	"g2s.oneWireReset": "[CONNECTOR]のOneWireをリセットする",
	"g2s.oneWireWrite": "[CONNECTOR]のOneWireに[DATA]をかきこむ",
	"g2s.oneWireRead": "[CONNECTOR]のOneWireから[LENGTH]バイトよみだす",
	"g2s.oneWireWriteAndRead": "[CONNECTOR]のOneWireに[DATA]をかきこんでから[LENGTH]バイトよみだす",
	"g2s.neoPixelConfigStrip": "[CONNECTOR]に長さ[LENGTH]のNeoPixelをつなぐ",
	"g2s.neoPixelSetColor": "NeoPixel[POSITION]のいろを あか[RED] みどり[GREEN] あお[BLUE]にする",
	"g2s.neoPixelShow": "NeoPixelをひからせる",
	"g2s.neoPixelClear": "NeoPixelをけす",
	"g2s.measureDistance": "きょり(mm)",
	"g2s.getAcceleration": "かそくど[AXIS](m/s^2)",
	"g2s.accelerationAxisMenu.x": "x",
	"g2s.accelerationAxisMenu.y": "y",
	"g2s.accelerationAxisMenu.z": "z",
	"g2s.accelerationAxisMenu.absolute": "ぜったいち",
	"g2s.numberAtIndex": "すうれつ[ARRAY]の[INDEX]ばんめ",
	"g2s.spliceNumbers": "すうれつ[ARRAY]の[INDEX]ばんめから[DELETE]こさくじょして[INSERT]をいれる",
	"g2s.lengthOfNumbers": "すうれつ[ARRAY]のながさ",
	"g2s.readBytesAs": "バイトれつ[ARRAY]を[TYPE][ENDIAN]としてよむ",
	"g2s.int64Operation": "int64 [LEFT] [OP] [RIGHT]",
	"g2s.bitOperation": "bit [LEFT] [OP] [RIGHT]",
	"g2s.bitNot": "bit NOT [VALUE]"
}
};

var img = "data:image/png;base64,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";

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var domain; // This constructor is used to store event handlers. Instantiating this is
// faster than explicitly calling `Object.create(null)` to get a "clean" empty
// object (tested with v8 v4.9).

function EventHandlers() {}

EventHandlers.prototype = Object.create(null);

function EventEmitter() {
  EventEmitter.init.call(this);
}
// require('events') === require('events').EventEmitter

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.usingDomains = false;
EventEmitter.prototype.domain = undefined;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

EventEmitter.defaultMaxListeners = 10;

EventEmitter.init = function () {
  this.domain = null;

  if (EventEmitter.usingDomains) {
    // if there is an active domain, then attach to it.
    if (domain.active ) ;
  }

  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
    this._events = new EventHandlers();
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}; // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.


EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n)) throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
}; // These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.


function emitNone(handler, isFn, self) {
  if (isFn) handler.call(self);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      listeners[i].call(self);
    }
  }
}

function emitOne(handler, isFn, self, arg1) {
  if (isFn) handler.call(self, arg1);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      listeners[i].call(self, arg1);
    }
  }
}

function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn) handler.call(self, arg1, arg2);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      listeners[i].call(self, arg1, arg2);
    }
  }
}

function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn) handler.call(self, arg1, arg2, arg3);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      listeners[i].call(self, arg1, arg2, arg3);
    }
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn) handler.apply(self, args);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      listeners[i].apply(self, args);
    }
  }
}

EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events, domain;
  var doError = type === 'error';
  events = this._events;
  if (events) doError = doError && events.error == null;else if (!doError) return false;
  domain = this.domain; // If there is no 'error' event listener then throw.

  if (doError) {
    er = arguments[1];

    if (domain) {
      if (!er) er = new Error('Uncaught, unspecified "error" event');
      er.domainEmitter = this;
      er.domain = domain;
      er.domainThrown = false;
      domain.emit('error', er);
    } else if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }

    return false;
  }

  handler = events[type];
  if (!handler) return false;
  var isFn = typeof handler === 'function';
  len = arguments.length;

  switch (len) {
    // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;

    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;

    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;

    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
    // slower

    default:
      args = new Array(len - 1);

      for (i = 1; i < len; i++) {
        args[i - 1] = arguments[i];
      }

      emitMany(handler, isFn, this, args);
  }
  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  events = target._events;

  if (!events) {
    events = target._events = new EventHandlers();
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object

      events = target._events;
    }

    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    } // Check for listener leak


    if (!existing.warned) {
      m = $getMaxListeners(target);

      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + type + ' listeners added. ' + 'Use emitter.setMaxListeners() to increase limit');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        emitWarning(w);
      }
    }
  }

  return target;
}

function emitWarning(e) {
  typeof console.warn === 'function' ? console.warn(e) : console.log(e);
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function _onceWrap(target, type, listener) {
  var fired = false;

  function g() {
    target.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(target, arguments);
    }
  }

  g.listener = listener;
  return g;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
}; // emits a 'removeListener' event iff the listener was removed


EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  events = this._events;
  if (!events) return this;
  list = events[type];
  if (!list) return this;

  if (list === listener || list.listener && list.listener === listener) {
    if (--this._eventsCount === 0) this._events = new EventHandlers();else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length; i-- > 0;) {
      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;

    if (list.length === 1) {
      list[0] = undefined;

      if (--this._eventsCount === 0) {
        this._events = new EventHandlers();
        return this;
      } else {
        delete events[type];
      }
    } else {
      spliceOne(list, position);
    }

    if (events.removeListener) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events;
  events = this._events;
  if (!events) return this; // not listening for removeListener, no need to emit

  if (!events.removeListener) {
    if (arguments.length === 0) {
      this._events = new EventHandlers();
      this._eventsCount = 0;
    } else if (events[type]) {
      if (--this._eventsCount === 0) this._events = new EventHandlers();else delete events[type];
    }

    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    var keys = Object.keys(events);

    for (var i = 0, key; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = new EventHandlers();
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    do {
      this.removeListener(type, listeners[listeners.length - 1]);
    } while (listeners[0]);
  }

  return this;
};

EventEmitter.prototype.listeners = function listeners(type) {
  var evlistener;
  var ret;
  var events = this._events;
  if (!events) ret = [];else {
    evlistener = events[type];
    if (!evlistener) ret = [];else if (typeof evlistener === 'function') ret = [evlistener.listener || evlistener];else ret = unwrapListeners(evlistener);
  }
  return ret;
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;

function listenerCount(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
}; // About 1.5x faster than the two-arg version of Array#splice().


function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

function arrayClone(arr, i) {
  var copy = new Array(i);

  while (i--) {
    copy[i] = arr[i];
  }

  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }

  return ret;
}

// ajfisher/node-pixel: https://github.com/ajfisher/node-pixel

var START_SYSEX = 0xF0;
var STRING_DATA = 0x71;
var END_SYSEX = 0xF7;
var FIRMATA_7BIT_MASK = 0x7F;
var PIXEL_SHIFT_WRAP = 0x40;
var PIXEL_COMMAND = 0x51;
var PIXEL_OFF = 0x00;
var PIXEL_CONFIG = 0x01;
var PIXEL_SHOW = 0x02;
var PIXEL_SET_PIXEL = 0x03;
var PIXEL_SET_STRIP = 0x04;
var PIXEL_SHIFT = 0x05;
var SHIFT_FORWARD = 0x20;
var SHIFT_BACKWARD = 0x00;
var MAX_STRIPS = 8;
var PIN_DEFAULT = 6; // use this if not supplied

var I2C_DEFAULT = 0x42;
var GAMMA_DEFAULT = 1.0; // set to 1.0 in 0.9, 2.8 in 0.10

var COLOR_ORDER = {
  GRB: 0x00,
  RGB: 0x01,
  BRG: 0x02
};
var nodePixelConstants = {
  START_SYSEX: START_SYSEX,
  STRING_DATA: STRING_DATA,
  END_SYSEX: END_SYSEX,
  FIRMATA_7BIT_MASK: FIRMATA_7BIT_MASK,
  PIXEL_SHIFT_WRAP: PIXEL_SHIFT_WRAP,
  PIXEL_COMMAND: PIXEL_COMMAND,
  PIXEL_OFF: PIXEL_OFF,
  PIXEL_CONFIG: PIXEL_CONFIG,
  PIXEL_SHOW: PIXEL_SHOW,
  PIXEL_SET_PIXEL: PIXEL_SET_PIXEL,
  PIXEL_SET_STRIP: PIXEL_SET_STRIP,
  PIXEL_SHIFT: PIXEL_SHIFT,
  SHIFT_FORWARD: SHIFT_FORWARD,
  SHIFT_BACKWARD: SHIFT_BACKWARD,
  MAX_STRIPS: MAX_STRIPS,
  PIN_DEFAULT: PIN_DEFAULT,
  I2C_DEFAULT: I2C_DEFAULT,
  GAMMA_DEFAULT: GAMMA_DEFAULT,
  COLOR_ORDER: COLOR_ORDER
};

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Return a Promise which will reject after the delay time passed.
 * @param {number} delay - waiting time to reject in milliseconds
 * @returns {Promise<string>} Promise which will reject with reason after the delay.
 */

var timeoutReject = function timeoutReject(delay) {
  return new Promise(function (_, reject) {
    return setTimeout(function () {
      return reject("timeout ".concat(delay, "ms"));
    }, delay);
  });
}; // Setup transport of Firmata.


SerialPort.Binding = WSABinding;
var Firmata = bindTransport(SerialPort); // eslint-disable-next-line prefer-const

var neoPixelGammaTable = function (steps, gamma) {
  var gammaTable = new Array(steps);

  for (var i = 0; i < steps; i++) {
    gammaTable[i] = Math.floor(Math.pow(i / 255.0, gamma) * 255 + 0.5);
  }

  return gammaTable;
}(256, 2.8);

var neoPixelColorValue = function neoPixelColorValue(colors, gammaTable) {
  // colors are assumed to be an array of [r, g, b] bytes
  // colorValue returns a packed value able to be pushed to firmata rather than
  // text values.
  // if gammaTable is passed then it should use the supplied gamma
  // correction table to correct the received value.
  // before sending, account for gamma correction.
  var gammaCorrectedColor = Object.assign({}, colors);
  gammaCorrectedColor[0] = gammaTable[gammaCorrectedColor[0]];
  gammaCorrectedColor[1] = gammaTable[gammaCorrectedColor[1]];
  gammaCorrectedColor[2] = gammaTable[gammaCorrectedColor[2]];
  return (gammaCorrectedColor[0] << 16) + (gammaCorrectedColor[1] << 8) + gammaCorrectedColor[2];
};

var FirmataBoard = /*#__PURE__*/function (_EventEmitter) {
  _inherits(FirmataBoard, _EventEmitter);

  var _super = _createSuper$1(FirmataBoard);

  /**
   * Construct a firmata board object.
   * @param {Runtime} runtime - the Scratch runtime
   */
  function FirmataBoard(runtime) {
    var _this;

    _classCallCheck(this, FirmataBoard);

    _this = _super.call(this);
    _this.name = 'FirmataBoard';
    /**
     * The Scratch runtime to register event listeners.
     * @type {Runtime}
     * @private
     */

    _this.runtime = runtime;
    /**
     * State of this board
     * @type {string}
     */

    _this.state = 'disconnect';
    /**
     * The Firmata board for reading/writing peripheral data.
     * @type {Firmata}
     * @private
     */

    _this.firmata = null;
    /**
     * The serial port for transporting of Firmata.
     */

    _this.port = null;
    /**
     * ID of the extension which requested to open port.
     */

    _this.extensionId = null;
    /**
     * shortest interval time between digital input readings
     */

    _this.digitalReadInterval = 20;
    /**
     * shortest interval time between analog input readings
     */

    _this.analogReadInterval = 20;
    /**
     * Waiting time for response of digital input reading in milliseconds.
     */

    _this.updateDigitalInputWaitingTime = 100;
    /**
     * Waiting time for response of analog input reading in milliseconds.
     */

    _this.updateAnalogInputWaitingTime = 100;
    /**
     * Waiting time for response of I2C reading in milliseconds.
     */

    _this.i2cReadWaitingTime = 100;
    /**
     * Waiting time for response of OneWire reading in milliseconds.
     */

    _this.oneWireReadWaitingTime = 100;
    _this.portInfo = null;
    _this.neoPixel = null;
    return _this;
  }
  /**
   * Open a port to connect a firmata board.
   * @param {string} extensionId - ID of the extension which is requesting
   * @param {object} options - serial port options
   * @returns {Promise<FirmataBoard>} a Promise which resolves a connected firmata board or reject with reason
   */


  _createClass(FirmataBoard, [{
    key: "requestPort",
    value: function () {
      var _requestPort = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(extensionId, options) {
        var _this2 = this;

        var nativePort, permittedPorts;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.port) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", Promise.resolve(this));

              case 2:
                // already opened
                this.state = 'portRequesting';
                this.extensionId = extensionId;
                nativePort = null;
                _context.next = 7;
                return navigator.serial.getPorts();

              case 7:
                permittedPorts = _context.sent;

                if (!(permittedPorts !== null && Array.isArray(permittedPorts) && permittedPorts.length > 0)) {
                  _context.next = 12;
                  break;
                }

                nativePort = permittedPorts[0];
                _context.next = 15;
                break;

              case 12:
                _context.next = 14;
                return navigator.serial.requestPort(options);

              case 14:
                nativePort = _context.sent;

              case 15:
                this.port = new SerialPort(nativePort, {
                  baudRate: 57600,
                  // firmata: 57600
                  autoOpen: false
                });
                this.portInfo = this.port.path.getInfo();
                this.firmata = new Firmata(this.port);
                this.firmata.once('open', function () {
                  _this2.state = 'connect';
                });
                this.firmata.once('close', function () {
                  if (_this2.state === 'disconnect') return;

                  _this2.releaseBoard();
                });
                this.firmata.once('disconnect', function (error) {
                  if (_this2.state === 'disconnect') return;

                  _this2.handleDisconnectError(error);
                });
                this.firmata.once('error', function (error) {
                  if (_this2.state === 'disconnect') return;

                  _this2.handleDisconnectError(error);
                });

                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  _this2.port.open(function (error) {
                    if (error) {
                      _this2.releaseBoard();

                      reject(error);
                      return;
                    }

                    _this2.firmata.once('ready', function () {
                      _this2.onBoarReady();

                      resolve(_this2);
                    });
                  });
                }));

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function requestPort(_x, _x2) {
        return _requestPort.apply(this, arguments);
      }

      return requestPort;
    }()
  }, {
    key: "onBoarReady",
    value: function onBoarReady() {
      var firmInfo = this.firmata.firmware;
      console.log("".concat(firmInfo.name, "-").concat(firmInfo.version.major, ".").concat(firmInfo.version.minor, " on: ").concat(JSON.stringify(this.portInfo)));
      this.firmata.i2cConfig();
      this.state = 'ready';
    }
  }, {
    key: "isConnected",
    value: function isConnected() {
      return this.state === 'connect' || this.state === 'ready';
    }
  }, {
    key: "isReady",
    value: function isReady() {
      return this.state === 'ready';
    }
  }, {
    key: "releaseBoard",
    value: function () {
      var _releaseBoard = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.state = 'disconnect';
                this.neoPixel = null;

                if (this.port && this.port.isOpen) {
                  this.port.close();
                }

                this.port = null;
                this.oneWireDevices = null;
                this.extensionId = null;
                this.emit(FirmataBoard.RELEASED);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function releaseBoard() {
        return _releaseBoard.apply(this, arguments);
      }

      return releaseBoard;
    }()
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.state === 'disconnect') return;

      if (this.firmata && this.port && this.port.isOpen) {
        this.firmata.reset(); // notify disconnection to board
      }

      this.releaseBoard();
    }
    /**
     * Handle an error resulting from losing connection to a peripheral.
     * This could be due to:
     * - unplug the connector
     * - being powered down
     *
     * Disconnect the device, and if the extension using this object has a
     * reset callback, call it.
     *
     * @param {*} error - cause of the error
     * @returns {undefined}
     */

  }, {
    key: "handleDisconnectError",
    value: function handleDisconnectError(error) {
      if (this.state === 'disconnect') return;
      error = error ? error : 'Firmata was disconnected by device';
      console.error(error);
      this.runtime.emit(this.runtime.constructor.PERIPHERAL_CONNECTION_LOST_ERROR, {
        message: "Scratch lost connection to",
        extensionId: this.extensionId
      });
      this.disconnect();
    }
  }, {
    key: "pinMode",
    value: function pinMode(pin, mode) {
      return this.firmata.pinMode(pin, mode);
    }
    /**
     * Update pin value as a digital input when the last update was too old.
     * @param {number} pin - pin number to read
     * @returns {Promise<boolean>} a Promise which resolves boolean when the response was returned
     */

  }, {
    key: "updateDigitalInput",
    value: function updateDigitalInput(pin) {
      var _this3 = this;

      if (this.pins[pin].updating || this.pins[pin].updateTime && Date.now() - this.pins[pin].updateTime < this.digitalReadInterval) {
        return Promise.resolve(this.pins[pin].value);
      }

      this.pins[pin].updating = true;
      var request = new Promise(function (resolve) {
        if (_this3.pins[pin].inputBias !== _this3.firmata.MODES.PULLUP) {
          _this3.pins[pin].inputBias = _this3.firmata.MODES.INPUT;
        }

        _this3.firmata.pinMode(pin, _this3.pins[pin].inputBias);

        _this3.firmata.digitalRead(pin, function (value) {
          _this3.pins[pin].value = value;
          _this3.pins[pin].updateTime = Date.now();
          resolve(_this3.pins[pin].value);
        });
      });
      return Promise.race([request, timeoutReject(this.updateDigitalInputWaitingTime)]).catch(function (reason) {
        _this3.pins[pin].value = 0;
        return Promise.reject(reason);
      }).finally(function () {
        _this3.pins[pin].updating = false;
      });
    }
    /**
     * Set input bias of the connector.
     * @param {number} pin - number of the pin
     * @param {boolean} pullUp - input bias of the pin [none | pullUp]
     * @returns {undefined} set send message then return immediately
     */

  }, {
    key: "setInputBias",
    value: function setInputBias(pin, pullUp) {
      this.pins[pin].inputBias = pullUp ? this.MODES.PULLUP : this.MODES.INPUT;
      this.pinMode(pin, this.pins[pin].inputBias);
    }
    /**
     * Update pin value as a analog input when the last update was too old.
     * @param {number} analogPin - pin number to read
     * @returns {Promise<boolean>} a Promise which resolves boolean when the response was returned
     */

  }, {
    key: "updateAnalogInput",
    value: function updateAnalogInput(analogPin) {
      var _this4 = this;

      var pin = this.firmata.analogPins[analogPin];

      if (this.pins[pin].updating || this.pins[pin].updateTime && Date.now() - this.pins[pin].updateTime < this.analogReadInterval) {
        return Promise.resolve(this.pins[pin].value);
      }

      this.pins[pin].updating = true;
      var request = new Promise(function (resolve) {
        _this4.firmata.pinMode(analogPin, _this4.MODES.ANALOG);

        _this4.firmata.analogRead(analogPin, function (value) {
          _this4.pins[pin].value = value;
          _this4.pins[pin].updateTime = Date.now();
          resolve(_this4.pins[pin].value);
        });
      });
      return Promise.race([request, timeoutReject(this.updateAnalogInputWaitingTime)]).catch(function (reason) {
        _this4.pins[pin].value = 0;
        return Promise.reject(reason);
      }).finally(function () {
        _this4.pins[pin].updating = false;
      });
    }
  }, {
    key: "digitalRead",
    value: function digitalRead(pin, callback) {
      return this.firmata.digitalRead(pin, callback);
    }
  }, {
    key: "reportDigitalPin",
    value: function reportDigitalPin(pin, value) {
      return this.firmata.reportDigitalPin(pin, value);
    }
  }, {
    key: "digitalWrite",
    value: function digitalWrite(pin, value, enqueue) {
      return this.firmata.digitalWrite(pin, value, enqueue);
    }
  }, {
    key: "pwmWrite",
    value: function pwmWrite(pin, value) {
      return this.firmata.pwmWrite(pin, value);
    }
  }, {
    key: "servoWrite",
    value: function servoWrite() {
      var _this$firmata;

      return (_this$firmata = this.firmata).servoWrite.apply(_this$firmata, arguments);
    }
  }, {
    key: "analogRead",
    value: function analogRead(pin, callback) {
      return this.firmata.analogRead(pin, callback);
    }
  }, {
    key: "reportAnalogPin",
    value: function reportAnalogPin(pin, value) {
      return this.firmata.reportAnalogPin(pin, value);
    }
  }, {
    key: "i2cWrite",
    value: function i2cWrite(address, registerOrData, inBytes) {
      return this.firmata.i2cWrite(address, registerOrData, inBytes);
    }
  }, {
    key: "i2cStop",
    value: function i2cStop(options) {
      return this.firmata.i2cStop(options);
    }
  }, {
    key: "i2cReadOnce",
    value: function i2cReadOnce(address, register, readLength, timeout) {
      var _this5 = this;

      timeout = timeout ? timeout : this.i2cReadWaitingTime;
      var request = new Promise(function (resolve) {
        _this5.firmata.i2cReadOnce(address, register, readLength, function (data) {
          resolve(data);
        });
      });
      return Promise.race([request, timeoutReject(timeout)]);
    }
  }, {
    key: "sendOneWireReset",
    value: function sendOneWireReset(pin) {
      return this.firmata.sendOneWireReset(pin);
    }
  }, {
    key: "searchOneWireDevices",
    value: function searchOneWireDevices(pin) {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        if (_this6.firmata.pins[pin].mode !== _this6.firmata.MODES.ONEWIRE) {
          _this6.firmata.sendOneWireConfig(pin, true);

          return _this6.firmata.sendOneWireSearch(pin, function (error, founds) {
            if (error) return reject(error);
            if (founds.length < 1) return reject(new Error('no device'));

            _this6.firmata.pinMode(pin, _this6.firmata.MODES.ONEWIRE);

            _this6.oneWireDevices = founds;

            _this6.firmata.sendOneWireDelay(pin, 1);

            resolve(_this6.oneWireDevices);
          });
        }

        resolve(_this6.oneWireDevices);
      });
    }
  }, {
    key: "oneWireWrite",
    value: function oneWireWrite(pin, data) {
      var _this7 = this;

      return this.searchOneWireDevices(pin).then(function (devices) {
        _this7.firmata.sendOneWireWrite(pin, devices[0], data);
      });
    }
  }, {
    key: "oneWireRead",
    value: function oneWireRead(pin, length, timeout) {
      var _this8 = this;

      timeout = timeout ? timeout : this.oneWireReadWaitingTime;
      var request = this.searchOneWireDevices(pin).then(function (devices) {
        return new Promise(function (resolve, reject) {
          _this8.firmata.sendOneWireRead(pin, devices[0], length, function (readError, data) {
            if (readError) return reject(readError);
            resolve(data);
          });
        });
      });
      return Promise.race([request, timeoutReject(timeout)]);
    }
  }, {
    key: "oneWireWriteAndRead",
    value: function oneWireWriteAndRead(pin, data, readLength, timeout) {
      var _this9 = this;

      timeout = timeout ? timeout : this.oneWireReadWaitingTime;
      var request = this.searchOneWireDevices(pin).then(function (devices) {
        return new Promise(function (resolve, reject) {
          _this9.firmata.sendOneWireWriteAndRead(pin, devices[0], data, readLength, function (readError, readData) {
            if (readError) return reject(readError);
            resolve(readData);
          });
        });
      });
      return Promise.race([request, timeoutReject(timeout)]);
    }
  }, {
    key: "neoPixelConfigStrip",
    value: function neoPixelConfigStrip(pin, length) {
      var _this10 = this;

      // now send the config message with length and data point.
      this.neoPixel = {
        pin: pin,
        length: length
      };
      var data = new Array(7);
      data[0] = nodePixelConstants.START_SYSEX;
      data[1] = nodePixelConstants.PIXEL_COMMAND;
      data[2] = nodePixelConstants.PIXEL_CONFIG;
      data[3] = nodePixelConstants.COLOR_ORDER.GRB << 5 | pin;
      data[4] = length & nodePixelConstants.FIRMATA_7BIT_MASK;
      data[5] = length >> 7 & nodePixelConstants.FIRMATA_7BIT_MASK;
      data[6] = nodePixelConstants.END_SYSEX;
      return new Promise(function (resolve) {
        _this10.port.write(data, function () {
          return resolve();
        });
      });
    }
  }, {
    key: "neoPixelSetColor",
    value: function neoPixelSetColor(index, color) {
      var _this11 = this;

      if (!this.neoPixel) return Promise.resolve();
      var address = Math.min(this.neoPixel.length, Math.max(0, index));
      var colorValue = neoPixelColorValue(color, neoPixelGammaTable);
      var data = new Array(10);
      data[0] = nodePixelConstants.START_SYSEX;
      data[1] = nodePixelConstants.PIXEL_COMMAND;
      data[2] = nodePixelConstants.PIXEL_SET_PIXEL;
      data[3] = address & nodePixelConstants.FIRMATA_7BIT_MASK;
      data[4] = address >> 7 & nodePixelConstants.FIRMATA_7BIT_MASK;
      data[5] = colorValue & nodePixelConstants.FIRMATA_7BIT_MASK;
      data[6] = colorValue >> 7 & nodePixelConstants.FIRMATA_7BIT_MASK;
      data[7] = colorValue >> 14 & nodePixelConstants.FIRMATA_7BIT_MASK;
      data[8] = colorValue >> 21 & nodePixelConstants.FIRMATA_7BIT_MASK;
      data[9] = nodePixelConstants.END_SYSEX;
      return new Promise(function (resolve) {
        _this11.port.write(data, function () {
          return resolve();
        });
      });
    }
  }, {
    key: "neoPixelClear",
    value: function () {
      var _neoPixelClear = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3() {
        var index;
        return regenerator.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.neoPixel) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", Promise.resolve());

              case 2:
                index = 0;

              case 3:
                if (!(index < this.neoPixel.length)) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 6;
                return this.neoPixelSetColor(index, [0, 0, 0]);

              case 6:
                index++;
                _context3.next = 3;
                break;

              case 9:
                return _context3.abrupt("return", this.neoPixelShow());

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function neoPixelClear() {
        return _neoPixelClear.apply(this, arguments);
      }

      return neoPixelClear;
    }()
  }, {
    key: "neoPixelShow",
    value: function neoPixelShow() {
      var _this12 = this;

      var data = [];
      data[0] = nodePixelConstants.START_SYSEX;
      data[1] = nodePixelConstants.PIXEL_COMMAND;
      data[2] = nodePixelConstants.PIXEL_SHOW;
      data[3] = nodePixelConstants.END_SYSEX;
      return new Promise(function (resolve) {
        _this12.port.write(data, function () {
          return resolve();
        });
      });
    }
    /**
     * State of the all pins
     */

  }, {
    key: "pins",
    get: function get() {
      return this.firmata.pins;
    }
  }, {
    key: "MODES",
    get: function get() {
      return this.firmata.MODES;
    }
  }, {
    key: "HIGH",
    get: function get() {
      return this.firmata.HIGH;
    }
  }, {
    key: "LOW",
    get: function get() {
      return this.firmata.LOW;
    }
  }, {
    key: "RESOLUTION",
    get: function get() {
      return this.firmata.RESOLUTION;
    }
  }], [{
    key: "RELEASED",
    get:
    /**
     * Event name for reporting that this board has been released.
     * @const {string}
     */
    function get() {
      return 'RELEASED';
    }
  }]);

  return FirmataBoard;
}(EventEmitter);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Manager object which serves firmata boards.
 */

var FirmataConnector = /*#__PURE__*/function (_EventEmitter) {
  _inherits(FirmataConnector, _EventEmitter);

  var _super = _createSuper(FirmataConnector);

  /**
   * Constructor of this instance.
   * @param {Runtime} runtime - Scratch runtime object
   */
  function FirmataConnector(runtime) {
    var _this;

    _classCallCheck(this, FirmataConnector);

    _this = _super.call(this);
    /**
     * The Scratch 3.0 runtime.
     * @type {Runtime}
     */

    _this.runtime = runtime;
    /**
     * Available boards
     * @type {Array<FirmataBoard>}
     */

    _this.boards = [];
    return _this;
  }
  /**
   * Return connected board which is confirmed with the options.
   * @param {object} options serial port options
   * @param {Array<{usbVendorId, usbProductId}>} options.filters allay of filters
   * @returns {FirmataBoard?} first board which confirmed with options
   */


  _createClass(FirmataConnector, [{
    key: "findBoard",
    value: function findBoard(options) {
      if (this.boards.length === 0) return;
      if (!options || !options.filters) return this.boards[0];
      return this.boards.find(function (aBoard) {
        return aBoard.isConnected() && options.filters.some(function (filter) {
          return filter.usbVendorId === aBoard.portInfo.usbVendorId && filter.usbProductId === aBoard.portInfo.usbProductId;
        });
      });
    }
    /**
     * Add a board to the boards holder.
     * @param {FirmataBoard} newBoard the board to be added
     */

  }, {
    key: "addBoard",
    value: function addBoard(newBoard) {
      this.boards.push(newBoard);
      this.emit(FirmataConnector.BOARD_ADDED, newBoard);
    }
    /**
     * Remove a board from the boards holder.
     * @param {FirmataBoard} removal the board to be removed
     */

  }, {
    key: "removeBoard",
    value: function removeBoard(removal) {
      var indexOfRemoval = this.boards.indexOf(removal);
      if (indexOfRemoval < 0) return; // not found

      this.boards.splice(indexOfRemoval, 1);
      this.emit(FirmataConnector.BOARD_ADDED, removal);
    }
    /**
     * Return a connected firmata board which is confirmed with the options
     * @param {string} extensionId - ID of the extension which is requesting
     * @param {object} options - serial port options
     * @returns {Promise<FirmataBoard>} a Promise which resolves a connected firmata board or reject with reason
     */

  }, {
    key: "connect",
    value: function connect(extensionId, options) {
      var _this2 = this;

      if (!('serial' in navigator)) {
        console.log('This browser does not support Web Serial API.');
        return Promise.reject('This browser does not support Web Serial API.');
      }

      var connectedBoard = this.findBoard(options);

      if (connectedBoard) {
        // share a board object
        return Promise.resolve(connectedBoard);
      }

      var newBoard = new FirmataBoard(this.runtime);
      newBoard.once(FirmataBoard.RELEASED, function () {
        _this2.removeBoard(newBoard);

        _this2.runtime.emit(_this2.runtime.constructor.PERIPHERAL_DISCONNECTED, {
          name: newBoard.name,
          path: newBoard.portInfo
        });
      });
      return newBoard.requestPort(extensionId, options).then(function (connected) {
        _this2.addBoard(connected);

        return connected;
      });
    }
  }], [{
    key: "BOARD_REMOVED",
    get:
    /**
     * Event name for reporting that a board removed.
     * @const {string}
     */
    function get() {
      return 'BOARD_REMOVED';
    }
    /**
     * Event name for reporting that a board added.
     * @const {string}
     */

  }, {
    key: "BOARD_ADDED",
    get: function get() {
      return 'BOARD_ADDED';
    }
  }]);

  return FirmataConnector;
}(EventEmitter);
/**
 * Return a shared firmata connector object
 * @param {Runtime} runtime - Scratch runtime object
 * @returns {FirmataConnector} a firmata connector object
 */

var getFirmataConnector = function getFirmataConnector(runtime) {
  if (!runtime.firmataConnector) {
    runtime.firmataConnector = new FirmataConnector(runtime);
  }

  return runtime.firmataConnector;
};

/**
 * VL53L0X API converted from Cpp code for Arduino.
 * ref: https://github.com/pololu/vl53l0x-arduino
 */

/* eslint-disable no-unused-vars */

/* eslint-disable camelcase */
// register addresses from API vl53l0x_device.h (ordered as listed there)
// enum regAddr
var SYSRANGE_START = 0x00;
var SYSTEM_SEQUENCE_CONFIG = 0x01;
var SYSTEM_INTERMEASUREMENT_PERIOD = 0x04;
var SYSTEM_INTERRUPT_CONFIG_GPIO = 0x0A;
var GPIO_HV_MUX_ACTIVE_HIGH = 0x84;
var SYSTEM_INTERRUPT_CLEAR = 0x0B;
var RESULT_INTERRUPT_STATUS = 0x13;
var RESULT_RANGE_STATUS = 0x14;
var I2C_SLAVE_DEVICE_ADDRESS = 0x8A;
var MSRC_CONFIG_CONTROL = 0x60;
var PRE_RANGE_CONFIG_VALID_PHASE_LOW = 0x56;
var PRE_RANGE_CONFIG_VALID_PHASE_HIGH = 0x57;
var FINAL_RANGE_CONFIG_VALID_PHASE_LOW = 0x47;
var FINAL_RANGE_CONFIG_VALID_PHASE_HIGH = 0x48;
var FINAL_RANGE_CONFIG_MIN_COUNT_RATE_RTN_LIMIT = 0x44;
var PRE_RANGE_CONFIG_VCSEL_PERIOD = 0x50;
var PRE_RANGE_CONFIG_TIMEOUT_MACROP_HI = 0x51;
var FINAL_RANGE_CONFIG_VCSEL_PERIOD = 0x70;
var FINAL_RANGE_CONFIG_TIMEOUT_MACROP_HI = 0x71;
var MSRC_CONFIG_TIMEOUT_MACROP = 0x46;
var IDENTIFICATION_MODEL_ID = 0xC0;
var OSC_CALIBRATE_VAL = 0xF8;
var GLOBAL_CONFIG_VCSEL_WIDTH = 0x32;
var GLOBAL_CONFIG_SPAD_ENABLES_REF_0 = 0xB0;
var GLOBAL_CONFIG_REF_EN_START_SELECT = 0xB6;
var DYNAMIC_SPAD_NUM_REQUESTED_REF_SPAD = 0x4E;
var DYNAMIC_SPAD_REF_EN_START_OFFSET = 0x4F;
var VHV_CONFIG_PAD_SCL_SDA__EXTSUP_HV = 0x89;
var ALGO_PHASECAL_LIM = 0x30;
var ALGO_PHASECAL_CONFIG_TIMEOUT = 0x30; // enum vcselPeriodType

var VcselPeriodPreRange = 0;
var VcselPeriodFinalRange = 1;
/**
 * Decode VCSEL (vertical cavity surface emitting laser) pulse period in PCLKs
 * from register value
 * based on VL53L0X_decode_vcsel_period()
 * @param {number} reg_val - register value
 * @returns {number} decoded value
 */

var decodeVcselPeriod = function decodeVcselPeriod(reg_val) {
  return reg_val + 1 << 1;
}; // Encode VCSEL pulse period register value from period in PCLKs
// based on VL53L0X_encode_vcsel_period()


var encodeVcselPeriod = function encodeVcselPeriod(period_pclks) {
  return (period_pclks >> 1) - 1;
}; // Calculate macro period in *nanoseconds* from VCSEL period in PCLKs
// based on VL53L0X_calc_macro_period_ps()
// PLL_period_ps = 1655; macro_period_vclks = 2304


var calcMacroPeriod = function calcMacroPeriod(vcsel_period_pclks) {
  return (2304 * vcsel_period_pclks * 1655 + 500) / 1000;
};
/**
 * This class is representing a VL53L0X distance sensor.
 */


var VL53L0X = /*#__PURE__*/function () {
  // eslint-disable-next-line valid-jsdoc

  /**
   * Constructor of VL53L0X instance.
   * @param {FirmataBoard} board - connecting firmata board
   * @param {*} address - I2C address of the sensor
   */
  function VL53L0X(board, address) {
    _classCallCheck(this, VL53L0X);

    /**
     * Connecting firmata board
     * @type {import('./firmata-board').default}
     */
    this.board = board;
    /**
     * I2C address for this module
     */

    this.address = 0x29;

    if (address) {
      this.setAddress(address);
    }
    /**
     * read by init and used when starting measurement;
     * is StopVariable field of VL53L0X_DevData_t structure in API
     * @type {number}
     */


    this.stop_variable = 0;
    /**
     * Timeout for IO in milliseconds.
     * @type {number}
     */

    this.io_timeout = 500;
    /**
     * Did a timeout occur in a sequence.
     * @type {boolean}
     */

    this.did_timeout = false;
    /**
     * @type {number}
     */

    this.measurement_timing_budget_us = 0;
  }
  /**
   * Change address for this module
   * @param {number} new_addr - I2C address to set
   */


  _createClass(VL53L0X, [{
    key: "setAddress",
    value: function setAddress(new_addr) {
      this.writeReg(I2C_SLAVE_DEVICE_ADDRESS, new_addr);
      this.address = new_addr;
    }
    /**
     * Initialize sensor using sequence based on VL53L0X_DataInit(),
     * VL53L0X_StaticInit(), and VL53L0X_PerformRefCalibration().
     * @param {boolean} io2v8 - set 2V8 mode if it was true
     * @returns {Promise<boolean>} a Promise which resolves boolean if the initialization was succeeded.
     */

  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(io2v8) {
        var id, info, refSpadMap, firstSpadToEnable, spadsEnabled, i;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.readReg(IDENTIFICATION_MODEL_ID);

              case 2:
                id = _context.sent;

                if (!(id !== 0xEE)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", false);

              case 5:
                if (!io2v8) {
                  _context.next = 13;
                  break;
                }

                _context.t0 = this;
                _context.t1 = VHV_CONFIG_PAD_SCL_SDA__EXTSUP_HV;
                _context.next = 10;
                return this.readReg(VHV_CONFIG_PAD_SCL_SDA__EXTSUP_HV);

              case 10:
                _context.t2 = _context.sent;
                _context.t3 = _context.t2 | 0x01;

                _context.t0.writeReg.call(_context.t0, _context.t1, _context.t3);

              case 13:
                // "Set I2C standard mode"
                this.writeReg(0x88, 0x00);
                this.writeReg(0x80, 0x01);
                this.writeReg(0xFF, 0x01);
                this.writeReg(0x00, 0x00);
                _context.next = 19;
                return this.readReg(0x91);

              case 19:
                this.stop_variable = _context.sent;
                this.writeReg(0x00, 0x01);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x80, 0x00); // disable SIGNAL_RATE_MSRC (bit 1) and SIGNAL_RATE_PRE_RANGE (bit 4) limit checks

                _context.t4 = this;
                _context.t5 = MSRC_CONFIG_CONTROL;
                _context.next = 27;
                return this.readReg(MSRC_CONFIG_CONTROL);

              case 27:
                _context.t6 = _context.sent;
                _context.t7 = _context.t6 | 0x12;

                _context.t4.writeReg.call(_context.t4, _context.t5, _context.t7);

                // set final range signal rate limit to 0.25 MCPS (million counts per second)
                this.setSignalRateLimit(0.25);
                this.writeReg(SYSTEM_SEQUENCE_CONFIG, 0xFF); // VL53L0X_DataInit() end
                // VL53L0X_StaticInit() begin

                info = {
                  count: 0,
                  isAperture: false
                };
                _context.next = 35;
                return this.getSpadInfo(info);

              case 35:
                if (_context.sent) {
                  _context.next = 37;
                  break;
                }

                return _context.abrupt("return", false);

              case 37:
                _context.next = 39;
                return this.readMulti(GLOBAL_CONFIG_SPAD_ENABLES_REF_0, 6);

              case 39:
                refSpadMap = _context.sent;
                // -- VL53L0X_set_reference_spads() begin (assume NVM values are valid)
                this.writeReg(0xFF, 0x01);
                this.writeReg(DYNAMIC_SPAD_REF_EN_START_OFFSET, 0x00);
                this.writeReg(DYNAMIC_SPAD_NUM_REQUESTED_REF_SPAD, 0x2C);
                this.writeReg(0xFF, 0x00);
                this.writeReg(GLOBAL_CONFIG_REF_EN_START_SELECT, 0xB4);
                firstSpadToEnable = info.isAperture ? 12 : 0; // 12 is the first aperture spad

                spadsEnabled = 0;

                for (i = 0; i < 48; i++) {
                  if (i < firstSpadToEnable || spadsEnabled === info.count) {
                    // This bit is lower than the first one that should be enabled, or
                    // (reference_spad_count) bits have already been enabled, so zero this bit
                    refSpadMap[i / 8] &= ~(1 << i % 8);
                  } else if (refSpadMap[i / 8] >> i % 8 & 0x1) {
                    spadsEnabled++;
                  }
                }

                this.writeMulti(GLOBAL_CONFIG_SPAD_ENABLES_REF_0, refSpadMap, 6); // -- VL53L0X_set_reference_spads() end
                // -- VL53L0X_load_tuning_settings() begin
                // DefaultTuningSettings from vl53l0x_tuning.h

                this.writeReg(0xFF, 0x01);
                this.writeReg(0x00, 0x00);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x09, 0x00);
                this.writeReg(0x10, 0x00);
                this.writeReg(0x11, 0x00);
                this.writeReg(0x24, 0x01);
                this.writeReg(0x25, 0xFF);
                this.writeReg(0x75, 0x00);
                this.writeReg(0xFF, 0x01);
                this.writeReg(0x4E, 0x2C);
                this.writeReg(0x48, 0x00);
                this.writeReg(0x30, 0x20);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x30, 0x09);
                this.writeReg(0x54, 0x00);
                this.writeReg(0x31, 0x04);
                this.writeReg(0x32, 0x03);
                this.writeReg(0x40, 0x83);
                this.writeReg(0x46, 0x25);
                this.writeReg(0x60, 0x00);
                this.writeReg(0x27, 0x00);
                this.writeReg(0x50, 0x06);
                this.writeReg(0x51, 0x00);
                this.writeReg(0x52, 0x96);
                this.writeReg(0x56, 0x08);
                this.writeReg(0x57, 0x30);
                this.writeReg(0x61, 0x00);
                this.writeReg(0x62, 0x00);
                this.writeReg(0x64, 0x00);
                this.writeReg(0x65, 0x00);
                this.writeReg(0x66, 0xA0);
                this.writeReg(0xFF, 0x01);
                this.writeReg(0x22, 0x32);
                this.writeReg(0x47, 0x14);
                this.writeReg(0x49, 0xFF);
                this.writeReg(0x4A, 0x00);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x7A, 0x0A);
                this.writeReg(0x7B, 0x00);
                this.writeReg(0x78, 0x21);
                this.writeReg(0xFF, 0x01);
                this.writeReg(0x23, 0x34);
                this.writeReg(0x42, 0x00);
                this.writeReg(0x44, 0xFF);
                this.writeReg(0x45, 0x26);
                this.writeReg(0x46, 0x05);
                this.writeReg(0x40, 0x40);
                this.writeReg(0x0E, 0x06);
                this.writeReg(0x20, 0x1A);
                this.writeReg(0x43, 0x40);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x34, 0x03);
                this.writeReg(0x35, 0x44);
                this.writeReg(0xFF, 0x01);
                this.writeReg(0x31, 0x04);
                this.writeReg(0x4B, 0x09);
                this.writeReg(0x4C, 0x05);
                this.writeReg(0x4D, 0x04);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x44, 0x00);
                this.writeReg(0x45, 0x20);
                this.writeReg(0x47, 0x08);
                this.writeReg(0x48, 0x28);
                this.writeReg(0x67, 0x00);
                this.writeReg(0x70, 0x04);
                this.writeReg(0x71, 0x01);
                this.writeReg(0x72, 0xFE);
                this.writeReg(0x76, 0x00);
                this.writeReg(0x77, 0x00);
                this.writeReg(0xFF, 0x01);
                this.writeReg(0x0D, 0x01);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x80, 0x01);
                this.writeReg(0x01, 0xF8);
                this.writeReg(0xFF, 0x01);
                this.writeReg(0x8E, 0x01);
                this.writeReg(0x00, 0x01);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x80, 0x00); // -- VL53L0X_load_tuning_settings() end
                // "Set interrupt config to new sample ready"
                // -- VL53L0X_SetGpioConfig() begin

                this.writeReg(SYSTEM_INTERRUPT_CONFIG_GPIO, 0x04);
                _context.t8 = this;
                _context.t9 = GPIO_HV_MUX_ACTIVE_HIGH;
                _context.next = 134;
                return this.readReg(GPIO_HV_MUX_ACTIVE_HIGH);

              case 134:
                _context.t10 = _context.sent;
                _context.t11 = ~0x10;
                _context.t12 = _context.t10 & _context.t11;

                _context.t8.writeReg.call(_context.t8, _context.t9, _context.t12);

                // active low
                this.writeReg(SYSTEM_INTERRUPT_CLEAR, 0x01); // -- VL53L0X_SetGpioConfig() end

                _context.next = 141;
                return this.getMeasurementTimingBudget();

              case 141:
                this.measurement_timing_budget_us = _context.sent;
                // "Disable MSRC and TCC by default"
                // MSRC = Minimum Signal Rate Check
                // TCC = Target CentreCheck
                // -- VL53L0X_SetSequenceStepEnable() begin
                this.writeReg(SYSTEM_SEQUENCE_CONFIG, 0xE8); // -- VL53L0X_SetSequenceStepEnable() end
                // "Recalculate timing budget"

                _context.next = 145;
                return this.setMeasurementTimingBudget(this.measurement_timing_budget_us);

              case 145:
                // VL53L0X_StaticInit() end
                // VL53L0X_PerformRefCalibration() begin (VL53L0X_perform_ref_calibration())
                // -- VL53L0X_perform_vhv_calibration() begin
                this.writeReg(SYSTEM_SEQUENCE_CONFIG, 0x01);
                _context.next = 148;
                return this.performSingleRefCalibration(0x40);

              case 148:
                if (_context.sent) {
                  _context.next = 150;
                  break;
                }

                return _context.abrupt("return", false);

              case 150:
                // -- VL53L0X_perform_vhv_calibration() end
                // -- VL53L0X_perform_phase_calibration() begin
                this.writeReg(SYSTEM_SEQUENCE_CONFIG, 0x02);
                _context.next = 153;
                return this.performSingleRefCalibration(0x00);

              case 153:
                if (_context.sent) {
                  _context.next = 155;
                  break;
                }

                return _context.abrupt("return", false);

              case 155:
                // -- VL53L0X_perform_phase_calibration() end
                // "restore the previous Sequence Config"
                this.writeReg(SYSTEM_SEQUENCE_CONFIG, 0xE8); // VL53L0X_PerformRefCalibration() end

                return _context.abrupt("return", true);

              case 157:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init(_x) {
        return _init.apply(this, arguments);
      }

      return init;
    }()
    /**
     * Write an 8-bit at the register.
     * @param {number} register - register to write
     * @param {number} value - written 8-bit value
     */

  }, {
    key: "writeReg",
    value: function writeReg(register, value) {
      this.board.i2cWrite(this.address, register, value);
    }
    /**
     * Write a 16-bit at the register.
     * @param {number} register - register to write
     * @param {number} value - written 16-bit value
     */

  }, {
    key: "writeReg16Bit",
    value: function writeReg16Bit(register, value) {
      var data = [value >> 8 & 0xFF, value & 0xFF];
      this.board.i2cWrite(this.address, register, data);
    }
    /**
     * Write a 32-bit at the register.
     * @param {number} register - register to write
     * @param {number} value - written 32-bit value
     */

  }, {
    key: "writeReg32Bit",
    value: function writeReg32Bit(register, value) {
      var data = [value >> 24 & 0xFF, value >> 16 & 0xFF, value >> 8 & 0xFF, value & 0xFF];
      this.board.i2cWrite(this.address, register, data);
    }
    /**
     * Read an 8-bit from the register.
     * @param {number} register - register to read
     * @returns {Promise<number>} a Promise which resolves read value
     */

  }, {
    key: "readReg",
    value: function readReg(register) {
      return this.board.i2cReadOnce(this.address, register, 1, this.io_timeout).then(function (data) {
        return data[0];
      });
    }
    /**
     * Read a 16-bit from the register.
     * @param {number} register - starting register
     * @returns {Promise<number>} a Promise which resolves read value
     */

  }, {
    key: "readReg16Bit",
    value: function readReg16Bit(register) {
      return this.board.i2cReadOnce(this.address, register, 2, this.io_timeout).then(function (data) {
        var value = data[0] << 8 | data[1];
        return value;
      });
    }
    /**
     * Read a 32-bit from the register.
     * @param {number} register - starting register
     * @returns {Promise<number>} a Promise which resolves read value
     */

  }, {
    key: "readReg32Bit",
    value: function readReg32Bit(register) {
      return this.board.i2cReadOnce(this.address, register, 4, this.io_timeout).then(function (data) {
        var value = data[0] << 24 | data[1] << 16 | data[2] << 8 | data[3];
        return value;
      });
    }
    /**
     * Write these bytes starting at the register.
     * @param {number} register - starting register
     * @param {Array<number>} data - array of uint8t to be written
     */

  }, {
    key: "writeMulti",
    value: function writeMulti(register, data) {
      this.board.i2cWrite(this.address, register, data);
    }
    /**
     * Read bytes of the length from the register.
     * @param {number} register - starting register
     * @param {number} bytesToRead - byte length to read
     * @returns {Promise<Array<number>>} a Promise which resolves read bytes
     */

  }, {
    key: "readMulti",
    value: function readMulti(register, bytesToRead) {
      return this.board.i2cReadOnce(this.address, register, bytesToRead, this.io_timeout);
    }
    /**
     * Record the current time to check an upcoming timeout against
     */

  }, {
    key: "startTimeout",
    value: function startTimeout() {
      /**
       * Starting time to count timeout for IO.
       */
      this.timeout_start_ms = Date.now();
    }
    /**
     * Check if timeout is enabled (set to nonzero value) and has expired.
     * @returns {boolean} true when the timeout has expired
     */

  }, {
    key: "checkTimeoutExpired",
    value: function checkTimeoutExpired() {
      return this.io_timeout > 0 && Date.now() - this.timeout_start_ms > this.io_timeout;
    } // Set the return signal rate limit check value in units of MCPS (mega counts
    // per second). "This represents the amplitude of the signal reflected from the
    // target and detected by the device"; setting this limit presumably determines
    // the minimum measurement necessary for the sensor to report a valid reading.
    // Setting a lower limit increases the potential range of the sensor but also
    // seems to increase the likelihood of getting an inaccurate reading because of
    // unwanted reflections from objects other than the intended target.
    // Defaults to 0.25 MCPS as initialized by the ST API and this library.

  }, {
    key: "setSignalRateLimit",
    value: function setSignalRateLimit(limitMCPS) {
      if (limitMCPS < 0 || limitMCPS > 511.99) {
        return false;
      } // Q9.7 fixed point format (9 integer bits, 7 fractional bits)


      this.writeReg16Bit(FINAL_RANGE_CONFIG_MIN_COUNT_RATE_RTN_LIMIT, limitMCPS * (1 << 7));
      return true;
    } // Get the return signal rate limit check value in MCPS

  }, {
    key: "getSignalRateLimit",
    value: function () {
      var _getSignalRateLimit = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.readReg16Bit(FINAL_RANGE_CONFIG_MIN_COUNT_RATE_RTN_LIMIT);

              case 2:
                _context2.t0 = _context2.sent;
                _context2.t1 = 1 << 7;
                return _context2.abrupt("return", _context2.t0 / _context2.t1);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getSignalRateLimit() {
        return _getSignalRateLimit.apply(this, arguments);
      }

      return getSignalRateLimit;
    }() // Set the measurement timing budget in microseconds, which is the time allowed
    // for one measurement; the ST API and this library take care of splitting the
    // timing budget among the sub-steps in the ranging sequence. A longer timing
    // budget allows for more accurate measurements. Increasing the budget by a
    // factor of N decreases the range measurement standard deviation by a factor of
    // sqrt(N). Defaults to about 33 milliseconds; the minimum is 20 ms.
    // based on VL53L0X_set_measurement_timing_budget_micro_seconds()

  }, {
    key: "setMeasurementTimingBudget",
    value: function () {
      var _setMeasurementTimingBudget = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(budget_us) {
        var enables, timeouts, StartOverhead, EndOverhead, MsrcOverhead, TccOverhead, DssOverhead, PreRangeOverhead, FinalRangeOverhead, MinTimingBudget, used_budget_us, final_range_timeout_us, final_range_timeout_mclks;
        return regenerator.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                enables = {
                  tcc: false,
                  msrc: false,
                  dss: false,
                  pre_range: false,
                  final_range: false
                };
                timeouts = {
                  pre_range_vcsel_period_pclks: 0,
                  final_range_vcsel_period_pclks: 0,
                  msrc_dss_tcc_mclks: 0,
                  pre_range_mclks: 0,
                  final_range_mclks: 0,
                  msrc_dss_tcc_us: 0,
                  pre_range_us: 0,
                  final_range_us: 0
                };
                StartOverhead = 1910;
                EndOverhead = 960;
                MsrcOverhead = 660;
                TccOverhead = 590;
                DssOverhead = 690;
                PreRangeOverhead = 660;
                FinalRangeOverhead = 550;
                MinTimingBudget = 20000;

                if (!(budget_us < MinTimingBudget)) {
                  _context3.next = 12;
                  break;
                }

                return _context3.abrupt("return", false);

              case 12:
                used_budget_us = StartOverhead + EndOverhead;
                _context3.next = 15;
                return this.getSequenceStepEnables(enables);

              case 15:
                _context3.next = 17;
                return this.getSequenceStepTimeouts(enables, timeouts);

              case 17:
                if (enables.tcc) {
                  used_budget_us += timeouts.msrc_dss_tcc_us + TccOverhead;
                }

                if (enables.dss) {
                  used_budget_us += 2 * (timeouts.msrc_dss_tcc_us + DssOverhead);
                } else if (enables.msrc) {
                  used_budget_us += timeouts.msrc_dss_tcc_us + MsrcOverhead;
                }

                if (enables.pre_range) {
                  used_budget_us += timeouts.pre_range_us + PreRangeOverhead;
                }

                if (!enables.final_range) {
                  _context3.next = 29;
                  break;
                }

                used_budget_us += FinalRangeOverhead; // "Note that the final range timeout is determined by the timing
                // budget and the sum of all other timeouts within the sequence.
                // If there is no room for the final range timeout, then an error
                // will be set. Otherwise the remaining time will be applied to
                // the final range."

                if (!(used_budget_us > budget_us)) {
                  _context3.next = 24;
                  break;
                }

                return _context3.abrupt("return", false);

              case 24:
                final_range_timeout_us = budget_us - used_budget_us; // set_sequence_step_timeout() begin
                // (SequenceStepId == VL53L0X_SEQUENCESTEP_FINAL_RANGE)
                // "For the final range timeout, the pre-range timeout
                //  must be added. To do this both final and pre-range
                //  timeouts must be expressed in macro periods MClks
                //  because they have different vcsel periods."

                final_range_timeout_mclks = this.timeoutMicrosecondsToMclks(final_range_timeout_us, timeouts.final_range_vcsel_period_pclks);

                if (enables.pre_range) {
                  final_range_timeout_mclks += timeouts.pre_range_mclks;
                }

                this.writeReg16Bit(FINAL_RANGE_CONFIG_TIMEOUT_MACROP_HI, this.encodeTimeout(final_range_timeout_mclks)); // set_sequence_step_timeout() end

                this.measurement_timing_budget_us = budget_us; // store for internal reuse

              case 29:
                return _context3.abrupt("return", true);

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function setMeasurementTimingBudget(_x2) {
        return _setMeasurementTimingBudget.apply(this, arguments);
      }

      return setMeasurementTimingBudget;
    }() // Get the measurement timing budget in microseconds
    // based on VL53L0X_get_measurement_timing_budget_micro_seconds()
    // in us

  }, {
    key: "getMeasurementTimingBudget",
    value: function () {
      var _getMeasurementTimingBudget = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4() {
        var enables, timeouts, StartOverhead, EndOverhead, MsrcOverhead, TccOverhead, DssOverhead, PreRangeOverhead, FinalRangeOverhead, budget_us;
        return regenerator.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                enables = {
                  tcc: false,
                  msrc: false,
                  dss: false,
                  pre_range: false,
                  final_range: false
                };
                timeouts = {
                  pre_range_vcsel_period_pclks: 0,
                  final_range_vcsel_period_pclks: 0,
                  msrc_dss_tcc_mclks: 0,
                  pre_range_mclks: 0,
                  final_range_mclks: 0,
                  msrc_dss_tcc_us: 0,
                  pre_range_us: 0,
                  final_range_us: 0
                };
                StartOverhead = 1910;
                EndOverhead = 960;
                MsrcOverhead = 660;
                TccOverhead = 590;
                DssOverhead = 690;
                PreRangeOverhead = 660;
                FinalRangeOverhead = 550; // "Start and end overhead times always present"

                budget_us = StartOverhead + EndOverhead;
                _context4.next = 12;
                return this.getSequenceStepEnables(enables);

              case 12:
                _context4.next = 14;
                return this.getSequenceStepTimeouts(enables, timeouts);

              case 14:
                if (enables.tcc) {
                  budget_us += timeouts.msrc_dss_tcc_us + TccOverhead;
                }

                if (enables.dss) {
                  budget_us += 2 * (timeouts.msrc_dss_tcc_us + DssOverhead);
                } else if (enables.msrc) {
                  budget_us += timeouts.msrc_dss_tcc_us + MsrcOverhead;
                }

                if (enables.pre_range) {
                  budget_us += timeouts.pre_range_us + PreRangeOverhead;
                }

                if (enables.final_range) {
                  budget_us += timeouts.final_range_us + FinalRangeOverhead;
                }

                this.measurement_timing_budget_us = budget_us; // store for internal reuse

                return _context4.abrupt("return", budget_us);

              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getMeasurementTimingBudget() {
        return _getMeasurementTimingBudget.apply(this, arguments);
      }

      return getMeasurementTimingBudget;
    }() // Set the VCSEL (vertical cavity surface emitting laser) pulse period for the
    // given period type (pre-range or final range) to the given value in PCLKs.
    // Longer periods seem to increase the potential range of the sensor.
    // Valid values are (even numbers only):
    //  pre:  12 to 18 (initialized default: 14)
    //  final: 8 to 14 (initialized default: 10)
    // based on VL53L0X_set_vcsel_pulse_period()

  }, {
    key: "setVcselPulsePeriod",
    value: function () {
      var _setVcselPulsePeriod = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5(type, period_pclks) {
        var vcsel_period_reg, enables, timeouts, new_pre_range_timeout_mclks, new_msrc_timeout_mclks, new_final_range_timeout_mclks, sequence_config;
        return regenerator.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                vcsel_period_reg = encodeVcselPeriod(period_pclks);
                enables = {
                  tcc: false,
                  msrc: false,
                  dss: false,
                  pre_range: false,
                  final_range: false
                };
                timeouts = {
                  pre_range_vcsel_period_pclks: 0,
                  final_range_vcsel_period_pclks: 0,
                  msrc_dss_tcc_mclks: 0,
                  pre_range_mclks: 0,
                  final_range_mclks: 0,
                  msrc_dss_tcc_us: 0,
                  pre_range_us: 0,
                  final_range_us: 0
                };
                _context5.next = 5;
                return this.getSequenceStepEnables(enables);

              case 5:
                _context5.next = 7;
                return this.getSequenceStepTimeouts(enables, timeouts);

              case 7:
                if (!(type === VcselPeriodPreRange)) {
                  _context5.next = 28;
                  break;
                }

                _context5.t0 = period_pclks;
                _context5.next = _context5.t0 === 12 ? 11 : _context5.t0 === 14 ? 13 : _context5.t0 === 16 ? 15 : _context5.t0 === 18 ? 17 : 19;
                break;

              case 11:
                this.writeReg(PRE_RANGE_CONFIG_VALID_PHASE_HIGH, 0x18);
                return _context5.abrupt("break", 20);

              case 13:
                this.writeReg(PRE_RANGE_CONFIG_VALID_PHASE_HIGH, 0x30);
                return _context5.abrupt("break", 20);

              case 15:
                this.writeReg(PRE_RANGE_CONFIG_VALID_PHASE_HIGH, 0x40);
                return _context5.abrupt("break", 20);

              case 17:
                this.writeReg(PRE_RANGE_CONFIG_VALID_PHASE_HIGH, 0x50);
                return _context5.abrupt("break", 20);

              case 19:
                return _context5.abrupt("return", false);

              case 20:
                this.writeReg(PRE_RANGE_CONFIG_VALID_PHASE_LOW, 0x08); // apply new VCSEL period

                this.writeReg(PRE_RANGE_CONFIG_VCSEL_PERIOD, vcsel_period_reg); // update timeouts
                // set_sequence_step_timeout() begin
                // (SequenceStepId == VL53L0X_SEQUENCESTEP_PRE_RANGE)

                new_pre_range_timeout_mclks = this.timeoutMicrosecondsToMclks(timeouts.pre_range_us, period_pclks);
                this.writeReg16Bit(PRE_RANGE_CONFIG_TIMEOUT_MACROP_HI, this.encodeTimeout(new_pre_range_timeout_mclks)); // set_sequence_step_timeout() end
                // set_sequence_step_timeout() begin
                // (SequenceStepId == VL53L0X_SEQUENCESTEP_MSRC)

                new_msrc_timeout_mclks = this.timeoutMicrosecondsToMclks(timeouts.msrc_dss_tcc_us, period_pclks);
                this.writeReg(MSRC_CONFIG_TIMEOUT_MACROP, new_msrc_timeout_mclks > 256 ? 255 : new_msrc_timeout_mclks - 1); // set_sequence_step_timeout() end

                _context5.next = 72;
                break;

              case 28:
                if (!(type === VcselPeriodFinalRange)) {
                  _context5.next = 71;
                  break;
                }

                _context5.t1 = period_pclks;
                _context5.next = _context5.t1 === 8 ? 32 : _context5.t1 === 10 ? 40 : _context5.t1 === 12 ? 48 : _context5.t1 === 14 ? 56 : 64;
                break;

              case 32:
                this.writeReg(FINAL_RANGE_CONFIG_VALID_PHASE_HIGH, 0x10);
                this.writeReg(FINAL_RANGE_CONFIG_VALID_PHASE_LOW, 0x08);
                this.writeReg(GLOBAL_CONFIG_VCSEL_WIDTH, 0x02);
                this.writeReg(ALGO_PHASECAL_CONFIG_TIMEOUT, 0x0C);
                this.writeReg(0xFF, 0x01);
                this.writeReg(ALGO_PHASECAL_LIM, 0x30);
                this.writeReg(0xFF, 0x00);
                return _context5.abrupt("break", 65);

              case 40:
                this.writeReg(FINAL_RANGE_CONFIG_VALID_PHASE_HIGH, 0x28);
                this.writeReg(FINAL_RANGE_CONFIG_VALID_PHASE_LOW, 0x08);
                this.writeReg(GLOBAL_CONFIG_VCSEL_WIDTH, 0x03);
                this.writeReg(ALGO_PHASECAL_CONFIG_TIMEOUT, 0x09);
                this.writeReg(0xFF, 0x01);
                this.writeReg(ALGO_PHASECAL_LIM, 0x20);
                this.writeReg(0xFF, 0x00);
                return _context5.abrupt("break", 65);

              case 48:
                this.writeReg(FINAL_RANGE_CONFIG_VALID_PHASE_HIGH, 0x38);
                this.writeReg(FINAL_RANGE_CONFIG_VALID_PHASE_LOW, 0x08);
                this.writeReg(GLOBAL_CONFIG_VCSEL_WIDTH, 0x03);
                this.writeReg(ALGO_PHASECAL_CONFIG_TIMEOUT, 0x08);
                this.writeReg(0xFF, 0x01);
                this.writeReg(ALGO_PHASECAL_LIM, 0x20);
                this.writeReg(0xFF, 0x00);
                return _context5.abrupt("break", 65);

              case 56:
                this.writeReg(FINAL_RANGE_CONFIG_VALID_PHASE_HIGH, 0x48);
                this.writeReg(FINAL_RANGE_CONFIG_VALID_PHASE_LOW, 0x08);
                this.writeReg(GLOBAL_CONFIG_VCSEL_WIDTH, 0x03);
                this.writeReg(ALGO_PHASECAL_CONFIG_TIMEOUT, 0x07);
                this.writeReg(0xFF, 0x01);
                this.writeReg(ALGO_PHASECAL_LIM, 0x20);
                this.writeReg(0xFF, 0x00);
                return _context5.abrupt("break", 65);

              case 64:
                return _context5.abrupt("return", false);

              case 65:
                // apply new VCSEL period
                this.writeReg(FINAL_RANGE_CONFIG_VCSEL_PERIOD, vcsel_period_reg); // update timeouts
                // set_sequence_step_timeout() begin
                // (SequenceStepId == VL53L0X_SEQUENCESTEP_FINAL_RANGE)
                // "For the final range timeout, the pre-range timeout
                //  must be added. To do this both final and pre-range
                //  timeouts must be expressed in macro periods MClks
                //  because they have different vcsel periods."

                new_final_range_timeout_mclks = this.timeoutMicrosecondsToMclks(timeouts.final_range_us, period_pclks);

                if (enables.pre_range) {
                  new_final_range_timeout_mclks += timeouts.pre_range_mclks;
                }

                this.writeReg16Bit(FINAL_RANGE_CONFIG_TIMEOUT_MACROP_HI, this.encodeTimeout(new_final_range_timeout_mclks)); // set_sequence_step_timeout end

                _context5.next = 72;
                break;

              case 71:
                return _context5.abrupt("return", false);

              case 72:
                _context5.next = 74;
                return this.setMeasurementTimingBudget(this.measurement_timing_budget_us);

              case 74:
                _context5.next = 76;
                return this.readReg(SYSTEM_SEQUENCE_CONFIG);

              case 76:
                sequence_config = _context5.sent;
                this.writeReg(SYSTEM_SEQUENCE_CONFIG, 0x02);
                _context5.next = 80;
                return this.performSingleRefCalibration(0x0);

              case 80:
                this.writeReg(SYSTEM_SEQUENCE_CONFIG, sequence_config); // VL53L0X_perform_phase_calibration() end

                return _context5.abrupt("return", true);

              case 82:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function setVcselPulsePeriod(_x3, _x4) {
        return _setVcselPulsePeriod.apply(this, arguments);
      }

      return setVcselPulsePeriod;
    }() // Get the VCSEL pulse period in PCLKs for the given period type.
    // based on VL53L0X_get_vcsel_pulse_period()

  }, {
    key: "getVcselPulsePeriod",
    value: function () {
      var _getVcselPulsePeriod = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee6(type) {
        return regenerator.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(type === VcselPeriodPreRange)) {
                  _context6.next = 8;
                  break;
                }

                _context6.t0 = decodeVcselPeriod;
                _context6.next = 4;
                return this.readReg(PRE_RANGE_CONFIG_VCSEL_PERIOD);

              case 4:
                _context6.t1 = _context6.sent;
                return _context6.abrupt("return", (0, _context6.t0)(_context6.t1));

              case 8:
                if (!(type === VcselPeriodFinalRange)) {
                  _context6.next = 14;
                  break;
                }

                _context6.t2 = decodeVcselPeriod;
                _context6.next = 12;
                return this.readReg(FINAL_RANGE_CONFIG_VCSEL_PERIOD);

              case 12:
                _context6.t3 = _context6.sent;
                return _context6.abrupt("return", (0, _context6.t2)(_context6.t3));

              case 14:
                return _context6.abrupt("return", 255);

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getVcselPulsePeriod(_x5) {
        return _getVcselPulsePeriod.apply(this, arguments);
      }

      return getVcselPulsePeriod;
    }()
    /**
     * Start continuous ranging measurements. If period_ms (optional) is 0 or not
     * given, continuous back-to-back mode is used (the sensor takes measurements as
     * often as possible); otherwise, continuous timed mode is used, with the given
     * inter-measurement period in milliseconds determining how often the sensor
     * takes a measurement.
     * based on VL53L0X_StartMeasurement()
     * @param {number} period_ms - interval time between measurements
     */

  }, {
    key: "startContinuous",
    value: function () {
      var _startContinuous = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee7(period_ms) {
        var osc_calibrate_val;
        return regenerator.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.writeReg(0x80, 0x01);
                this.writeReg(0xFF, 0x01);
                this.writeReg(0x00, 0x00);
                this.writeReg(0x91, this.stop_variable);
                this.writeReg(0x00, 0x01);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x80, 0x00);

                if (!period_ms) {
                  _context7.next = 16;
                  break;
                }

                _context7.next = 10;
                return this.readReg16Bit(OSC_CALIBRATE_VAL);

              case 10:
                osc_calibrate_val = _context7.sent;

                if (osc_calibrate_val !== 0) {
                  period_ms *= osc_calibrate_val;
                }

                this.writeReg32Bit(SYSTEM_INTERMEASUREMENT_PERIOD, period_ms); // VL53L0X_SetInterMeasurementPeriodMilliSeconds() end

                this.writeReg(SYSRANGE_START, 0x04); // VL53L0X_REG_SYSRANGE_MODE_TIMED

                _context7.next = 17;
                break;

              case 16:
                // continuous back-to-back mode
                this.writeReg(SYSRANGE_START, 0x02); // VL53L0X_REG_SYSRANGE_MODE_BACKTOBACK

              case 17:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function startContinuous(_x6) {
        return _startContinuous.apply(this, arguments);
      }

      return startContinuous;
    }()
    /**
     * Stop continuous measurements
     * based on VL53L0X_StopMeasurement()
     */

  }, {
    key: "stopContinuous",
    value: function stopContinuous() {
      this.writeReg(SYSRANGE_START, 0x01); // VL53L0X_REG_SYSRANGE_MODE_SINGLESHOT

      this.writeReg(0xFF, 0x01);
      this.writeReg(0x00, 0x00);
      this.writeReg(0x91, 0x00);
      this.writeReg(0x00, 0x01);
      this.writeReg(0xFF, 0x00);
    }
    /**
     * Returns a range reading in millimeters when continuous mode is active
     * (readRangeSingleMillimeters() also calls this function after starting a
     * single-shot range measurement)
     * @returns {Promise<number>} a Promise which resolves range for continuous mode
     */

  }, {
    key: "readRangeContinuousMillimeters",
    value: function () {
      var _readRangeContinuousMillimeters = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee8() {
        var range;
        return regenerator.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.startTimeout();

              case 1:
                _context8.next = 3;
                return this.readReg(RESULT_INTERRUPT_STATUS);

              case 3:
                _context8.t0 = _context8.sent;
                _context8.t1 = _context8.t0 & 0x07;

                if (!(_context8.t1 === 0)) {
                  _context8.next = 11;
                  break;
                }

                if (!this.checkTimeoutExpired()) {
                  _context8.next = 9;
                  break;
                }

                this.did_timeout = true;
                return _context8.abrupt("return", Promise.reject("timeout read RESULT_INTERRUPT_STATUS: ".concat(this.io_timeout, "ms")));

              case 9:
                _context8.next = 1;
                break;

              case 11:
                _context8.next = 13;
                return this.readReg16Bit(RESULT_RANGE_STATUS + 10);

              case 13:
                range = _context8.sent;
                this.writeReg(SYSTEM_INTERRUPT_CLEAR, 0x01);
                return _context8.abrupt("return", range);

              case 16:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function readRangeContinuousMillimeters() {
        return _readRangeContinuousMillimeters.apply(this, arguments);
      }

      return readRangeContinuousMillimeters;
    }()
    /**
     * Performs a single-shot range measurement and returns the reading in millimeters
     * based on VL53L0X_PerformSingleRangingMeasurement()
     * @returns {Promise<number>} a Promise which resolves range for single-shot mode
     */

  }, {
    key: "readRangeSingleMillimeters",
    value: function () {
      var _readRangeSingleMillimeters = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee9() {
        return regenerator.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.writeReg(0x80, 0x01);
                this.writeReg(0xFF, 0x01);
                this.writeReg(0x00, 0x00);
                this.writeReg(0x91, this.stop_variable);
                this.writeReg(0x00, 0x01);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x80, 0x00);
                this.writeReg(SYSRANGE_START, 0x01); // "Wait until start bit has been cleared"

                this.startTimeout();

              case 9:
                _context9.next = 11;
                return this.readReg(SYSRANGE_START);

              case 11:
                _context9.t0 = _context9.sent;

                if (!(_context9.t0 & 0x01)) {
                  _context9.next = 18;
                  break;
                }

                if (!this.checkTimeoutExpired()) {
                  _context9.next = 16;
                  break;
                }

                this.did_timeout = true;
                return _context9.abrupt("return", Promise.reject("timeout read SYSRANGE_START: ".concat(this.io_timeout, "ms")));

              case 16:
                _context9.next = 9;
                break;

              case 18:
                return _context9.abrupt("return", this.readRangeContinuousMillimeters());

              case 19:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function readRangeSingleMillimeters() {
        return _readRangeSingleMillimeters.apply(this, arguments);
      }

      return readRangeSingleMillimeters;
    }()
    /**
     * Return whether a timeout did occur and clear the timeout flag.
     * @returns {boolean} whether a timeout occur or not
     */

  }, {
    key: "timeoutOccurred",
    value: function timeoutOccurred() {
      var tmp = this.did_timeout;
      this.did_timeout = false;
      return tmp;
    }
    /**
     * Get reference SPAD (single photon avalanche diode) count and type
     * based on VL53L0X_get_info_from_device(),
     * but only gets reference SPAD count and type
     * @param {object} info - info of SPAD
     * @param {number} info.count - SPAD count
     * @param {boolean} info.isAperture - SPAD is aperture type or not
     * @returns {Promise<boolean>} whether the info has got or not
     */

  }, {
    key: "getSpadInfo",
    value: function () {
      var _getSpadInfo = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee10(info) {
        var tmp;
        return regenerator.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.writeReg(0x80, 0x01);
                this.writeReg(0xFF, 0x01);
                this.writeReg(0x00, 0x00);
                this.writeReg(0xFF, 0x06);
                _context10.t0 = this;
                _context10.next = 7;
                return this.readReg(0x83);

              case 7:
                _context10.t1 = _context10.sent;
                _context10.t2 = _context10.t1 | 0x04;

                _context10.t0.writeReg.call(_context10.t0, 0x83, _context10.t2);

                this.writeReg(0xFF, 0x07);
                this.writeReg(0x81, 0x01);
                this.writeReg(0x80, 0x01);
                this.writeReg(0x94, 0x6b);
                this.writeReg(0x83, 0x00);
                this.startTimeout();

              case 16:
                _context10.next = 18;
                return this.readReg(0x83);

              case 18:
                _context10.t3 = _context10.sent;

                if (!(_context10.t3 === 0x00)) {
                  _context10.next = 24;
                  break;
                }

                if (!this.checkTimeoutExpired()) {
                  _context10.next = 22;
                  break;
                }

                return _context10.abrupt("return", false);

              case 22:
                _context10.next = 16;
                break;

              case 24:
                this.writeReg(0x83, 0x01);
                _context10.next = 27;
                return this.readReg(0x92);

              case 27:
                tmp = _context10.sent;
                info.count = tmp & 0x7f;
                info.isAperture = (tmp >> 7 & 0x01) === 0x01;
                this.writeReg(0x81, 0x00);
                this.writeReg(0xFF, 0x06);
                _context10.t4 = this;
                _context10.next = 35;
                return this.readReg(0x83);

              case 35:
                _context10.t5 = _context10.sent;
                _context10.t6 = ~0x04;
                _context10.t7 = _context10.t5 & _context10.t6;

                _context10.t4.writeReg.call(_context10.t4, 0x83, _context10.t7);

                this.writeReg(0xFF, 0x01);
                this.writeReg(0x00, 0x01);
                this.writeReg(0xFF, 0x00);
                this.writeReg(0x80, 0x00);
                return _context10.abrupt("return", true);

              case 44:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getSpadInfo(_x7) {
        return _getSpadInfo.apply(this, arguments);
      }

      return getSpadInfo;
    }()
    /**
     * Get sequence step enables
     * based on VL53L0X_GetSequenceStepEnables()
     * @param {Promise<object>} enables - reading buffer for sequence step enables
     */

  }, {
    key: "getSequenceStepEnables",
    value: function () {
      var _getSequenceStepEnables = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee11(enables) {
        var sequence_config;
        return regenerator.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.readReg(SYSTEM_SEQUENCE_CONFIG);

              case 2:
                sequence_config = _context11.sent;
                enables.tcc = sequence_config >> 4 & 0x1;
                enables.dss = sequence_config >> 3 & 0x1;
                enables.msrc = sequence_config >> 2 & 0x1;
                enables.pre_range = sequence_config >> 6 & 0x1;
                enables.final_range = sequence_config >> 7 & 0x1;

              case 8:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getSequenceStepEnables(_x8) {
        return _getSequenceStepEnables.apply(this, arguments);
      }

      return getSequenceStepEnables;
    }() // Get sequence step timeouts
    // based on get_sequence_step_timeout(),
    // but gets all timeouts instead of just the requested one, and also stores
    // intermediate values

  }, {
    key: "getSequenceStepTimeouts",
    value: function () {
      var _getSequenceStepTimeouts = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee12(enables, timeouts) {
        return regenerator.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.getVcselPulsePeriod(VcselPeriodPreRange);

              case 2:
                timeouts.pre_range_vcsel_period_pclks = _context12.sent;
                _context12.next = 5;
                return this.readReg(MSRC_CONFIG_TIMEOUT_MACROP);

              case 5:
                _context12.t0 = _context12.sent;
                timeouts.msrc_dss_tcc_mclks = _context12.t0 + 1;
                timeouts.msrc_dss_tcc_us = this.timeoutMclksToMicroseconds(timeouts.msrc_dss_tcc_mclks, timeouts.pre_range_vcsel_period_pclks);
                _context12.t1 = this;
                _context12.next = 11;
                return this.readReg16Bit(PRE_RANGE_CONFIG_TIMEOUT_MACROP_HI);

              case 11:
                _context12.t2 = _context12.sent;
                timeouts.pre_range_mclks = _context12.t1.decodeTimeout.call(_context12.t1, _context12.t2);
                timeouts.pre_range_us = this.timeoutMclksToMicroseconds(timeouts.pre_range_mclks, timeouts.pre_range_vcsel_period_pclks);
                _context12.next = 16;
                return this.getVcselPulsePeriod(VcselPeriodFinalRange);

              case 16:
                timeouts.final_range_vcsel_period_pclks = _context12.sent;
                _context12.t3 = this;
                _context12.next = 20;
                return this.readReg16Bit(FINAL_RANGE_CONFIG_TIMEOUT_MACROP_HI);

              case 20:
                _context12.t4 = _context12.sent;
                timeouts.final_range_mclks = _context12.t3.decodeTimeout.call(_context12.t3, _context12.t4);

                if (enables.pre_range) {
                  timeouts.final_range_mclks -= timeouts.pre_range_mclks;
                }

                timeouts.final_range_us = this.timeoutMclksToMicroseconds(timeouts.final_range_mclks, timeouts.final_range_vcsel_period_pclks);

              case 24:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function getSequenceStepTimeouts(_x9, _x10) {
        return _getSequenceStepTimeouts.apply(this, arguments);
      }

      return getSequenceStepTimeouts;
    }() // Decode sequence step timeout in MCLKs from register value
    // based on VL53L0X_decode_timeout()
    // Note: the original function returned a uint32_t, but the return value is
    // always stored in a uint16_t.

  }, {
    key: "decodeTimeout",
    value: function decodeTimeout(reg_val) {
      // format: "(LSByte * 2^MSByte) + 1"
      return ((reg_val & 0x00FF) << ((reg_val & 0xFF00) >> 8)) + 1;
    } // Encode sequence step timeout register value from timeout in MCLKs
    // based on VL53L0X_encode_timeout()

  }, {
    key: "encodeTimeout",
    value: function encodeTimeout(timeout_mclks) {
      // format: "(LSByte * 2^MSByte) + 1"
      var ls_byte = 0;
      var ms_byte = 0;

      if (timeout_mclks > 0) {
        ls_byte = timeout_mclks - 1;

        while ((ls_byte & 0xFFFFFF00) > 0) {
          ls_byte >>= 1;
          ms_byte++;
        }

        return ms_byte << 8 | ls_byte & 0xFF;
      }

      return 0;
    } // Convert sequence step timeout from MCLKs to microseconds with given VCSEL period in PCLKs
    // based on VL53L0X_calc_timeout_us()

  }, {
    key: "timeoutMclksToMicroseconds",
    value: function timeoutMclksToMicroseconds(timeout_period_mclks, vcsel_period_pclks) {
      var macro_period_ns = calcMacroPeriod(vcsel_period_pclks);
      return (timeout_period_mclks * macro_period_ns + 500) / 1000;
    } // Convert sequence step timeout from microseconds to MCLKs with given VCSEL period in PCLKs
    // based on VL53L0X_calc_timeout_mclks()

  }, {
    key: "timeoutMicrosecondsToMclks",
    value: function timeoutMicrosecondsToMclks(timeout_period_us, vcsel_period_pclks) {
      var macro_period_ns = calcMacroPeriod(vcsel_period_pclks);
      return (timeout_period_us * 1000 + macro_period_ns / 2) / macro_period_ns;
    } // based on VL53L0X_perform_single_ref_calibration()

  }, {
    key: "performSingleRefCalibration",
    value: function () {
      var _performSingleRefCalibration = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee13(vhv_init_byte) {
        return regenerator.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this.writeReg(SYSRANGE_START, 0x01 | vhv_init_byte); // VL53L0X_REG_SYSRANGE_MODE_START_STOP

                this.startTimeout();

              case 2:
                _context13.next = 4;
                return this.readReg(RESULT_INTERRUPT_STATUS);

              case 4:
                _context13.t0 = _context13.sent;
                _context13.t1 = _context13.t0 & 0x07;

                if (!(_context13.t1 === 0)) {
                  _context13.next = 11;
                  break;
                }

                if (!this.checkTimeoutExpired()) {
                  _context13.next = 9;
                  break;
                }

                return _context13.abrupt("return", false);

              case 9:
                _context13.next = 2;
                break;

              case 11:
                this.writeReg(SYSTEM_INTERRUPT_CLEAR, 0x01);
                this.writeReg(SYSRANGE_START, 0x00);
                return _context13.abrupt("return", true);

              case 14:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function performSingleRefCalibration(_x11) {
        return _performSingleRefCalibration.apply(this, arguments);
      }

      return performSingleRefCalibration;
    }()
  }]);

  return VL53L0X;
}();

/**
 * acceleration sensor ADX345 API
 */
// register addresses
var ADXL345_ADDR = 0x53;
var ADXL345_ID = 0xE5;
var DATA_FORMAT = 0x31;
var POWER_CTL = 0x2D;
var DATA_X0 = 0x32;
var FULL_RES_16G = 0x0B;
var MEASURE = 0x08;
/**
 * This class is representing a ADXL345.
 */

var ADXL345 = /*#__PURE__*/function () {
  /**
   * Constructor of ADXL345 instance.
   * @param {FirmataBoard} board - connecting firmata board
   */
  function ADXL345(board) {
    _classCallCheck(this, ADXL345);

    /**
     * Connecting firmata board
     * @type {import('./firmata-board').default}
     */
    this.board = board;
    /**
     * I2C address
     * @type {number}
     */

    this.address = ADXL345_ADDR;
    /**
     * Timeout for readings in milliseconds.
     * @type {number}
     */

    this.timeout = 2000;
    /**
     * Scale factor for raw data of acceleration
     */

    this.scale = {
      x: 0.0392266,
      // =(4/1000*9.80665)
      y: 0.0392266,
      z: 0.0392266
    };
  }
  /**
   * Initialize the sensor
   * @returns {Promise} a Promise which resolves when the sensor was initialized
   */


  _createClass(ADXL345, [{
    key: "init",
    value: function init() {
      var _this = this;

      return this.readID().then(function (id) {
        if (id !== ADXL345_ID) return Promise.reject("0x".concat(_this.address.toString(16), " is not ADXL345"));

        _this.board.i2cWrite(_this.address, DATA_FORMAT, FULL_RES_16G);

        _this.board.i2cWrite(_this.address, POWER_CTL, MEASURE);
      });
    }
    /**
     * Read ID of a ADXL345
     * @returns {Promise} a Promise which resolves ID
     */

  }, {
    key: "readID",
    value: function readID() {
      return this.board.i2cReadOnce(this.address, 0x00, 1, this.timeout).then(function (data) {
        return data[0];
      });
    }
    /**
     * Return latest acceleration data
     * @returns {promise<{x: number, y: number, z: number}>} a Promise which resolves acceleration
     */

  }, {
    key: "getAcceleration",
    value: function getAcceleration() {
      var _this2 = this;

      return this.board.i2cReadOnce(this.address, DATA_X0, 6, this.timeout).then(function (data) {
        var dataView = new DataView(new Uint8Array(data).buffer);
        var acceleration = {};
        acceleration.x = dataView.getInt16(0, true) * _this2.scale.x;
        acceleration.y = dataView.getInt16(2, true) * _this2.scale.y;
        acceleration.z = dataView.getInt16(4, true) * _this2.scale.z;
        return acceleration;
      });
    }
  }]);

  return ADXL345;
}();

var integer64From = function integer64From(value, unsigned) {
  if (!value) return unsigned ? Long.UZERO : Long.ZERO;
  var radix = 10;

  if (typeof value === 'string') {
    value = value.trim();
    if (value.length === 0) return unsigned ? Long.UZERO : Long.ZERO;
    var sign = '';

    if (value[0] === '-') {
      sign = '-';
      value = value.slice(1).trim();
    }

    if (value.includes('0x')) {
      radix = 16;
      value = value.slice(2);
    }

    if (value.includes('0b')) {
      radix = 2;
      value = value.slice(2);
    }

    return Long.fromString(sign + value, unsigned, radix);
  }

  return Long.fromValue(value, unsigned);
};

var numericArrayToString = function numericArrayToString(array) {
  return array.join(', ');
};

var readAsNumericArray = function readAsNumericArray(stringExp) {
  if (typeof stringExp !== 'string') return [Number(stringExp)];
  stringExp = stringExp.trim();
  if (stringExp.length === 0) return [];
  stringExp = stringExp.replaceAll(/[[|\]|"]/g, '');
  var array = [];

  if (stringExp.includes(',')) {
    stringExp.split(',').forEach(function (numberString) {
      numberString = numberString.trim(); // remove blank items

      if (numberString.length !== 0) {
        array.push(Number(numberString));
      }
    });
  } else {
    stringExp.split(/\s+/).forEach(function (item) {
      array.push(Number(item));
    });
  }

  return array;
};
/**
 * Formatter which is used for translation.
 * This will be replaced which is used in the runtime.
 * @param {object} messageData - format-message object
 * @returns {string} - message for the locale
 */


var formatMessage = function formatMessage(messageData) {
  return messageData.defaultMessage;
};
/**
 * Setup format-message for this extension.
 */


var setupTranslations = function setupTranslations() {
  var localeSetup = formatMessage.setup();

  if (localeSetup && localeSetup.translations[localeSetup.locale]) {
    Object.assign(localeSetup.translations[localeSetup.locale], translations[localeSetup.locale]);
  }
};

var EXTENSION_ID = 'g2s';
/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */

var extensionURL = 'https://tfabworks.github.io/xcx-g2s/dist/g2s.mjs';
/**
 * Scratch 3.0 blocks for example of Xcratch.
 */

var ExtensionBlocks = /*#__PURE__*/function () {
  /**
   * Construct a set of blocks for Grove.
   * @param {Runtime} runtime - the Scratch 3.0 runtime.
   */
  function ExtensionBlocks(runtime) {
    var _this = this;

    _classCallCheck(this, ExtensionBlocks);

    /**
     * The Scratch 3.0 runtime.
     * @type {Runtime}
     */
    this.runtime = runtime;

    if (runtime.formatMessage) {
      // Replace 'formatMessage' to a formatter which is used in the runtime.
      formatMessage = runtime.formatMessage;
    }
    /**
     * Current connected board object with firmata protocol
     * @type {FirmataBoard}
     */


    this.board = null;
    /**
     * Distance sensor VL53L0X
     * @type {VL53L0X}
     */

    this.vl53l0x = null;
    /**
     * Manager of firmata boards
     * @type {FirmataConnector}
     */

    this.firmataConnector = getFirmataConnector(runtime);
    this.firmataConnector.addListener(FirmataConnector.BOARD_ADDED, function () {
      return _this.updateBoard();
    });
    this.firmataConnector.addListener(FirmataConnector.BOARD_REMOVED, function () {
      return _this.updateBoard();
    });
    /**
     * state holder of the all pins
     */

    this.pins = [];
    [9, 10, 11, 14, 15, 16].forEach(function (pin) {
      _this.pins[pin] = {};
    });
    this.serialPortOptions = {
      filters: [{
        usbVendorId: 0x04D8,
        usbProductId: 0xE83A
      }, // Licensed for AkaDako
      {
        usbVendorId: 0x04D8,
        usbProductId: 0x000A
      }, // Dev board
      {
        usbVendorId: 0x04D9,
        usbProductId: 0xB534
      } // Use in the future
      ]
    }; // register to call scan()/connect()

    this.runtime.registerPeripheralExtension(EXTENSION_ID, this);
    this.runtime.on('PROJECT_STOP_ALL', function () {
      _this.neoPixelClear();
    });
  }
  /**
   * Update connected board
   */


  _createClass(ExtensionBlocks, [{
    key: "updateBoard",
    value: function updateBoard() {
      if (this.board && this.board.isConnected()) return;
      var prev = this.board;
      this.board = this.firmataConnector.findBoard(this.serialPortOptions);
      if (prev === this.board) return;
      this.vl53l0x = null;
      this.adxl345 = null;
    }
    /**
     * Called by the runtime when user wants to scan for a peripheral.
     * @returns {Promise} - a Promise which resolves when a board was connected
     */

  }, {
    key: "scan",
    value: function scan() {
      return this.connectBoard();
    }
    /**
     * Called by the runtime when user wants to cancel scanning or the peripheral was disconnected.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      this.disconnectBoard();
    }
  }, {
    key: "isConnected",
    value: function isConnected() {
      if (!this.board) return false;
      return this.board.isReady();
    }
  }, {
    key: "connectBoard",
    value: function connectBoard() {
      var _this2 = this;

      if (this.board && this.board.isConnected()) return; // Already connected

      return this.firmataConnector.connect(EXTENSION_ID, this.serialPortOptions).then(function (connectedBoard) {
        _this2.runtime.emit(_this2.runtime.constructor.PERIPHERAL_CONNECTED, {
          name: connectedBoard.name,
          path: connectedBoard.portInfo
        });

        return 'connected';
      }).catch(function (reason) {
        if (reason) {
          console.log(reason);
          return reason;
        }

        return "fail to connect port: ".concat(JSON.stringify(_this2.serialPortOptions));
      });
    }
  }, {
    key: "disconnectBoard",
    value: function disconnectBoard() {
      if (!this.board) return;
      return this.board.disconnect();
    }
  }, {
    key: "boardStateChanged",
    value: function boardStateChanged(args) {
      return args.STATE === 'connected' === this.isConnected();
    }
    /**
     * Whether the current level of the connector is HIGHT as digital input.
     * @param {object} args - the block's arguments.
     * @param {number} args.CONNECTOR - pin number of the connector
     * @returns {Promise} a Promise which resolves boolean when the response was returned
     */

  }, {
    key: "digitalIsHigh",
    value: function digitalIsHigh(args) {
      if (!this.isConnected()) return Promise.resolve(false);
      var pin = parseInt(args.CONNECTOR, 10);
      return this.board.updateDigitalInput(pin).then(function (readData) {
        return !!readData;
      }).catch(function (reason) {
        console.log("digitalRead(".concat(pin, ") was rejected by ").concat(reason));
        return false;
      });
    }
    /**
     * Detect the edge as digital level of the connector for HAT block.
     * @param {object} args - the block's arguments.
     * @param {number} args.CONNECTOR - pin number of the connector
     * @param {boolean} args.LEVEL - level to detect edge
     * @returns {boolean} is the level same as the current of the connector
     */

  }, {
    key: "digitalLevelChanged",
    value: function digitalLevelChanged(args) {
      if (!this.isConnected()) return false;
      var pin = parseInt(args.CONNECTOR, 10);
      var rise = cast.toBoolean(args.LEVEL);
      this.board.updateDigitalInput(pin) // update for the next call
      .catch(function (reason) {
        console.log("digitalRead(".concat(pin, ") was rejected by ").concat(reason));
      });
      return rise === !!this.board.pins[pin].value; // Do NOT return Promise for the hat execute correctly.
    }
    /**
     * Set input bias of the connector.
     * @param {object} args - the block's arguments.
     * @param {string} args.PIN - number of the pin
     * @param {string} args.BIAS - input bias of the pin [none | pullUp]
     * @returns {undefined} set send message then return immediately
     */

  }, {
    key: "inputBiasSet",
    value: function inputBiasSet(args) {
      if (!this.isConnected()) return;
      var pin = parseInt(args.PIN, 10);
      var pullUp = args.BIAS === 'pullUp';
      this.board.setInputBias(pin, pullUp);
    }
    /**
     * Set the connector to the level as digital output.
     * @param {object} args - the block's arguments.
     * @param {number} args.CONNECTOR - pin number of the connector
     * @param {boolean | string | number} args.LEVEL - level to be set
     */

  }, {
    key: "digitalLevelSet",
    value: function digitalLevelSet(args) {
      if (!this.isConnected()) return;
      var pin = parseInt(args.CONNECTOR, 10);
      var value = cast.toBoolean(args.LEVEL) ? this.board.HIGH : this.board.LOW;
      this.board.pinMode(pin, this.board.MODES.OUTPUT);
      this.board.digitalWrite(pin, value);
    }
    /**
     * The level of the connector as analog input.
     * @param {object} args - the block's arguments.
     * @param {number} args.CONNECTOR - pin number of the connector
     * @returns {Promise} - a Promise which resolves analog level when the response was returned
     */

  }, {
    key: "analogLevelGet",
    value: function analogLevelGet(args) {
      if (!this.isConnected()) return Promise.resolve(0);
      var analogPin = parseInt(args.CONNECTOR, 10);
      return this.board.updateAnalogInput(analogPin).catch(function (reason) {
        console.log("analogRead(".concat(analogPin, ") was rejected by ").concat(reason));
        return 0;
      });
    }
    /**
     * Set the connector to power (%) as PWM.
     * @param {object} args - the block's arguments.
     * @param {number} args.CONNECTOR - pin number of the connector
     * @param {string | number} args.LEVEL - power (%) of PWM
     */

  }, {
    key: "analogLevelSet",
    value: function analogLevelSet(args) {
      if (!this.isConnected()) return;
      var pin = parseInt(args.CONNECTOR, 10);
      var percent = Math.min(Math.max(cast.toNumber(args.LEVEL), 0), 100);
      var value = Math.round((this.board.RESOLUTION.PWM - 0) * (percent / 100));
      this.board.pinMode(pin, this.board.MODES.PWM);
      this.board.pwmWrite(pin, value);
    }
  }, {
    key: "servoTurn",
    value: function servoTurn(args) {
      var pin = parseInt(args.CONNECTOR, 10);
      var value = cast.toNumber(args.DEGREE);
      this.board.pinMode(pin, this.board.MODES.SERVO);
      this.board.servoWrite(pin, value);
    }
  }, {
    key: "i2cWrite",
    value: function i2cWrite(args) {
      if (!this.isConnected()) return;
      var address = Number(args.ADDRESS);
      var register = Number(args.REGISTER);
      var data = readAsNumericArray(args.DATA);
      this.board.i2cWrite(address, register, data);
    }
  }, {
    key: "i2cReadOnce",
    value: function i2cReadOnce(args) {
      if (!this.isConnected()) return '';
      var address = Number(args.ADDRESS);
      var register = Number(args.REGISTER);
      var length = parseInt(cast.toNumber(args.LENGTH), 10);
      return this.board.i2cReadOnce(address, register, length).then(function (data) {
        return numericArrayToString(data);
      }).catch(function (reason) {
        console.log("i2cReadOnce(".concat(address, ", ").concat(register, ", ").concat(length, ") was rejected by ").concat(reason));
        return '';
      });
    }
  }, {
    key: "oneWireReset",
    value: function oneWireReset(args) {
      if (!this.isConnected()) return;
      var pin = parseInt(args.CONNECTOR, 10);
      this.board.sendOneWireReset(pin);
    }
  }, {
    key: "oneWireWrite",
    value: function oneWireWrite(args) {
      if (!this.isConnected()) return;
      var pin = parseInt(args.CONNECTOR, 10);
      var data = readAsNumericArray(args.DATA);
      return this.board.oneWireWrite(pin, data).catch(function (error) {
        console.log(error);
        return error.message ? error.message : error;
      });
    }
    /**
     * Read on OneWire.
     * @param {object} args - the block's arguments.
     * @param {number} args.CONNECTOR - pin number of the connector
     * @param {BlockUtility} util - utility object provided by the runtime.
     * @returns {Promise<string>} return a Promise which will resolve with read data
     */

  }, {
    key: "oneWireRead",
    value: function oneWireRead(args) {
      if (!this.isConnected()) return Promise.resolve('');
      var pin = parseInt(args.CONNECTOR, 10);
      var length = parseInt(cast.toNumber(args.LENGTH), 10);
      return this.board.oneWireRead(pin, length).then(function (readData) {
        return numericArrayToString(readData);
      }).catch(function (reason) {
        console.log("oneWireRead(".concat(pin, ", ").concat(length, ") was rejected by ").concat(reason));
        return '';
      });
    }
    /**
     * Write then read on OneWire.
     * @param {object} args - the block's arguments.
     * @param {number} args.CONNECTOR - pin number of the connector
     * @param {BlockUtility} util - utility object provided by the runtime.
     * @returns {Promise<string>} return a Promise which will resolve with read data
     */

  }, {
    key: "oneWireWriteAndRead",
    value: function oneWireWriteAndRead(args) {
      if (!this.isConnected()) return Promise.resolve('');
      var pin = parseInt(args.CONNECTOR, 10);
      var data = readAsNumericArray(args.DATA);
      var readLength = parseInt(cast.toNumber(args.LENGTH), 10);
      return this.board.oneWireWriteAndRead(pin, data, readLength).then(function (readData) {
        return numericArrayToString(readData);
      }).catch(function (reason) {
        console.log("oneWireWriteAndRead(".concat(pin, ", ").concat(data, ", ").concat(readLength, ") was rejected by ").concat(reason));
        return '';
      });
    }
  }, {
    key: "neoPixelConfigStrip",
    value: function neoPixelConfigStrip(args) {
      if (!this.isConnected()) return Promise.resolve();
      var pin = parseInt(args.CONNECTOR, 10);
      var length = parseInt(cast.toNumber(args.LENGTH), 10);
      return this.board.neoPixelConfigStrip(pin, length);
    }
  }, {
    key: "neoPixelShow",
    value: function neoPixelShow() {
      if (!this.isConnected()) return Promise.resolve();
      return this.board.neoPixelShow();
    }
  }, {
    key: "neoPixelSetColor",
    value: function neoPixelSetColor(args) {
      if (!this.isConnected()) return Promise.resolve();
      var index = parseInt(cast.toNumber(args.POSITION), 10) - 1;
      var r = Math.max(0, Math.min(255, parseInt(cast.toNumber(args.RED), 10)));
      var g = Math.max(0, Math.min(255, parseInt(cast.toNumber(args.GREEN), 10)));
      var b = Math.max(0, Math.min(255, parseInt(cast.toNumber(args.BLUE), 10)));
      return this.board.neoPixelSetColor(index, [r, g, b]);
    }
  }, {
    key: "neoPixelClear",
    value: function neoPixelClear() {
      if (!this.isConnected()) return Promise.resolve();
      return this.board.neoPixelClear();
    }
  }, {
    key: "measureDistanceVL53L",
    value: function () {
      var _measureDistanceVL53L = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
        var _this3 = this;

        var newSensor, found, distance;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.isConnected()) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", 0);

              case 2:
                if (this.vl53l0x) {
                  _context.next = 14;
                  break;
                }

                newSensor = new VL53L0X(this.board);
                _context.next = 6;
                return newSensor.init(true);

              case 6:
                found = _context.sent;

                if (found) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", 0);

              case 9:
                _context.next = 11;
                return newSensor.startContinuous().catch(function (reason) {
                  console.log("fail to VL53L0X.startContinuous() by ".concat(reason));
                  newSensor = null;
                });

              case 11:
                if (newSensor) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt("return", 0);

              case 13:
                this.vl53l0x = newSensor;

              case 14:
                _context.next = 16;
                return this.vl53l0x.readRangeContinuousMillimeters().catch(function (reason) {
                  console.log("VL53L0X.readRangeContinuousMillimeters() was rejected by ".concat(reason));
                  _this3.vl53l0x = null;
                  return 0;
                });

              case 16:
                distance = _context.sent;
                return _context.abrupt("return", distance);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function measureDistanceVL53L() {
        return _measureDistanceVL53L.apply(this, arguments);
      }

      return measureDistanceVL53L;
    }()
    /**
     * Get acceleration for the axis by ADXL345
     * @param {object} args - the block's arguments.
     * @param {number} args.AXIS - axis to get
     * @returns {Promise<number>} return a Promise which resolves acceleration
     */

  }, {
    key: "getAccelerationADXL345",
    value: function () {
      var _getAccelerationADXL = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(args) {
        var _this4 = this;

        var axis, newSensor;
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.isConnected()) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", Promise.resolve(0));

              case 2:
                axis = args.AXIS;

                if (this.adxl345) {
                  _context2.next = 15;
                  break;
                }

                newSensor = new ADXL345(this.board);
                _context2.prev = 5;
                _context2.next = 8;
                return newSensor.init();

              case 8:
                _context2.next = 14;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](5);
                // fail to create instance
                console.log(_context2.t0);
                return _context2.abrupt("return", Promise.resolve(0));

              case 14:
                this.adxl345 = newSensor;

              case 15:
                return _context2.abrupt("return", this.adxl345.getAcceleration().then(function (acceleration) {
                  if (axis === 'absolute') {
                    return Math.round(Math.sqrt(Math.pow(acceleration.x, 2) + Math.pow(acceleration.y, 2) + Math.pow(acceleration.z, 2)) * 100) / 100;
                  }

                  return acceleration[axis];
                }).catch(function (reason) {
                  console.log("ADXL345.getAcceleration() was rejected by ".concat(reason));
                  _this4.adxl345 = null;
                  return 0;
                }));

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[5, 10]]);
      }));

      function getAccelerationADXL345(_x) {
        return _getAccelerationADXL.apply(this, arguments);
      }

      return getAccelerationADXL345;
    }()
  }, {
    key: "numberAtIndex",
    value: function numberAtIndex(args) {
      var array = readAsNumericArray(args.ARRAY);
      var index = Number(args.INDEX);

      if (isNaN(index)) {
        index = 0;
      }

      index = Math.min(array.length, Math.max(1, index));
      index = Math.floor(index);
      return array[index - 1];
    }
  }, {
    key: "spliceNumbers",
    value: function spliceNumbers(args) {
      var array = readAsNumericArray(args.ARRAY);
      var index = Number(args.INDEX);

      if (isNaN(index)) {
        index = 0;
      }

      index = Math.floor(index);
      var deleteCount = Number(args.DELETE);

      if (isNaN(deleteCount)) {
        deleteCount = 0;
      }

      deleteCount = Math.min(array.length, Math.max(0, deleteCount));
      deleteCount = Math.floor(deleteCount);
      var newNumbers = readAsNumericArray(args.INSERT);
      array.splice.apply(array, [index > 0 ? index - 1 : index, deleteCount].concat(_toConsumableArray(newNumbers)));
      return numericArrayToString(array);
    }
  }, {
    key: "lengthOfNumbers",
    value: function lengthOfNumbers(args) {
      var array = readAsNumericArray(args.ARRAY);
      return array.length;
    }
  }, {
    key: "readBytesAs",
    value: function readBytesAs(args) {
      try {
        var array = readAsNumericArray(args.ARRAY);
        var buffer = new Uint8Array(array).buffer;
        var dataView = new DataView(buffer);
        var little = args.ENDIAN === 'little';
        var result = [];

        if (args.TYPE === 'Int16') {
          if (array.length < 2) return '';

          for (var index = 0; index < Math.floor(array.length / 2); index++) {
            var element = dataView.getInt16(index * 2, little);
            result[index] = element;
          }

          return numericArrayToString(result);
        }

        if (args.TYPE === 'Uint16') {
          if (array.length < 2) return '';

          for (var _index = 0; _index < Math.floor(array.length / 2); _index++) {
            var _element = dataView.getUint16(_index * 2, little);

            result[_index] = _element;
          }

          return numericArrayToString(result);
        }
      } catch (error) {
        console.log(error);
      }

      return '';
    }
  }, {
    key: "int64Operation",
    value: function int64Operation(args) {
      var op = args.OP;
      var left = integer64From(args.LEFT);
      var right = integer64From(args.RIGHT);

      if (op === '＋') {
        return left.add(right).toString(10);
      }

      if (op === '－') {
        return left.subtract(right).toString(10);
      }

      if (op === '✕') {
        return left.multiply(right).toString(10);
      }

      if (op === '÷') {
        return left.divide(right).toString(10);
      }

      if (op === 'mod') {
        return left.modulo(right).toString(10);
      }
    }
  }, {
    key: "bitOperation",
    value: function bitOperation(args) {
      var op = args.OP;
      var left = integer64From(args.LEFT);
      var right = integer64From(args.RIGHT);

      if (op === '<<') {
        return left.shiftLeft(right).toString(10);
      }

      if (op === '>>') {
        return left.shiftRight(right).toString(10);
      }

      if (op === '&') {
        return left.and(right).toString(10);
      }

      if (op === '|') {
        return left.or(right).toString(10);
      }

      if (op === '^') {
        return left.xor(right).toString(10);
      }
    }
  }, {
    key: "bitNot",
    value: function bitNot(args) {
      var bits = integer64From(args.VALUE);
      return bits.not().toString();
    }
    /**
     * @returns {object} metadata for this extension and its blocks.
     */

  }, {
    key: "getInfo",
    value: function getInfo() {
      setupTranslations();
      return {
        id: ExtensionBlocks.EXTENSION_ID,
        name: ExtensionBlocks.EXTENSION_NAME,
        extensionURL: ExtensionBlocks.extensionURL,
        blockIconURI: img,
        showStatusButton: true,
        blocks: [{
          opcode: 'connectBoard',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.connectBoard',
            default: 'connect board',
            description: 'open serial port and connect a board'
          }),
          arguments: {}
        }, {
          opcode: 'disconnectBoard',
          blockType: blockType.COMMAND,
          blockAllThreads: false,
          text: formatMessage({
            id: 'g2s.disconnectBoard',
            default: 'disconnect board',
            description: 'disconnect the board'
          }),
          arguments: {}
        }, {
          opcode: 'isConnected',
          blockType: blockType.BOOLEAN,
          text: formatMessage({
            id: 'g2s.isConnected',
            default: 'board is connected',
            description: 'firmata board is connected'
          }),
          arguments: {}
        }, {
          opcode: 'boardStateChanged',
          blockType: blockType.HAT,
          text: formatMessage({
            id: 'g2s.boardStateChanged',
            default: 'When board is [STATE]',
            description: 'catch event when the board state was changed'
          }),
          arguments: {
            STATE: {
              type: argumentType.STRING,
              menu: 'boardStateMenu'
            }
          }
        }, '---', {
          opcode: 'analogLevelGet',
          blockType: blockType.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'g2s.analogLevelGet',
            default: 'level of analog [CONNECTOR]',
            description: 'report analog level of the connector'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'analogConnectorMenu'
            }
          }
        }, {
          opcode: 'digitalIsHigh',
          blockType: blockType.BOOLEAN,
          text: formatMessage({
            id: 'g2s.digitalIsHigh',
            default: '[CONNECTOR] is HIGH',
            description: 'whether the digital level of the connector is high or not'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'digitalConnectorMenu'
            }
          }
        }, {
          opcode: 'digitalLevelChanged',
          blockType: blockType.HAT,
          text: formatMessage({
            id: 'g2s.digitalLevelChanged',
            default: 'When [CONNECTOR] is [LEVEL]',
            description: 'catch pulse rise/fall of the connector'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'digitalConnectorMenu'
            },
            LEVEL: {
              type: argumentType.STRING,
              menu: 'digitalLevelMenu'
            }
          }
        }, {
          opcode: 'inputBiasSet',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.inputBiasSet',
            default: '[PIN] bias [BIAS]',
            description: 'set bias of the connector for g2s'
          }),
          arguments: {
            PIN: {
              type: argumentType.STRING,
              menu: 'inputPinsMenu'
            },
            BIAS: {
              type: argumentType.STRING,
              menu: 'inputBiasMenu'
            }
          }
        }, {
          opcode: 'digitalLevelSet',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.digitalLevelSet',
            default: '[CONNECTOR] to digital [LEVEL]',
            description: 'set digital level of the connector'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'digitalConnectorMenu'
            },
            LEVEL: {
              type: argumentType.STRING,
              menu: 'digitalLevelMenu'
            }
          }
        }, {
          opcode: 'analogLevelSet',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.analogLevelSet',
            default: '[CONNECTOR] to analog [LEVEL]',
            description: 'set analog level of the connector'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'pwmConnectorMenu'
            },
            LEVEL: {
              type: argumentType.NUMBER,
              defaultValue: 0
            }
          }
        }, '---', {
          opcode: 'servoTurn',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.servoTurn',
            default: 'Servo [CONNECTOR] turn [DEGREE]',
            description: 'turn servo motor'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'digitalConnectorMenu'
            },
            DEGREE: {
              type: argumentType.ANGLE
            }
          }
        }, '---', {
          opcode: 'i2cWrite',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.i2cWrite',
            default: 'I2C write on [ADDRESS] register [REGISTER] with [DATA]',
            description: 'write I2C data to the connector'
          }),
          arguments: {
            ADDRESS: {
              type: argumentType.STRING,
              defaultValue: '0x00'
            },
            REGISTER: {
              type: argumentType.STRING,
              defaultValue: '0x00'
            },
            DATA: {
              type: argumentType.STRING,
              defaultValue: '0x00, 0x00'
            }
          }
        }, {
          opcode: 'i2cReadOnce',
          blockType: blockType.REPORTER,
          text: formatMessage({
            id: 'g2s.i2cReadOnce',
            default: 'I2C read [LENGTH] bytes from [ADDRESS] register [REGISTER]',
            description: 'read I2C data from the connector'
          }),
          arguments: {
            ADDRESS: {
              type: argumentType.STRING,
              defaultValue: '0x00'
            },
            REGISTER: {
              type: argumentType.STRING,
              defaultValue: '0x00'
            },
            LENGTH: {
              type: argumentType.NUMBER,
              defaultValue: 1
            }
          }
        }, '---', {
          opcode: 'oneWireReset',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.oneWireReset',
            default: 'reset OneWire [CONNECTOR]',
            description: 'Reset OneWire on the connector'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'digitalConnectorMenu'
            }
          }
        }, {
          opcode: 'oneWireWrite',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.oneWireWrite',
            default: 'OneWire [CONNECTOR] write [DATA]',
            description: 'write OneWire data to the connector'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'digitalConnectorMenu'
            },
            DATA: {
              type: argumentType.STRING,
              defaultValue: '0x00, 0x00'
            }
          }
        }, {
          opcode: 'oneWireRead',
          blockType: blockType.REPORTER,
          text: formatMessage({
            id: 'g2s.oneWireRead',
            default: 'OneWire [CONNECTOR] read [LENGTH] bytes',
            description: 'read OneWire data from the device on the connector'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'digitalConnectorMenu'
            },
            LENGTH: {
              type: argumentType.NUMBER,
              defaultValue: 1
            }
          }
        }, {
          opcode: 'oneWireWriteAndRead',
          blockType: blockType.REPORTER,
          text: formatMessage({
            id: 'g2s.oneWireWriteAndRead',
            default: 'OneWire [CONNECTOR] write [DATA] then read [LENGTH] bytes',
            description: 'write OneWire data then read at the device on the connector'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'digitalConnectorMenu'
            },
            DATA: {
              type: argumentType.STRING,
              defaultValue: '0x00, 0x00'
            },
            LENGTH: {
              type: argumentType.NUMBER,
              defaultValue: 1
            }
          }
        }, '---', {
          opcode: 'neoPixelConfigStrip',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.neoPixelConfigStrip',
            default: 'NeoPixel [CONNECTOR] length [LENGTH]',
            description: 'configure NeoPixel on the connector'
          }),
          arguments: {
            CONNECTOR: {
              type: argumentType.STRING,
              menu: 'digitalConnectorMenu'
            },
            LENGTH: {
              type: argumentType.NUMBER,
              defaultValue: '16'
            }
          }
        }, {
          opcode: 'neoPixelSetColor',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.neoPixelSetColor',
            default: 'NeoPixel color [POSITION] R [RED] G [GREEN] B [BLUE]',
            description: 'set NeoPixel color'
          }),
          arguments: {
            POSITION: {
              type: argumentType.NUMBER,
              defaultValue: '1'
            },
            RED: {
              type: argumentType.NUMBER,
              defaultValue: '255'
            },
            GREEN: {
              type: argumentType.NUMBER,
              defaultValue: '255'
            },
            BLUE: {
              type: argumentType.NUMBER,
              defaultValue: '255'
            }
          }
        }, {
          opcode: 'neoPixelShow',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.neoPixelShow',
            default: 'NeoPixel show',
            description: 'show NeoPixel'
          }),
          arguments: {}
        }, {
          opcode: 'neoPixelClear',
          blockType: blockType.COMMAND,
          text: formatMessage({
            id: 'g2s.neoPixelClear',
            default: 'NeoPixel clear',
            description: 'clear NeoPixel'
          }),
          arguments: {}
        }, '---', {
          opcode: 'measureDistance',
          func: 'measureDistanceVL53L',
          blockType: blockType.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'g2s.measureDistance',
            default: 'distance (mm)',
            description: 'report distance'
          }),
          arguments: {}
        }, '---', {
          opcode: 'getAcceleration',
          func: 'getAccelerationADXL345',
          blockType: blockType.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'g2s.getAcceleration',
            default: 'acceleration [AXIS] (m/s^2)',
            description: 'report acceleration'
          }),
          arguments: {
            AXIS: {
              type: argumentType.STRING,
              menu: 'accelerationAxisMenu'
            }
          }
        }, '---', {
          opcode: 'numberAtIndex',
          blockType: blockType.REPORTER,
          text: formatMessage({
            id: 'g2s.numberAtIndex',
            default: 'number of [ARRAY] at [INDEX]',
            description: 'get a number at the index of the array'
          }),
          arguments: {
            ARRAY: {
              type: argumentType.STRING,
              defaultValue: '1.0, 1E1, 0xFF'
            },
            INDEX: {
              type: argumentType.NUMBER,
              defaultValue: '1'
            }
          }
        }, {
          opcode: 'spliceNumbers',
          blockType: blockType.REPORTER,
          text: formatMessage({
            id: 'g2s.spliceNumbers',
            default: '[ARRAY] at [INDEX] delete [DELETE] insert [INSERT]',
            description: 'splice array'
          }),
          arguments: {
            ARRAY: {
              type: argumentType.STRING,
              defaultValue: '1.0, 1E1, 0xFF'
            },
            INDEX: {
              type: argumentType.NUMBER,
              defaultValue: '1'
            },
            DELETE: {
              type: argumentType.NUMBER,
              defaultValue: '1'
            },
            INSERT: {
              type: argumentType.STRING,
              defaultValue: '-1, 0'
            }
          }
        }, {
          opcode: 'lengthOfNumbers',
          blockType: blockType.REPORTER,
          text: formatMessage({
            id: 'g2s.lengthOfNumbers',
            default: 'length of numbers [ARRAY]',
            description: 'get length of an Array in string'
          }),
          arguments: {
            ARRAY: {
              type: argumentType.STRING,
              defaultValue: '1.0, 1E1, 0xFF'
            }
          }
        }, {
          opcode: 'readBytesAs',
          blockType: blockType.REPORTER,
          text: formatMessage({
            id: 'g2s.readBytesAs',
            default: 'read bytes [ARRAY] as [TYPE] [ENDIAN]',
            description: 'read typed value from bytes'
          }),
          arguments: {
            ARRAY: {
              type: argumentType.STRING,
              defaultValue: '0x00, 0xFF, 0xFF, 0x00'
            },
            TYPE: {
              type: argumentType.STRING,
              menu: 'bytesTypeMenu'
            },
            ENDIAN: {
              type: argumentType.STRING,
              menu: 'endianMenu'
            }
          }
        }, {
          opcode: 'int64Operation',
          blockType: blockType.REPORTER,
          text: formatMessage({
            id: 'g2s.int64Operation',
            default: 'int64 [LEFT] [OP] [RIGHT]',
            description: 'bitwise operation'
          }),
          arguments: {
            OP: {
              type: argumentType.STRING,
              menu: 'int64OperationMenu'
            },
            LEFT: {
              type: argumentType.STRING,
              defaultValue: '0x01'
            },
            RIGHT: {
              type: argumentType.STRING,
              defaultValue: '0x02'
            }
          }
        }, {
          opcode: 'bitOperation',
          blockType: blockType.REPORTER,
          text: formatMessage({
            id: 'g2s.bitOperation',
            default: 'bit [LEFT] [OP] [RIGHT]',
            description: 'bitwise operation'
          }),
          arguments: {
            OP: {
              type: argumentType.STRING,
              menu: 'bitOperationMenu'
            },
            LEFT: {
              type: argumentType.STRING,
              defaultValue: '0x03'
            },
            RIGHT: {
              type: argumentType.STRING,
              defaultValue: '0x01'
            }
          }
        }, {
          opcode: 'bitNot',
          blockType: blockType.REPORTER,
          text: formatMessage({
            id: 'g2s.bitNot',
            default: 'bit NOT [VALUE]',
            description: 'bitwise NOT'
          }),
          arguments: {
            VALUE: {
              type: argumentType.STRING,
              defaultValue: '0x01'
            }
          }
        }],
        menus: {
          boardStateMenu: {
            acceptReporters: false,
            items: this.getBoardStateMenu()
          },
          digitalConnectorMenu: {
            acceptReporters: false,
            items: this.getDigitalConnectorMenu()
          },
          inputBiasMenu: {
            acceptReporters: false,
            items: this.getInputBiasMenu()
          },
          digitalLevelMenu: {
            acceptReporters: true,
            items: this.getDigitalLevelMenu()
          },
          analogConnectorMenu: {
            acceptReporters: false,
            items: this.getAnalogConnectorMenu()
          },
          inputPinsMenu: {
            acceptReporters: true,
            items: this.getInputPinsMenu()
          },
          pwmConnectorMenu: {
            acceptReporters: false,
            items: this.getDigitalConnectorMenu()
          },
          oneWireDeviceMenu: {
            acceptReporters: false,
            items: this.getOneWireDeviceMenu()
          },
          accelerationAxisMenu: {
            acceptReporters: false,
            items: this.getAccelerationAxisMenu()
          },
          bytesTypeMenu: {
            acceptReporters: false,
            items: ['Int16', 'Uint16']
          },
          endianMenu: {
            acceptReporters: false,
            items: ['little', 'big']
          },
          int64OperationMenu: {
            acceptReporters: false,
            items: ['＋', '－', '✕', '÷', 'mod']
          },
          bitOperationMenu: {
            acceptReporters: false,
            items: ['<<', '>>', '&', '|', '^']
          }
        }
      };
    }
  }, {
    key: "getBoardStateMenu",
    value: function getBoardStateMenu() {
      return [{
        text: formatMessage({
          id: 'g2s.boardState.connected',
          default: 'connected'
        }),
        value: 'connected'
      }, {
        text: formatMessage({
          id: 'g2s.boardState.disconnected',
          default: 'disconnected'
        }),
        value: 'disconnected'
      }];
    }
  }, {
    key: "getDigitalConnectorMenu",
    value: function getDigitalConnectorMenu() {
      var prefix = formatMessage({
        id: 'g2s.digitalConnector.prefix',
        default: 'Digital'
      });
      return [{
        text: "".concat(prefix, "1"),
        value: '9'
      }, {
        text: "".concat(prefix, "2"),
        value: '10'
      }, {
        text: "".concat(prefix, "3"),
        value: '11'
      }];
    }
  }, {
    key: "getDigitalLevelMenu",
    value: function getDigitalLevelMenu() {
      return [{
        text: formatMessage({
          id: 'g2s.digitalLevelMenu.low',
          default: 'Low',
          description: 'label for low value in digital output menu for g2s'
        }),
        value: 'false'
      }, {
        text: formatMessage({
          id: 'g2s.digitalLevelMenu.high',
          default: 'High',
          description: 'label for high value in digital output menu for g2s'
        }),
        value: 'true'
      }];
    }
  }, {
    key: "getAnalogConnectorMenu",
    value: function getAnalogConnectorMenu() {
      var prefix = formatMessage({
        id: 'g2s.analogConnector.prefix',
        default: 'Analog'
      });
      return [{
        text: "".concat(prefix, "1"),
        value: '0'
      }, {
        text: "".concat(prefix, "2"),
        value: '1'
      }, {
        text: "".concat(prefix, "3"),
        value: '2'
      }];
    }
  }, {
    key: "getInputPinsMenu",
    value: function getInputPinsMenu() {
      var digitalPrefix = formatMessage({
        id: 'g2s.digitalConnector.prefix',
        default: 'Digital'
      });
      var analogPrefix = formatMessage({
        id: 'g2s.analogConnector.prefix',
        default: 'Analog'
      });
      return [{
        text: "".concat(digitalPrefix, "1"),
        value: '9'
      }, {
        text: "".concat(digitalPrefix, "2"),
        value: '10'
      }, {
        text: "".concat(digitalPrefix, "3"),
        value: '11'
      }, {
        text: "".concat(analogPrefix, "1"),
        value: '14'
      }, {
        text: "".concat(analogPrefix, "2"),
        value: '15'
      }, {
        text: "".concat(analogPrefix, "3"),
        value: '16'
      }];
    }
  }, {
    key: "getInputBiasMenu",
    value: function getInputBiasMenu() {
      return [{
        text: formatMessage({
          id: 'g2s.inputBiasMenu.none',
          default: 'none',
          description: 'label for none in input bias menu for g2s'
        }),
        value: 'none'
      }, {
        text: formatMessage({
          id: 'g2s.inputBiasMenu.pullUp',
          default: 'pull up',
          description: 'label for pull up in input bias menu for g2s'
        }),
        value: 'pullUp'
      }];
    }
  }, {
    key: "getOneWireDeviceMenu",
    value: function getOneWireDeviceMenu() {
      var prefix = formatMessage({
        id: 'g2s.oneWireDevice.prefix',
        default: 'Device'
      });
      return [{
        text: "".concat(prefix, "1"),
        value: '1'
      }, {
        text: "".concat(prefix, "2"),
        value: '2'
      }, {
        text: "".concat(prefix, "3"),
        value: '3'
      }, {
        text: "".concat(prefix, "4"),
        value: '4'
      }];
    }
  }, {
    key: "getAccelerationAxisMenu",
    value: function getAccelerationAxisMenu() {
      return [{
        text: formatMessage({
          id: 'g2s.accelerationAxisMenu.x',
          default: 'x'
        }),
        value: 'x'
      }, {
        text: formatMessage({
          id: 'g2s.accelerationAxisMenu.y',
          default: 'y'
        }),
        value: 'y'
      }, {
        text: formatMessage({
          id: 'g2s.accelerationAxisMenu.z',
          default: 'z'
        }),
        value: 'z'
      }, {
        text: formatMessage({
          id: 'g2s.accelerationAxisMenu.absolute',
          default: 'absolute'
        }),
        value: 'absolute'
      }];
    }
  }], [{
    key: "EXTENSION_NAME",
    get:
    /**
     * @return {string} - the name of this extension.
     */
    function get() {
      return formatMessage({
        id: 'g2s.name',
        default: 'AkaDako',
        description: 'name of the extension'
      });
    }
    /**
     * @return {string} - the ID of this extension.
     */

  }, {
    key: "EXTENSION_ID",
    get: function get() {
      return EXTENSION_ID;
    }
    /**
     * URL to get this extension.
     * @type {string}
     */

  }, {
    key: "extensionURL",
    get: function get() {
      return extensionURL;
    }
    /**
     * Set URL to get this extension.
     * The extensionURL will be changed to the URL of the loading server.
     * @param {string} url - URL
     */
    ,
    set: function set(url) {
      extensionURL = url;
    }
  }]);

  return ExtensionBlocks;
}();

export { ExtensionBlocks as blockClass, entry };
