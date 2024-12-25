export function match(param: string) {
  const regex = /^\d+$/;
  return regex.test(param);
}
