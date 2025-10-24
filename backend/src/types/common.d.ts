/**
 * A utility type for creating union types based on the values of a given object
 * @note TObject denotes the type of the object
 */
type ObjectValuesUnion<TObject> = TObject[keyof TObject];

/**
 * A utility type to make given fields optional
 */
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
