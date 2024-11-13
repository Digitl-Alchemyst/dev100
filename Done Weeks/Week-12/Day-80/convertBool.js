const booleanConversions = (value) => {
    const isTrue = (value) => {
      try {
        switch (typeof value) {
          case "string":
            return value.toLowerCase() === "true" || value.length > 0;
          case "number":
            return value !== 0 && !isNaN(value);
          case "object":
            if (value === null) return false;
            if (Array.isArray(value)) return true;
            return true;
          default:
            return Boolean(value);
        }
      } catch {
        return false;
      }
    };

  return {
    useBool: Boolean(value),
    useDblNot: !!value,
    useTruthy: value ? true : false,
    useIsTrue: isTrue(value),
  };


};

const testValues = [
  "",
  0,
  null,
  undefined,
  NaN,
  false, // falsy values
  "hello",
  1,
  [],
  {},
  true,
  new Date(), // truthy values
];

testValues.forEach((value) => {
  console.log(`Testing ${String(value)}: `, booleanConversions(value));
});
