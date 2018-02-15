/* fomart react native navigator params */
export default function refactorRouters(obj) {
  Object.entries(obj).forEach((element) => {
    element[1].navigationOptions = {
      gesturesEnabled: false,
    };
  });
  return obj;
}

