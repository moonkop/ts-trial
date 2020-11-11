interface MyEvent<T> {
    target: T
}

interface Dict<T> {
    [key: string]: T
}

type MyPartial<T> = {
    [key in keyof T]?: T[key]
}

type MyPick<T, keys extends keyof T> = {
    [key in keys]: T[key];
}