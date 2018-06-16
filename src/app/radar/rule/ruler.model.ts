export interface Ruler<T> {
  evaluate(data: T): T;
}
