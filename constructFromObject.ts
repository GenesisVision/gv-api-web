export interface GenericFabric<T> {
  (arg: T): T;
}

export function fabric<T>(arg: T): T {
  return arg;
}
