
function trace<T>(arg: T): T {
    console.log(arg);
    return arg;
  }
  
function getProp<T,K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}